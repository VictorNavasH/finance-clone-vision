
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CategoryField from "./CategoryField";
import DatePickerField from "./DatePickerField";
import NotesField from "./NotesField";
import { formSchema, ExpenseFormProps, FormValues } from "./expense-utils";

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

              <CategoryField />
              <DatePickerField />
            </div>

            <NotesField />

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
