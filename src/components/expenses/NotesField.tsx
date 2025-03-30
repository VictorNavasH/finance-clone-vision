
import React from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { FormValues } from "./expense-utils";
import { Textarea } from "@/components/ui/textarea";

const NotesField: React.FC = () => {
  const form = useFormContext<FormValues>();
  
  return (
    <FormField
      control={form.control}
      name="notas"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Notas adicionales</FormLabel>
          <FormControl>
            <Textarea
              className="min-h-[100px] w-full border-[#2F2F4C]/20"
              placeholder="Información adicional sobre este gasto..."
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default NotesField;
