
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

const categorias = [
  { id: "personal", nombre: "Personal" },
  { id: "alquiler", nombre: "Alquiler" },
  { id: "marketing", nombre: "Marketing" },
  { id: "servicios", nombre: "Servicios" },
  { id: "suministros", nombre: "Suministros" },
  { id: "otros", nombre: "Otros" },
];

export default function ExpenseForm() {
  const [descripcion, setDescripcion] = useState("");
  const [importe, setImporte] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validaciones básicas
    if (!descripcion || !importe || !categoria || !fecha) {
      toast.error("Por favor, completa todos los campos");
      return;
    }

    // Simulamos el envío del gasto
    toast.success("Gasto registrado correctamente");
    
    // Limpiamos el formulario
    setDescripcion("");
    setImporte("");
    setCategoria("");
    setFecha(undefined);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-finance-text">Registrar Nuevo Gasto</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="descripcion">Descripción</Label>
              <Input
                id="descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                placeholder="Ej: Material de oficina"
                className="border-finance-text/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="importe">Importe (€)</Label>
              <Input
                id="importe"
                value={importe}
                onChange={(e) => setImporte(e.target.value)}
                placeholder="0.00"
                type="number"
                min="0"
                step="0.01"
                className="border-finance-text/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="categoria">Categoría</Label>
              <Select value={categoria} onValueChange={setCategoria}>
                <SelectTrigger className="border-finance-text/20">
                  <SelectValue placeholder="Seleccionar categoría" />
                </SelectTrigger>
                <SelectContent>
                  {categorias.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.nombre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Fecha</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal border-finance-text/20",
                      !fecha && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {fecha ? format(fecha, "PPP", { locale: es }) : "Seleccionar fecha"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={fecha}
                    onSelect={setFecha}
                    initialFocus
                    locale={es}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full md:w-auto"
            style={{ backgroundColor: "#227C9D" }}
          >
            Registrar Gasto
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
