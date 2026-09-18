/* Datos ficticios — en memoria, sin backend, se reinician al recargar. */

const ENTIDAD = { nombre: "Cáritas Xixona", tipo: "matriz" };

function seedBeneficiarios() {
  return [
    { id: "b1", nombre: "Marta Ibáñez Soler", telefono: "611 234 567", cpZona: "03380", coche: true, estado: "activo", autorizado: true, historico: ["12/08/2026"] },
    { id: "b2", nombre: "Josep Roig Ferrer", telefono: "622 345 112", cpZona: "03380", coche: false, estado: "activo", autorizado: true, historico: [] },
    { id: "b3", nombre: "Fátima Nasri", telefono: "633 998 214", cpZona: "03201", coche: true, estado: "activo", autorizado: true, historico: ["30/06/2026", "14/07/2026"] },
    { id: "b4", nombre: "Antonio Gil Pérez", telefono: "644 771 903", cpZona: "03380", coche: true, estado: "inactivo", autorizado: true, historico: [] },
    { id: "b5", nombre: "Laura Campos Ruiz", telefono: "655 120 448", cpZona: "03007", coche: true, estado: "activo", autorizado: false, historico: [] },
    { id: "b6", nombre: "Youssef El Amrani", telefono: "666 802 371", cpZona: "03380", coche: false, estado: "activo", autorizado: true, historico: ["01/09/2026"] },
    { id: "b7", nombre: "Rocío Martínez Gómez", telefono: "677 543 029", cpZona: "03202", coche: true, estado: "activo", autorizado: true, historico: [] },
    { id: "b8", nombre: "Peio Etxeberria", telefono: "688 219 664", cpZona: "03380", coche: true, estado: "activo", autorizado: true, historico: ["20/05/2026", "02/09/2026"] }
  ];
}

const HORARIO_SEMANAL_DEFECTO = [
  ["Lunes", "08:00", "20:00"],
  ["Martes", "08:00", "20:00"],
  ["Miércoles", "08:00", "20:00"],
  ["Jueves", "08:00", "20:00"],
  ["Viernes", "08:00", "20:00"],
  ["Sábado", "08:00", "20:00"],
  ["Domingo", null, null]
];

function seedDonaciones() {
  return [
    {
      id: "D-2201",
      denominacion: "Donación 17/09/2026 (retail)",
      fecha: "17/09/2026 09:12",
      horaPublicacion: "09:12",
      fechaCreacion: "17/09/2026",
      observaciones: "Bolsas ya paletizadas en muelle 2, preguntar por recepción.",
      fechaRecogidaPropuesta: "19/09/2026",
      franjaHoraria: "17:00–19:30",
      vencimiento: "24/09/2026",
      puntoRecogida: "HIPERBER 41 - Bigastro",
      direccion: "Avenida Principal, s/n, 03380 Bigastro, Alicante",
      cpZona: "03380",
      donante: "Hiperber distribución y logística S.A.",
      delegacionContacto: { nombre: "Cristian Cruz", organizacion: "Cáritas Xixona", telefono: "649 588 198", email: "recogidas@caritasxixona.org" },
      horarioSemanal: HORARIO_SEMANAL_DEFECTO,
      peso: "38 kg",
      productos: "Alimentación variada (conservas, panadería, fruta)",
      productosLista: [
        { id: "165229", nombre: "Conservas variadas", categoria: "Conservas", cantidad: 84, pesoKg: 21.5, caducidad: "20/03/2027" },
        { id: "165231", nombre: "Pan de molde", categoria: "Panadería", cantidad: 40, pesoKg: 16.5, caducidad: "24/09/2026" }
      ],
      tipoTransporte: "Ambiente",
      formato: "Bolsas / bultos (no pallets)",
      bultosPalletsCantidad: 6,
      elegibleBeneficiario: true,
      tipoRecogida: null,
      estado: null,
      asignacion: null,
      evidenciaFoto: null,
      incidencia: null
    },
    {
      id: "D-2144",
      denominacion: "Donación 10/09/2026 (2)",
      fecha: "10/09/2026 11:40",
      horaPublicacion: "11:40",
      fechaCreacion: "10/09/2026",
      observaciones: "Recogida ya completada — donación de ejemplo para ver el circuito cerrado.",
      fechaRecogidaPropuesta: "10/09/2026",
      franjaHoraria: "12:00–13:00",
      vencimiento: "18/09/2026",
      puntoRecogida: "HIPERBER 41 - Bigastro",
      direccion: "Avenida Principal, s/n, 03380 Bigastro, Alicante",
      cpZona: "03380",
      donante: "Hiperber distribución y logística S.A.",
      delegacionContacto: { nombre: "Cristian Cruz", organizacion: "Cáritas Xixona", telefono: "649 588 198", email: "recogidas@caritasxixona.org" },
      horarioSemanal: HORARIO_SEMANAL_DEFECTO,
      peso: "12 kg",
      productos: "Panadería y bollería",
      productosLista: [
        { id: "165240", nombre: "Bollería envasada", categoria: "Panadería", cantidad: 60, pesoKg: 12, caducidad: "16/09/2026" }
      ],
      tipoTransporte: "Ambiente",
      formato: "Bolsas / bultos (no pallets)",
      bultosPalletsCantidad: 2,
      elegibleBeneficiario: true,
      tipoRecogida: "beneficiario",
      estado: "completada",
      asignacion: { modalidad: "manual", beneficiarioIds: ["b1"], fecha: "10/09/2026 12:05" },
      evidenciaFoto: "placeholder",
      incidencia: null
    },
    {
      id: "D-2099",
      denominacion: "Donación 05/09/2026 (industria)",
      fecha: "05/09/2026 08:30",
      horaPublicacion: "08:30",
      fechaCreacion: "05/09/2026",
      observaciones: "Palet completo, requiere carretilla en descarga.",
      vencimiento: "05/11/2026",
      puntoRecogida: "C054 CASH MERCAMADRID 2",
      direccion: "Ctra. de Villaverde a Vallecas, km 3,8, 28053 Madrid",
      cpZona: "28053",
      donante: "HIPER USERA, S. L.",
      delegacionContacto: { nombre: "Cristian Cruz", organizacion: "Cáritas Xixona", telefono: "649 588 198", email: "recogidas@caritasxixona.org" },
      horarioSemanal: HORARIO_SEMANAL_DEFECTO,
      peso: "640 kg",
      productos: "Conservas (palet completo)",
      productosLista: [
        { id: "165260", nombre: "Conservas de verdura", categoria: "Conservas", cantidad: 320, pesoKg: 640, caducidad: "10/2027" }
      ],
      tipoTransporte: "Ambiente",
      formato: "Pallets",
      bultosPalletsCantidad: 1,
      elegibleBeneficiario: false,
      tipoRecogida: "entidad",
      estado: "delegada",
      asignacion: null,
      evidenciaFoto: null,
      incidencia: null
    }
  ];
}
