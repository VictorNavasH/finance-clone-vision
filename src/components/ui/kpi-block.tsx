
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

const kpiBlockVariants = cva(
  "transition-colors duration-200",
  {
    variants: {
      variant: {
        default: "bg-card",
        primary: "bg-gradient-to-br from-finance-primary to-finance-primary/80",
        secondary: "bg-gradient-to-br from-finance-secondary to-finance-secondary/80",
        accent: "bg-gradient-to-br from-finance-accent to-finance-accent/80",
        danger: "bg-gradient-to-br from-finance-danger to-finance-danger/80",
      },
      size: {
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface KpiBlockProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof kpiBlockVariants> {
  title: string;
  value: string | number;
  prefix?: string;
  suffix?: string;
  change?: number;
  icon?: React.ReactNode;
  formatter?: (value: string | number) => string;
  loading?: boolean;
  subtitle?: string;
}

export function KpiBlock({
  className,
  variant,
  size,
  title,
  value,
  prefix = "",
  suffix = "",
  change,
  icon,
  formatter = (val) => String(val),
  loading = false,
  subtitle,
  ...props
}: KpiBlockProps) {
  const isPositiveChange = change !== undefined && change >= 0;
  const changeDisplay = change !== undefined ? Math.abs(change).toFixed(1) + "%" : undefined;
  
  const valueText = `${prefix}${formatter(value)}${suffix}`;
  
  const textColorClass = variant === "default" 
    ? "text-finance-text" 
    : "text-white";

  return (
    <Card
      className={cn(
        kpiBlockVariants({ variant, size, className }),
        "overflow-hidden"
      )}
      {...props}
    >
      <CardContent className={cn("p-6", size === "sm" ? "p-4" : "")}>
        <div className="flex justify-between items-start">
          <div>
            <h3 className={cn("text-sm font-medium opacity-80", textColorClass)}>
              {title}
            </h3>
            {loading ? (
              <div className="h-8 w-24 bg-muted animate-pulse rounded mt-1"></div>
            ) : (
              <div className="flex items-baseline mt-1">
                <p className={cn("text-2xl font-bold", textColorClass)}>{valueText}</p>
                {subtitle && (
                  <span className={cn("ml-1 text-xs opacity-70", textColorClass)}>
                    {subtitle}
                  </span>
                )}
              </div>
            )}
          </div>
          {icon && <div className={textColorClass}>{icon}</div>}
        </div>

        {change !== undefined && (
          <div className="mt-4">
            <Badge 
              className={cn(
                "px-2 py-1 text-xs font-medium", 
                variant !== "default" 
                  ? isPositiveChange 
                    ? "bg-white/20 text-white"
                    : "bg-white/20 text-white"
                  : isPositiveChange 
                    ? "bg-finance-secondary/10 text-finance-secondary"
                    : "bg-finance-danger/10 text-finance-danger"
              )}
            >
              <span className="flex items-center gap-1">
                {isPositiveChange ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {isPositiveChange ? "+" : "-"}{changeDisplay}
              </span>
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
