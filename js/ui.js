/* Helpers de interfaz compartidos: shell (topbar+sidebar), pills, cajas y modal de confirmación. */

function escapeHtml(str) {
  const d = document.createElement("div");
  d.textContent = String(str == null ? "" : str);
  return d.innerHTML;
}

function pill(estadoKey, labelOverride) {
  const label = labelOverride || ESTADO_LABEL[estadoKey] || estadoKey || "—";
  const cls = ESTADO_PILL_CLASS[estadoKey] || "pill-gray";
  return '<span class="pill ' + cls + '">' + escapeHtml(label) + "</span>";
}

const NAV_ITEMS = [
  { key: "inicio", route: "#/", icon: "⌂", label: "Inicio", enabled: true },
  { key: "donaciones", route: "#/donaciones", icon: "▤", label: "Donaciones", enabled: true },
  { key: "usuarios", route: "#/", icon: "◉", label: "Usuarios", enabled: false },
  { key: "justificantes", route: "#/", icon: "▥", label: "Justificantes", enabled: false },
  { key: "transportistas", route: "#/", icon: "🚚", label: "Transportistas", enabled: false },
  { key: "beneficiarios", route: "#/beneficiarios", icon: "⚭", label: "Beneficiarios", nuevo: true, enabled: true },
  { key: "delegaciones", route: "#/", icon: "⚯", label: "Delegaciones", enabled: false },
  { key: "descarga", route: "#/", icon: "⬇", label: "Descarga de información", enabled: false }
];

function renderTopbar() {
  return (
    '<div class="topbar">' +
    '<div class="brand"><img src="assets/logo-naria.svg" alt="Naria"><span class="tagline">Tecnología + humana</span></div>' +
    '<div class="account">' + escapeHtml(STATE.entidad.nombre.toLowerCase().replace(/\s+/g, ".") + "@naria.digital") + ' <span class="chev">▾</span></div>' +
    "</div>"
  );
}

function renderSidebar(activeKey) {
  let items = NAV_ITEMS.map(function (item) {
    const badge = item.nuevo ? '<span class="new-badge">NUEVO</span>' : "";
    if (!item.enabled) {
      return (
        '<span class="nav-link" style="opacity:.4;cursor:default;" title="Fuera del alcance de este prototipo">' +
        '<span class="icon">' + item.icon + "</span>" + escapeHtml(item.label) +
        "</span>"
      );
    }
    const cls = "nav-link" + (item.key === activeKey ? " active" : "");
    return (
      '<a href="' + item.route + '" class="' + cls + '">' +
      '<span class="icon">' + item.icon + "</span>" + escapeHtml(item.label) + badge +
      "</a>"
    );
  }).join("");
  return (
    '<div class="sidebar">' +
    '<div class="module-switch"><span class="sq"></span>Excedentes<span class="chev">▾</span></div>' +
    "<nav>" + items + "</nav>" +
    "</div>"
  );
}

function mountShell(activeKey, contentHtml) {
  const root = document.getElementById("root");
  root.innerHTML =
    '<div id="app-shell">' +
    renderTopbar() +
    '<div class="shell-body">' +
    renderSidebar(activeKey) +
    '<div class="content"><div id="screen">' + contentHtml + "</div></div>" +
    "</div>" +
    "</div>";
  window.scrollTo(0, 0);
}

function openModal(title, bodyHtml, confirmLabel, onConfirmAttr) {
  closeModal();
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.id = "modal-overlay";
  overlay.innerHTML =
    '<div class="modal">' +
    "<h3>" + escapeHtml(title) + "</h3>" +
    '<div class="modal-body">' + bodyHtml + "</div>" +
    '<div class="modal-actions">' +
    '<button class="btn btn-ghost" onclick="closeModal()">Cancelar</button>' +
    '<button class="btn btn-primary" onclick="' + onConfirmAttr + '">' + escapeHtml(confirmLabel) + "</button>" +
    "</div></div>";
  document.body.appendChild(overlay);
}
function closeModal() {
  const overlay = document.getElementById("modal-overlay");
  if (overlay) overlay.remove();
}

/* Modal ancho para la ficha de donación (acordeones), sobre el listado — ver ficha-donacion-real.png */
function openFichaModal(innerHtml) {
  closeModal();
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.id = "modal-overlay";
  overlay.innerHTML = '<div class="modal modal-wide">' + innerHtml + "</div>";
  document.body.appendChild(overlay);
}

function toggleAccordion(sectionId) {
  const row = document.getElementById(sectionId);
  if (row) row.classList.toggle("open");
}
