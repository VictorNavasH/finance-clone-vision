
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Check, AlertTriangle } from "lucide-react";

interface DepartmentBudgetItemProps {
  department: string;
  allocated: number;
  used: number;
  remaining: number;
  progress: number;
  status: "normal" | "warning" | "critical";
}

export default function DepartmentBudgetItem({
  department,
  allocated,
  used,
  remaining,
  progress,
  status,
}: DepartmentBudgetItemProps) {
  return (
    <tr className="border-b last:border-0">
      <td className="py-3">{department}</td>
      <td className="py-3">€{allocated.toLocaleString('es-ES')}</td>
      <td className="py-3">€{used.toLocaleString('es-ES')}</td>
      <td className="py-3">€{remaining.toLocaleString('es-ES')}</td>
      <td className="py-3 w-48">
        <div className="flex items-center">
          <div className="w-full mr-2">
            <Progress 
              value={progress} 
              className="h-2" 
              style={{
                backgroundColor: "#FEF9EF",
                color: status === "critical" ? "#FE6D73" : status === "warning" ? "#FFCB77" : "#17C3B2"
              }} 
            />
          </div>
          <span className="text-xs">{progress}%</span>
        </div>
      </td>
      <td className="py-3">
        {status === "critical" ? (
          <Badge className="bg-finance-danger/20 text-finance-danger">
            <AlertTriangle className="h-3 w-3 mr-1" />
            Agotado
          </Badge>
        ) : status === "warning" ? (
          <Badge className="bg-finance-accent/20 text-finance-text">
            <AlertTriangle className="h-3 w-3 mr-1" />
            Advertencia
          </Badge>
        ) : (
          <Badge className="bg-finance-secondary/20 text-finance-secondary">
            <Check className="h-3 w-3 mr-1" />
            Normal
          </Badge>
        )}
      </td>
    </tr>
  );
}
