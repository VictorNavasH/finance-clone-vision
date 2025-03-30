
import AppSidebar from "@/components/AppSidebar";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar, Download, Filter, Plus, ArrowRight, Check, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const budgetData = [
  { month: 'Ene', presupuestado: 12000, real: 10000, variacion: -2000 },
  { month: 'Feb', presupuestado: 12500, real: 10350, variacion: -2150 },
  { month: 'Mar', presupuestado: 13000, real: 10700, variacion: -2300 },
  { month: 'Abr', presupuestado: 13500, real: 11050, variacion: -2450 },
  { month: 'May', presupuestado: 14000, real: 11400, variacion: -2600 },
  { month: 'Jun', presupuestado: 14500, real: 11750, variacion: -2750 },
  { month: 'Jul', presupuestado: 15000, real: 12100, variacion: -2900 },
  { month: 'Ago', presupuestado: 15500, real: 12450, variacion: -3050 },
  { month: 'Sep', presupuestado: 16000, real: 12800, variacion: -3200 },
  { month: 'Oct', presupuestado: 16500, real: 13150, variacion: -3350 },
  { month: 'Nov', presupuestado: 17000, real: 13500, variacion: -3500 },
  { month: 'Dic', presupuestado: 17500, real: 13850, variacion: -3650 },
];

const departmentBudgets = [
  { 
    department: "Operaciones", 
    allocated: 60000, 
    used: 48000, 
    remaining: 12000, 
    progress: 80, 
    status: "normal"
  },
  { 
    department: "Marketing", 
    allocated: 30000, 
    used: 28500, 
    remaining: 1500, 
    progress: 95, 
    status: "warning"
  },
  { 
    department: "Administración", 
    allocated: 20000, 
    used: 18000, 
    remaining: 2000, 
    progress: 90, 
    status: "normal"
  },
  { 
    department: "Desarrollo", 
    allocated: 40000, 
    used: 32000, 
    remaining: 8000, 
    progress: 80, 
    status: "normal"
  },
  { 
    department: "Ventas", 
    allocated: 25000, 
    used: 25000, 
    remaining: 0, 
    progress: 100, 
    status: "critical"
  },
];

export default function Budget() {
  return (
    <div className="flex h-screen overflow-hidden">
      <AppSidebar />
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Header />
        <main className="flex-1 p-6 text-finance-text">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Gestión de Presupuesto</h2>
            <div className="flex gap-2">
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Año 2023
              </Button>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filtrar
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
              <Button style={{ backgroundColor: "#227C9D" }}>
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Presupuesto
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Presupuesto Anual
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">€175.000</div>
                <div className="text-sm text-finance-secondary flex items-center">
                  +12,5% respecto al año anterior
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Gasto Acumulado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">€142.100</div>
                <div className="text-sm flex items-center">
                  81,2% del presupuesto anual
                </div>
                <Progress value={81.2} className="h-2 mt-2" style={{ backgroundColor: "#FEF9EF" }} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Variación Presupuestaria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-finance-secondary">+€32.900</div>
                <div className="text-sm text-finance-secondary flex items-center">
                  18,8% restante disponible
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Evolución del Presupuesto</CardTitle>
              <CardDescription>Comparativa entre presupuesto y gasto real</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={budgetData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`€${value}`, '']} />
                    <Legend />
                    <Line type="monotone" dataKey="presupuestado" stroke="#227C9D" strokeWidth={2} name="Presupuestado" />
                    <Line type="monotone" dataKey="real" stroke="#FE6D73" strokeWidth={2} name="Gasto Real" />
                    <Line type="monotone" dataKey="variacion" stroke="#17C3B2" strokeWidth={2} name="Variación" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Presupuesto por Departamento</CardTitle>
              <CardDescription>Estado actual de los presupuestos departamentales</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="pb-2 font-medium">Departamento</th>
                      <th className="pb-2 font-medium">Asignado</th>
                      <th className="pb-2 font-medium">Utilizado</th>
                      <th className="pb-2 font-medium">Restante</th>
                      <th className="pb-2 font-medium">Progreso</th>
                      <th className="pb-2 font-medium">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {departmentBudgets.map((dept, index) => (
                      <tr key={index} className="border-b last:border-0">
                        <td className="py-3">{dept.department}</td>
                        <td className="py-3">€{dept.allocated.toLocaleString('es-ES')}</td>
                        <td className="py-3">€{dept.used.toLocaleString('es-ES')}</td>
                        <td className="py-3">€{dept.remaining.toLocaleString('es-ES')}</td>
                        <td className="py-3 w-48">
                          <div className="flex items-center">
                            <div className="w-full mr-2">
                              <Progress 
                                value={dept.progress} 
                                className="h-2" 
                                style={{
                                  backgroundColor: "#FEF9EF",
                                  color: dept.status === "critical" ? "#FE6D73" : dept.status === "warning" ? "#FFCB77" : "#17C3B2"
                                }} 
                              />
                            </div>
                            <span className="text-xs">{dept.progress}%</span>
                          </div>
                        </td>
                        <td className="py-3">
                          {dept.status === "critical" ? (
                            <Badge className="bg-finance-danger/20 text-finance-danger">
                              <AlertTriangle className="h-3 w-3 mr-1" />
                              Agotado
                            </Badge>
                          ) : dept.status === "warning" ? (
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
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 text-right">
                <Button variant="outline" className="text-finance-primary">
                  Gestionar Asignaciones de Presupuesto
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
