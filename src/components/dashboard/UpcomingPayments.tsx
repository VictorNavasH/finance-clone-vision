
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarClock, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function UpcomingPayments() {
  const payments = [
    {
      id: 1,
      name: "Office Rent",
      amount: "$2,100",
      dueDate: "Oct 15, 2023",
      status: "pending",
    },
    {
      id: 2,
      name: "Insurance Premium",
      amount: "$750",
      dueDate: "Oct 20, 2023",
      status: "pending",
    },
    {
      id: 3,
      name: "Supplier Invoice",
      amount: "$1,450",
      dueDate: "Oct 25, 2023",
      status: "pending",
    },
    {
      id: 4,
      name: "Cloud Services",
      amount: "$380",
      dueDate: "Oct 30, 2023",
      status: "pending",
    },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-base font-semibold">Upcoming Payments</CardTitle>
          <CardDescription>Next 30 days expenses</CardDescription>
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
                  "bg-amber-100 text-amber-700 hover:bg-amber-200 hover:text-amber-800",
                  payment.status === "paid" && "bg-green-100 text-green-700 hover:bg-green-200 hover:text-green-800"
                )}>
                  {payment.status === "pending" ? "Pending" : "Paid"}
                </Badge>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-sm">
          <a href="#" className="flex items-center text-finance-primary hover:underline">
            View all expenses
            <ArrowUpRight className="h-3 w-3 ml-1" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
