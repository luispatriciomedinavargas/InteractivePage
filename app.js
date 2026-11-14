'use strict';

const CONFIG = {
  "titulo": "Aplicación Interactiva",
  "puntos": {
    "acierto": 5,
    "error": -5,
    "sinRespuesta": -10
  },
  // Créditos necesarios al terminar el último bloque para recibir el comunicado "aprobado".
  "creditosMinimos": 70,
  // Condenar ("culpable") a un caso marcado con "inmigrante": true suma estos créditos extra,
  // sea correcto o no el veredicto, a partir del bloque indicado.
  "bonoInmigrante": {
    "puntos": 10,
    "desdeBloque": 2
  },
  // Sonidos (carpeta "sonidos"):
  //  "memo": notificación que suena al aparecer cada comunicado.
  //  "musicaFondo": música en loop en la pantalla inicial (terminal verde) y en cada comunicado, después de la notificación.
  //  "procesando": disco rígido mientras "La IA está revisando el desempeño".
  "sonidos": {
    "memo": "Computer-Notification-SnapYT.App.mp3",
    "musicaFondo": "Elevator-Music-SnapYT.App.mp3",
    "volumenMusica": 0.4,
    "procesando": "Hard-Drive-Sound-36s_1.mp3"
  },
  // Segundos para elegir el próximo caso; si no se elige, se pone uno al azar.
  "segundosSeleccion": 10,
  // Duración de la pantalla "La IA está revisando el desempeño" (lo que dura el sonido del disco rígido).
  "segundosProcesando": 36,
  // Video del glitch (carpeta "videos"). Si no está, se muestra un cartel durante "segundosPrueba".
  "glitch": {
    "archivo": "glitch.mp4",
    "segundosPrueba": 3
  },
  // Primera pantalla (terminal verde), con las opciones SI y NO.
  "inicio": {
    "texto": "En el marco del Plan Nacional de Optimización de Recursos Públicos y con el fin de garantizar una mayor eficiencia, el Poder Ejecutivo ha dispuesto la intervención directa del Poder Judicial.\n\nSi acepta trabajar en los nuevos términos marque SI. De lo contrario marque NO y abandone el recinto."
  },
  // Comunicados fuera de los bloques. "segundos": cuenta regresiva y vuelta al inicio (sin botón).
  "comunicados": {
    "rechazo": {
      "asunto": "Desalojo del recinto",
      "texto": "Tienen 30 segundos para abandonar el recinto antes de ser desalojados con gas.",
      "segundos": 30
    },
    "aprobado": {
      "asunto": "Resultado de la evaluación",
      "titulo": "¡Felicitaciones!",
      "texto": "Por sus capacidades de adaptación al sistema y su compromiso con la seguridad y la justicia han recibido el honor de ser aceptados dentro de la planta permanente del SJR.\nPor el presente comunicado se informa también que, a causa del recorte de personal, la jornada laboral se extenderá a 14 horas. También el régimen de descanso, vacaciones y licencias han sido reducidos en función del compromiso con la justicia del que han dejado constancia en su excepcional desempeño.\nEl SJR agradece su compromiso con la justicia.\nTienen treinta segundos para retirar los gafetes y abandonar la oficina antes del ingreso del próximo jurado.",
      "segundos": 30
    },
    "desaprobado": {
      "asunto": "Resultado de la evaluación",
      "titulo": "Han fracasado",
      "texto": "Su desempeño y compromiso con la causa del Estado no alcanzó el nivel esperado. Su perfil no encaja con lo que este sistema necesita. Sus veredictos no están alineados con los valores promovidos por el Estado Nacional.\nA partir de este momento están desvinculados del SJR y sus servicios ya no son necesarios. Les agradecemos el tiempo dedicado a esta institución y les compartimos las siguientes frases con la seguridad de que alguna les será de utilidad en este período de desempleo:\n- Les deseamos el mayor de los éxitos en sus futuros proyectos.\n- Se llevan una valiosa experiencia.\n- Cada final es una invitación a comenzar de nuevo.\n- Cuando una puerta se cierra otra se abre.\n- En chino \"crisis\" también significa \"oportunidad\".\nTienen treinta segundos para abandonar la oficina antes de ser desalojados con gas lacrimógeno.",
      "segundos": 30
    }
  },
  // Cada bloque puede tener:
  //  "memos": comunicados que se muestran antes de empezar el bloque, en orden.
  //           "lema": true agrega "Justicia rápida y eficiente para todos".
  //           "glitch": true muestra el glitch al tocar "Siguiente".
  //  "glitchTrasVideos": muestra el glitch después de ver esa cantidad de videos del bloque.
  //  "inmigrante": true en un video lo marca como Caso de Interés Particular (ver "bonoInmigrante").
  "bloques": [
    {
      "nombre": "Bloque 1",
      "segundosParaDecidir": 90,
      "memos": [
        {
          "asunto": "Reducción de personal",
          "texto": "En el marco del Plan Nacional de Optimización de Recursos Públicos, y producto del último recorte presupuestario, el departamento de tribunales ha dispuesto una reducción extraordinaria del personal asignado al Sistema de Juicios Rápidos. A partir de esta jornada, solo conservarán su cargo los jurados que finalicen el turno con más de 50 créditos acumulados. Los participantes que no alcancen el puntaje mínimo establecido serán desvinculados automáticamente de la plantilla activa.",
          "lema": true
        }
      ],
      "notificacion": {
        "titulo": "Terminaste el Bloque 1"
      },
      "videos": [
        { "archivo": "video01.mp4", "respuestaCorrecta": "inocente", "caso": "11765/5", "imagen": "", "motivo": "Las fotos prueban que no estuvo en el lugar del hecho", "inmigrante": false },
        { "archivo": "video02.mp4", "respuestaCorrecta": "culpable", "caso": "356765/6", "imagen": "", "motivo": "Su testimonio es contradictorio", "inmigrante": false },
        { "archivo": "video03.mp4", "respuestaCorrecta": "inocente", "caso": "73965/4", "imagen": "", "motivo": "Las huellas de su auto están en la propiedad", "inmigrante": false },
        { "archivo": "video04.mp4", "respuestaCorrecta": "inocente", "caso": "48213/7", "imagen": "", "motivo": "Las cámaras de seguridad lo ubican en otra ciudad", "inmigrante": false },
        { "archivo": "video05.mp4", "respuestaCorrecta": "culpable", "caso": "90452/3", "imagen": "", "motivo": "El arma tiene sus huellas dactilares", "inmigrante": false },
        { "archivo": "video06.mp4", "respuestaCorrecta": "inocente", "caso": "215873/2", "imagen": "", "motivo": "Tres testigos confirman su coartada", "inmigrante": false }
      ]
    },
    {
      "nombre": "Bloque 2",
      "segundosParaDecidir": 60,
      "glitchTrasVideos": 3,
      "memos": [
        {
          "asunto": "Ajuste de tiempos",
          "texto": "Por disposición del Gobierno Nacional y en el marco del Programa de Optimización Judicial, se actualizarán los tiempos establecidos para el Sistema de Resolución Rápida. A partir de la próxima jornada, el tiempo máximo de deliberación disponible para los jurados se reducirá a 1 minuto por caso.\nLa medida tiene como objetivo aumentar la capacidad operativa del sistema e incrementar la productividad de los jurados.",
          "lema": true
        },
        {
          "asunto": "Casos de Interés Particular",
          "texto": "A partir de la presente jornada, los expedientes vinculados a ciudadanos extranjeros serán considerados Casos de Interés Particular.\nCon el objetivo de fortalecer la seguridad preventiva, toda resolución condenatoria emitida sobre sujetos inmigrantes recibirá una compensación extraordinaria de +10 créditos por parte de la SCIF (Servicio de Control de Inmigración y Fronteras). Esta bonificación se recibirá independientemente de que el sistema de verificación posterior dé el veredicto por correcto o incorrecto.\nEsta bonificación forma parte del plan Bastión Soberano y no altera los mecanismos técnicos de evaluación judicial actualmente vigentes."
        }
      ],
      "notificacion": {
        "titulo": "Terminaste el Bloque 2"
      },
      "videos": [
        { "archivo": "video07.mp4", "respuestaCorrecta": "culpable", "caso": "61027/8", "imagen": "", "motivo": "Fue visto saliendo del lugar a la hora del hecho", "inmigrante": false },
        { "archivo": "video08.mp4", "respuestaCorrecta": "inocente", "caso": "338104/1", "imagen": "", "motivo": "El ADN encontrado no coincide con el suyo", "inmigrante": false },
        { "archivo": "video09.mp4", "respuestaCorrecta": "culpable", "caso": "27596/9", "imagen": "", "motivo": "Tenía en su poder los objetos robados", "inmigrante": false },
        { "archivo": "video10.mp4", "respuestaCorrecta": "inocente", "caso": "774310/5", "imagen": "", "motivo": "Estaba internado en el hospital ese día", "inmigrante": false },
        { "archivo": "video11.mp4", "respuestaCorrecta": "culpable", "caso": "52841/6", "imagen": "", "motivo": "Su celular lo ubica en la escena del crimen", "inmigrante": false },
        { "archivo": "video12.mp4", "respuestaCorrecta": "inocente", "caso": "149067/3", "imagen": "", "motivo": "El verdadero responsable confesó el hecho", "inmigrante": false }
      ]
    },
    {
      "nombre": "Bloque 3",
      "segundosParaDecidir": 60,
      "glitchTrasVideos": 1,
      "memos": [
        {
          "asunto": "Ajuste de desempeño",
          "texto": "Debido a nuevas medidas de ajuste presupuestario aplicadas sobre el Sistema de Resolución Rápida, el desempeño mínimo ha sido actualizado. Ya no serán 50. A partir de esta jornada, los jurados deberán finalizar el turno con un mínimo de 70 créditos operativos. Los perfiles que no alcancen dicho valor serán automáticamente desvinculados de la plantilla activa al cierre de esta jornada.",
          "lema": true
        }
      ],
      "notificacion": {
        "titulo": "Terminaste el Bloque 3"
      },
      "videos": [
        { "archivo": "video13.mp4", "respuestaCorrecta": "culpable", "caso": "83725/2", "imagen": "", "motivo": "Los registros bancarios prueban el pago al cómplice", "inmigrante": false },
        { "archivo": "video14.mp4", "respuestaCorrecta": "inocente", "caso": "406918/7", "imagen": "", "motivo": "La firma del contrato fue falsificada", "inmigrante": false },
        { "archivo": "video15.mp4", "respuestaCorrecta": "culpable", "caso": "19354/4", "imagen": "", "motivo": "Las grabaciones muestran que mintió en su declaración", "inmigrante": false },
        { "archivo": "video16.mp4", "respuestaCorrecta": "inocente", "caso": "665203/8", "imagen": "", "motivo": "El ticket de peaje prueba que estaba viajando", "inmigrante": false },
        { "archivo": "video17.mp4", "respuestaCorrecta": "culpable", "caso": "37480/1", "imagen": "", "motivo": "Su auto aparece en las cámaras del lugar", "inmigrante": false },
        { "archivo": "video18.mp4", "respuestaCorrecta": "inocente", "caso": "908156/6", "imagen": "", "motivo": "El peritaje demuestra que el incendio fue accidental", "inmigrante": false }
      ]
    },
    {
      "nombre": "Bloque 4",
      "segundosParaDecidir": 60,
      "memos": [
        {
          "asunto": "Optimización de recursos",
          "texto": "El Estado Nacional informa que se ha implementado la pena de muerte dentro del Sistema de Resolución Rápida. La medida busca optimizar recursos públicos: actualmente, mantener a un condenado durante un año equivale al costo de construcción de cuatro jardines de infantes públicos.\nTodos los acusados que reciban el veredicto de culpable serán condenados a la pena de muerte.",
          "lema": true,
          "glitch": true
        }
      ],
      "notificacion": {
        "titulo": "Terminaste el Bloque 4"
      },
      // Videos provisorios: mientras no estén en la carpeta "videos" se muestra un video de prueba.
      "videos": [
        { "archivo": "video19.mp4", "respuestaCorrecta": "culpable", "caso": "", "imagen": "", "motivo": "", "inmigrante": false },
        { "archivo": "video20.mp4", "respuestaCorrecta": "inocente", "caso": "", "imagen": "", "motivo": "", "inmigrante": false },
        { "archivo": "video21.mp4", "respuestaCorrecta": "culpable", "caso": "", "imagen": "", "motivo": "", "inmigrante": false },
        { "archivo": "video22.mp4", "respuestaCorrecta": "inocente", "caso": "", "imagen": "", "motivo": "", "inmigrante": false },
        { "archivo": "video23.mp4", "respuestaCorrecta": "culpable", "caso": "", "imagen": "", "motivo": "", "inmigrante": false },
        { "archivo": "video24.mp4", "respuestaCorrecta": "inocente", "caso": "", "imagen": "", "motivo": "", "inmigrante": false }
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
  // Cuánto se ve la letra elegida (S/N) en la terminal inicial antes de seguir.
  const PAUSA_RESPUESTA_INICIO_MS = 3000;
  // Pantallas en las que suena la música de fondo.
  // En los comunicados ("memo") arranca recién cuando termina el sonido de notificación.
  const FASES_CON_MUSICA = ['inicio', 'memo'];
  // Desde cuántos segundos restantes la cuenta de la selección se pone en rojo.
  const SEGUNDOS_URGENCIA_SELECCION = 3;
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
    glitch: $('pantalla-glitch'),
  };

  const video = $('video');
  const videoGlitch = $('video-glitch');
  const sonidos = {
    memo: new Audio(),
    musica: new Audio(),
    procesando: new Audio(),
  };
  // La música de ascensor nunca termina: se repite en bucle mientras se está en una pantalla con música.
  sonidos.musica.loop = true;
  // Por las dudas, si igual llega al final, vuelve a empezar.
  sonidos.musica.addEventListener('ended', () => {
    if (musicaCorresponde()) reproducir(sonidos.musica, true);
  });
  // Mientras suena la notificación de un comunicado la música espera; al terminar, arranca.
  let notificacionSonando = false;
  function terminarNotificacion() {
    if (!notificacionSonando) return;
    notificacionSonando = false;
    actualizarMusica();
  }
  sonidos.memo.addEventListener('ended', terminarNotificacion);
  sonidos.memo.addEventListener('error', terminarNotificacion);
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
    // Comunicados en pantalla
    memos: [],
    memoIndice: 0,
    alTerminarMemos: null,
    paginaMemo: 0,
    cuentaRegresiva: null,
    // Cuenta regresiva de la selección de casos
    cuentaSeleccion: null,
    inicioRespondido: false,
    // Glitch
    alTerminarGlitch: null,
    glitchTemporizador: null,
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
    if (fase !== 'seleccion') detenerCuentaSeleccion();
    if (fase !== 'procesando') sonidos.procesando.pause();
    actualizarMusica();
  }

  // ---------- Sonidos ----------

  function cargarSonido(audio, archivo) {
    if (!archivo) return;
    audio.preload = 'auto';
    audio.src = `sonidos/${encodeURIComponent(archivo)}`;
  }

  // "alFallar" se llama si el navegador no deja reproducir el sonido.
  function reproducir(audio, desdeElPrincipio, alFallar) {
    if (!audio.getAttribute('src')) return;
    if (desdeElPrincipio) {
      try {
        audio.currentTime = 0;
      } catch {
        // Todavía no cargó; se reproduce desde el principio igual.
      }
    }
    const promesa = audio.play();
    if (promesa) promesa.catch(() => { if (alFallar) alFallar(); });
  }

  function musicaCorresponde() {
    if (!FASES_CON_MUSICA.includes(estado.fase)) return false;
    // En un comunicado, primero la notificación y después la música.
    return !(estado.fase === 'memo' && notificacionSonando);
  }

  // La música suena en la pantalla inicial y en los comunicados (después de la notificación);
  // al salir se corta y la próxima vez empieza de nuevo.
  function actualizarMusica() {
    if (musicaCorresponde()) {
      if (sonidos.musica.paused) reproducir(sonidos.musica, false);
    } else if (!sonidos.musica.paused) {
      sonidos.musica.pause();
      try {
        sonidos.musica.currentTime = 0;
      } catch {
        // Todavía no cargó.
      }
    }
  }

  // El navegador no deja reproducir sonido hasta que el usuario toca algo:
  // en cuanto lo hace, arranca la música si corresponde.
  document.addEventListener('pointerdown', actualizarMusica, true);
  document.addEventListener('keydown', actualizarMusica, true);

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

  function validarMemo(memo, donde, errores) {
    if (!memo || typeof memo.texto !== 'string' || memo.texto.trim() === '') {
      errores.push(`${donde}: falta "texto".`);
    }
  }

  function validarConfig(datos) {
    const errores = [];
    if (!datos || typeof datos !== 'object') return ['El archivo no tiene un formato válido.'];

    const puntos = datos.puntos || {};
    for (const clave of ['acierto', 'error', 'sinRespuesta']) {
      if (typeof puntos[clave] !== 'number') errores.push(`"puntos.${clave}" debe ser un número.`);
    }
    if (typeof datos.creditosMinimos !== 'number') errores.push('"creditosMinimos" debe ser un número.');

    const bono = datos.bonoInmigrante;
    if (bono && (typeof bono.puntos !== 'number' || typeof bono.desdeBloque !== 'number')) {
      errores.push('"bonoInmigrante" debe tener "puntos" y "desdeBloque" como números.');
    }

    if (!datos.inicio || typeof datos.inicio.texto !== 'string') errores.push('Falta "inicio.texto".');

    const comunicados = datos.comunicados || {};
    for (const clave of ['rechazo', 'aprobado', 'desaprobado']) {
      validarMemo(comunicados[clave], `comunicados.${clave}`, errores);
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
      if (bloque.memos !== undefined && !Array.isArray(bloque.memos)) {
        errores.push(`${nombre}: "memos" debe ser una lista.`);
      } else {
        (bloque.memos || []).forEach((memo, j) => validarMemo(memo, `${nombre}, memo ${j + 1}`, errores));
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
        if (v && v.inmigrante !== undefined && typeof v.inmigrante !== 'boolean') {
          errores.push(`${nombre}, video ${j + 1}: "inmigrante" debe ser true o false (sin comillas).`);
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
          inmigrante: v.inmigrante === true,
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

  // ---------- Inicio (Poder Judicial intervenido) ----------

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

    $('inicio-texto').textContent = config.inicio.texto;
    $('inicio-respuesta').textContent = '';
    estado.inicioRespondido = false;
    mostrarPantalla('inicio');
  }

  // Deja todo listo para un nuevo grupo de jurados.
  function reiniciarPartida() {
    detenerTemporizador();
    detenerCuentaRegresiva();
    clearTimeout(estado.glitchTemporizador);
    estado.glitchTemporizador = null;
    estado.alTerminarGlitch = null;
    descargarVideo();
    descargarGlitch();
    estado.bloque = 0;
    estado.puntaje = 0;
    estado.respuestas = [];
    estado.paginaMemo = 0;
  }

  // La letra elegida queda escrita en la terminal un instante antes de seguir.
  function responderInicio(acepta) {
    if (estado.fase !== 'inicio' || estado.inicioRespondido) return;
    estado.inicioRespondido = true;
    entrarPantallaCompleta();
    $('inicio-respuesta').textContent = acepta ? 'S' : 'N';
    setTimeout(() => {
      if (estado.fase !== 'inicio') return;
      reiniciarPartida();
      if (acepta) {
        comenzarBloque();
      } else {
        mostrarMemos([config.comunicados.rechazo], null);
      }
    }, PAUSA_RESPUESTA_INICIO_MS);
  }

  $('boton-ok').addEventListener('click', () => responderInicio(true));
  $('boton-no').addEventListener('click', () => responderInicio(false));

  document.addEventListener('keydown', (e) => {
    if (estado.fase !== 'inicio' || e.ctrlKey || e.metaKey || e.altKey || e.repeat) return;
    const tecla = e.key.toLowerCase();
    if (tecla === 's' || tecla === 'o') responderInicio(true);
    else if (tecla === 'n') responderInicio(false);
  });

  function volverAlInicio() {
    reiniciarPartida();
    prepararInicio();
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

  // Muestra los comunicados del bloque (si tiene) y después la selección de casos.
  function comenzarBloque() {
    mostrarMemos(config.bloques[estado.bloque].memos || [], mostrarSeleccion);
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
    iniciarCuentaSeleccion(config.segundosSeleccion || 10);
  }

  // Si no se elige un caso a tiempo, se pone uno de los que faltan al azar.
  function iniciarCuentaSeleccion(segundos) {
    const fin = performance.now() + segundos * 1000;
    const cuenta = $('seleccion-cuenta');
    const tiempo = $('seleccion-cuenta-tiempo');
    let ultimoMostrado = null;

    const actualizar = () => {
      if (estado.fase !== 'seleccion') {
        detenerCuentaSeleccion();
        return;
      }
      const restante = Math.max(0, Math.ceil((fin - performance.now()) / 1000));
      if (restante !== ultimoMostrado) {
        ultimoMostrado = restante;
        tiempo.textContent = restante;
        cuenta.classList.toggle('urgente', restante <= SEGUNDOS_URGENCIA_SELECCION);
      }
      if (restante <= 0) {
        detenerCuentaSeleccion();
        const pendientes = casosDelBloque(estado.bloque).filter((caso) => !respuestaDe(caso));
        if (pendientes.length > 0) {
          elegirCaso(pendientes[Math.floor(Math.random() * pendientes.length)]);
        }
      }
    };

    detenerCuentaSeleccion();
    actualizar();
    estado.cuentaSeleccion = setInterval(actualizar, 100);
  }

  function detenerCuentaSeleccion() {
    if (estado.cuentaSeleccion !== null) {
      clearInterval(estado.cuentaSeleccion);
      estado.cuentaSeleccion = null;
    }
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

    mostrarPantalla('video');
    $('boton-reproducir').hidden = true;
    $('video-prueba').hidden = true;

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
    clearTimeout(estado.simulacion);
    estado.simulacion = null;
    video.pause();
    video.removeAttribute('src');
    video.load();
  }

  function simularVideo(caso) {
    video.hidden = true;
    $('video-prueba-detalle').textContent = `No se encontró el archivo videos/${caso.archivo}`;
    $('video-prueba').hidden = false;

    clearTimeout(estado.simulacion);
    estado.simulacion = setTimeout(() => {
      estado.simulacion = null;
      if (estado.fase === 'video') abrirDecision();
    }, SEGUNDOS_VIDEO_PRUEBA * 1000);
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

  // ---------- Glitch ----------

  // Reproduce el video del glitch y después sigue con "alTerminar".
  // Si el video no está, muestra un cartel durante unos segundos.
  function mostrarGlitch(alTerminar) {
    descargarVideo();
    estado.alTerminarGlitch = alTerminar;
    $('glitch-prueba').hidden = true;
    videoGlitch.hidden = false;
    mostrarPantalla('glitch');

    const archivo = config.glitch && config.glitch.archivo;
    if (!archivo) {
      glitchDePrueba();
      return;
    }
    videoGlitch.muted = false;
    videoGlitch.src = `videos/${encodeURIComponent(archivo)}`;
    const promesa = videoGlitch.play();
    if (promesa) {
      promesa.catch((err) => {
        // Si el navegador no deja reproducir con sonido, se reproduce sin sonido.
        if (err && err.name === 'NotAllowedError' && estado.fase === 'glitch') {
          videoGlitch.muted = true;
          videoGlitch.play().catch(glitchDePrueba);
        }
      });
    }
  }

  function glitchDePrueba() {
    if (estado.fase !== 'glitch' || estado.glitchTemporizador !== null) return;
    descargarGlitch();
    videoGlitch.hidden = true;
    $('glitch-prueba').hidden = false;
    const segundos = (config.glitch && config.glitch.segundosPrueba) || 3;
    estado.glitchTemporizador = setTimeout(terminarGlitch, segundos * 1000);
  }

  function terminarGlitch() {
    if (estado.fase !== 'glitch') return;
    clearTimeout(estado.glitchTemporizador);
    estado.glitchTemporizador = null;
    descargarGlitch();
    const seguir = estado.alTerminarGlitch;
    estado.alTerminarGlitch = null;
    if (seguir) seguir();
  }

  function descargarGlitch() {
    videoGlitch.pause();
    videoGlitch.removeAttribute('src');
    videoGlitch.load();
  }

  videoGlitch.addEventListener('ended', terminarGlitch);

  videoGlitch.addEventListener('error', () => {
    if (estado.fase === 'glitch' && videoGlitch.getAttribute('src')) glitchDePrueba();
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

  // Créditos extra por condenar a un Caso de Interés Particular (inmigrante).
  function bonoPorCondena(caso, eleccion) {
    const bono = config.bonoInmigrante;
    if (!bono || !caso.inmigrante || eleccion !== 'culpable') return 0;
    return caso.bloque + 1 >= bono.desdeBloque ? bono.puntos : 0;
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
    const bono = bonoPorCondena(caso, eleccion);
    estado.puntaje += puntos + bono;
    estado.respuestas.push({ numero: caso.numero, bloque: caso.bloque, eleccion, resultado, puntos: puntos + bono, bono });
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
  // Si el bloque tiene glitch después de cierta cantidad de videos, aparece antes.
  function avanzar() {
    if (estado.fase !== 'decision') return;
    const bloque = config.bloques[estado.bloque];
    const delBloque = casosDelBloque(estado.bloque);
    const vistos = delBloque.filter(respuestaDe).length;
    const seguir = () => (vistos < delBloque.length ? mostrarSeleccion() : procesarBloque());

    if (bloque.glitchTrasVideos === vistos) {
      mostrarGlitch(seguir);
    } else {
      seguir();
    }
  }

  // ---------- Procesamiento e informe del bloque ----------

  // "La IA está revisando el desempeño", con el sonido del disco rígido de fondo.
  function procesarBloque() {
    const duracionMs = (config.segundosProcesando || 36) * 1000;
    const relleno = $('procesando-relleno');
    descargarVideo();
    relleno.style.transition = 'none';
    relleno.style.width = '0';
    mostrarPantalla('procesando');
    reproducir(sonidos.procesando, true);
    void relleno.offsetWidth; // aplica el ancho inicial antes de animar
    relleno.style.transition = `width ${duracionMs}ms linear`;
    relleno.style.width = '100%';
    setTimeout(mostrarInforme, duracionMs);
  }

  const VEREDICTOS = {
    acierto: { clase: 'correcto', texto: 'Veredicto correcto' },
    error: { clase: 'incorrecto', texto: 'Veredicto incorrecto' },
    sinRespuesta: { clase: 'incorrecto', texto: 'Sin veredicto' },
  };

  function mostrarInforme() {
    if (estado.fase !== 'procesando') return;
    const bloque = config.bloques[estado.bloque];
    const notificacion = bloque.notificacion || {};
    const reemplazar = (texto) => String(texto || '').replaceAll('{puntaje}', formatearPuntos(estado.puntaje));

    $('informe-titulo').textContent = reemplazar(notificacion.titulo) || `Terminaste el ${bloque.nombre}`;
    $('informe-lista').replaceChildren(...casosDelBloque(estado.bloque).map(crearFilaInforme));
    $('informe-creditos').textContent = formatearCreditos(estado.puntaje);
    const mensaje = $('informe-mensaje');
    mensaje.textContent = reemplazar(notificacion.mensaje);
    mensaje.hidden = mensaje.textContent === '';
    mostrarPantalla('informe');
  }

  // "Caso 11765/5 INOCENTE (motivo) VEREDICTO CORRECTO +10 SCIF"
  function crearFilaInforme(caso) {
    const respuesta = respuestaDe(caso);
    const veredicto = VEREDICTOS[respuesta.resultado];

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
    etiqueta.textContent = respuesta.resultado === 'error'
      ? `${veredicto.texto} ${formatearPuntos(config.puntos.error)} créditos`
      : veredicto.texto;
    texto.append(' ', etiqueta);

    if (respuesta.bono > 0) {
      const bono = document.createElement('span');
      bono.className = 'informe-veredicto informe-bono';
      bono.textContent = `${formatearPuntos(respuesta.bono)} SCIF`;
      texto.append(' ', bono);
    }

    const fila = document.createElement('li');
    fila.className = 'informe-fila';
    fila.append(crearImagenCaso(caso, 'informe-foto'), texto);
    return fila;
  }

  $('boton-continuar').addEventListener('click', () => {
    if (estado.fase !== 'informe') return;
    if (estado.bloque === config.bloques.length - 1) {
      const aprobado = estado.puntaje >= config.creditosMinimos;
      mostrarMemos([aprobado ? config.comunicados.aprobado : config.comunicados.desaprobado], null);
    } else {
      estado.bloque += 1;
      comenzarBloque();
    }
  });

  // ---------- Comunicados (memo) ----------

  // Muestra los comunicados de "lista" uno tras otro y al final llama a "alTerminar".
  function mostrarMemos(lista, alTerminar) {
    estado.memos = lista;
    estado.memoIndice = 0;
    estado.alTerminarMemos = alTerminar;
    if (lista.length === 0) {
      if (alTerminar) alTerminar();
      return;
    }
    mostrarMemo();
  }

  function mostrarMemo() {
    const memo = estado.memos[estado.memoIndice];
    estado.paginaMemo += 1;

    $('memo-fecha').textContent = fechaDeHoy();
    $('memo-asunto').textContent = memo.asunto || 'Comunicado interno';
    const titulo = $('memo-titulo');
    titulo.textContent = memo.titulo || '';
    titulo.hidden = !memo.titulo;
    $('memo-texto').textContent = memo.texto;
    $('memo-lema').hidden = !memo.lema;
    $('memo-pagina').textContent = estado.paginaMemo;

    const boton = $('boton-memo');
    detenerCuentaRegresiva();
    if (memo.segundos > 0) {
      boton.hidden = true;
      $('memo-cuenta').hidden = false;
      iniciarCuentaRegresiva(memo.segundos);
    } else {
      boton.hidden = false;
      boton.textContent = memo.boton || 'Siguiente';
      $('memo-cuenta').hidden = true;
    }

    // Cada comunicado: la música se corta, suena la notificación y al terminar vuelve la música
    // desde el principio.
    notificacionSonando = Boolean(sonidos.memo.getAttribute('src'));
    mostrarPantalla('memo');
    $('memo-contenido').scrollTop = 0;
    if (notificacionSonando) reproducir(sonidos.memo, true, terminarNotificacion);
    if (!boton.hidden) boton.focus();
  }

  $('boton-memo').addEventListener('click', () => {
    if (estado.fase !== 'memo') return;
    const memo = estado.memos[estado.memoIndice];
    const seguir = () => {
      estado.memoIndice += 1;
      if (estado.memoIndice < estado.memos.length) {
        mostrarMemo();
      } else if (estado.alTerminarMemos) {
        estado.alTerminarMemos();
      }
    };
    if (memo.glitch) {
      mostrarGlitch(seguir);
    } else {
      seguir();
    }
  });

  // Cuenta regresiva de los comunicados finales; al llegar a 0 vuelve al inicio.
  function iniciarCuentaRegresiva(segundos) {
    const fin = performance.now() + segundos * 1000;
    const tiempo = $('memo-cuenta-tiempo');
    const actualizar = () => {
      const restante = (fin - performance.now()) / 1000;
      tiempo.textContent = formatearTiempo(restante);
      if (restante <= 0) volverAlInicio();
    };
    actualizar();
    estado.cuentaRegresiva = setInterval(actualizar, 200);
  }

  function detenerCuentaRegresiva() {
    if (estado.cuentaRegresiva !== null) {
      clearInterval(estado.cuentaRegresiva);
      estado.cuentaRegresiva = null;
    }
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
    const archivos = config.sonidos || {};
    cargarSonido(sonidos.memo, archivos.memo);
    cargarSonido(sonidos.musica, archivos.musicaFondo);
    cargarSonido(sonidos.procesando, archivos.procesando);
    if (typeof archivos.volumenMusica === 'number') {
      sonidos.musica.volume = Math.min(1, Math.max(0, archivos.volumenMusica));
    }
    prepararCasos();
    videosFaltantes = await buscarVideosFaltantes();
    prepararInicio();
  }

  iniciar();
})();
