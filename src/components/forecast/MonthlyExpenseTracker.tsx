
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { Plus, Save } from "lucide-react";

// Sample initial monthly expenses
const initialExpenses = [
  { id: 1, concepto: "Alquiler", cantidad: 2100 },
  { id: 2, concepto: "Salarios", cantidad: 5300 },
  { id: 3, concepto: "Servicios", cantidad: 950 },
];

export default function MonthlyExpenseTracker() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [newExpense, setNewExpense] = useState({ concepto: "", cantidad: "" });
  const [isSaving, setIsSaving] = useState(false);
  
  const handleAddExpense = () => {
    // Validate input
    if (!newExpense.concepto.trim() || !newExpense.cantidad) {
      toast.error("Por favor, completa todos los campos");
      return;
    }
    
    // Add new expense
    const cantidad = parseFloat(newExpense.cantidad);
    if (isNaN(cantidad)) {
      toast.error("La cantidad debe ser un número válido");
      return;
    }
    
    const expense = {
      id: expenses.length > 0 ? Math.max(...expenses.map(e => e.id)) + 1 : 1,
      concepto: newExpense.concepto,
      cantidad: cantidad
    };
    
    setExpenses([...expenses, expense]);
    setNewExpense({ concepto: "", cantidad: "" });
    toast.success("Gasto añadido");
  };
  
  const handleSaveExpenses = () => {
    setIsSaving(true);
    
    // Simulate saving to backend
    setTimeout(() => {
      setIsSaving(false);
      toast.success("Gastos guardados correctamente", {
        description: "Los gastos mensuales han sido actualizados"
      });
    }, 1000);
  };
  
  const handleExpenseChange = (id: number, field: 'concepto' | 'cantidad', value: string) => {
    setExpenses(expenses.map(expense => {
      if (expense.id === id) {
        if (field === 'cantidad') {
          const numValue = parseFloat(value);
          return { ...expense, [field]: isNaN(numValue) ? 0 : numValue };
        }
        return { ...expense, [field]: value };
      }
      return expense;
    }));
  };
  
  const handleRemoveExpense = (id: number) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
    toast.success("Gasto eliminado");
  };
  
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.cantidad, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gastos Mensuales</CardTitle>
        <CardDescription>
          Gestiona tus gastos mensuales recurrentes para incluirlos en las previsiones
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-end gap-2">
            <div className="flex-1">
              <label className="text-sm font-medium">Concepto</label>
              <Input
                value={newExpense.concepto}
                onChange={(e) => setNewExpense({ ...newExpense, concepto: e.target.value })}
                placeholder="Nuevo concepto de gasto"
              />
            </div>
            <div className="w-[150px]">
              <label className="text-sm font-medium">Cantidad (€)</label>
              <Input
                type="number"
                value={newExpense.cantidad}
                onChange={(e) => setNewExpense({ ...newExpense, cantidad: e.target.value })}
                placeholder="0,00"
              />
            </div>
            <Button
              onClick={handleAddExpense}
              size="icon"
              style={{ backgroundColor: "#227C9D" }}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Concepto</TableHead>
                <TableHead className="text-right">Cantidad (€)</TableHead>
                <TableHead className="w-[100px]">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {expenses.map((expense) => (
                <TableRow key={expense.id}>
                  <TableCell>
                    <Input
                      value={expense.concepto}
                      onChange={(e) => handleExpenseChange(expense.id, 'concepto', e.target.value)}
                      className="border-transparent hover:border-input focus:border-input"
                    />
                  </TableCell>
                  <TableCell className="text-right">
                    <Input
                      type="number"
                      value={expense.cantidad}
                      onChange={(e) => handleExpenseChange(expense.id, 'cantidad', e.target.value)}
                      className="border-transparent hover:border-input focus:border-input text-right"
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 text-destructive hover:text-destructive/90"
                      onClick={() => handleRemoveExpense(expense.id)}
                    >
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          <div className="flex justify-between items-center pt-2 border-t">
            <div className="font-medium">Total Gastos Mensuales:</div>
            <div className="font-bold text-lg">€{totalExpenses.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
          </div>
          
          <Button
            onClick={handleSaveExpenses}
            className="w-full"
            style={{ backgroundColor: "#227C9D" }}
            disabled={isSaving}
          >
            <Save className="mr-2 h-4 w-4" />
            {isSaving ? "Guardando..." : "Guardar Cambios"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
