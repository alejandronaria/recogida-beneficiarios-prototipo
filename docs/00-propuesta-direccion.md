# Propuesta a Dirección: Recogida directa por beneficiarios autorizados

**Documento:** 00 — Propuesta de dirección
**Audiencia:** Dirección de Naria
**Estado:** Documento conceptual de trabajo interno, como base para una futura propuesta a Dirección. No implica desarrollo aprobado ni decisión cerrada.
**Fecha:** 2026-09-17

---

## 1. Propósito de este documento

Este documento recoge, a nivel conceptual, una posible vía para ampliar la capacidad de recogida de donaciones en Naria: que, bajo el control de la entidad social, beneficiarios autorizados puedan recoger directamente determinadas donaciones.

No es una propuesta comercial ni un manual de implantación, ni una decisión cerrada. Sirve como documento maestro conceptual: explica qué se está estudiando, cómo podría funcionar, qué se ha acordado a nivel conceptual, qué alternativas siguen abiertas y qué queda pendiente de decidir.

No se ha desarrollado ninguna interfaz ni prototipo funcional. Si se aborda, el detalle de interacción se documentará como guion de referencia en `03-especificacion-prototipo.md`.

## 2. Situación actual

Naria opera como plataforma de gestión de excedentes alimentarios en Comunidad Valenciana, Madrid, Cataluña, Andalucía, Aragón, La Rioja, Murcia y Tenerife.

Flujo actual de recogida:

- El donante publica la donación.
- La donación está asociada a una entidad social.
- La entidad social programa la recogida y registra los datos del transportista (nombre, DNI, matrícula).
- La entidad social confirma la donación como completada.
- Las delegaciones no certifican directamente: la certificación la realiza la entidad matriz.

Datos operativos de referencia:

| Indicador | Valor |
|---|---|
| Puntos de recogida registrados | ~604 |
| Entidades registradas | 108 (≈50 activas) |
| Delegaciones activas | ≈20 |
| Donaciones procedentes de retail (por número) | ≈80% |
| Donaciones no recogidas | 42 de 7.218 (≈0,6%) |

## 3. Objetivo del estudio

El 80% de las donaciones por número proceden de retail, lo que implica un volumen alto de recogidas individuales, habitualmente de tamaño pequeño o medio. La capacidad de recogida de muchas entidades depende de su propia logística (vehículos, voluntariado, personal), lo que puede limitar la cobertura de ciertas zonas o la agilidad para atender donaciones puntuales.

El objetivo de este estudio es explorar una nueva vía de recogida directa mediante beneficiarios autorizados, para determinadas donaciones, especialmente aquellas donde movilizar la logística propia de una entidad puede resultar poco eficiente.

Se trata de un canal adicional, no de una alternativa que sustituya el modelo actual.

## 4. Propuesta conceptual (resumen)

Se estudia incorporar en Naria un módulo de **Beneficiarios** por entidad, que permitiría:

1. Que cada entidad mantenga su propia base de beneficiarios dentro de la plataforma (alta individual o importación masiva).
2. Que la entidad autorice explícitamente qué beneficiarios pueden participar en recogidas.
3. Que, para donaciones elegibles, la entidad pueda asignar la recogida a un beneficiario en lugar de gestionarla con transporte propio.
4. Que el beneficiario acepte o rechace la propuesta, realice la recogida y aporte evidencia fotográfica.
5. Que la entidad valide la evidencia antes de que la donación se marque como completada.

Puntos que se mantienen fijos en cualquier versión de esta propuesta:

- **La entidad sigue controlando a sus beneficiarios**: quién existe en su base, quién está autorizado y quién participa en cada recogida.
- **La entidad decide si utiliza esta modalidad**, donación a donación. No es un mecanismo automático ni obligatorio.
- **El circuito tradicional sigue existiendo sin cambios**: transporte propio de la entidad, pallets, grandes volúmenes, industria.
- **El donante debe verse afectado lo mínimo posible**: no se le pide ningún paso nuevo.

## 5. Principios rectores

- **Control de la entidad.** La entidad decide en todo momento quién participa, qué se asigna y cuándo se confirma.
- **No fricción para el donante.** El donante no asume pasos nuevos (no se plantea, de inicio, escaneo de QR, confirmaciones adicionales ni nuevas herramientas para el donante).
- **Complemento, no sustitución.** El circuito tradicional se mantiene sin cambios; este modelo es un canal adicional para casos concretos.
- **Datos mínimos.** El perfil de beneficiario recoge solo los datos logísticos necesarios para la recogida, evitando datos sociales innecesarios.
- **Evidencia razonable, no burocracia.** La fotografía y los estados de seguimiento buscan trazabilidad sin añadir pasos que compliquen la operativa.

## 6. Modalidades de asignación y escalado

Se están valorando tres modalidades de asignación, que pueden coexistir según la forma de trabajar de cada entidad:

- **Asignación manual.** La entidad elige directamente a qué beneficiario ofrece la recogida.
- **Selección asistida por Naria.** Naria sugiere beneficiarios adecuados (por cercanía, disponibilidad u otros criterios), pero la entidad decide.
- **Oferta controlada a varios beneficiarios.** La entidad publica la recogida a un grupo acotado de beneficiarios autorizados, y esta se asigna a quien la acepte primero.

Escalado propuesto ante rechazo o falta de respuesta:

Asignación individual → rechazo o no disponibilidad → reasignación a otro beneficiario, o publicación controlada al grupo de beneficiarios elegibles.

En ningún caso la publicación al grupo se produce de forma automática sin que la entidad lo decida: es la entidad quien determina si, y cuándo, una donación pasa de asignación individual a oferta grupal.

## 7. Acceso del beneficiario a la plataforma (alternativas abiertas)

No se ha decidido todavía cómo accede el beneficiario a la información de la recogida. Se manejan dos alternativas, que podrían incluso coexistir:

- **Perfil propio en Naria**, con acceso a su propio panel.
- **Enlace seguro puntual**, enviado por SMS, WhatsApp o email, sin necesidad de cuenta completa.

Ninguna de las dos opciones se recomienda todavía sobre la otra. La elección (o convivencia de ambas) queda como decisión pendiente.

## 8. Evidencia y validación

- El beneficiario **no puede completar definitivamente la donación por sí solo**.
- Tras realizar la recogida, adjunta una **fotografía de la mercancía recogida** como evidencia.
- La donación queda en estado **"pendiente de validación"**.
- La **entidad revisa la evidencia y confirma** la donación como completada.

El objetivo de este mecanismo es aportar evidencia razonable del proceso, sin introducir nuevos pasos para el donante.

## 9. Rol complementario de Fundación Mundo 21

Se explora, como vía complementaria, el papel de Fundación Mundo 21 en zonas donde una entidad no tenga cobertura suficiente, apoyándose en delegadas, entidades colaboradoras o redes locales ya existentes.

No se asume que Fundación Mundo 21 vaya a construir o mantener una red propia de beneficiarios en cada municipio, ni se plantea como modelo principal de esta propuesta. Es una línea a explorar, no una decisión tomada (ver `04-decisiones-abiertas.md`, sección 5).

## 10. Qué queda pendiente de decidir

Ver detalle completo en `04-decisiones-abiertas.md`. Entre los puntos principales:

- Modelo de acceso del beneficiario (perfil propio vs. enlace puntual), o si ambos convivirán.
- Criterios exactos y umbral de elegibilidad automática/sugerida de donaciones.
- Mecanismo de reasignación y publicación al grupo elegible tras rechazo o falta de respuesta.
- Política de incidencias y no-shows por parte de beneficiarios.
- Alcance real de Fundación Mundo 21 como entidad puente.

## 11. Próximos pasos propuestos

1. Validación por Dirección de la línea de estudio general (este documento).
2. Revisión conjunta de `01-flujo-operativo.md` y `02-modulo-beneficiarios.md` para confirmar el modelo conceptual antes de cualquier desarrollo.
3. Decisión sobre los puntos abiertos (secciones 7, 9 y 10) necesarios para avanzar.
4. Construcción de un prototipo navegable (no funcional, sin desarrollo real ni compromiso de implantación), como herramienta previa para visualizar y presentar mejor la propuesta y facilitar su valoración por Dirección, según el guion de `03-especificacion-prototipo.md`. No requiere la validación previa de Dirección (paso 1).

## 12. Documentos relacionados

- `01-flujo-operativo.md` — Flujo operativo detallado, modalidades de asignación y elegibilidad de donaciones.
- `02-modulo-beneficiarios.md` — Modelo de datos, altas, autorización y formas de acceso del beneficiario.
- `03-especificacion-prototipo.md` — Guion del prototipo navegable (no construido todavía).
- `04-decisiones-abiertas.md` — Registro de decisiones pendientes y su impacto.
