
import React from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useFormContext } from "react-hook-form";
import { FormValues, categorias } from "./expense-utils";

const CategoryField: React.FC = () => {
  const form = useFormContext<FormValues>();
  
  return (
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
  );
};

export default CategoryField;
