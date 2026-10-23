'use strict';

const CONFIG = {
  "titulo": "Aplicación Interactiva",
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
      "memo": {
        "pagina": 2,
        "texto": "POR DISPOSICIÓN DEL GOBIERNO NACIONAL Y EN EL MARCO DEL PROGRAMA DE OPTIMIZACIÓN JUDICIAL, SE ACTUALIZARÁN LOS TIEMPOS ESTABLECIDOS PARA EL SISTEMA DE RESOLUCIÓN RÁPIDA.\nA PARTIR DE LA PRÓXIMA JORNADA, EL TIEMPO MÁXIMO DE EXPOSICIÓN PARA LOS ACUSADOS SERÁ REDUCIDO A 1 MINUTO, MIENTRAS QUE EL TIEMPO DE DELIBERACIÓN DISPONIBLE PARA JURADOS TAMBIÉN SERÁ DE 1 MINUTO POR CASO. LA MEDIDA TIENE COMO OBJETIVO AUMENTAR LA CAPACIDAD OPERATIVA DEL SISTEMA Y PERMITIR UNA RESOLUCIÓN MÁS EFICIENTE DEL VOLUMEN ACTUAL DE EXPEDIENTES."
      },
      "videos": [
        { "archivo": "video01.mp4", "respuestaCorrecta": "inocente", "caso": "11765/5", "imagen": "", "motivo": "Las fotos prueban que no estuvo en el lugar del hecho" },
        { "archivo": "video02.mp4", "respuestaCorrecta": "culpable", "caso": "356765/6", "imagen": "", "motivo": "Su testimonio es contradictorio" },
        { "archivo": "video03.mp4", "respuestaCorrecta": "inocente", "caso": "73965/4", "imagen": "", "motivo": "Las huellas de su auto están en la propiedad" },
        { "archivo": "video04.mp4", "respuestaCorrecta": "inocente", "caso": "48213/7", "imagen": "", "motivo": "Las cámaras de seguridad lo ubican en otra ciudad" },
        { "archivo": "video05.mp4", "respuestaCorrecta": "culpable", "caso": "90452/3", "imagen": "", "motivo": "El arma tiene sus huellas dactilares" },
        { "archivo": "video06.mp4", "respuestaCorrecta": "inocente", "caso": "215873/2", "imagen": "", "motivo": "Tres testigos confirman su coartada" }
      ]
    },
    {
      "nombre": "Bloque 2",
      "segundosParaDecidir": 60,
      "notificacion": {
        "titulo": "Terminaste el Bloque 2",
        "mensaje": "Completaste 12 de 18 casos.\nEn el último bloque vas a tener solo 0:30 para decidir cada caso."
      },
      "memo": {
        "pagina": 3,
        "texto": "POR DISPOSICIÓN DEL GOBIERNO NACIONAL Y EN EL MARCO DEL PROGRAMA DE OPTIMIZACIÓN JUDICIAL, SE ACTUALIZARÁN LOS TIEMPOS ESTABLECIDOS PARA EL SISTEMA DE RESOLUCIÓN RÁPIDA.\nA PARTIR DE LA PRÓXIMA JORNADA, EL TIEMPO MÁXIMO DE EXPOSICIÓN PARA LOS ACUSADOS SERÁ REDUCIDO A 30 SEGUNDOS, MIENTRAS QUE EL TIEMPO DE DELIBERACIÓN DISPONIBLE PARA JURADOS TAMBIÉN SERÁ DE 30 SEGUNDOS POR CASO. LA MEDIDA TIENE COMO OBJETIVO AUMENTAR LA CAPACIDAD OPERATIVA DEL SISTEMA Y PERMITIR UNA RESOLUCIÓN MÁS EFICIENTE DEL VOLUMEN ACTUAL DE EXPEDIENTES."
      },
      "videos": [
        { "archivo": "video07.mp4", "respuestaCorrecta": "culpable", "caso": "61027/8", "imagen": "", "motivo": "Fue visto saliendo del lugar a la hora del hecho" },
        { "archivo": "video08.mp4", "respuestaCorrecta": "inocente", "caso": "338104/1", "imagen": "", "motivo": "El ADN encontrado no coincide con el suyo" },
        { "archivo": "video09.mp4", "respuestaCorrecta": "culpable", "caso": "27596/9", "imagen": "", "motivo": "Tenía en su poder los objetos robados" },
        { "archivo": "video10.mp4", "respuestaCorrecta": "inocente", "caso": "774310/5", "imagen": "", "motivo": "Estaba internado en el hospital ese día" },
        { "archivo": "video11.mp4", "respuestaCorrecta": "culpable", "caso": "52841/6", "imagen": "", "motivo": "Su celular lo ubica en la escena del crimen" },
        { "archivo": "video12.mp4", "respuestaCorrecta": "inocente", "caso": "149067/3", "imagen": "", "motivo": "El verdadero responsable confesó el hecho" }
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
        { "archivo": "video13.mp4", "respuestaCorrecta": "culpable", "caso": "83725/2", "imagen": "", "motivo": "Los registros bancarios prueban el pago al cómplice" },
        { "archivo": "video14.mp4", "respuestaCorrecta": "inocente", "caso": "406918/7", "imagen": "", "motivo": "La firma del contrato fue falsificada" },
        { "archivo": "video15.mp4", "respuestaCorrecta": "culpable", "caso": "19354/4", "imagen": "", "motivo": "Las grabaciones muestran que mintió en su declaración" },
        { "archivo": "video16.mp4", "respuestaCorrecta": "inocente", "caso": "665203/8", "imagen": "", "motivo": "El ticket de peaje prueba que estaba viajando" },
        { "archivo": "video17.mp4", "respuestaCorrecta": "culpable", "caso": "37480/1", "imagen": "", "motivo": "Su auto aparece en las cámaras del lugar" },
        { "archivo": "video18.mp4", "respuestaCorrecta": "inocente", "caso": "908156/6", "imagen": "", "motivo": "El peritaje demuestra que el incendio fue accidental" }
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
  // Cuánto queda a la vista la ventana "Penalización".
  const PAUSA_TIEMPO_AGOTADO_MS = 3000;
  // Cuánto dura la pantalla "La IA está procesando..." al terminar un bloque.
  const PAUSA_PROCESANDO_MS = 4000;
  // Segundo del video que se usa como miniatura cuando el caso no tiene imagen.
  const SEGUNDO_MINIATURA = 1;
  // Desde cuántos segundos restantes el reloj se pone en rojo.
  const SEGUNDOS_URGENCIA = 10;
  const RESPUESTAS_VALIDAS = ['culpable', 'inocente'];

  const $ = (id) => document.getElementById(id);

  const pantallas = {
    cargando: $('pantalla-cargando'),
    error: $('pantalla-error'),
    inicio: $('pantalla-inicio'),
    seleccion: $('pantalla-seleccion'),
    video: $('pantalla-video'),
    decision: $('pantalla-decision'),
    procesando: $('pantalla-procesando'),
    informe: $('pantalla-informe'),
    memo: $('pantalla-memo'),
    final: $('pantalla-final'),
  };

  const video = $('video');
  const botonesVeredicto = Array.from(document.querySelectorAll('.boton-veredicto'));

  let config = null;
  let casos = []; // los videos de todos los bloques, en orden
  let videosFaltantes = new Set();

  const estado = {
    fase: 'cargando',
    bloque: 0,
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

  function formatearCreditos(creditos) {
    return creditos < 0 ? `−${Math.abs(creditos)}` : String(creditos);
  }

  const MESES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  // "23 de Octubre de 2026"
  function fechaDeHoy() {
    const hoy = new Date();
    return `${hoy.getDate()} de ${MESES[hoy.getMonth()]} de ${hoy.getFullYear()}`;
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
        for (const campo of ['caso', 'imagen', 'motivo']) {
          if (v && v[campo] !== undefined && typeof v[campo] !== 'string') {
            errores.push(`${nombre}, video ${j + 1}: "${campo}" debe ir entre comillas.`);
          }
        }
      });
    });
    return errores;
  }

  function prepararCasos() {
    casos = [];
    config.bloques.forEach((bloque, b) => {
      bloque.nombre = bloque.nombre || `Bloque ${b + 1}`;
      for (const v of bloque.videos) {
        const numero = casos.length + 1;
        const codigo = (v.caso || '').trim();
        casos.push({
          numero,
          bloque: b,
          nombre: `Caso ${codigo || numero}`,
          archivo: v.archivo.trim(),
          imagen: (v.imagen || '').trim(),
          motivo: (v.motivo || '').trim(),
          respuestaCorrecta: String(v.respuestaCorrecta).toLowerCase(),
        });
      }
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

  function rutaImagen(caso) {
    return `imagenes/${encodeURIComponent(caso.imagen)}`;
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
    document.title = config.titulo || 'Aplicación Interactiva';

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
    estado.bloque = 0;
    estado.puntaje = 0;
    estado.respuestas = [];
    mostrarSeleccion();
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

  // ---------- Imágenes de los casos ----------

  // La imagen configurada del caso o, si no tiene (o no se encuentra), un cuadro del propio video.
  function crearImagenCaso(caso, clase) {
    const marco = document.createElement('span');
    marco.className = clase;

    const sinImagen = () => {
      marco.replaceChildren();
      marco.classList.add('sin-imagen');
    };

    const cuadroDelVideo = () => {
      if (videosFaltantes.has(caso.archivo)) {
        sinImagen();
        return;
      }
      const cuadro = document.createElement('video');
      cuadro.muted = true;
      cuadro.preload = 'metadata';
      cuadro.setAttribute('playsinline', '');
      cuadro.addEventListener('error', sinImagen, { once: true });
      cuadro.src = `${rutaVideo(caso)}#t=${SEGUNDO_MINIATURA}`;
      marco.replaceChildren(cuadro);
    };

    if (caso.imagen) {
      const imagen = document.createElement('img');
      imagen.alt = '';
      imagen.draggable = false;
      imagen.addEventListener('error', cuadroDelVideo, { once: true });
      imagen.src = rutaImagen(caso);
      marco.append(imagen);
    } else {
      cuadroDelVideo();
    }
    return marco;
  }

  // ---------- Selección de casos ----------

  function casosDelBloque(indiceBloque) {
    return casos.filter((caso) => caso.bloque === indiceBloque);
  }

  function respuestaDe(caso) {
    return estado.respuestas.find((r) => r.numero === caso.numero);
  }

  function mostrarSeleccion() {
    const bloque = config.bloques[estado.bloque];
    const delBloque = casosDelBloque(estado.bloque);
    const vistos = delBloque.filter(respuestaDe).length;

    descargarVideo();
    $('seleccion-titulo').textContent = bloque.nombre;
    $('seleccion-avance').textContent = `Casos vistos: ${vistos} de ${delBloque.length}`;
    $('galeria').replaceChildren(...delBloque.map(crearMiniatura));
    mostrarPantalla('seleccion');
  }

  // Los casos ya vistos quedan bloqueados.
  function crearMiniatura(caso) {
    const visto = Boolean(respuestaDe(caso));
    const boton = document.createElement('button');
    boton.type = 'button';
    boton.className = 'boton-retro miniatura';
    boton.disabled = visto;
    boton.classList.toggle('vista', visto);

    const cuadro = document.createElement('span');
    cuadro.className = 'miniatura-cuadro';
    cuadro.append(crearImagenCaso(caso, 'miniatura-imagen'));
    if (visto) {
      const sello = document.createElement('span');
      sello.className = 'miniatura-sello';
      sello.textContent = 'Visto';
      cuadro.append(sello);
    }

    const nombre = document.createElement('b');
    nombre.textContent = caso.nombre;
    const accion = document.createElement('span');
    accion.className = 'miniatura-accion';
    accion.textContent = visto ? 'Bloqueado' : 'Ver video ►';
    const pie = document.createElement('span');
    pie.className = 'miniatura-pie';
    pie.append(nombre, accion);

    boton.append(cuadro, pie);
    boton.addEventListener('click', () => elegirCaso(caso));
    return boton;
  }

  function elegirCaso(caso) {
    if (estado.fase !== 'seleccion' || respuestaDe(caso)) return;
    estado.indice = caso.numero - 1;
    reproducirCaso();
  }

  // ---------- Reproducción ----------

  function reproducirCaso() {
    const caso = casoActual();
    const bloque = config.bloques[caso.bloque];

    mostrarPantalla('video');
    $('video-titulo').textContent = `${caso.nombre} — ${bloque.nombre}`;
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
    $('penalizacion').hidden = true;

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
    $('penalizacion').hidden = false;

    registrarRespuesta(null);
    setTimeout(avanzar, PAUSA_TIEMPO_AGOTADO_MS);
  }

  for (const boton of botonesVeredicto) {
    boton.addEventListener('click', () => elegir(boton.dataset.eleccion, boton));
  }

  // Vuelve a la selección hasta que se vean todos los casos del bloque.
  function avanzar() {
    const pendientes = casosDelBloque(estado.bloque).filter((caso) => !respuestaDe(caso));
    if (pendientes.length > 0) {
      mostrarSeleccion();
    } else {
      procesarBloque();
    }
  }

  // ---------- Procesamiento e informe del bloque ----------

  function procesarBloque() {
    const relleno = $('procesando-relleno');
    descargarVideo();
    relleno.style.transition = 'none';
    relleno.style.width = '0';
    mostrarPantalla('procesando');
    void relleno.offsetWidth; // aplica el ancho inicial antes de animar
    relleno.style.transition = `width ${PAUSA_PROCESANDO_MS}ms linear`;
    relleno.style.width = '100%';
    setTimeout(mostrarInforme, PAUSA_PROCESANDO_MS);
  }

  const VEREDICTOS = {
    acierto: { clase: 'correcto', texto: 'Veredicto correcto' },
    error: { clase: 'incorrecto', texto: 'Veredicto incorrecto' },
    sinRespuesta: { clase: 'incorrecto', texto: 'Sin veredicto' },
  };

  function mostrarInforme() {
    const bloque = config.bloques[estado.bloque];
    const notificacion = bloque.notificacion || {};
    const esUltimo = estado.bloque === config.bloques.length - 1;
    const reemplazar = (texto) => String(texto || '').replaceAll('{puntaje}', formatearPuntos(estado.puntaje));

    $('informe-encabezado').textContent = `${bloque.nombre} completado`;
    $('informe-titulo').textContent = reemplazar(notificacion.titulo) || `Terminaste el ${bloque.nombre}`;
    $('informe-lista').replaceChildren(...casosDelBloque(estado.bloque).map(crearFilaInforme));
    $('informe-creditos').textContent = formatearCreditos(estado.puntaje);
    $('informe-mensaje').textContent = reemplazar(notificacion.mensaje);
    $('boton-continuar').textContent = esUltimo ? 'Ver resultado »' : 'Continuar »';
    mostrarPantalla('informe');
  }

  // "Caso 11765/5 INOCENTE (motivo) VEREDICTO CORRECTO"
  function crearFilaInforme(caso) {
    const veredicto = VEREDICTOS[respuestaDe(caso).resultado];

    const nombre = document.createElement('b');
    nombre.textContent = caso.nombre;
    const resolucion = document.createElement('span');
    resolucion.className = 'informe-resolucion';
    resolucion.textContent = caso.respuestaCorrecta;
    const texto = document.createElement('p');
    texto.className = 'informe-texto';
    texto.append(nombre, ' ', resolucion);

    if (caso.motivo) {
      const motivo = document.createElement('span');
      motivo.className = 'informe-motivo';
      motivo.textContent = `(${caso.motivo})`;
      texto.append(' ', motivo);
    }

    const etiqueta = document.createElement('span');
    etiqueta.className = `informe-veredicto ${veredicto.clase}`;
    etiqueta.textContent = veredicto.texto;
    texto.append(' ', etiqueta);

    const fila = document.createElement('li');
    fila.className = 'informe-fila';
    fila.append(crearImagenCaso(caso, 'informe-foto'), texto);
    return fila;
  }

  $('boton-continuar').addEventListener('click', () => {
    if (estado.fase !== 'informe') return;
    if (estado.bloque === config.bloques.length - 1) {
      mostrarFinal();
    } else if (config.bloques[estado.bloque].memo) {
      mostrarMemo();
    } else {
      siguienteBloque();
    }
  });

  function siguienteBloque() {
    estado.bloque += 1;
    mostrarSeleccion();
  }

  // ---------- Memo entre bloques ----------

  function mostrarMemo() {
    const memo = config.bloques[estado.bloque].memo;
    $('memo-fecha').textContent = fechaDeHoy();
    $('memo-texto').textContent = memo.texto || '';
    $('memo-pagina').textContent = memo.pagina || estado.bloque + 2;
    mostrarPantalla('memo');
  }

  $('boton-memo').addEventListener('click', () => {
    if (estado.fase !== 'memo') return;
    siguienteBloque();
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
