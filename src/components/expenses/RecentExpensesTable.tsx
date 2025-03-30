
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

type Expense = {
  id: number;
  description: string;
  category: string;
  amount: string;
  date: string;
}

interface RecentExpensesTableProps {
  expenses: Expense[];
}

export default function RecentExpensesTable({ expenses }: RecentExpensesTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-finance-text">Gastos Recientes</CardTitle>
        <CardDescription>Últimas transacciones registradas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-2 font-medium">Descripción</th>
                <th className="pb-2 font-medium">Categoría</th>
                <th className="pb-2 font-medium">Importe</th>
                <th className="pb-2 font-medium">Fecha</th>
                <th className="pb-2 font-medium text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense.id} className="border-b last:border-0">
                  <td className="py-3">{expense.description}</td>
                  <td className="py-3">
                    <Badge variant="outline" className="bg-finance-light text-finance-text">
                      {expense.category}
                    </Badge>
                  </td>
                  <td className="py-3 font-medium">{expense.amount}</td>
                  <td className="py-3 text-muted-foreground">{expense.date}</td>
                  <td className="py-3 text-right">
                    <Button variant="ghost" size="icon">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
