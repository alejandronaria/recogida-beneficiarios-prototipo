# Módulo de Beneficiarios: modelo de datos e integración en plataforma

**Documento:** 02 — Módulo de beneficiarios
**Estado:** Modelo conceptual acordado, pendiente de validación por Dirección.
**Fecha:** 2026-09-17

---

## 1. Alcance de este documento

Describe el modelo conceptual del módulo de Beneficiarios: quién lo gestiona, qué datos contiene, cómo se da de alta, cómo se autoriza a un beneficiario a participar en recogidas, y cómo se integra visualmente en la plataforma Naria actual.

No se define aquí ningún detalle de implementación técnica (modelo de base de datos, API, etc.), solo el modelo funcional y conceptual.

## 2. Principio de control por la entidad

Cada entidad social mantiene el control total de su propia base de beneficiarios:

- La entidad decide quién forma parte de su base de beneficiarios.
- La entidad decide qué beneficiarios están autorizados para participar en recogidas.
- Un beneficiario no puede participar en recogidas de una entidad a la que no pertenece.

Naria proporciona la infraestructura (módulo, formularios, importación, asignación), pero no interviene en la decisión de qué beneficiarios gestiona cada entidad.

## 3. Base de beneficiarios: alta y mantenimiento

Cada entidad podría disponer de su propia base de beneficiarios dentro de Naria, alimentada de dos formas:

1. **Alta individual**: la entidad da de alta a un beneficiario uno a uno, mediante un formulario.
2. **Importación masiva**: la entidad importa un listado de beneficiarios mediante archivo Excel o CSV.

Ambas vías conviven; no son excluyentes.

### 3.1. Perfil interno vs. cuenta completa

Un beneficiario puede existir en el sistema como **perfil interno** (registro de datos gestionado por la entidad) sin tener necesariamente una cuenta completa en Naria con usuario y contraseña propios. La cuenta completa es opcional y depende de la forma de acceso elegida (ver sección 4).

### 3.2. Autorización para recogidas

Para que un beneficiario pueda participar en el circuito de recogidas descrito en `01-flujo-operativo.md`, debe estar marcado explícitamente por su entidad como **autorizado para recogidas**. Un beneficiario dado de alta pero no autorizado queda registrado en la base, pero no puede recibir propuestas de recogida.

## 4. Datos del beneficiario

### 4.1. Datos logísticos mínimos sugeridos

El objetivo es registrar únicamente los datos necesarios para gestionar la logística de recogida, evitando datos de carácter social que no aportan valor operativo:

| Campo | Descripción |
|---|---|
| Nombre (y apellidos) | Identificación del beneficiario. |
| Teléfono | Contacto para notificación de propuestas y coordinación. |
| Código postal / zona | Usado para selección asistida por cercanía. |
| Coche (sí/no) | Indicador de capacidad de transporte. |
| Estado (activo/inactivo) | Estado general del beneficiario en la base de la entidad. |
| Autorizado para recogidas | Indicador de si puede recibir propuestas de recogida. |

### 4.2. Principio de minimización de datos

Se evita deliberadamente recoger datos sociales, económicos o personales adicionales (situación familiar, ingresos, composición del hogar, etc.) que no sean estrictamente necesarios para la operativa logística de recogida. La gestión social del beneficiario (si la entidad la lleva a cabo en otros sistemas) queda fuera del alcance de este módulo.

## 5. Formas de acceso del beneficiario (alternativas, sin decidir)

Se contemplan dos formas de acceso del beneficiario a la información necesaria para gestionar una recogida (punto de recogida, dirección, franja horaria, peso aproximado, tipo de producto/categoría, instrucciones básicas, subida de foto). **Ambas se documentan como alternativas viables; no se ha elegido una todavía.**

### 5.1. Opción A: usuario/perfil propio en Naria

El beneficiario dispone de una cuenta propia en Naria, con acceso recurrente para ver propuestas, aceptar/rechazar y subir evidencias.

- **A favor:** experiencia más completa y persistente; historial accesible por el propio beneficiario; posible reutilización de la cuenta para futuras recogidas sin fricción de reenvío de enlaces.
- **En contra:** requiere proceso de alta de cuenta, gestión de credenciales y, potencialmente, una curva de adopción mayor para beneficiarios con menor familiaridad digital.

### 5.2. Opción B: enlace seguro puntual

El beneficiario recibe un enlace seguro de un solo uso (o de validez limitada) por SMS, WhatsApp o email, que le da acceso directo a la propuesta de recogida concreta, sin necesidad de crear ni gestionar una cuenta.

- **A favor:** menor fricción de acceso; no requiere gestión de contraseñas; más adecuado para beneficiarios que participan de forma puntual u ocasional.
- **En contra:** no genera un histórico de cuenta persistente para el beneficiario; depende de la disponibilidad y correcta gestión del canal de envío (SMS/WhatsApp/email).

### 5.3. Consideración conjunta

Ambas opciones podrían convivir (por ejemplo, cuenta propia para beneficiarios recurrentes y enlace puntual para participación ocasional), pero esto no está decidido y debe valorarse junto con Dirección. Ver `04-decisiones-abiertas.md`.

## 6. Integración en la plataforma Naria

### 6.1. Principio de integración

El módulo de Beneficiarios debe mantener el estilo y la estructura visual actuales de Naria, integrándose como un elemento más del menú lateral, sin romper la coherencia con módulos existentes.

### 6.2. Nuevo módulo lateral "Beneficiarios"

Se propone añadir un módulo lateral llamado **"Beneficiarios"**, visualmente equivalente a los módulos existentes de **Usuarios** o **Transportistas**.

Listado de beneficiarios, con las siguientes columnas:

- Nombre y apellidos.
- Teléfono.
- Código postal / zona.
- Coche (sí/no).
- Autorizado para recogidas.
- Estado (activo/inactivo).
- Última recogida (valor calculado automáticamente a partir del historial de recogidas del beneficiario; no es un campo manual del perfil).
- Menú de acciones.

Botones principales del módulo:

- **"Añadir beneficiario"** (alta individual).
- **"Importar beneficiarios"** (alta masiva vía Excel/CSV).

### 6.3. Integración en la ficha de donación

Dentro de la sección **"Programación de recogida"** de la ficha de donación, se añade un selector de **Tipo de recogida**, con dos opciones:

- **Entidad / delegación** (flujo actual, sin cambios).
- **Beneficiario** (nuevo flujo).

Si se selecciona "Beneficiario", se muestran adicionalmente:

- Método de asignación (manual / asistida / oferta controlada).
- Selección de beneficiario (o beneficiarios, según el método).
- Estado de aceptación (ver estados en `01-flujo-operativo.md`, sección 3).
- Resto de información relevante para el seguimiento (evidencia fotográfica, validación).

### 6.4. Coherencia con estados existentes

Los estados específicos del circuito de beneficiarios (pendiente de aceptación, aceptada, recogida realizada – pendiente de validación, completada, incidencia/no-show) se muestran en la ficha de donación de forma equivalente a como se muestran hoy los estados del circuito tradicional, sin duplicar innecesariamente la información ya existente en la plataforma (peso, productos, fecha de caducidad, etc., que ya están disponibles en la ficha).

## 7. Documentos relacionados

- `00-propuesta-direccion.md` — Resumen ejecutivo y contexto estratégico.
- `01-flujo-operativo.md` — Flujo operativo completo y modalidades de asignación.
- `03-especificacion-prototipo.md` — Guion del prototipo navegable de este módulo.
- `04-decisiones-abiertas.md` — Decisión pendiente sobre forma de acceso del beneficiario (sección 5 de este documento).
