
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function BudgetProgress() {
  const budgetCategories = [
    {
      name: "Marketing",
      allocated: 2000,
      spent: 1200,
      progress: 60,
    },
    {
      name: "Operaciones",
      allocated: 5000,
      spent: 4750,
      progress: 95,
    },
    {
      name: "Desarrollo",
      allocated: 3500,
      spent: 1800,
      progress: 51,
    },
    {
      name: "Administración",
      allocated: 1500,
      spent: 1400,
      progress: 93,
    },
  ];

  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle className="text-finance-text">Seguimiento de Presupuesto</CardTitle>
        <CardDescription>Utilización mensual del presupuesto por departamento</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {budgetCategories.map((category, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{category.name}</span>
                <span className="text-sm font-medium">
                  €{category.spent} / €{category.allocated}
                </span>
              </div>
              <Progress value={category.progress} className="h-2" style={{
                backgroundColor: "#FEF9EF",
                "--tw-bg-opacity": 1
              }} />
              <div className="flex justify-end mt-1">
                <span className="text-xs text-muted-foreground">
                  {category.progress}% utilizado
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
