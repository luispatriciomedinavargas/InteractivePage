'use strict';

const CONFIG = {
  "titulo": "Aplicación Interactiva",
  "subtitulo": "¿Culpable o Inocente?",
  "acceso": {
    "usuario": "admin",
    "contrasena": "admin"
  },
  "puntos": {
    "acierto": 5,
    "error": -5,
    "sinRespuesta": -10
  },
  "bloques": [
    {
      "nombre": "Bloque 1",
      "segundosParaDecidir": 90,
      "notificacion": {
        "titulo": "Terminaste el Bloque 1",
        "mensaje": "Completaste los primeros 6 casos.\nEn el próximo bloque vas a tener 1:00 para decidir cada caso."
      },
      "videos": [
        { "archivo": "video01.mp4", "respuestaCorrecta": "culpable" },
        { "archivo": "video02.mp4", "respuestaCorrecta": "inocente" },
        { "archivo": "video03.mp4", "respuestaCorrecta": "culpable" },
        { "archivo": "video04.mp4", "respuestaCorrecta": "inocente" },
        { "archivo": "video05.mp4", "respuestaCorrecta": "culpable" },
        { "archivo": "video06.mp4", "respuestaCorrecta": "inocente" }
      ]
    },
    {
      "nombre": "Bloque 2",
      "segundosParaDecidir": 60,
      "notificacion": {
        "titulo": "Terminaste el Bloque 2",
        "mensaje": "Completaste 12 de 18 casos.\nEn el último bloque vas a tener solo 0:30 para decidir cada caso."
      },
      "videos": [
        { "archivo": "video07.mp4", "respuestaCorrecta": "culpable" },
        { "archivo": "video08.mp4", "respuestaCorrecta": "inocente" },
        { "archivo": "video09.mp4", "respuestaCorrecta": "culpable" },
        { "archivo": "video10.mp4", "respuestaCorrecta": "inocente" },
        { "archivo": "video11.mp4", "respuestaCorrecta": "culpable" },
        { "archivo": "video12.mp4", "respuestaCorrecta": "inocente" }
      ]
    },
    {
      "nombre": "Bloque 3",
      "segundosParaDecidir": 30,
      "notificacion": {
        "titulo": "¡Experiencia completada!",
        "mensaje": "Terminaste los 18 casos.\nA continuación vas a ver tu puntaje final."
      },
      "videos": [
        { "archivo": "video13.mp4", "respuestaCorrecta": "culpable" },
        { "archivo": "video14.mp4", "respuestaCorrecta": "inocente" },
        { "archivo": "video15.mp4", "respuestaCorrecta": "culpable" },
        { "archivo": "video16.mp4", "respuestaCorrecta": "inocente" },
        { "archivo": "video17.mp4", "respuestaCorrecta": "culpable" },
        { "archivo": "video18.mp4", "respuestaCorrecta": "inocente" }
      ]
    }
  ]
};

// ===== FIN DE LA CONFIGURACIÓN =====

(() => {
  // Duración del video simulado cuando falta un archivo (para pruebas sin videos).
  const SEGUNDOS_VIDEO_PRUEBA = 5;
  // Pausa breve para que se vea la elección antes de pasar al siguiente video.
  const PAUSA_TRAS_RESPUESTA_MS = 900;
  const PAUSA_TIEMPO_AGOTADO_MS = 1800;
  // Desde cuántos segundos restantes el reloj se pone en rojo.
  const SEGUNDOS_URGENCIA = 10;
  const RESPUESTAS_VALIDAS = ['culpable', 'inocente'];

  const $ = (id) => document.getElementById(id);

  const pantallas = {
    cargando: $('pantalla-cargando'),
    error: $('pantalla-error'),
    inicio: $('pantalla-inicio'),
    video: $('pantalla-video'),
    decision: $('pantalla-decision'),
    notificacion: $('pantalla-notificacion'),
    final: $('pantalla-final'),
  };

  const video = $('video');
  const botonesVeredicto = Array.from(document.querySelectorAll('.boton-veredicto'));

  let config = null;
  let casos = []; // los videos de todos los bloques, en orden
  let videosFaltantes = new Set();

  const estado = {
    fase: 'cargando',
    indice: 0,
    puntaje: 0,
    respuestas: [],
    decisionAbierta: false,
    temporizador: null,
    simulacion: null,
    ultimoTiempoVideo: 0,
  };

  // ---------- Utilidades ----------

  function formatearTiempo(segundos) {
    const s = Math.max(0, Math.ceil(segundos));
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  }

  function formatearPuntos(puntos) {
    if (puntos > 0) return `+${puntos}`;
    if (puntos < 0) return `−${Math.abs(puntos)}`;
    return '0';
  }

  function mostrarPantalla(fase) {
    estado.fase = fase;
    for (const [clave, elemento] of Object.entries(pantallas)) {
      elemento.hidden = clave !== fase;
    }
  }

  // Pantalla completa del navegador. Solo se puede pedir tras un clic o tecla del usuario.
  function entrarPantallaCompleta() {
    const raiz = document.documentElement;
    if (document.fullscreenElement || !raiz.requestFullscreen) return;
    raiz.requestFullscreen({ navigationUI: 'hide' }).catch(() => {});
  }

  function casoActual() {
    return casos[estado.indice];
  }

  // ---------- Configuración ----------

  function validarConfig(datos) {
    const errores = [];
    if (!datos || typeof datos !== 'object') return ['El archivo no tiene un formato válido.'];

    const acceso = datos.acceso || {};
    if (typeof acceso.usuario !== 'string' || typeof acceso.contrasena !== 'string') {
      errores.push('"acceso" debe tener "usuario" y "contrasena" entre comillas.');
    }

    const puntos = datos.puntos || {};
    for (const clave of ['acierto', 'error', 'sinRespuesta']) {
      if (typeof puntos[clave] !== 'number') errores.push(`"puntos.${clave}" debe ser un número.`);
    }

    if (!Array.isArray(datos.bloques) || datos.bloques.length === 0) {
      errores.push('Debe haber al menos un bloque en "bloques".');
      return errores;
    }

    datos.bloques.forEach((bloque, i) => {
      const nombre = bloque.nombre || `Bloque ${i + 1}`;
      if (!(bloque.segundosParaDecidir > 0)) {
        errores.push(`${nombre}: "segundosParaDecidir" debe ser un número mayor a 0.`);
      }
      if (!Array.isArray(bloque.videos) || bloque.videos.length === 0) {
        errores.push(`${nombre}: debe tener al menos un video.`);
        return;
      }
      bloque.videos.forEach((v, j) => {
        if (!v || typeof v.archivo !== 'string' || v.archivo.trim() === '') {
          errores.push(`${nombre}, video ${j + 1}: falta "archivo".`);
        }
        const respuesta = String(v && v.respuestaCorrecta).toLowerCase();
        if (!RESPUESTAS_VALIDAS.includes(respuesta)) {
          errores.push(`${nombre}, video ${j + 1}: "respuestaCorrecta" debe ser "culpable" o "inocente".`);
        }
      });
    });
    return errores;
  }

  function prepararCasos() {
    casos = [];
    config.bloques.forEach((bloque, b) => {
      bloque.nombre = bloque.nombre || `Bloque ${b + 1}`;
      bloque.videos.forEach((v, i) => {
        casos.push({
          numero: casos.length + 1,
          bloque: b,
          indiceEnBloque: i,
          archivo: v.archivo.trim(),
          respuestaCorrecta: String(v.respuestaCorrecta).toLowerCase(),
        });
      });
    });
  }

  async function buscarVideosFaltantes() {
    // Abierta como archivo (sin servidor) no se puede consultar de antemano;
    // si un video falta, se detecta al intentar reproducirlo.
    if (location.protocol === 'file:') return new Set();

    const resultados = await Promise.all(
      casos.map(async (caso) => {
        try {
          const r = await fetch(rutaVideo(caso), { method: 'HEAD', cache: 'no-store' });
          return r.ok ? null : caso.archivo;
        } catch {
          return caso.archivo;
        }
      })
    );
    return new Set(resultados.filter(Boolean));
  }

  function rutaVideo(caso) {
    return `videos/${encodeURIComponent(caso.archivo)}`;
  }

  function mostrarError(errores) {
    const lista = $('lista-errores');
    lista.replaceChildren(
      ...errores.map((texto) => {
        const li = document.createElement('li');
        li.textContent = texto;
        return li;
      })
    );
    mostrarPantalla('error');
  }

  // ---------- Inicio (login) ----------

  function prepararInicio() {
    const titulo = config.titulo || 'Aplicación Interactiva';
    const subtitulo = config.subtitulo || '¿Culpable o Inocente?';
    document.title = titulo;
    $('marca-titulo').textContent = titulo;
    $('marca-subtitulo').textContent = subtitulo;

    const aviso = $('aviso-operador');
    if (videosFaltantes.size > 0) {
      const lista = Array.from(videosFaltantes);
      const muestra = lista.slice(0, 4).join(', ') + (lista.length > 4 ? '…' : '');
      aviso.textContent =
        `Atención operador: faltan ${lista.length} de ${casos.length} videos en la carpeta "videos" (${muestra}). ` +
        `En su lugar se mostrará un video de prueba de ${SEGUNDOS_VIDEO_PRUEBA} segundos.`;
      aviso.hidden = false;
    } else {
      aviso.hidden = true;
    }

    mostrarPantalla('inicio');
    $('login-usuario').focus();
  }

  $('formulario-login').addEventListener('submit', (e) => {
    e.preventDefault();
    if (estado.fase !== 'inicio') return;

    const usuario = $('login-usuario').value.trim();
    const contrasena = $('login-contrasena').value;
    if (usuario !== config.acceso.usuario || contrasena !== config.acceso.contrasena) {
      $('login-error').hidden = false;
      $('login-contrasena').value = '';
      $('login-contrasena').focus();
      return;
    }

    $('login-error').hidden = true;
    entrarPantallaCompleta();
    estado.indice = 0;
    estado.puntaje = 0;
    estado.respuestas = [];
    reproducirCaso();
  });

  function crearFila(valores) {
    const fila = document.createElement('tr');
    for (const valor of valores) {
      const td = document.createElement('td');
      td.textContent = valor;
      fila.append(td);
    }
    return fila;
  }

  // ---------- Reproducción ----------

  function reproducirCaso() {
    const caso = casoActual();
    const bloque = config.bloques[caso.bloque];

    mostrarPantalla('video');
    $('video-titulo').textContent = `Caso ${caso.numero} de ${casos.length} — ${bloque.nombre}`;
    $('boton-reproducir').hidden = true;
    $('video-prueba').hidden = true;
    actualizarBarraVideo(0, 0);

    if (videosFaltantes.has(caso.archivo)) {
      simularVideo(caso);
      return;
    }

    video.hidden = false;
    estado.ultimoTiempoVideo = 0;
    video.src = rutaVideo(caso);
    intentarReproducir();
  }

  function intentarReproducir() {
    const promesa = video.play();
    if (promesa) {
      promesa.catch((err) => {
        // El navegador puede bloquear la reproducción automática con sonido.
        if (err && err.name === 'NotAllowedError' && estado.fase === 'video') {
          $('boton-reproducir').hidden = false;
        }
      });
    }
  }

  function descargarVideo() {
    video.pause();
    video.removeAttribute('src');
    video.load();
  }

  function actualizarBarraVideo(actual, total) {
    const duracion = Number.isFinite(total) ? total : 0;
    $('video-avance').style.width = duracion > 0 ? `${Math.min(100, (actual / duracion) * 100)}%` : '0%';
    $('video-tiempo').textContent = `${formatearReloj(actual)} / ${formatearReloj(duracion)}`;
  }

  function formatearReloj(segundos) {
    const s = Math.max(0, Math.floor(segundos));
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  }

  function simularVideo(caso) {
    video.hidden = true;
    $('video-prueba-detalle').textContent = `No se encontró el archivo videos/${caso.archivo}`;
    $('video-prueba').hidden = false;

    const inicio = performance.now();
    estado.simulacion = setInterval(() => {
      const transcurrido = (performance.now() - inicio) / 1000;
      actualizarBarraVideo(Math.min(transcurrido, SEGUNDOS_VIDEO_PRUEBA), SEGUNDOS_VIDEO_PRUEBA);
      if (transcurrido >= SEGUNDOS_VIDEO_PRUEBA) {
        clearInterval(estado.simulacion);
        estado.simulacion = null;
        if (estado.fase === 'video') abrirDecision();
      }
    }, 100);
  }

  video.addEventListener('ended', () => {
    if (estado.fase === 'video') abrirDecision();
  });

  video.addEventListener('error', () => {
    // Archivo dañado o en un formato que el navegador no puede reproducir.
    if (estado.fase === 'video' && video.getAttribute('src')) {
      const caso = casoActual();
      videosFaltantes.add(caso.archivo);
      descargarVideo();
      simularVideo(caso);
    }
  });

  video.addEventListener('timeupdate', () => {
    if (!video.seeking) estado.ultimoTiempoVideo = video.currentTime;
    if (estado.fase === 'video') actualizarBarraVideo(video.currentTime, video.duration);
  });

  video.addEventListener('loadedmetadata', () => {
    if (estado.fase === 'video') actualizarBarraVideo(0, video.duration);
  });

  // No se puede adelantar ni retroceder.
  video.addEventListener('seeking', () => {
    if (Math.abs(video.currentTime - estado.ultimoTiempoVideo) > 0.5) {
      video.currentTime = estado.ultimoTiempoVideo;
    }
  });

  // No se puede pausar (por ejemplo, con las teclas multimedia del teclado).
  video.addEventListener('pause', () => {
    if (estado.fase === 'video' && !video.ended && video.getAttribute('src')) {
      intentarReproducir();
    }
  });

  video.addEventListener('ratechange', () => {
    if (video.playbackRate !== 1) video.playbackRate = 1;
  });

  $('boton-reproducir').addEventListener('click', () => {
    $('boton-reproducir').hidden = true;
    intentarReproducir();
  });

  // ---------- Decisión ----------

  // Al terminar el video se pasa a la pantalla con los botones.
  function abrirDecision() {
    const caso = casoActual();
    const bloque = config.bloques[caso.bloque];

    mostrarPantalla('decision');
    $('decision-titulo').textContent = `Caso ${caso.numero} de ${casos.length} — ${bloque.nombre}`;

    const estadoTexto = $('decision-estado');
    estadoTexto.textContent = '';
    estadoTexto.classList.remove('alerta');

    for (const boton of botonesVeredicto) {
      boton.disabled = false;
      boton.classList.remove('elegido');
    }

    estado.decisionAbierta = true;
    iniciarTemporizador(bloque.segundosParaDecidir);
  }

  function iniciarTemporizador(segundos) {
    const reloj = $('reloj');
    const tiempo = $('reloj-tiempo');
    const relleno = $('reloj-relleno');
    const totalMs = segundos * 1000;
    const inicio = performance.now();
    let ultimoMostrado = null;

    reloj.classList.remove('urgente', 'detenido');
    relleno.style.width = '100%';
    tiempo.textContent = formatearTiempo(segundos);

    const actualizar = () => {
      const restanteMs = Math.max(0, totalMs - (performance.now() - inicio));
      const restante = Math.ceil(restanteMs / 1000);

      if (restante !== ultimoMostrado) {
        ultimoMostrado = restante;
        tiempo.textContent = formatearTiempo(restante);
        reloj.classList.toggle('urgente', restante <= SEGUNDOS_URGENCIA);
      }
      relleno.style.width = `${(restanteMs / totalMs) * 100}%`;

      if (restanteMs <= 0) {
        detenerTemporizador();
        reloj.classList.add('detenido');
        tiempoAgotado();
      }
    };

    detenerTemporizador();
    estado.temporizador = setInterval(actualizar, 50);
  }

  function detenerTemporizador() {
    if (estado.temporizador !== null) {
      clearInterval(estado.temporizador);
      estado.temporizador = null;
    }
  }

  function registrarRespuesta(eleccion) {
    const caso = casoActual();
    let resultado;
    let puntos;
    if (eleccion === null) {
      resultado = 'sinRespuesta';
      puntos = config.puntos.sinRespuesta;
    } else if (eleccion === caso.respuestaCorrecta) {
      resultado = 'acierto';
      puntos = config.puntos.acierto;
    } else {
      resultado = 'error';
      puntos = config.puntos.error;
    }
    estado.puntaje += puntos;
    estado.respuestas.push({ numero: caso.numero, bloque: caso.bloque, eleccion, resultado, puntos });
  }

  function elegir(eleccion, boton) {
    if (!estado.decisionAbierta) return;
    estado.decisionAbierta = false;
    detenerTemporizador();
    $('reloj').classList.add('detenido');

    for (const b of botonesVeredicto) b.disabled = true;
    boton.classList.add('elegido');
    $('decision-estado').textContent = 'Respuesta registrada';

    registrarRespuesta(eleccion);
    setTimeout(avanzar, PAUSA_TRAS_RESPUESTA_MS);
  }

  function tiempoAgotado() {
    if (!estado.decisionAbierta) return;
    estado.decisionAbierta = false;

    for (const b of botonesVeredicto) b.disabled = true;
    const estadoTexto = $('decision-estado');
    estadoTexto.textContent = `¡Tiempo agotado! ${formatearPuntos(config.puntos.sinRespuesta)} puntos`;
    estadoTexto.classList.add('alerta');

    registrarRespuesta(null);
    setTimeout(avanzar, PAUSA_TIEMPO_AGOTADO_MS);
  }

  for (const boton of botonesVeredicto) {
    boton.addEventListener('click', () => elegir(boton.dataset.eleccion, boton));
  }

  function avanzar() {
    const caso = casoActual();
    const bloque = config.bloques[caso.bloque];
    if (caso.indiceEnBloque === bloque.videos.length - 1) {
      mostrarNotificacion(caso.bloque);
    } else {
      estado.indice += 1;
      reproducirCaso();
    }
  }

  // ---------- Notificación entre bloques ----------

  function mostrarNotificacion(indiceBloque) {
    const bloque = config.bloques[indiceBloque];
    const notificacion = bloque.notificacion || {};
    const esUltimo = indiceBloque === config.bloques.length - 1;
    const reemplazar = (texto) => String(texto || '').replaceAll('{puntaje}', formatearPuntos(estado.puntaje));

    mostrarPantalla('notificacion');
    descargarVideo();
    $('notificacion-encabezado').textContent = `${bloque.nombre} completado`;
    $('notificacion-titulo').textContent = reemplazar(notificacion.titulo) || `Terminaste el ${bloque.nombre}`;
    $('notificacion-mensaje').textContent = reemplazar(notificacion.mensaje);
    $('boton-continuar').textContent = esUltimo ? 'Ver resultado »' : 'Continuar »';
  }

  $('boton-continuar').addEventListener('click', () => {
    if (estado.fase !== 'notificacion') return;
    estado.indice += 1;
    if (estado.indice >= casos.length) {
      mostrarFinal();
    } else {
      reproducirCaso();
    }
  });

  // ---------- Resultado final ----------

  function mostrarFinal() {
    const contar = (lista, resultado) => lista.filter((r) => r.resultado === resultado).length;

    const puntaje = $('final-puntaje');
    puntaje.textContent = formatearPuntos(estado.puntaje);
    puntaje.classList.toggle('negativo', estado.puntaje < 0);

    $('final-aciertos').textContent = contar(estado.respuestas, 'acierto');
    $('final-errores').textContent = contar(estado.respuestas, 'error');
    $('final-sin-respuesta').textContent = contar(estado.respuestas, 'sinRespuesta');

    $('final-total').textContent = formatearPuntos(estado.puntaje);

    $('final-tabla-cuerpo').replaceChildren(
      ...config.bloques.map((bloque, b) => {
        const delBloque = estado.respuestas.filter((r) => r.bloque === b);
        return crearFila([
          bloque.nombre,
          contar(delBloque, 'acierto'),
          contar(delBloque, 'error'),
          contar(delBloque, 'sinRespuesta'),
          formatearPuntos(delBloque.reduce((suma, r) => suma + r.puntos, 0)),
        ]);
      })
    );

    mostrarPantalla('final');
  }

  // ---------- Bloqueos (RF-08) ----------

  document.addEventListener('contextmenu', (e) => e.preventDefault());
  document.addEventListener('dragstart', (e) => e.preventDefault());
  document.addEventListener('selectstart', (e) => {
    const elemento = e.target.nodeType === Node.ELEMENT_NODE ? e.target : e.target.parentElement;
    if (!elemento || !elemento.closest('input')) e.preventDefault();
  });
  document.addEventListener('copy', (e) => e.preventDefault());

  document.addEventListener('keydown', (e) => {
    const tecla = e.key.toLowerCase();
    const ctrl = e.ctrlKey || e.metaKey;
    const bloqueada =
      tecla === 'f12' ||
      (ctrl && e.shiftKey && ['i', 'j', 'c', 'k'].includes(tecla)) ||
      (ctrl && ['s', 'u', 'p', 'o', 'g', 'f', 'h', 'j', 'd', '+', '-', '=', '0'].includes(tecla)) ||
      (e.altKey && ['arrowleft', 'arrowright', 'home'].includes(tecla));
    if (bloqueada) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);

  // Evita el zoom con Ctrl + rueda del mouse.
  document.addEventListener('wheel', (e) => {
    if (e.ctrlKey) e.preventDefault();
  }, { passive: false });

  // ---------- Arranque ----------

  async function iniciar() {
    const datos = CONFIG;

    const errores = validarConfig(datos);
    if (errores.length > 0) {
      mostrarError(errores);
      return;
    }

    config = datos;
    prepararCasos();
    videosFaltantes = await buscarVideosFaltantes();
    prepararInicio();
  }

  iniciar();
})();
