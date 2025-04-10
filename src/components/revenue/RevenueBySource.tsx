
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface RevenueSourceItem {
  source: string;
  amount: number;
  percentage: number;
}

interface RevenueBySourceProps {
  data: RevenueSourceItem[];
}

const RevenueBySource = ({ data }: RevenueBySourceProps) => {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Ingresos por Fuente</CardTitle>
        <CardDescription>Desglose de ingresos por área de negocio</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {data.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">{item.source}</span>
                <span className="text-sm font-medium">€{item.amount.toLocaleString('es-ES')}</span>
              </div>
              <div className="h-2 bg-muted rounded overflow-hidden">
                <div 
                  className="h-full" 
                  style={{ width: `${item.percentage}%`, backgroundColor: "#227C9D" }}
                ></div>
              </div>
              <div className="flex justify-end mt-2">
                <span className="text-xs text-muted-foreground">{item.percentage}% del total</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueBySource;
