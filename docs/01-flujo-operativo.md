# Flujo operativo: recogida por beneficiario autorizado

**Documento:** 01 — Flujo operativo
**Estado:** Modelo conceptual acordado, pendiente de validación por Dirección.
**Fecha:** 2026-09-17

---

## 1. Alcance de este documento

Describe el flujo operativo propuesto para que una entidad social gestione la recogida de una donación mediante un beneficiario autorizado, en lugar de mediante su transporte propio. Incluye las modalidades de asignación, los criterios de elegibilidad de donaciones y los estados del proceso.

Este flujo es **adicional** al circuito tradicional de recogida (transporte de la entidad), que se mantiene sin modificaciones para los casos que no encajen en este modelo.

## 2. Flujo operativo acordado (paso a paso)

1. La entidad recibe la donación (publicada por el donante, como en el flujo actual).
2. La entidad decide gestionar la recogida mediante un beneficiario, en lugar de con transporte propio.
3. La entidad selecciona la modalidad de asignación (ver sección 4): manual, asistida u oferta controlada.
4. El beneficiario (o beneficiarios, en el caso de oferta controlada) recibe la propuesta de recogida, que incluye el punto de recogida, la dirección, la franja horaria, el peso aproximado, el tipo de producto/categoría y las instrucciones básicas de recogida, de forma que pueda consultar esta información antes de decidir.
5. El beneficiario puede aceptar o rechazar la propuesta con base en esa información.
6. Si acepta, el beneficiario realiza la recogida.
7. Como evidencia, el beneficiario sube una fotografía de la mercancía recogida.
8. La donación pasa al estado **"Recogida realizada – pendiente de validación"**.
9. La entidad revisa la evidencia fotográfica y confirma la recogida.
10. La donación pasa a estado **completada**.
11. Si el beneficiario rechaza, cancela o no acude, la donación vuelve a gestión de la entidad, que puede reasignar a otro beneficiario o volver al circuito tradicional.

### Diagrama de flujo (texto)

```
Donación recibida por la entidad
        │
        ▼
¿Se gestiona con beneficiario?
        │
   ┌────┴────┐
   NO         SÍ
   │           │
Circuito    Selección de modalidad
tradicional (manual / asistida / oferta controlada)
                │
                ▼
          Propuesta enviada a beneficiario(s)
       (con punto de recogida, dirección, franja
       horaria, peso aproximado, tipo de producto
              e instrucciones básicas)
                │
                ▼
           ┌────┴────┐
        Rechaza/     Acepta
        no responde     │
           │            ▼
           │      Realiza la recogida
           │            │
           │            ▼
           │      Sube foto de evidencia
           │            │
           │            ▼
           │      Estado: "Recogida realizada
           │       – pendiente de validación"
           │            │
           │            ▼
           │      Entidad revisa evidencia
           │            │
           │      ┌─────┴─────┐
           │   Rechaza      Confirma
           │   evidencia        │
           │      │             ▼
           └──────┴────►   Completada
              │
              ▼
      Reasignación o
      gestión manual
```

## 3. Estados de la donación en este circuito

| Estado | Descripción |
|---|---|
| Pendiente de aceptación | La propuesta se ha enviado a uno o varios beneficiarios y está a la espera de respuesta. |
| Aceptada | Un beneficiario ha aceptado la recogida. |
| Recogida realizada – pendiente de validación | El beneficiario ha subido la evidencia fotográfica; la entidad debe revisarla. |
| Completada | La entidad ha validado la evidencia y confirma la donación como completada. |
| Incidencia / no-show | El beneficiario ha rechazado, cancelado o no se ha presentado, o la entidad ha rechazado la evidencia aportada. La donación vuelve a gestión de la entidad. |

Estos estados son específicos del circuito de beneficiarios y conviven con los estados ya existentes de la donación en el circuito tradicional.

## 4. Modalidades de asignación

Las tres modalidades pueden coexistir; la entidad elige cuál usar en cada caso según su preferencia y la naturaleza de la donación.

### 4.1. Asignación manual

La entidad selecciona directamente a un beneficiario concreto de su base para ofrecerle la recogida. Es la modalidad de mayor control directo por parte de la entidad.

### 4.2. Selección asistida

Naria puede ordenar o recomendar beneficiarios según criterios logísticos, por ejemplo:

- Cercanía al punto de recogida.
- Coincidencia de código postal / zona.
- Disponibilidad de coche.

La entidad recibe una lista ordenada o recomendada, pero mantiene la decisión final de a quién se le ofrece la recogida.

### 4.3. Oferta controlada

La entidad ofrece la oportunidad de recogida a varios beneficiarios autorizados simultáneamente (por ejemplo, todos los de una zona), y el primero en aceptar la obtiene. Se denomina "controlada" porque el grupo al que se ofrece la donación lo define la entidad, no un proceso automático abierto.

### 4.4. Reasignación tras rechazo o falta de respuesta

Si una asignación individual (manual o asistida) es rechazada o no obtiene respuesta, la entidad puede:

- Reasignar manualmente a otro beneficiario concreto, o
- Publicar la oportunidad al grupo elegible (oferta controlada).

**Principio importante:** esta publicación al grupo **no debe producirse automáticamente** sin que la entidad la autorice. La entidad conserva en todo momento la decisión de escalar una asignación individual a una oferta grupal.

## 5. Elegibilidad de donaciones para este circuito

No todas las donaciones son aptas para ser gestionadas por un beneficiario. Este circuito está pensado principalmente para:

- Donaciones de retail.
- Alimentación variada.
- Formato en bolsas o bultos (no pallets).
- Volumen pequeño o medio.
- Logística sencilla (sin requisitos especiales de manipulación o transporte complejo).

El circuito tradicional se mantiene para:

- Pallets y grandes volúmenes.
- Donaciones de industria.
- Recogidas logísticamente complejas (por ejemplo, que requieran vehículos específicos, varias personas, o coordinación especial).

### 5.1. Campos ya disponibles en la plataforma para valorar elegibilidad

Naria ya dispone de los siguientes campos en la ficha de donación, que pueden usarse como base para valorar si una donación es apta para este circuito:

- Peso total.
- Cantidad.
- Productos.
- Fecha de caducidad.
- Tipo de transporte requerido (ambiente / refrigerado / congelado).
- Bultos / pallets.

### 5.2. Papel de Naria en la elegibilidad

Naria podría sugerir si una donación es apta para el circuito de beneficiarios, basándose en los campos anteriores (por ejemplo, un umbral de peso o la ausencia de pallets). Esta sugerencia sería orientativa.

**La decisión final de elegibilidad sigue siendo siempre de la entidad.** Naria no descarta ni fuerza el uso de este circuito de forma automática.

Los criterios exactos de la sugerencia (umbrales, combinaciones de campos) no están definidos todavía; ver `04-decisiones-abiertas.md`.

## 6. Relación con el circuito tradicional

- El registro de datos de transportista (nombre, DNI, matrícula) que se usa actualmente para el circuito tradicional no aplica al circuito de beneficiario, donde la evidencia es la fotografía de la mercancía recogida y la identidad del beneficiario ya está registrada y autorizada por la entidad en su base de beneficiarios.
- La certificación de la donación sigue las mismas reglas actuales respecto a entidades matrices y delegaciones: las delegaciones no certifican directamente, la certificación la realiza la entidad matriz, independientemente de si la recogida la ha realizado un beneficiario o un transportista.

## 7. Papel del donante

En todo el flujo descrito, el donante no interviene en ningún paso nuevo:

- No escanea códigos QR.
- No confirma entregas.
- No utiliza herramientas adicionales.

La trazabilidad se consigue mediante la evidencia fotográfica aportada por el beneficiario y la validación de la entidad, sin introducir fricción para el donante.

## 8. Documentos relacionados

- `00-propuesta-direccion.md` — Resumen ejecutivo y contexto estratégico.
- `02-modulo-beneficiarios.md` — Modelo de datos y gestión de la base de beneficiarios.
- `03-especificacion-prototipo.md` — Guion del prototipo navegable de este flujo.
- `04-decisiones-abiertas.md` — Decisiones pendientes relacionadas con elegibilidad y reasignación.
