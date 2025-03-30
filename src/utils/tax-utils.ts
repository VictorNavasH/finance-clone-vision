
// Definiciones de tipos de impuestos
export interface TaxRate {
  id: string;
  nombre: string;
  porcentaje: number;
}

// IVA - Impuesto sobre el Valor Añadido
export const tasasIVA: TaxRate[] = [
  { id: "general", nombre: "General (21%)", porcentaje: 21 },
  { id: "reducido", nombre: "Reducido (10%)", porcentaje: 10 },
  { id: "superreducido", nombre: "Superreducido (4%)", porcentaje: 4 }
];

// Impuesto de Sociedades
export const tasasIS: TaxRate[] = [
  { id: "general", nombre: "General (25%)", porcentaje: 25 },
  { id: "pymes", nombre: "PYMEs (23%)", porcentaje: 23 },
  { id: "cooperativas", nombre: "Cooperativas (20%)", porcentaje: 20 }
];

// IRPF - Impuesto sobre la Renta de las Personas Físicas
export const tramosIRPF = [
  { hasta: 12450, porcentaje: 19 },
  { hasta: 20200, porcentaje: 24 },
  { hasta: 35200, porcentaje: 30 },
  { hasta: 60000, porcentaje: 37 },
  { hasta: Infinity, porcentaje: 45 }
];

// Función para calcular el IRPF según tramos
export const calcularIRPF = (ingresos: number, deducciones: number = 0): {
  baseImponible: number;
  tramosPago: {tramo: number; cantidad: number; porcentaje: number}[];
  totalImpuesto: number;
} => {
  const baseImponible = Math.max(0, ingresos - deducciones);
  let totalImpuesto = 0;
  let ingresoRestante = baseImponible;
  let tramoAnterior = 0;

  const tramosPago = tramosIRPF.map(tramo => {
    const cantidadTramo = Math.min(Math.max(0, ingresoRestante), tramo.hasta - tramoAnterior);
    const impuestoTramo = cantidadTramo * (tramo.porcentaje / 100);
    
    totalImpuesto += impuestoTramo;
    ingresoRestante -= cantidadTramo;
    tramoAnterior = tramo.hasta;
    
    return {
      tramo: tramo.porcentaje,
      cantidad: cantidadTramo,
      porcentaje: tramo.porcentaje
    };
  }).filter(t => t.cantidad > 0);

  return {
    baseImponible,
    tramosPago,
    totalImpuesto
  };
};

// Calcular IVA
export const calcularIVA = (importe: number, porcentajeIVA: number): number => {
  return importe * (porcentajeIVA / 100);
};

// Calcular Impuesto de Sociedades
export const calcularIS = (beneficios: number, porcentajeIS: number): number => {
  return beneficios * (porcentajeIS / 100);
};
