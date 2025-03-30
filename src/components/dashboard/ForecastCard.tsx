
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function ForecastCard() {
  const forecastData = {
    currentMonth: "Octubre",
    projectedRevenue: "€12.500,00",
    targetRevenue: "€15.000,00",
    projectedGrowth: "+8,2%",
    progress: 83,
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-finance-text">Previsión de Ingresos</CardTitle>
          <Badge variant="outline" className="bg-finance-primary/10 text-finance-primary">
            {forecastData.currentMonth}
          </Badge>
        </div>
        <CardDescription>Ingresos proyectados vs objetivo</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-2">
          <div>
            <p className="text-sm font-medium">Ingresos Proyectados</p>
            <p className="text-2xl font-bold text-finance-text">{forecastData.projectedRevenue}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">Objetivo de Ingresos</p>
            <p className="text-2xl font-bold text-finance-text">{forecastData.targetRevenue}</p>
          </div>
        </div>
        <Progress value={forecastData.progress} className="h-2 mb-2" />
        <div className="flex justify-between text-sm">
          <span>{forecastData.progress}% del objetivo</span>
          <span className="text-finance-secondary">{forecastData.projectedGrowth} respecto al mes anterior</span>
        </div>
      </CardContent>
    </Card>
  );
}
