# Guion de prototipo navegable: recogida por beneficiario autorizado

**Documento:** 03 — Especificación de prototipo
**Estado:** Guion de referencia. **El prototipo NO se ha construido todavía.**
**Fecha:** 2026-09-17

---

## 1. Propósito de este documento

Definir el guion funcional de un futuro prototipo navegable (no funcional, sin lógica de negocio real ni persistencia productiva) que permita a Dirección y, eventualmente, a entidades piloto, visualizar y validar el flujo conceptual descrito en `01-flujo-operativo.md` y `02-modulo-beneficiarios.md` antes de acometer cualquier desarrollo real.

Este documento es un guion de pantallas y navegación. **No constituye una implementación**, no incluye código. El prototipo es una herramienta previa para visualizar la propuesta ante Dirección, por lo que su construcción no depende de la validación previa del modelo conceptual (ver `04-decisiones-abiertas.md`).

## 2. Objetivo del prototipo

- Permitir "caminar" visualmente por el flujo completo, desde la entidad hasta la validación final.
- Servir de apoyo a la conversación con Dirección y, si procede, con entidades piloto, sin comprometer desarrollo real.
- Detectar incoherencias o dudas de flujo antes de invertir en desarrollo funcional.

**No es objetivo del prototipo:** validar rendimiento, seguridad, integraciones reales con el sistema de notificaciones (SMS/WhatsApp/email), ni la persistencia real de datos.

## 3. Pantallas y recorridos a simular

El prototipo debe cubrir los siguientes bloques, cada uno como un recorrido navegable independiente y también encadenable entre sí.

### 3.1. Módulo Beneficiarios — Listado

- Vista de listado de beneficiarios de una entidad, con las columnas descritas en `02-modulo-beneficiarios.md` (nombre y apellidos, teléfono, CP/zona, coche sí/no, autorizado para recogidas, estado, última recogida, menú de acciones).
- Botones "Añadir beneficiario" e "Importar beneficiarios" visibles, con estilo coherente con módulos existentes (Usuarios, Transportistas).
- Estado vacío (entidad sin beneficiarios todavía) como pantalla adicional a simular.

### 3.2. Módulo Beneficiarios — Alta individual

- Formulario de alta con los campos mínimos: nombre y apellidos, teléfono, CP/zona, coche (sí/no), estado (activo/inactivo), autorizado para recogidas.
- Confirmación de alta y retorno al listado con el nuevo registro visible.

### 3.3. Módulo Beneficiarios — Importación masiva

- Pantalla de carga de archivo (Excel/CSV), simulada (sin procesamiento real).
- Pantalla de previsualización/resumen de importación (por ejemplo, "X beneficiarios detectados, Y con datos incompletos").
- Confirmación de importación y retorno al listado.

### 3.4. Ficha de donación — Selección de tipo de recogida

- Vista de la sección "Programación de recogida" dentro de la ficha de donación, con el selector "Tipo de recogida": Entidad/delegación vs. Beneficiario.
- Al seleccionar "Beneficiario", despliegue de las opciones adicionales: método de asignación, selección de beneficiario(s), estado de aceptación.

### 3.5. Asignación — Modalidad manual

- Selector de un beneficiario concreto de la base de la entidad (con filtro/búsqueda simulada).
- Confirmación de envío de propuesta.
- Estado resultante en la ficha de donación: "Pendiente de aceptación".

### 3.6. Asignación — Selección asistida

- Vista de listado de beneficiarios ordenado/recomendado según criterios logísticos (cercanía, CP, coche), con indicación visual del criterio de orden (simulado, sin cálculo real).
- Selección final por parte de la entidad sobre la lista recomendada.

### 3.7. Asignación — Oferta controlada

- Selección de un grupo de beneficiarios autorizados (por ejemplo, filtrado por zona) a los que se ofrece la donación simultáneamente.
- Pantalla de confirmación de envío de oferta al grupo.
- Estado resultante: "Pendiente de aceptación" (para todo el grupo) hasta que uno acepte.

### 3.8. Vista del beneficiario — Aceptación / rechazo de propuesta

- Pantalla que simula lo que ve el beneficiario al recibir la propuesta (independientemente de si el acceso es por cuenta propia o enlace puntual, ver nota en sección 4): punto de recogida, dirección, franja horaria, peso aproximado, tipo de producto/categoría e instrucciones básicas.
- Botones "Aceptar" / "Rechazar".
- Recorrido de aceptación: pasa a estado "Aceptada".
- Recorrido de rechazo: pasa a estado "Incidencia/no-show" y retorno simulado a gestión de la entidad.

### 3.9. Vista del beneficiario — Subida de foto de evidencia

- Pantalla de subida de fotografía tras realizar la recogida (simulada, sin almacenamiento real).
- Confirmación de envío y cambio de estado a "Recogida realizada – pendiente de validación".

### 3.10. Vista de la entidad — Validación de evidencia

- Pantalla de revisión de la evidencia fotográfica subida por el beneficiario, junto con los datos de la donación.
- Botones "Confirmar" (pasa a estado "Completada") y "Rechazar evidencia" (retorna a gestión de la entidad, simulando el paso 11 del flujo operativo).

### 3.11. Flujo alternativo — Rechazo y oferta controlada tras fallo

- Recorrido que simula: asignación manual rechazada o sin respuesta → la entidad decide reasignar a otro beneficiario o publicar como oferta controlada al grupo elegible → confirmación explícita de la entidad antes de la publicación (sin automatismo).

## 4. Nota sobre formas de acceso del beneficiario en el prototipo

Dado que la forma de acceso del beneficiario (perfil propio vs. enlace seguro puntual) es una decisión pendiente (ver `04-decisiones-abiertas.md`), el prototipo debe poder mostrar **ambas alternativas** para la vista del beneficiario (secciones 3.8 y 3.9): acceso mediante perfil propio en Naria y acceso mediante enlace seguro puntual. Ninguna de las dos se presenta como definitiva; el prototipo las incluye como variantes navegables para apoyar esa decisión con Dirección.

## 5. Fuera de alcance del prototipo

- Cálculo real de recomendación por cercanía/CP (selección asistida): se simula con datos de ejemplo predefinidos.
- Envío real de SMS/WhatsApp/email.
- Procesamiento real de archivos Excel/CSV.
- Almacenamiento real de imágenes.
- Lógica de sugerencia automática de elegibilidad de donaciones (criterios aún no definidos, ver `04-decisiones-abiertas.md`).
- Cualquier integración con sistemas reales de Naria (backend, base de datos productiva).

## 6. Relación con la validación de Dirección y las decisiones abiertas

La construcción de este prototipo **no está bloqueada** por la validación de Dirección (`00-propuesta-direccion.md`) ni por la decisión pendiente sobre la forma de acceso del beneficiario (sección 4 de este documento y sección 5 de `02-modulo-beneficiarios.md`): el prototipo es precisamente la herramienta previa que se usa para apoyar esa conversación y esa decisión con Dirección, mostrando ambas alternativas de acceso sin elegir ninguna como definitiva.

## 7. Documentos relacionados

- `00-propuesta-direccion.md` — Resumen ejecutivo y próximos pasos.
- `01-flujo-operativo.md` — Flujo operativo que este guion traduce a pantallas.
- `02-modulo-beneficiarios.md` — Modelo de datos y campos que deben reflejarse en las pantallas.
- `04-decisiones-abiertas.md` — Decisiones pendientes que condicionan el alcance final del prototipo.
