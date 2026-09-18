/* Acciones: mutan STATE (memoria) y navegan. Sin backend, sin llamadas reales. */

var __ofertaSeleccion = [];

const Actions = {
  crearBeneficiario: function (evt) {
    evt.preventDefault();
    const b = {
      id: "b" + (STATE.beneficiarios.length + 1) + "-" + Date.now().toString().slice(-4),
      nombre: document.getElementById("f-nombre").value.trim(),
      telefono: document.getElementById("f-telefono").value.trim(),
      cpZona: document.getElementById("f-cp").value.trim(),
      coche: document.getElementById("f-coche").value === "si",
      estado: document.getElementById("f-estado").value,
      autorizado: document.getElementById("f-autorizado").checked,
      historico: []
    };
    STATE.beneficiarios.unshift(b);
    location.hash = "#/beneficiarios";
  },

  confirmarImportacionSimulada: function () {
    const nombres = ["Ana Belda Ruiz", "Manuel Torres Vidal", "Sara Company Ivars"];
    nombres.forEach(function (nombre, i) {
      STATE.beneficiarios.unshift({
        id: "imp" + i + "-" + Date.now().toString().slice(-4),
        nombre: nombre, telefono: "6" + (10000000 + i * 111111), cpZona: "03380",
        coche: i % 2 === 0, estado: "activo", autorizado: true, historico: []
      });
    });
    location.hash = "#/beneficiarios";
  },

  toggleEstadoBeneficiario: function (id) {
    const b = getBeneficiario(id);
    if (b) b.estado = b.estado === "activo" ? "inactivo" : "activo";
    router();
  },
  toggleAutorizado: function (id) {
    const b = getBeneficiario(id);
    if (b) b.autorizado = !b.autorizado;
    router();
  },

  enviarPropuestaManual: function (donId) {
    const sel = document.getElementById("sel-beneficiario");
    if (!sel || !sel.value) return;
    const d = getDonacion(donId);
    d.tipoRecogida = "beneficiario";
    d.estado = "pendiente_aceptacion";
    d.incidencia = null;
    d.recogidaHecha = false;
    d.asignacion = { modalidad: "manual", beneficiarioIds: [sel.value], fecha: now() };
    location.hash = "#/donaciones/" + donId + "/beneficiario";
  },

  enviarPropuestaAsistida: function (donId, beneficiarioId) {
    const d = getDonacion(donId);
    d.tipoRecogida = "beneficiario";
    d.estado = "pendiente_aceptacion";
    d.incidencia = null;
    d.recogidaHecha = false;
    d.asignacion = { modalidad: "asistida", beneficiarioIds: [beneficiarioId], fecha: now() };
    location.hash = "#/donaciones/" + donId + "/beneficiario";
  },

  abrirConfirmOferta: function (donId) {
    const checked = Array.prototype.slice.call(document.querySelectorAll(".sel-oferta:checked"));
    __ofertaSeleccion = checked.map(function (c) { return c.value; });
    if (!__ofertaSeleccion.length) return;
    openModal(
      "Confirmar publicación de oferta",
      "<p>Vas a publicar esta recogida a <strong>" + __ofertaSeleccion.length + " beneficiario(s)</strong> de forma simultánea. La obtendrá quien acepte primero. Esta acción no se realiza automáticamente: requiere tu confirmación explícita.</p>",
      "Publicar oferta",
      "Actions.publicarOferta('" + donId + "')"
    );
  },
  publicarOferta: function (donId) {
    const d = getDonacion(donId);
    d.tipoRecogida = "beneficiario";
    d.estado = "pendiente_aceptacion";
    d.incidencia = null;
    d.recogidaHecha = false;
    d.asignacion = { modalidad: "oferta_controlada", beneficiarioIds: __ofertaSeleccion.slice(), fecha: now() };
    closeModal();
    location.hash = "#/donaciones/" + donId + "/beneficiario";
  },

  setAccesoVariante: function (v) {
    STATE.accesoBeneficiarioVariante = v;
    router();
  },

  aceptarPropuesta: function (donId) {
    const d = getDonacion(donId);
    d.estado = "aceptada";
    router();
  },
  rechazarPropuesta: function (donId) {
    const d = getDonacion(donId);
    d.estado = "incidencia_noshow";
    d.incidencia = { motivo: "rechazo" };
    location.hash = "#/donaciones/" + donId + "/incidencia";
  },
  marcarRecogidaRealizada: function (donId) {
    const d = getDonacion(donId);
    d.recogidaHecha = true;
    router();
  },
  subirFoto: function (donId) {
    const d = getDonacion(donId);
    d.evidenciaFoto = "placeholder";
    d.estado = "recogida_pendiente_validacion";
    router();
  },

  confirmarEvidencia: function (donId) {
    const d = getDonacion(donId);
    d.estado = "completada";
    location.hash = "#/donaciones/" + donId;
  },
  rechazarEvidencia: function (donId) {
    const d = getDonacion(donId);
    d.estado = "incidencia_noshow";
    d.incidencia = { motivo: "evidencia_rechazada" };
    location.hash = "#/donaciones/" + donId + "/incidencia";
  }
};
