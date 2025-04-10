import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { LineChart, AreaChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar, Download, Filter, Plus } from "lucide-react";
import { Layout } from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const revenueData = [
  { month: 'Ene', sales: 8500, services: 2500, subscriptions: 1500, total: 12500 },
  { month: 'Feb', sales: 9200, services: 3000, subscriptions: 1800, total: 14000 },
  { month: 'Mar', sales: 9800, services: 3200, subscriptions: 2000, total: 15000 },
  { month: 'Abr', sales: 10200, services: 3500, subscriptions: 2200, total: 15900 },
  { month: 'May', sales: 10800, services: 3800, subscriptions: 2400, total: 17000 },
  { month: 'Jun', sales: 11500, services: 4000, subscriptions: 2600, total: 18100 },
  { month: 'Jul', sales: 12000, services: 4200, subscriptions: 2800, total: 19000 },
  { month: 'Ago', sales: 11800, services: 4000, subscriptions: 3000, total: 18800 },
  { month: 'Sep', sales: 12500, services: 4300, subscriptions: 3200, total: 20000 },
  { month: 'Oct', sales: 13200, services: 4500, subscriptions: 3400, total: 21100 },
  { month: 'Nov', sales: 14000, services: 4800, subscriptions: 3600, total: 22400 },
  { month: 'Dic', sales: 15000, services: 5000, subscriptions: 4000, total: 24000 },
];

const revenueBySource = [
  { source: "Ventas de Productos", amount: 145000, percentage: 60.4 },
  { source: "Servicios", amount: 52000, percentage: 21.7 },
  { source: "Suscripciones", amount: 43000, percentage: 17.9 },
];

export default function Revenue() {
  const { toast } = useToast();
  const [yearFilter, setYearFilter] = useState("2023");
  
  const handleExport = () => {
    toast({
      title: "Exportando datos",
      description: "Los datos de ingresos se están exportando",
    });
    // Aquí iría la lógica real de exportación
    setTimeout(() => {
      toast({
        title: "Exportación completada",
        description: "Los datos se han exportado correctamente",
        variant: "default",
      });
    }, 1500);
  };
  
  const handleFilter = () => {
    toast({
      title: "Filtros aplicados",
      description: "Mostrando datos filtrados",
    });
    // Aquí iría la lógica real de filtrado
  };
  
  const handleAddRevenue = () => {
    toast({
      title: "Nuevo ingreso",
      description: "Funcionalidad para añadir un nuevo ingreso en desarrollo",
    });
    // Aquí iría la lógica para abrir un formulario de nuevo ingreso
  };
  
  const handleYearChange = () => {
    // Alternar entre 2022 y 2023 para demostración
    const newYear = yearFilter === "2023" ? "2022" : "2023";
    setYearFilter(newYear);
    
    toast({
      title: `Año cambiado: ${newYear}`,
      description: `Mostrando datos del año ${newYear}`,
    });
  };

  return (
    <Layout>
      <div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold">Análisis de Ingresos</h2>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="h-9" onClick={handleYearChange}>
              <Calendar className="h-4 w-4 mr-2" />
              Año {yearFilter}
            </Button>
            <Button variant="outline" size="sm" className="h-9" onClick={handleFilter}>
              <Filter className="h-4 w-4 mr-2" />
              Filtrar
            </Button>
            <Button variant="outline" size="sm" className="h-9" onClick={handleExport}>
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
            <Button 
              style={{ backgroundColor: "#227C9D" }} 
              size="sm" 
              className="h-9"
              onClick={handleAddRevenue}
            >
              <Plus className="h-4 w-4 mr-2" />
              Añadir Ingreso
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Ingresos Totales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">€240.000</div>
              <div className="text-sm text-finance-secondary flex items-center">
                +12,5% respecto al año anterior
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Ingreso Mensual Promedio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">€20.000</div>
              <div className="text-sm text-finance-secondary flex items-center">
                +8,3% respecto al año anterior
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Tasa de Crecimiento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">12,5%</div>
              <div className="text-sm text-finance-secondary flex items-center">
                +2,1% respecto al año anterior
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="mb-8 shadow-sm">
          <CardHeader>
            <CardTitle>Tendencias de Ingresos</CardTitle>
            <CardDescription>Desglose mensual de ingresos por fuente</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="line">
              <div className="flex justify-between items-center mb-6">
                <TabsList>
                  <TabsTrigger value="line">Gráfico Lineal</TabsTrigger>
                  <TabsTrigger value="area">Gráfico de Área</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="line" className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={revenueData}
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
                    <Tooltip formatter={(value) => [`€${value}`, 'Ingresos']} />
                    <Legend />
                    <Line type="monotone" dataKey="sales" stroke="#227C9D" strokeWidth={2} name="Ventas de Productos" />
                    <Line type="monotone" dataKey="services" stroke="#17C3B2" strokeWidth={2} name="Servicios" />
                    <Line type="monotone" dataKey="subscriptions" stroke="#FFCB77" strokeWidth={2} name="Suscripciones" />
                    <Line type="monotone" dataKey="total" stroke="#FE6D73" strokeWidth={3} name="Ingresos Totales" />
                  </LineChart>
                </ResponsiveContainer>
              </TabsContent>
              <TabsContent value="area" className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={revenueData}
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
                    <Tooltip formatter={(value) => [`€${value}`, 'Ingresos']} />
                    <Legend />
                    <Area type="monotone" dataKey="sales" stackId="1" stroke="#227C9D" fill="#227C9D" name="Ventas de Productos" />
                    <Area type="monotone" dataKey="services" stackId="1" stroke="#17C3B2" fill="#17C3B2" name="Servicios" />
                    <Area type="monotone" dataKey="subscriptions" stackId="1" stroke="#FFCB77" fill="#FFCB77" name="Suscripciones" />
                  </AreaChart>
                </ResponsiveContainer>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Ingresos por Fuente</CardTitle>
              <CardDescription>Desglose de ingresos por área de negocio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {revenueBySource.map((item, index) => (
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
          
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Ingresos Trimestrales</CardTitle>
              <CardDescription>Rendimiento de ingresos por trimestre</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="bg-muted/20 p-4 rounded-lg">
                  <div className="text-sm font-medium text-muted-foreground mb-2">T1</div>
                  <div className="text-2xl font-bold">€41.500</div>
                  <div className="text-sm text-finance-secondary">+10,2% Interanual</div>
                </div>
                <div className="bg-muted/20 p-4 rounded-lg">
                  <div className="text-sm font-medium text-muted-foreground mb-2">T2</div>
                  <div className="text-2xl font-bold">€51.000</div>
                  <div className="text-sm text-finance-secondary">+12,8% Interanual</div>
                </div>
                <div className="bg-muted/20 p-4 rounded-lg">
                  <div className="text-sm font-medium text-muted-foreground mb-2">T3</div>
                  <div className="text-2xl font-bold">€57.800</div>
                  <div className="text-sm text-finance-secondary">+13,5% Interanual</div>
                </div>
                <div className="bg-muted/20 p-4 rounded-lg">
                  <div className="text-sm font-medium text-muted-foreground mb-2">T4</div>
                  <div className="text-2xl font-bold">€89.700</div>
                  <div className="text-sm text-finance-secondary">+15,2% Interanual</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
