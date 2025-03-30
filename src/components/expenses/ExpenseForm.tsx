
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const categorias = [
  { id: "personal", nombre: "Personal" },
  { id: "alquiler", nombre: "Alquiler" },
  { id: "marketing", nombre: "Marketing" },
  { id: "servicios", nombre: "Servicios" },
  { id: "suministros", nombre: "Suministros" },
  { id: "otros", nombre: "Otros" },
];

// Schema para validación del formulario
const formSchema = z.object({
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

type FormValues = z.infer<typeof formSchema>;

interface ExpenseFormProps {
  onSuccess?: () => void;
  initialData?: Partial<FormValues>;
}

export default function ExpenseForm({ onSuccess, initialData }: ExpenseFormProps) {
  // Configurar react-hook-form con zod
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      descripcion: initialData?.descripcion || "",
      importe: initialData?.importe || "",
      categoria: initialData?.categoria || "",
      fecha: initialData?.fecha || new Date(),
      notas: initialData?.notas || "",
      recurrente: initialData?.recurrente || false,
    },
  });

  const onSubmit = (data: FormValues) => {
    // Aquí iría la lógica para enviar los datos a un API
    console.log("Datos del gasto:", data);
    
    // Simulamos el envío
    setTimeout(() => {
      toast.success("Gasto registrado correctamente");
      form.reset();
      if (onSuccess) onSuccess();
    }, 500);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-[#2F2F4C]">Registrar Nuevo Gasto</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="descripcion"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripción</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ej: Material de oficina"
                        className="border-[#2F2F4C]/20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="importe"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Importe (€)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="0,00"
                        className="border-[#2F2F4C]/20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="categoria"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Categoría</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-[#2F2F4C]/20">
                          <SelectValue placeholder="Seleccionar categoría" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categorias.map((cat) => (
                          <SelectItem key={cat.id} value={cat.id}>
                            {cat.nombre}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fecha"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Fecha</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal border-[#2F2F4C]/20",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP", { locale: es })
                            ) : (
                              <span>Seleccionar fecha</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date > new Date()}
                          initialFocus
                          locale={es}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="notas"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notas adicionales</FormLabel>
                  <FormControl>
                    <textarea
                      className="min-h-[100px] w-full rounded-md border border-[#2F2F4C]/20 p-2"
                      placeholder="Información adicional sobre este gasto..."
                      {...field}
                    ></textarea>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-2">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => {
                  form.reset();
                  if (onSuccess) onSuccess();
                }}
              >
                Cancelar
              </Button>
              <Button 
                type="submit" 
                style={{ backgroundColor: "#227C9D" }}
              >
                Registrar Gasto
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
