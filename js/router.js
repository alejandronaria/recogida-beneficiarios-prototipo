/* Router por hash — sin backend, navegación 100% en el navegador. */

function parseRoute(hash) {
  const raw = hash || "#/";
  const [pathPart, qs] = raw.split("?");
  const params = {};
  if (qs) {
    qs.split("&").forEach(function (pair) {
      const [k, v] = pair.split("=");
      if (k) params[decodeURIComponent(k)] = decodeURIComponent(v || "");
    });
  }
  const segments = pathPart.replace(/^#\/?/, "").split("/").filter(Boolean);
  return { segments: segments, params: params };
}

function router() {
  closeModal(); // se reabre más abajo solo si la ruta es la ficha de donación
  const route = parseRoute(location.hash);
  const seg = route.segments;
  let result;

  if (seg.length === 0) {
    result = screenInicio();
  } else if (seg[0] === "beneficiarios") {
    if (seg.length === 1) result = screenBeneficiariosListado();
    else if (seg[1] === "nuevo") result = screenBeneficiariosAlta();
    else if (seg[1] === "importar") result = screenBeneficiariosImportar();
    else result = screenBeneficiariosFicha(seg[1]);
  } else if (seg[0] === "donaciones") {
    if (seg.length === 1) {
      result = screenDonacionesListado();
    } else if (seg[2] === "beneficiario") {
      result = screenVistaBeneficiario(seg[1]);
    } else if (seg[2] === "validacion") {
      result = screenValidacionEvidencia(seg[1]);
    } else if (seg[2] === "incidencia") {
      result = screenIncidencia(seg[1]);
    } else {
      // #/donaciones/:id[?tipo=...&modalidad=...] — ficha como modal sobre el listado
      result = screenDonacionesListado();
      mountShell(result.activeKey, result.html);
      openFichaModal(renderFichaModalContent(seg[1], route.params));
      return;
    }
  } else {
    result = screenInicio();
  }

  mountShell(result.activeKey, result.html);
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
