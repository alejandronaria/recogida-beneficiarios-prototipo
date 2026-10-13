# Recogida directa por beneficiarios autorizados — resumen

**Documento:** 06 — Resumen visual de la propuesta
**Estado:** Versión corta y actualizada de `05-dossier-direccion.md`, alineada con el estado actual del prototipo navegable. Documento de trabajo interno, no implica decisión tomada.
**Fecha:** 2026-10-13

---

*Contenido fuente de `output/resumen-recogida-beneficiarios-naria.html` / `.pdf` — la versión maquetada es la referencia final; este markdown recoge el texto base.*

## Portada

**Recogida directa por beneficiarios autorizados**

Un beneficiario autorizado podría recoger directamente determinadas donaciones, sin que la entidad tenga que movilizar transporte propio. Esta es la versión resumida de la propuesta, con el estado actual del prototipo navegable.

Tres ideas clave:

1. **Canal adicional** — convive con el circuito tradicional, no lo sustituye.
2. **Control de la entidad** — decide beneficiarios, modalidad y validación final en cada recogida.
3. **Evidencia sin fricción** — foto y validación de la entidad; el donante no cambia nada.

## 1. Resumen de la propuesta

**Qué se propone.** Añadir una segunda vía de recogida en Naria: que, para determinadas donaciones, un beneficiario autorizado recoja directamente en el punto de recogida, en lugar de que la entidad movilice transporte propio. La entidad decide si la usa, donación a donación.

**Qué cambia.** Un módulo nuevo de Beneficiarios por entidad, con alta individual o importación, y una segunda vía de recogida dentro de la ficha de donación ya existente, con evidencia fotográfica y validación de la entidad.

**Qué no cambia.** El circuito tradicional sigue igual para pallets y grandes volúmenes. El donante no asume ningún paso nuevo. La certificación entre matriz y delegaciones se mantiene tal cual.

*[DIAGRAMA: circuito tradicional (3 pasos) vs circuito con beneficiario autorizado (4 pasos, con recogida + foto fusionadas en un único paso)]*

## 2. Cómo funcionaría

El beneficiario se gestiona desde un módulo nuevo en el menú lateral de Naria, con el mismo lenguaje visual que el resto de la plataforma. Para cada donación elegible, la entidad elige cómo asignarla.

**Módulo Beneficiarios**
- Alta individual o importación masiva (Excel/CSV).
- Datos mínimos: nombre, DNI, teléfono, código postal, coche, estado y autorización.
- Autorizado para recogidas, como indicador independiente del alta.
- Última recogida, calculada automáticamente.

**Modalidades de asignación**
- Manual: la entidad elige directamente a un beneficiario.
- Asistida: Naria ordena candidatos por código postal y disponibilidad de coche; decide la entidad.
- Oferta controlada: se ofrece a un grupo acotado; la obtiene quien acepte primero.

**Flujo resumido:** Asignación → Aceptación → Recogida + foto → Validación. Recogida y foto se confirman en un único paso: el beneficiario no pasa por una pantalla intermedia de "recogida realizada" distinta de la de subir la foto.

## 3. Experiencia en plataforma

Dentro de "Punto de recogida → Programación de recogida", la entidad elige el tipo de recogida: Entidad/delegación o Beneficiario autorizado. No es una pantalla aparte ni un sistema paralelo; la entidad ve la ficha completa, igual que hoy.

El beneficiario, en su propia vista, ve justo lo necesario para decidir y ejecutar la recogida, sin ir a ciegas — la información general (título, entidad que asigna, instrucciones) se muestra arriba del todo, seguida del punto de recogida, los productos y la logística.

**Sí ve**
- Información general: título, entidad que asigna, instrucciones.
- Punto de recogida: dirección, mapa/enlace, fecha y franja horaria.
- Productos: categorías, cantidad y peso aproximados.
- Transporte/logística: conservación y formato (bolsas o cajas, nunca pallets en este circuito).

**No ve**
- Documentos, factura ni albarán.
- Precios.
- Datos administrativos internos (contacto de delegación, transportista).

*[CAPTURA: módulo Beneficiarios — listado con DNI y código postal]*
*[CAPTURA: vista del beneficiario — información general arriba, seguimiento en 4 pasos]*

## 4. Cierre y decisiones abiertas

Nada de lo siguiente bloquea seguir dando forma a la idea; son matices por cerrar, no condiciones previas.

| Tema | Estado actual |
|---|---|
| Acceso del beneficiario | Perfil propio en Naria o enlace seguro puntual — sin decidir, podrían convivir |
| Criterios de elegibilidad | Se apoyan en campos ya disponibles (peso, formato, transporte) — umbral exacto sin fijar |
| Incidencias / no-show | Sin mecanismo de aviso o penalización definido todavía |
| Papel de Fundación Mundo 21 | Línea complementaria a explorar en zonas sin cobertura propia; alcance sin cerrar |

**Prototipo navegable.** Recoge todo lo descrito aquí, con el estilo real de Naria y datos ficticios.

URL: `________________________________`

En resumen: la entidad gana una vía adicional de recogida sin perder el control de nada — sigue decidiendo quién recoge, cuándo y si lo valida. El prototipo ayuda a verlo en marcha antes de decidir nada más.

## Documentos relacionados

- `05-dossier-direccion.md` — versión extendida (14 páginas).
- `00-propuesta-direccion.md`, `01-flujo-operativo.md`, `02-modulo-beneficiarios.md`, `04-decisiones-abiertas.md` — documentos base.
- `prototype/` — prototipo navegable.
