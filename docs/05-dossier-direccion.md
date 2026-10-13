# Recogida directa por beneficiarios autorizados

**Documento:** 05 — Recogida directa por beneficiarios autorizados
**Estado:** Documento de trabajo interno, para compartir y valorar la idea. No implica decisión tomada ni desarrollo aprobado.
**Fecha:** 2026-09-18
**Preparado por:** Equipo de estudio del proyecto (documentos 00–04 y prototipo navegable adjunto)

---

*Propuesta de un canal complementario de recogida de donaciones en Naria.*

## Índice

1. Resumen ejecutivo
2. Situación actual
3. Oportunidad detectada
4. Modelo propuesto
5. Papel de la entidad social
6. Módulo "Beneficiarios"
7. Modalidades de asignación
8. Flujo operativo completo
9. Qué información ve el beneficiario
10. Integración en la plataforma Naria
11. Donaciones candidatas
12. Trazabilidad y control
13. Fundación Mundo 21
14. Alternativas y decisiones abiertas
15. Prototipo
16. Conclusión

---

## 1. Resumen ejecutivo

**Qué se propone.** Añadir un canal adicional de recogida en Naria: que un **beneficiario autorizado**, bajo control de la entidad social, pueda recoger directamente determinadas donaciones, en lugar de que la entidad movilice transporte propio.

**Por qué.** Una parte importante de las donaciones procede del canal retail, habitualmente en volúmenes pequeños o medianos. No responde a un problema generalizado de recogidas fallidas, sino a ampliar la capacidad y la flexibilidad de recogida de las entidades en ese segmento.

**Qué cambia.** Un módulo nuevo de "Beneficiarios" por entidad, y una segunda vía de recogida seleccionable donación a donación, con evidencia fotográfica y validación de la entidad.

**Qué no cambia.** El circuito tradicional sigue igual para pallets, industria y grandes volúmenes. El donante no asume ningún paso nuevo. Las reglas de certificación entre matriz y delegaciones se mantienen.

**Quién controla el proceso.** La entidad, en cada paso: su base de beneficiarios, quién está autorizado, qué donaciones usan este circuito, la modalidad de asignación y la validación final. No hay ningún mecanismo automático que decida por ella.

**Qué queda pendiente.** La forma de acceso del beneficiario, los umbrales de elegibilidad, la política de incidencias y el alcance de Fundación Mundo 21 (detalle en la sección 14) — ninguno bloquea la valoración de esta propuesta.

## 2. Situación actual

Naria opera como plataforma de gestión de excedentes alimentarios, trabajando con una red de puntos de recogida y entidades sociales repartidos por distintas comunidades autónomas.

El flujo actual de recogida es el siguiente: el donante publica la donación, esta queda asociada a una entidad social, la entidad organiza la recogida con transporte propio y registra los datos del transportista (nombre, DNI, matrícula), y finalmente confirma la donación como completada. Las delegaciones no certifican directamente: la certificación la realiza siempre la entidad matriz.

Una parte importante de la actividad procede del canal retail, y buena parte de esas donaciones son de volumen pequeño o medio, frente a un número menor de donaciones de industria con volúmenes grandes (pallets). El modelo actual depende habitualmente de que la entidad organice y ejecute la recogida con sus propios medios.

## 3. Oportunidad detectada

La oportunidad no nace de un problema de recogidas fallidas — la tasa actual de no recogida es muy baja — sino de la dificultad que algunas entidades pueden tener para movilizar personal o vehículo propio ante determinadas donaciones, especialmente las de menor volumen y con logística sencilla.

En ese contexto, contar con una vía adicional de recogida podría:

- Ampliar la capacidad efectiva de recogida de una entidad sin depender siempre de su propia flota o voluntariado.
- Mejorar la cobertura en zonas o momentos puntuales donde movilizar la logística propia resulte poco eficiente para el volumen de la donación.
- Aprovechar que la propia entidad ya cuenta, en muchos casos, con una red de beneficiarios de confianza a los que podría autorizar para este fin.

Esta propuesta se presenta como una vía complementaria y acotada a determinados perfiles de donación (ver sección 11), no como una solución general aplicable a todo el volumen de recogidas de Naria.

## 4. Modelo propuesto

El modelo introduce un segundo circuito de recogida, que convive con el actual sin sustituirlo:

**Circuito tradicional (sin cambios).** El donante publica la donación, la entidad programa la recogida con transporte propio y registra los datos del transportista, y confirma la donación como completada. Este circuito sigue siendo el aplicable a pallets, donaciones de industria y recogidas logísticamente complejas.

**Circuito con beneficiario autorizado (nuevo, adicional).** Para donaciones elegibles, la entidad puede optar por asignar la recogida a un beneficiario autorizado de su propia base, en lugar de gestionarla con transporte propio. El beneficiario acepta o rechaza la propuesta, realiza la recogida, aporta una fotografía como evidencia, y la entidad valida esa evidencia antes de marcar la donación como completada.

La decisión de usar uno u otro circuito es siempre de la entidad, donación a donación. No es un mecanismo automático ni obligatorio, y el donante no interviene en ningún paso adicional en ninguno de los dos circuitos.

*[DIAGRAMA: circuito tradicional vs circuito beneficiario]*

## 5. Papel de la entidad social

La entidad social mantiene el control del proceso en todo momento:

- **Controla su base de beneficiarios**: decide quién forma parte de ella, mediante alta individual o importación masiva.
- **Decide quién está autorizado** para participar en recogidas; un beneficiario dado de alta pero no autorizado no puede recibir propuestas.
- **Decide qué donaciones pueden usar este modelo**, según su propio criterio operativo (con una posible sugerencia orientativa de Naria a futuro, ver sección 14).
- **Selecciona la modalidad de asignación** más adecuada en cada caso (manual, asistida u oferta controlada).
- **Valida finalmente la recogida**, revisando la evidencia fotográfica antes de que la donación se considere completada.
- **Mantiene el control frente a incidencias**: si un beneficiario rechaza, no responde o la evidencia no es adecuada, la donación vuelve a gestión de la entidad, que decide cómo continuar (reasignar o volver al circuito tradicional).

## 6. Módulo "Beneficiarios"

Se incorpora un módulo lateral "Beneficiarios" en Naria, con el mismo estilo visual que los módulos ya existentes (Usuarios, Transportistas):

- **Alta individual**, mediante formulario.
- **Importación masiva**, vía Excel/CSV.
- **Datos mínimos**, estrictamente logísticos: nombre y apellidos, teléfono, código postal/zona, disponibilidad de coche, estado y autorización. Se evita deliberadamente recoger datos sociales, económicos o personales que no aporten valor operativo.
- **Estado activo/inactivo**, para gestionar la base sin necesidad de eliminar registros.
- **Autorizado para recogidas**, como indicador independiente: un beneficiario puede estar dado de alta sin estar autorizado a participar.
- **Historial y última recogida**, calculados automáticamente a partir del histórico de recogidas del beneficiario; no son campos que la entidad rellene manualmente.

*[CAPTURA: módulo Beneficiarios]*

## 7. Modalidades de asignación

La entidad puede asignar una recogida a beneficiarios de tres formas, que pueden coexistir según el caso:

- **Manual.** La entidad elige directamente a un beneficiario concreto de su base.
- **Asistida.** Naria ordena o recomienda beneficiarios según criterios logísticos ya definidos — coincidencia de código postal/zona y disponibilidad de coche —, pero la decisión final de a quién se ofrece la recogida sigue siendo de la entidad.
- **Oferta controlada.** La entidad ofrece la recogida simultáneamente a un grupo acotado de beneficiarios autorizados (por ejemplo, los de una zona), y la obtiene quien la acepte primero.

Si una asignación individual (manual o asistida) es rechazada o no obtiene respuesta, la entidad puede reasignarla a otro beneficiario o escalarla a oferta controlada. En ningún caso esa publicación al grupo se produce de forma automática: siempre requiere una confirmación explícita de la entidad.

*[CAPTURA: asignación / oferta controlada]*

## 8. Flujo operativo completo

El recorrido de una donación gestionada por este circuito, desde que la entidad decide usarlo, es el siguiente:

1. La entidad decide gestionar la recogida mediante un beneficiario y elige la modalidad de asignación.
2. El beneficiario (o beneficiarios, en oferta controlada) recibe la propuesta, con toda la información necesaria para decidir (ver sección 9).
3. El beneficiario **acepta o rechaza** la propuesta.
4. Si acepta, realiza la recogida y **sube una fotografía** de la mercancía recogida como evidencia.
5. La donación queda en estado "Recogida realizada — pendiente de validación".
6. La **entidad revisa la evidencia** y confirma la donación, que pasa a estado "Completada".

Si el beneficiario rechaza, no responde, o la entidad rechaza la evidencia aportada, la donación entra en estado de incidencia y vuelve a gestión de la entidad, que decide entre reasignar a otro beneficiario, publicar una oferta controlada al grupo, o recurrir al circuito tradicional. El beneficiario no puede completar la donación por sí solo en ningún caso: la validación final es siempre de la entidad.

*[DIAGRAMA: flujo completo de recogida]*

## 9. Qué información ve el beneficiario

Un principio central del modelo es que el beneficiario no debe ir "a ciegas": antes de aceptar o rechazar una propuesta, y durante todo el proceso, tiene acceso a la información necesaria para decidir y ejecutar la recogida con criterio:

- Punto de recogida y dirección, con acceso a mapa.
- Fecha y franja horaria concreta de la recogida.
- Productos y categorías incluidos en la donación.
- Cantidades y peso (total y, si aporta valor, por producto).
- Fecha de caducidad, cuando resulta relevante.
- Requisitos de transporte/logística (por ejemplo, si requiere conservación en frío) y formato (bultos o pallets).
- Instrucciones prácticas para realizar la recogida.

Por el contrario, el beneficiario **no** tiene acceso a información administrativa interna de la donación: factura, albarán, precios, documentación interna, ni datos privados de transportistas o de contacto de la delegación. Esa información permanece exclusivamente en la vista de la entidad.

*[CAPTURA: vista del beneficiario]*

## 10. Integración en la plataforma Naria

El punto clave es que este modelo se plantea como una **evolución de la plataforma actual**, no como un producto o aplicación separada: reutiliza el menú, la ficha de donación y la sección "Programación de recogida" que la entidad ya usa hoy, simplemente añadiendo dentro de ellas la opción de gestionar la recogida con un beneficiario. No se sustituye ninguna pantalla existente ni se crea un sistema paralelo.

Los nuevos estados de seguimiento propios de este circuito (detallados en la sección 12) conviven con los estados ya existentes del circuito tradicional, sin afectarlos.

## 11. Donaciones candidatas

Este circuito está pensado, en principio, para donaciones de retail, alimentación variada, en formato de bolsas o bultos (no pallets), de volumen pequeño o medio y con logística sencilla, sin requisitos especiales de manipulación o transporte complejo.

Los pallets, las donaciones de industria y las recogidas logísticamente complejas seguirían, como norma general, por el circuito tradicional.

No se fijan todavía umbrales de peso o volumen definitivos: Naria dispone ya de los campos necesarios (peso, cantidad, tipo de transporte, bultos/pallets) para valorar la elegibilidad de una donación, y podría en el futuro sugerir de forma orientativa si una donación encaja en este circuito, pero la decisión final de elegibilidad sigue siendo siempre de la entidad. Los criterios exactos de esa sugerencia quedan como decisión pendiente (sección 14).

## 12. Trazabilidad y control

El modelo se apoya en varios mecanismos de trazabilidad, pensados para dar garantías razonables sin añadir burocracia:

- **Autorización previa**: solo participan beneficiarios explícitamente autorizados por la entidad.
- **Registro de aceptación**: cada propuesta queda registrada como aceptada o rechazada.
- **Estados de seguimiento**: la donación transita por estados claros (pendiente de aceptación, aceptada, pendiente de validación, completada, incidencia), visibles para la entidad en todo momento.
- **Evidencia fotográfica**: sustituye al registro de datos de transportista (nombre, DNI, matrícula) que no aplica a este circuito, ya que la identidad del beneficiario ya está registrada y autorizada por la entidad.
- **Validación por la entidad**: ninguna donación se marca como completada sin que la entidad revise y confirme la evidencia.
- **Historial por beneficiario**: cada beneficiario acumula un histórico de recogidas, calculado automáticamente, consultable desde su ficha.

*[CAPTURA: evidencia y validación]*

## 13. Fundación Mundo 21

Se explora, únicamente como posible mecanismo complementario, el papel de Fundación Mundo 21 en zonas donde una entidad no tenga cobertura suficiente de beneficiarios propios, apoyándose en delegadas, entidades colaboradoras o redes locales ya existentes.

No se plantea como eje principal de esta propuesta ni se asume que Fundación Mundo 21 vaya a construir una red propia de beneficiarios en cada municipio. Su alcance operativo real está pendiente de validación y se trata como una línea a explorar en una fase posterior, no como una decisión tomada.

## 14. Alternativas y decisiones abiertas

Los siguientes puntos están identificados pero **no resueltos**, y no deben interpretarse como decisiones tomadas. Ninguno de ellos impide seguir adelante con la idea general.

| Tema | Alternativas | Estado actual |
|---|---|---|
| Forma de acceso del beneficiario | Perfil propio en Naria / Enlace seguro puntual (SMS, WhatsApp, email) | Sin decidir; ninguna alternativa recomendada sobre la otra; podrían convivir |
| Criterios y umbrales de elegibilidad de donaciones | Combinación de campos ya disponibles (peso, formato, tipo de transporte) para una sugerencia orientativa de Naria | Sin definir; la decisión final seguiría siendo siempre de la entidad |
| Política de incidencias y no-shows | Por definir (sin alternativas concretas planteadas todavía) | Sin mecanismo de aviso, penalización o desautorización definido |
| Alcance de Fundación Mundo 21 | Entidad puente en zonas sin cobertura, apoyada en delegadas, entidades colaboradoras o redes locales | Línea a explorar; alcance operativo pendiente de validar |
| Validaciones legales y operativas posteriores | Por definir con las áreas correspondientes (p. ej. tratamiento de datos del beneficiario, cobertura ante incidencias) | Pendientes, antes de cualquier piloto real |

## 15. Prototipo

Se ha construido un prototipo navegable, sin backend ni conexiones reales, con datos ficticios, que permite recorrer visualmente el modelo completo manteniendo el estilo real de la plataforma Naria (logotipo, colores, tipografía, estructura de menú lateral, tablas y fichas). No implementa lógica de negocio real ni sustituye a un desarrollo funcional.

El prototipo permite hoy:

- Gestionar el módulo "Beneficiarios": listado, alta individual, importación simulada y ficha de beneficiario.
- Recorrer la ficha de donación con sus secciones habituales y la "Programación de recogida" integrada, incluyendo las tres modalidades de asignación.
- Simular la vista del beneficiario, con las dos alternativas de acceso (perfil propio / enlace seguro) y toda la información necesaria para decidir sin ir a ciegas.
- Completar el recorrido de aceptación, recogida, subida de foto y validación por la entidad.
- Recorrer el camino alternativo de rechazo o incidencia, con reasignación manual u oferta controlada.

## 16. Conclusión

La idea, en resumen: el modelo amplía las posibilidades de recogida de una entidad sin quitarle el control de nada — sigue siendo ella quien decide sus beneficiarios, qué donaciones entran en este circuito y cuándo dar algo por completado. Se apoya en la lógica que Naria ya tiene hoy, no en una herramienta aparte. El prototipo ayuda a ver cómo se sentiría esto en la práctica. Quedan cuestiones por definir, recogidas en la sección 14, que tendría sentido cerrar si la idea acaba interesando.
