
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, PiggyBank } from "lucide-react";

export default function FinancialSummary() {
  const summaryCards = [
    {
      title: "Total Revenue",
      value: "$24,560.00",
      change: "+15.2%",
      isPositive: true,
      icon: DollarSign,
      color: "text-finance-accent",
    },
    {
      title: "Total Expenses",
      value: "$12,310.00",
      change: "+9.1%",
      isPositive: false,
      icon: TrendingDown,
      color: "text-finance-danger",
    },
    {
      title: "Net Profit",
      value: "$12,250.00",
      change: "+22.5%",
      isPositive: true,
      icon: TrendingUp,
      color: "text-finance-accent",
    },
    {
      title: "Budget Variance",
      value: "+$3,840.00",
      change: "+3.8%",
      isPositive: true,
      icon: PiggyBank,
      color: "text-finance-primary",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {summaryCards.map((card, index) => (
        <Card key={index}>
          <CardHeader className="pb-2 pt-4 px-4 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {card.title}
            </CardTitle>
            <card.icon className={cn("h-5 w-5", card.color)} />
          </CardHeader>
          <CardContent className="px-4 pb-4">
            <div className="text-2xl font-bold">{card.value}</div>
            <div className={cn(
              "text-sm flex items-center",
              card.isPositive ? "text-finance-accent" : "text-finance-danger"
            )}>
              {card.isPositive ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
              {card.change}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

import { cn } from "@/lib/utils";
