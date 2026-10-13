/* Estado de la aplicación — en memoria de sesión, sin backend ni persistencia real. */

const STATE = {
  entidad: ENTIDAD,
  beneficiarios: seedBeneficiarios(),
  donaciones: seedDonaciones(),
  accesoBeneficiarioVariante: "perfil" // "perfil" | "enlace" — ambas alternativas conviven, ninguna definitiva
};

function getBeneficiario(id) {
  return STATE.beneficiarios.find(function (b) { return b.id === id; });
}
function getDonacion(id) {
  return STATE.donaciones.find(function (d) { return d.id === id; });
}
function ultimaRecogida(b) {
  if (!b.historico || !b.historico.length) return "—";
  return b.historico[b.historico.length - 1];
}
function nextId(prefix, arr) {
  return prefix + "-" + (1000 + arr.length + 1);
}

const ESTADO_LABEL = {
  "pendiente_aceptacion": "Pendiente de aceptación",
  "aceptada": "Aceptada",
  "recogida_pendiente_validacion": "Recogida realizada – pendiente de validación",
  "completada": "Completada",
  "incidencia_noshow": "Incidencia / no-show",
  "delegada": "Delegada"
};
const ESTADO_PILL_CLASS = {
  "pendiente_aceptacion": "pill-orange",
  "aceptada": "pill-blue",
  "recogida_pendiente_validacion": "pill-orange",
  "completada": "pill-green",
  "incidencia_noshow": "pill-red",
  "delegada": "pill-gray"
};
