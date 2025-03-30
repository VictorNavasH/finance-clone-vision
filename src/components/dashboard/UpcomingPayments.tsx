
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarClock, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function UpcomingPayments() {
  const payments = [
    {
      id: 1,
      name: "Alquiler de Oficina",
      amount: "€2.100",
      dueDate: "15 Oct, 2023",
      status: "pending",
    },
    {
      id: 2,
      name: "Prima de Seguro",
      amount: "€750",
      dueDate: "20 Oct, 2023",
      status: "pending",
    },
    {
      id: 3,
      name: "Factura de Proveedor",
      amount: "€1.450",
      dueDate: "25 Oct, 2023",
      status: "pending",
    },
    {
      id: 4,
      name: "Servicios Cloud",
      amount: "€380",
      dueDate: "30 Oct, 2023",
      status: "pending",
    },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-base font-semibold text-finance-text">Pagos Próximos</CardTitle>
          <CardDescription>Gastos para los próximos 30 días</CardDescription>
        </div>
        <CalendarClock className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {payments.map((payment) => (
            <div key={payment.id} className="flex items-center justify-between border-b pb-3 last:border-0">
              <div>
                <p className="font-medium">{payment.name}</p>
                <p className="text-sm text-muted-foreground">{payment.dueDate}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">{payment.amount}</span>
                <Badge className={cn(
                  "bg-finance-accent/20 text-finance-dark hover:bg-finance-accent/30",
                  payment.status === "paid" && "bg-finance-secondary/20 text-finance-secondary hover:bg-finance-secondary/30"
                )}>
                  {payment.status === "pending" ? "Pendiente" : "Pagado"}
                </Badge>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-sm">
          <a href="#" className="flex items-center text-finance-primary hover:underline">
            Ver todos los gastos
            <ArrowUpRight className="h-3 w-3 ml-1" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
