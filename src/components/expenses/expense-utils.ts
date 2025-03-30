
import * as z from "zod";

export const categorias = [
  { id: "personal", nombre: "Personal" },
  { id: "alquiler", nombre: "Alquiler" },
  { id: "marketing", nombre: "Marketing" },
  { id: "servicios", nombre: "Servicios" },
  { id: "suministros", nombre: "Suministros" },
  { id: "otros", nombre: "Otros" },
];

// Schema para validación del formulario
export const formSchema = z.object({
  descripcion: z.string().min(3, {
    message: "La descripción debe tener al menos 3 caracteres.",
  }),
  importe: z.string().refine((val) => {
    const num = parseFloat(val.replace(',', '.'));
    return !isNaN(num) && num > 0;
  }, {
    message: "El importe debe ser un número mayor que cero.",
  }),
  categoria: z.string({
    required_error: "Por favor selecciona una categoría.",
  }),
  fecha: z.date({
    required_error: "La fecha es obligatoria.",
  }),
  notas: z.string().optional(),
  recurrente: z.boolean().default(false),
});

export type FormValues = z.infer<typeof formSchema>;

export interface ExpenseFormProps {
  onSuccess?: () => void;
  initialData?: Partial<FormValues>;
}
