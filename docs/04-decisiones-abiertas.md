# Decisiones abiertas

**Documento:** 04 — Decisiones abiertas
**Estado:** Registro vivo. Se actualizará a medida que Dirección resuelva cada punto.
**Fecha:** 2026-09-17

---

## 1. Propósito de este documento

Registrar de forma explícita las decisiones que **todavía no se han tomado** sobre el modelo de recogida por beneficiarios autorizados, para que Dirección pueda valorarlas de forma diferenciada del resto del contenido (que refleja el modelo conceptual ya acordado).

Nada de lo recogido aquí debe interpretarse como decidido. Cada punto incluye el contexto, las alternativas planteadas hasta ahora y el documento donde se detalla.

## 2. Forma de acceso del beneficiario

**Pregunta:** ¿El beneficiario accede mediante un perfil/usuario propio en Naria, mediante un enlace seguro puntual (SMS/WhatsApp/email), o ambas vías deben convivir?

- Referencia: `02-modulo-beneficiarios.md`, sección 5.
- Impacto: condiciona el diseño del prototipo navegable (`03-especificacion-prototipo.md`, sección 4) y el esfuerzo de desarrollo futuro (gestión de cuentas y credenciales vs. generación y envío de enlaces temporales).
- Estado: sin decidir. Ambas opciones documentadas como alternativas válidas.

## 3. Criterios de elegibilidad de donaciones

**Pregunta:** ¿Qué combinación exacta de campos (peso, bultos/pallets, tipo de transporte, cantidad, etc.) determina que Naria sugiera una donación como apta para el circuito de beneficiarios? ¿Existe un umbral de peso o volumen de referencia?

- Referencia: `01-flujo-operativo.md`, sección 5.
- Impacto: sin estos criterios definidos, la "sugerencia de elegibilidad" de Naria no puede implementarse; mientras tanto, la elegibilidad dependería enteramente del criterio manual de la entidad.
- Estado: sin decidir. Se han identificado los campos disponibles en la plataforma, pero no los umbrales ni la lógica de sugerencia.

## 4. Mecanismo de reasignación y publicación al grupo elegible

**Pregunta:** ¿Cómo se articula operativamente la reasignación tras un rechazo o falta de respuesta? ¿Hay un tiempo límite de espera antes de permitir reasignar? ¿Cómo se define el "grupo elegible" en cada caso (zona, autorización, disponibilidad)?

- Referencia: `01-flujo-operativo.md`, sección 4.4.
- Impacto: afecta a la experiencia operativa de la entidad y a la complejidad del módulo de asignación.
- Estado: sin decidir. Acordado el principio de que la publicación al grupo no debe ser automática, pero no el mecanismo concreto.

## 5. Política de incidencias y no-shows

**Pregunta:** ¿Qué ocurre operativamente cuando un beneficiario no acude tras haber aceptado (no-show)? ¿Se registra un histórico de incidencias por beneficiario? ¿Afecta esto a su autorización futura para recogidas?

- Referencia: `01-flujo-operativo.md`, sección 3 (estado "Incidencia/no-show").
- Impacto: relevante para la confianza del modelo a medio plazo, pero no es necesario resolverlo para el piloto conceptual inicial.
- Estado: sin decidir. No se ha definido ningún mecanismo de penalización, aviso o desautorización automática.

## 6. Alcance de Fundación Mundo 21 (FM21) como entidad puente

**Pregunta:** ¿En qué medida y bajo qué condiciones podría FM21 actuar como entidad puente en zonas donde no hay cobertura suficiente de entidades sociales o beneficiarios propios?

Contexto disponible:

- FM21 está vinculada a Naria y ya canaliza donaciones.
- Puede actuar con delegadas.
- **No se asume** que FM21 vaya a buscar beneficiarios directamente pueblo por pueblo.
- Vías futuras posibles a explorar: delegadas de FM21, entidades colaboradoras, o redes sociales/locales ya existentes en cada zona.

- Referencia: mencionado en el encargo original; no desarrollado en los documentos 00-03 porque se considera una vía secundaria y no el modelo principal.
- Impacto: podría ampliar la cobertura geográfica del modelo en zonas débiles, pero depende de decisiones organizativas de FM21 ajenas a este documento.
- Estado: explícitamente **sin decidir y sin desarrollar**. Se deja como línea a explorar en una fase posterior, no como parte del modelo principal descrito en `00-propuesta-direccion.md`.

## 7. Resumen de estado

| Nº | Decisión pendiente | Bloquea al piloto conceptual |
|---|---|---|
| 2 | Forma de acceso del beneficiario | No (puede empezar con una opción provisional) |
| 3 | Criterios de elegibilidad de donaciones | No (puede empezar con criterio manual de la entidad) |
| 4 | Mecanismo de reasignación | No |
| 5 | Política de incidencias/no-shows | No |
| 6 | Alcance de FM21 como entidad puente | No |

El prototipo navegable (`03-especificacion-prototipo.md`) no está bloqueado por ninguna de estas decisiones: se construye como herramienta previa para visualizar la propuesta, y las alternativas todavía abiertas (forma de acceso, elegibilidad) se representan en él sin necesidad de resolverlas antes.

## 8. Documentos relacionados

- `00-propuesta-direccion.md` — Resumen ejecutivo y próximos pasos propuestos.
- `01-flujo-operativo.md` — Flujo operativo y elegibilidad de donaciones.
- `02-modulo-beneficiarios.md` — Modelo de datos y forma de acceso del beneficiario.
- `03-especificacion-prototipo.md` — Guion de prototipo condicionado a estas decisiones.
