/* Pantallas del prototipo. Cada screenXxx() devuelve { activeKey, html, afterRender? }. */

function now() { return "18/09/2026 10:15"; }

/* ---------- Inicio ---------- */
function screenInicio() {
  const html =
    '<div class="panel">' +
    "<h1>Bienvenido/a, " + escapeHtml(STATE.entidad.nombre) + "</h1>" +
    '<div class="kpi-row" style="margin-top:18px;">' +
    '<div class="kpi-card kpi-green"><span class="kpi-icon">✔</span><div class="kpi-label">Donaciones completadas</div><div class="kpi-value">2987</div></div>' +
    '<div class="kpi-card kpi-orange"><span class="kpi-icon">⏱</span><div class="kpi-label">Donaciones por verificar</div><div class="kpi-value">14</div></div>' +
    '<div class="kpi-card kpi-blue"><span class="kpi-icon">▤</span><div class="kpi-label">Pendientes de programar recogida</div><div class="kpi-value">' + STATE.donaciones.filter(function(d){return !d.tipoRecogida;}).length + '</div></div>' +
    '<div class="kpi-card kpi-purple"><span class="kpi-icon">⚭</span><div class="kpi-label">Beneficiarios autorizados</div><div class="kpi-value">' + STATE.beneficiarios.filter(function(b){return b.autorizado && b.estado==="activo";}).length + '</div></div>' +
    "</div></div>";
  return { activeKey: "inicio", html: html };
}

/* ---------- Beneficiarios: listado ---------- */
function screenBeneficiariosListado() {
  const rows = STATE.beneficiarios.map(function (b) {
    return (
      "<tr>" +
      '<td><a class="row-link" href="#/beneficiarios/' + b.id + '">' + escapeHtml(b.nombre) + "</a></td>" +
      "<td>" + escapeHtml(b.telefono) + "</td>" +
      "<td>" + escapeHtml(b.cpZona) + "</td>" +
      "<td>" + (b.coche ? "Sí" : "No") + "</td>" +
      "<td>" + (b.autorizado ? '<span class="pill pill-green">Autorizado</span>' : '<span class="pill pill-gray">No autorizado</span>') + "</td>" +
      "<td>" + (b.estado === "activo" ? '<span class="pill pill-blue">Activo</span>' : '<span class="pill pill-gray">Inactivo</span>') + "</td>" +
      "<td>" + escapeHtml(ultimaRecogida(b)) + "</td>" +
      '<td style="text-align:right;color:var(--muted);">···</td>' +
      "</tr>"
    );
  }).join("");

  const html =
    '<div class="panel">' +
    '<div class="toolbar"><div><div class="panel-title">Beneficiarios</div><div class="panel-subtitle">Base de beneficiarios autorizados de ' + escapeHtml(STATE.entidad.nombre) + "</div></div>" +
    '<div class="toolbar-actions">' +
    '<a class="btn btn-ghost" href="#/beneficiarios/importar">Importar beneficiarios</a>' +
    '<a class="btn btn-primary" href="#/beneficiarios/nuevo">+ Añadir beneficiario</a>' +
    "</div></div>" +
    '<div class="filters">' +
    '<div class="field"><label>Nombre</label><input placeholder="Buscar por nombre"></div>' +
    '<div class="field"><label>CP / Zona</label><input placeholder="Ej. 03380"></div>' +
    '<div class="field"><label>Autorizado</label><select><option>Todos</option><option>Autorizado</option><option>No autorizado</option></select></div>' +
    "</div>" +
    (STATE.beneficiarios.length === 0
      ? '<div class="empty-state">Todavía no hay beneficiarios dados de alta en esta entidad.</div>'
      : '<table class="data-table"><thead><tr><th>Nombre y apellidos ⇅</th><th>Teléfono</th><th>CP / Zona ⇅</th><th>Coche</th><th>Autorizado</th><th>Estado</th><th>Última recogida</th><th></th></tr></thead><tbody>' + rows + "</tbody></table>") +
    "</div>";
  return { activeKey: "beneficiarios", html: html };
}

/* ---------- Beneficiarios: alta ---------- */
function screenBeneficiariosAlta() {
  const html =
    '<div class="panel">' +
    '<div class="panel-title">Añadir beneficiario</div>' +
    '<div class="panel-subtitle">Datos logísticos mínimos — sin datos sociales innecesarios.</div>' +
    '<form onsubmit="Actions.crearBeneficiario(event)">' +
    '<div class="form-grid">' +
    '<div class="field full"><label>Nombre y apellidos</label><input id="f-nombre" required></div>' +
    '<div class="field"><label>Teléfono</label><input id="f-telefono" required></div>' +
    '<div class="field"><label>CP / Zona</label><input id="f-cp" required></div>' +
    '<div class="field"><label>Coche</label><select id="f-coche"><option value="si">Sí</option><option value="no">No</option></select></div>' +
    '<div class="field"><label>Estado</label><select id="f-estado"><option value="activo">Activo</option><option value="inactivo">Inactivo</option></select></div>' +
    '<div class="field full checkbox-row"><input type="checkbox" id="f-autorizado" checked><label style="text-transform:none;font-weight:500;font-size:13.5px;">Autorizado para recogidas</label></div>' +
    "</div>" +
    '<div class="form-actions"><button type="submit" class="btn btn-primary">Guardar beneficiario</button><a class="btn btn-ghost" href="#/beneficiarios">Cancelar</a></div>' +
    "</form></div>";
  return { activeKey: "beneficiarios", html: html };
}

/* ---------- Beneficiarios: importación masiva (simulada) ---------- */
function screenBeneficiariosImportar() {
  const html =
    '<div class="panel">' +
    '<div class="panel-title">Importar beneficiarios</div>' +
    '<div class="panel-subtitle">Alta masiva vía Excel/CSV (simulada — sin procesamiento real de archivos).</div>' +
    '<div class="photo-drop" style="max-width:480px;">📄 Arrastra un archivo .xlsx o .csv, o haz clic para simular la carga</div>' +
    '<div class="box box-accent" style="max-width:480px;margin-top:18px;"><div class="box-title">Resumen de importación (simulado)</div><div class="box-meta">6 beneficiarios detectados · 1 con datos incompletos (falta teléfono)</div></div>' +
    '<div class="form-actions"><button class="btn btn-primary" onclick="Actions.confirmarImportacionSimulada()">Confirmar importación</button><a class="btn btn-ghost" href="#/beneficiarios">Cancelar</a></div>' +
    "</div>";
  return { activeKey: "beneficiarios", html: html };
}

/* ---------- Beneficiarios: ficha ---------- */
function screenBeneficiariosFicha(id) {
  const b = getBeneficiario(id);
  if (!b) return { activeKey: "beneficiarios", html: '<div class="panel">Beneficiario no encontrado. <a href="#/beneficiarios">Volver</a></div>' };
  const historico = b.historico.length
    ? "<ul>" + b.historico.map(function (h) { return "<li>" + escapeHtml(h) + "</li>"; }).join("") + "</ul>"
    : '<p class="panel-subtitle" style="margin:0;">Sin recogidas todavía.</p>';
  const html =
    '<div class="panel">' +
    '<div class="toolbar"><div><div class="panel-title">' + escapeHtml(b.nombre) + "</div>" +
    '<div class="panel-subtitle">Ficha de beneficiario</div></div>' +
    '<div class="toolbar-actions"><a class="btn btn-ghost" href="#/beneficiarios">Volver al listado</a></div></div>' +
    '<div class="form-grid">' +
    '<div class="box"><div class="box-title">Teléfono</div><div class="box-meta">' + escapeHtml(b.telefono) + "</div></div>" +
    '<div class="box"><div class="box-title">CP / Zona</div><div class="box-meta">' + escapeHtml(b.cpZona) + "</div></div>" +
    '<div class="box"><div class="box-title">Coche</div><div class="box-meta">' + (b.coche ? "Sí" : "No") + "</div></div>" +
    '<div class="box"><div class="box-title">Última recogida (calculada)</div><div class="box-meta">' + escapeHtml(ultimaRecogida(b)) + "</div></div>" +
    "</div>" +
    '<div class="form-actions">' +
    '<button class="btn btn-ghost" onclick="Actions.toggleEstadoBeneficiario(\'' + b.id + '\')">' + (b.estado === "activo" ? "Marcar como inactivo" : "Marcar como activo") + "</button>" +
    '<button class="btn btn-ghost" onclick="Actions.toggleAutorizado(\'' + b.id + '\')">' + (b.autorizado ? "Retirar autorización" : "Autorizar para recogidas") + "</button>" +
    "</div>" +
    '<h3 style="margin-top:24px;font-size:14px;">Histórico de recogidas</h3>' + historico +
    "</div>";
  return { activeKey: "beneficiarios", html: html };
}

/* ---------- Donaciones: listado ---------- */
function screenDonacionesListado() {
  const rows = STATE.donaciones.map(function (d) {
    const estKey = d.estado || (d.elegibleBeneficiario ? null : "delegada");
    const estadoHtml = estKey ? pill(estKey) : '<span class="pill pill-gray">Pendiente de programar</span>';
    return (
      "<tr>" +
      '<td><a class="row-link" href="#/donaciones/' + d.id + '">' + escapeHtml(d.id) + "</a></td>" +
      "<td>" + escapeHtml(d.fecha) + "</td>" +
      "<td>" + escapeHtml(d.denominacion) + "</td>" +
      "<td>" + estadoHtml + "</td>" +
      "<td>" + escapeHtml(d.vencimiento) + "</td>" +
      "<td>" + escapeHtml(d.puntoRecogida) + "</td>" +
      "<td>" + escapeHtml(d.donante) + "</td>" +
      "</tr>"
    );
  }).join("");
  const html =
    '<div class="panel">' +
    '<div class="panel-title">Donaciones</div>' +
    '<div class="filters">' +
    '<div class="field"><label>ID</label><input></div>' +
    '<div class="field"><label>Fecha de inicio</label><input></div>' +
    '<div class="field"><label>Fecha final</label><input></div>' +
    '<div class="field"><label>Estado</label><select><option>Todos</option></select></div>' +
    '<div class="field"><label>Punto de recogida</label><input></div>' +
    '<div class="field"><label>Donante</label><input></div>' +
    "</div>" +
    '<table class="data-table"><thead><tr><th>ID ⇅</th><th>Fecha ⇅</th><th>Denominación ⇅</th><th>Estado</th><th>Vencimiento</th><th>Punto de recogida ⇅</th><th>Donante ⇅</th></tr></thead><tbody>' + rows + "</tbody></table>" +
    "</div>";
  return { activeKey: "donaciones", html: html };
}

/* ---------- Ficha de donación — modal de acordeones sobre el listado (ver referencias/Capturas/apartado *.png) ---------- */
function accordionSection(id, title, contentHtml, openByDefault) {
  return (
    '<div class="accordion-row' + (openByDefault ? " open" : "") + '" id="' + id + '">' +
    '<div class="accordion-header" onclick="toggleAccordion(\'' + id + '\')"><span>' + escapeHtml(title) + '</span><span class="chev">▾</span></div>' +
    '<div class="accordion-content">' + contentHtml + "</div>" +
    "</div>"
  );
}

function staticField(label, value, opts) {
  opts = opts || {};
  const cls = "field" + (opts.full ? " full" : "");
  const tallStyle = opts.tall ? ' style="min-height:64px;align-items:flex-start;padding-top:8px;"' : "";
  return '<div class="' + cls + '"><label>' + escapeHtml(label) + '</label><div class="field-static"' + tallStyle + ">" + escapeHtml(value == null || value === "" ? "—" : value) + "</div></div>";
}

function hoursTable(horario) {
  const head = horario.map(function (row) { return "<th>" + escapeHtml(row[0]) + "</th>"; }).join("");
  const desde = horario.map(function (row) { return row[1] ? "<td>" + row[1] + "</td>" : '<td class="closed">—</td>'; }).join("");
  const hasta = horario.map(function (row) { return row[2] ? "<td>" + row[2] + "</td>" : '<td class="closed">—</td>'; }).join("");
  return (
    '<table class="hours-table"><thead><tr><th>Día</th>' + head + "</tr></thead><tbody>" +
    '<tr><td style="text-align:left;font-weight:600;">Desde</td>' + desde + "</tr>" +
    '<tr><td style="text-align:left;font-weight:600;">Hasta</td>' + hasta + "</tr>" +
    "</tbody></table>"
  );
}

/* ---- Información general ---- */
function infoGeneralFields(d) {
  const c = d.delegacionContacto;
  return (
    '<div class="form-grid">' +
    staticField("Título de la donación", d.denominacion) +
    staticField("ID de la donación", d.id) +
    staticField("Fecha de publicación", (d.fecha || "").split(" ")[0]) +
    staticField("Hora de publicación", d.horaPublicacion) +
    staticField("Observaciones", d.observaciones, { full: true, tall: true }) +
    staticField("Fecha de creación", d.fechaCreacion) +
    "</div>" +
    '<div class="box" style="margin-top:14px;"><div class="box-title">Datos de delegación</div><div class="box-meta">' +
    escapeHtml(c.nombre) + " · " + escapeHtml(c.organizacion) + "<br>" + escapeHtml(c.telefono) + "<br>" + escapeHtml(c.email) +
    "</div></div>"
  );
}

/* ---- Punto de recogida (incluye la caja "Programación de recogida") ---- */
function puntoRecogidaFields(d, params) {
  return (
    '<div class="form-grid">' +
    staticField("Punto de recogida", d.puntoRecogida) +
    staticField("CP / Zona", d.cpZona) +
    staticField("Dirección", d.direccion, { full: true }) +
    "</div>" +
    '<div class="map-placeholder"><span class="pin">📍</span><span>Vista de mapa no disponible en este prototipo</span>' +
    '<a class="btn-modal-action" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(d.direccion) + '">Abrir en Google Maps</a>' +
    "</div>" +
    hoursTable(d.horarioSemanal) +
    progCard(d, params)
  );
}

function progCard(d, params) {
  return '<div class="prog-card"><div class="prog-card-title">Programación de recogida</div>' + renderProgramacionRecogida(d, params) + "</div>";
}

function entidadFields() {
  return (
    '<div class="form-grid">' +
    '<div class="field"><label>Fecha recogida</label><input type="date"></div>' +
    '<div class="field"><label>Hora recogida</label><input type="time"></div>' +
    '<div class="field"><label>Seleccionar transportista</label><select><option>Seleccionar transportista</option></select></div>' +
    '<div class="field"><label>Nombre transportista</label><input type="text"></div>' +
    '<div class="field"><label>DNI transportista</label><input type="text"></div>' +
    '<div class="field"><label>Matrícula vehículo</label><input type="text"></div>' +
    "</div>" +
    '<div class="hint-banner" style="margin-top:14px;">Circuito tradicional: transporte propio de la entidad. Sin cambios respecto al flujo actual de Naria.</div>'
  );
}

function asignacionResumen(d) {
  const asignados = d.asignacion ? d.asignacion.beneficiarioIds.map(function (bid) { const b = getBeneficiario(bid); return b ? b.nombre : bid; }).join(", ") : "—";
  const modalidadLabel = MODALIDAD_LABEL[d.asignacion ? d.asignacion.modalidad : ""] || "—";
  let extra = "";
  if (d.estado === "pendiente_aceptacion" || d.estado === "aceptada" || d.estado === "recogida_pendiente_validacion") {
    extra =
      '<div class="form-actions">' +
      '<a class="btn btn-primary" href="#/donaciones/' + d.id + '/beneficiario">Simular vista del beneficiario</a>' +
      (d.estado === "recogida_pendiente_validacion" ? '<a class="btn btn-ghost" href="#/donaciones/' + d.id + '/validacion">Ir a validar evidencia (vista entidad)</a>' : "") +
      "</div>";
  }
  return (
    '<div class="form-grid">' +
    staticField("Tipo de recogida", "Beneficiario autorizado") +
    staticField("Modalidad de asignación", modalidadLabel) +
    staticField("Beneficiario(s) seleccionado(s)", asignados, { full: true }) +
    staticField("Fecha / hora de recogida", d.asignacion ? d.asignacion.fecha : "—") +
    "</div>" +
    '<div style="margin:12px 0 4px;font-size:13px;">Estado de aceptación: ' + pill(d.estado) + "</div>" +
    extra
  );
}

function beneficiarioFlow(d, params) {
  const modalidad = params.modalidad || null;
  let html = '<div class="tabs">' +
    ["manual", "asistida", "oferta"].map(function (m) {
      return '<a class="tab' + (modalidad === m ? " active" : "") + '" href="#/donaciones/' + d.id + "?tipo=beneficiario&modalidad=" + m + '">' + MODALIDAD_LABEL[m === "oferta" ? "oferta_controlada" : m] + "</a>";
    }).join("") + "</div>";

  if (modalidad === "manual") {
    const candidatos = STATE.beneficiarios.filter(function (b) { return b.estado === "activo" && b.autorizado; });
    html += '<div class="field" style="max-width:360px;"><label>Beneficiario</label><select id="sel-beneficiario">' +
      candidatos.map(function (b) { return '<option value="' + b.id + '">' + escapeHtml(b.nombre) + " (" + b.cpZona + ")</option>"; }).join("") +
      "</select></div>" +
      '<div class="form-actions"><button class="btn btn-primary" onclick="Actions.enviarPropuestaManual(\'' + d.id + '\')">Enviar propuesta</button></div>';
  } else if (modalidad === "asistida") {
    const candidatos = STATE.beneficiarios
      .filter(function (b) { return b.estado === "activo" && b.autorizado; })
      .slice()
      .sort(function (a, b) {
        const aMatch = a.cpZona === d.cpZona ? 0 : 1;
        const bMatch = b.cpZona === d.cpZona ? 0 : 1;
        if (aMatch !== bMatch) return aMatch - bMatch;
        return (b.coche ? 1 : 0) - (a.coche ? 1 : 0);
      });
    html += '<div class="hint-banner">Orden sugerido por criterios logísticos ya acordados: coincidencia de CP/zona y disponibilidad de coche. La entidad decide a quién ofrecer la recogida.</div>' +
      candidatos.map(function (b) {
        return '<div class="box"><div class="box-title">' + escapeHtml(b.nombre) +
          (b.cpZona === d.cpZona ? ' <span class="pill pill-blue">CP coincide</span>' : "") +
          (b.coche ? ' <span class="pill pill-green">Coche</span>' : ' <span class="pill pill-gray">Sin coche</span>') +
          '</div><div class="box-meta">' + escapeHtml(b.cpZona) + " · " + escapeHtml(b.telefono) + '</div>' +
          '<div class="form-actions" style="margin-top:10px;"><button class="btn btn-primary" onclick="Actions.enviarPropuestaAsistida(\'' + d.id + "','" + b.id + '\')">Enviar propuesta</button></div></div>';
      }).join("");
  } else if (modalidad === "oferta") {
    const candidatos = STATE.beneficiarios.filter(function (b) { return b.estado === "activo" && b.autorizado && b.cpZona === d.cpZona; });
    html += '<div class="hint-banner">Se ofrece la recogida a todo el grupo seleccionado a la vez; la obtiene quien acepte primero. El grupo lo define la entidad, no un proceso automático.</div>';
    if (!candidatos.length) {
      html += '<div class="empty-state">No hay beneficiarios activos y autorizados en la zona de recogida (' + escapeHtml(d.cpZona) + ").</div>";
    } else {
      html += candidatos.map(function (b) {
        return '<div class="checkbox-row" style="margin-bottom:8px;"><input type="checkbox" class="sel-oferta" value="' + b.id + '" checked> ' + escapeHtml(b.nombre) + " (" + escapeHtml(b.cpZona) + (b.coche ? ", coche" : "") + ")</div>";
      }).join("");
      html += '<div class="form-actions"><button class="btn btn-primary" onclick="Actions.abrirConfirmOferta(\'' + d.id + '\')">Publicar oferta al grupo</button></div>';
    }
  } else {
    html += '<div class="hint-banner">Elige una modalidad de asignación.</div>';
  }
  return html;
}

function renderProgramacionRecogida(d, params) {
  if (!d.elegibleBeneficiario) {
    return entidadFields();
  }

  // Ya asignada / en curso (una incidencia no bloquea volver a asignar)
  if (d.estado && d.estado !== "incidencia_noshow") {
    return asignacionResumen(d);
  }

  let html = "";
  if (d.estado === "incidencia_noshow") {
    const motivo = d.incidencia && d.incidencia.motivo === "evidencia_rechazada" ? "la entidad rechazó la evidencia fotográfica." : "el beneficiario rechazó, canceló o no se presentó.";
    html += '<div class="hint-banner">Incidencia: ' + motivo + " La donación ha vuelto a gestión de la entidad; puedes reasignar desde aquí.</div>";
  }

  const tipo = params.tipo || d.tipoRecogida || "entidad";
  html += '<div class="tabs" style="margin-bottom:16px;">' +
    '<a class="tab' + (tipo === "entidad" ? " active" : "") + '" href="#/donaciones/' + d.id + '?tipo=entidad">Entidad / delegación</a>' +
    '<a class="tab' + (tipo === "beneficiario" ? " active" : "") + '" href="#/donaciones/' + d.id + '?tipo=beneficiario">Beneficiario autorizado</a>' +
    "</div>";

  html += tipo === "beneficiario" ? beneficiarioFlow(d, params) : entidadFields();
  return html;
}

/* ---- Productos ---- */
function productosTable(d) {
  const lista = d.productosLista || [];
  const rows = lista.map(function (p) {
    return "<tr><td>" + escapeHtml(p.id) + "</td><td>" + escapeHtml(p.nombre) + "</td><td>" + escapeHtml(p.categoria) + "</td><td>" + p.cantidad + "</td><td>" + p.pesoKg + "</td><td>" + escapeHtml(p.caducidad) + "</td></tr>";
  }).join("");
  const pesoTotal = lista.reduce(function (s, p) { return s + p.pesoKg; }, 0);
  const cantidadTotal = lista.reduce(function (s, p) { return s + p.cantidad; }, 0);
  return (
    '<table class="data-table"><thead><tr><th>ID</th><th>Producto</th><th>Categoría</th><th>Cantidad</th><th>Peso (kg)</th><th>Fecha de caducidad</th></tr></thead><tbody>' + rows + "</tbody></table>" +
    '<div style="text-align:right;margin-top:10px;font-size:13px;">Peso total: <strong>' + pesoTotal.toFixed(2) + "</strong> · Cantidad total: <strong>" + cantidadTotal + "</strong></div>"
  );
}

/* ---- Transporte ---- */
function transporteFields(d) {
  const opciones = ["Refrigerado", "Congelado", "Ambiente"];
  const embalajes = ["Bultos", "Pallets"];
  const embalajeActual = (d.formato || "").toLowerCase().indexOf("pallet") !== -1 ? "Pallets" : "Bultos";
  const colTransporte =
    '<div class="field"><label>Opciones de transporte</label><div class="radio-group">' +
    opciones.map(function (o) {
      return '<label class="radio-row"><input type="radio" name="opt-transporte-' + d.id + '" disabled' + (o === d.tipoTransporte ? " checked" : "") + ">" + escapeHtml(o) + "</label>";
    }).join("") + "</div></div>";
  const colEmbalaje =
    '<div class="field"><label>Opciones de embalaje</label><div class="radio-group">' +
    embalajes.map(function (o) {
      return '<label class="radio-row"><input type="radio" name="opt-embalaje-' + d.id + '" disabled' + (o === embalajeActual ? " checked" : "") + ">" + escapeHtml(o) + "</label>";
    }).join("") + "</div>" +
    staticField("Cantidad", d.bultosPalletsCantidad) +
    "</div>";
  return '<div class="form-grid">' + colTransporte + colEmbalaje + "</div>";
}

/* ---- Documentos ---- */
function documentosFields() {
  return (
    '<div class="form-grid">' +
    staticField("Número de albarán", "") +
    staticField("Número de factura", "") +
    "</div>"
  );
}

function renderFichaModalContent(id, params) {
  const d = getDonacion(id);
  if (!d) return '<div class="ficha-modal-body">Donación no encontrada.</div>';
  params = params || {};

  const estadoTexto = d.estado ? (ESTADO_LABEL[d.estado] || d.estado) : "Pendiente de programar recogida";
  const puntoAbierto = !!(params.tipo || params.modalidad || d.estado);

  const accordions =
    accordionSection("acc-info", "Información general", infoGeneralFields(d), !puntoAbierto) +
    accordionSection("acc-punto", "Punto de recogida", puntoRecogidaFields(d, params), puntoAbierto) +
    accordionSection("acc-productos", "Productos", productosTable(d), false) +
    accordionSection("acc-transporte", "Transporte", transporteFields(d), false) +
    accordionSection("acc-documentos", "Documentos", documentosFields(), false);

  return (
    '<div class="ficha-modal-header"><h3>' + escapeHtml(d.id) + " · Estado " + escapeHtml(estadoTexto) + "</h3>" +
    '<button class="close-x" onclick="location.hash=\'#/donaciones\'">✕</button></div>' +
    '<div class="ficha-modal-body">' + accordions + "</div>"
  );
}

const MODALIDAD_LABEL = { manual: "Asignación manual", asistida: "Selección asistida", oferta_controlada: "Oferta controlada" };

/* ---------- Vista del beneficiario (simulada) ---------- */
/* Bloques de solo lectura — mismo lenguaje visual de acordeón que la ficha de entidad,
   pero sin nada administrativo (documentos, factura, albarán, precios, contacto de
   delegación, datos de transportista). Se muestran igual en todos los pasos del flujo. */
function beneficiarioPuntoRecogida(d) {
  return (
    '<div class="form-grid">' +
    staticField("Punto de recogida", d.puntoRecogida) +
    staticField("Dirección", d.direccion) +
    staticField("Fecha de recogida", d.fechaRecogidaPropuesta) +
    staticField("Franja horaria", d.franjaHoraria) +
    "</div>" +
    '<div class="map-placeholder"><span class="pin">📍</span><span>Vista de mapa no disponible en este prototipo</span>' +
    '<a class="btn-modal-action" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(d.direccion) + '">Abrir en Google Maps</a>' +
    "</div>"
  );
}

function beneficiarioTransporte(d) {
  const cantidadLabel = (d.formato || "").toLowerCase().indexOf("pallet") !== -1 ? "Nº de pallets" : "Nº de bultos";
  return (
    '<div class="form-grid">' +
    staticField("Conservación", d.tipoTransporte) +
    staticField("Formato", d.formato) +
    staticField(cantidadLabel, d.bultosPalletsCantidad) +
    "</div>"
  );
}

function beneficiarioInfoGeneral(d) {
  return (
    '<div class="form-grid">' +
    staticField("Título de la donación", d.denominacion) +
    staticField("Entidad que asigna", STATE.entidad.nombre) +
    staticField("Observaciones / instrucciones", d.observaciones, { full: true, tall: true }) +
    "</div>"
  );
}

function screenVistaBeneficiario(id) {
  const d = getDonacion(id);
  if (!d) return { activeKey: "donaciones", html: '<div class="panel">Donación no encontrada.</div>' };
  if (!d.asignacion) {
    return {
      activeKey: "donaciones",
      html: '<div class="panel"><div class="hint-banner">Esta donación todavía no tiene una propuesta de recogida enviada a ningún beneficiario.</div>' +
        '<a class="btn btn-ghost" href="#/donaciones/' + d.id + '?tipo=beneficiario">Ir a Programación de recogida</a></div>'
    };
  }
  const bId = d.asignacion.beneficiarioIds[0];
  const b = getBeneficiario(bId);
  const variante = STATE.accesoBeneficiarioVariante;

  const steps =
    '<div class="stepper">' +
    '<div class="step ' + (true ? "done current" : "") + '">' + "<span class=\"dot\"></span>Propuesta recibida</div>" +
    '<div class="step ' + (d.estado !== "pendiente_aceptacion" ? "done" : "") + (d.estado === "aceptada" ? " current" : "") + '"><span class="dot"></span>Aceptada</div>' +
    '<div class="step ' + (d.estado === "recogida_pendiente_validacion" || d.estado === "completada" ? "done" : "") + '"><span class="dot"></span>Recogida + foto</div>' +
    '<div class="step ' + (d.estado === "completada" ? "done" : "") + '"><span class="dot"></span>Validada</div>' +
    "</div>";

  // Bloques informativos — persistentes en todos los pasos (propuesta recibida, aceptada,
  // recogida realizada, foto subida, pendiente de validación, completada).
  const infoAccordions =
    accordionSection("acc-ben-punto", "Punto de recogida", beneficiarioPuntoRecogida(d), true) +
    accordionSection("acc-ben-productos", "Productos", productosTable(d), true) +
    accordionSection("acc-ben-transporte", "Transporte / logística", beneficiarioTransporte(d), false) +
    accordionSection("acc-ben-info", "Información general útil", beneficiarioInfoGeneral(d), false);

  // Acción del paso actual — es la única parte que cambia según el estado.
  let accion = "";
  if (d.estado === "pendiente_aceptacion") {
    accion =
      '<div class="form-actions">' +
      '<button class="btn btn-primary" onclick="Actions.aceptarPropuesta(\'' + d.id + '\')">Aceptar</button>' +
      '<button class="btn btn-danger-ghost" onclick="Actions.rechazarPropuesta(\'' + d.id + '\')">Rechazar</button>' +
      "</div>";
  } else if (d.estado === "aceptada" && !d.recogidaHecha) {
    accion =
      '<div class="box box-accent"><div class="box-title">Recogida aceptada</div><div class="box-meta">Acude al punto de recogida en la franja horaria indicada.</div></div>' +
      '<div class="form-actions"><button class="btn btn-primary" onclick="Actions.marcarRecogidaRealizada(\'' + d.id + '\')">He realizado la recogida</button></div>';
  } else if (d.estado === "aceptada" && d.recogidaHecha) {
    accion =
      '<div class="box"><div class="box-title">Subir foto de evidencia</div><div class="box-meta">Sube una fotografía de la mercancía recogida (simulado, sin almacenamiento real).</div></div>' +
      '<div class="photo-drop" style="max-width:360px;margin:14px 0;">📷 Toca para simular la captura de foto</div>' +
      '<div class="form-actions"><button class="btn btn-primary" onclick="Actions.subirFoto(\'' + d.id + '\')">Enviar evidencia</button></div>';
  } else if (d.estado === "recogida_pendiente_validacion") {
    accion = '<div class="box"><div class="box-title">Evidencia enviada</div><div class="box-meta">Foto de la mercancía recogida enviada. La entidad revisará y validará la donación.</div></div>';
  } else if (d.estado === "completada") {
    accion = '<div class="box box-accent"><div class="box-title">Donación completada</div><div class="box-meta">Gracias por tu colaboración.</div></div>';
  }

  const frame =
    '<div class="beneficiary-frame">' +
    '<div class="link-badge">' + (variante === "enlace" ? "https://naria.digital/r/8f2a91c7 (enlace seguro de un solo uso)" : "app.naria.digital · sesión de " + escapeHtml(b ? b.nombre : "")) + "</div>" +
    "<h2 style=\"margin-bottom:14px;\">Hola" + (variante === "perfil" ? ", " + escapeHtml(b ? b.nombre.split(" ")[0] : "") : "") + "</h2>" +
    steps + infoAccordions + accion +
    "</div>";

  const html =
    '<div class="panel">' +
    '<div class="toolbar"><div><div class="panel-title">Vista del beneficiario (simulada)</div>' +
    '<div class="panel-subtitle">Misma pantalla, dos formas de acceso posibles — todavía sin decidir cuál se usará (o si conviven ambas).</div></div>' +
    '<div class="toolbar-actions"><a class="btn btn-ghost" href="#/donaciones/' + d.id + '">Volver a la ficha (vista entidad)</a></div></div>' +
    '<div class="access-toggle">' +
    '<button class="' + (variante === "perfil" ? "active" : "") + '" onclick="Actions.setAccesoVariante(\'perfil\')">Perfil propio en Naria</button>' +
    '<button class="' + (variante === "enlace" ? "active" : "") + '" onclick="Actions.setAccesoVariante(\'enlace\')">Enlace seguro puntual</button>' +
    "</div>" +
    frame +
    "</div>";
  return { activeKey: "donaciones", html: html };
}

/* ---------- Validación de evidencia (vista entidad) ---------- */
function screenValidacionEvidencia(id) {
  const d = getDonacion(id);
  if (!d) return { activeKey: "donaciones", html: '<div class="panel">Donación no encontrada.</div>' };
  const html =
    '<div class="panel">' +
    '<div class="toolbar"><div><div class="panel-title">Validar evidencia — ' + escapeHtml(d.id) + '</div>' +
    '<div class="panel-subtitle">' + escapeHtml(d.denominacion) + "</div></div>" +
    '<div class="toolbar-actions"><a class="btn btn-ghost" href="#/donaciones/' + d.id + '">Volver a la ficha</a></div></div>' +
    '<div class="box"><div class="box-title">Fotografía aportada por el beneficiario</div>' +
    '<div style="width:200px;height:140px;border-radius:8px;background:#eef1fb;display:flex;align-items:center;justify-content:center;color:var(--muted);margin-top:8px;">📷 Foto simulada</div></div>' +
    '<div class="form-actions">' +
    '<button class="btn btn-primary" onclick="Actions.confirmarEvidencia(\'' + d.id + '\')">Confirmar</button>' +
    '<button class="btn btn-danger-ghost" onclick="Actions.rechazarEvidencia(\'' + d.id + '\')">Rechazar evidencia</button>' +
    "</div></div>";
  return { activeKey: "donaciones", html: html };
}

/* ---------- Incidencia / reasignación ---------- */
function screenIncidencia(id) {
  const d = getDonacion(id);
  if (!d) return { activeKey: "donaciones", html: '<div class="panel">Donación no encontrada.</div>' };
  if (d.estado !== "incidencia_noshow") {
    return {
      activeKey: "donaciones",
      html: '<div class="panel"><div class="panel-title">' + escapeHtml(d.id) + '</div>' +
        '<div class="hint-banner">Esta donación ya se ha reasignado. Estado actual: ' + pill(d.estado) + '</div>' +
        '<a class="btn btn-ghost" href="#/donaciones/' + d.id + '">Ir a la ficha</a></div>'
    };
  }
  const motivo = d.incidencia && d.incidencia.motivo === "evidencia_rechazada" ? "La entidad ha rechazado la evidencia fotográfica." : "El beneficiario ha rechazado, cancelado o no se ha presentado.";
  const html =
    '<div class="panel">' +
    '<div class="toolbar"><div><div class="panel-title">Incidencia — ' + escapeHtml(d.id) + '</div>' +
    '<div class="panel-subtitle">' + escapeHtml(d.denominacion) + "</div></div>" +
    '<div class="toolbar-actions"><a class="btn btn-ghost" href="#/donaciones/' + d.id + '">Volver a la ficha</a></div></div>' +
    '<div class="box box-accent"><div class="box-title">' + pill("incidencia_noshow") + "</div><div class=\"box-meta\">" + motivo + " La donación vuelve a gestión de la entidad.</div></div>" +
    '<div class="hint-banner">La entidad decide cómo continuar. La publicación al grupo (oferta controlada) nunca se activa sola: requiere confirmación explícita.</div>' +
    '<div class="form-actions">' +
    '<a class="btn btn-primary" href="#/donaciones/' + d.id + '?tipo=beneficiario&modalidad=manual">Reasignar a otro beneficiario</a>' +
    '<a class="btn btn-ghost" href="#/donaciones/' + d.id + '?tipo=beneficiario&modalidad=oferta">Publicar oferta controlada al grupo</a>' +
    '<a class="btn btn-ghost" href="#/donaciones/' + d.id + '?tipo=entidad">Volver al circuito tradicional</a>' +
    "</div></div>";
  return { activeKey: "donaciones", html: html };
}
