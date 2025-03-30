
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ForecastCard from "@/components/dashboard/ForecastCard";
import { ChevronDown, Download, Calendar, Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import SalesUploader from "@/components/forecast/SalesUploader";
import MonthlyExpenseTracker from "@/components/forecast/MonthlyExpenseTracker";

// Sample forecast data
const forecastData = [
  { month: 'Ene', ingresos: 8500, gastos: 7200, beneficios: 1300 },
  { month: 'Feb', ingresos: 9200, gastos: 7400, beneficios: 1800 },
  { month: 'Mar', ingresos: 9800, gastos: 7900, beneficios: 1900 },
  { month: 'Abr', ingresos: 10500, gastos: 8300, beneficios: 2200 },
  { month: 'May', ingresos: 11200, gastos: 8600, beneficios: 2600 },
  { month: 'Jun', ingresos: 12000, gastos: 9100, beneficios: 2900 },
  { month: 'Jul', ingresos: 11500, gastos: 9300, beneficios: 2200 },
  { month: 'Ago', ingresos: 10800, gastos: 8800, beneficios: 2000 },
  { month: 'Sep', ingresos: 12500, gastos: 9500, beneficios: 3000 },
  { month: 'Oct', ingresos: 13200, gastos: 10100, beneficios: 3100 },
  { month: 'Nov', ingresos: 14000, gastos: 10500, beneficios: 3500 },
  { month: 'Dic', ingresos: 15200, gastos: 11200, beneficios: 4000 },
];

// Custom metrics for forecast performance
const projections = [
  { 
    name: "Ingresos Anuales", 
    currentValue: "€138.400", 
    projectedValue: "€155.000", 
    growth: "+12.0%",
    progress: 89,
    category: "revenue"
  },
  { 
    name: "Gastos Anuales", 
    currentValue: "€107.900", 
    projectedValue: "€120.000", 
    growth: "+11.2%",
    progress: 90,
    category: "expenses"
  },
  { 
    name: "Beneficio Neto", 
    currentValue: "€30.500", 
    projectedValue: "€35.000", 
    growth: "+14.8%",
    progress: 87,
    category: "profit"
  },
  { 
    name: "ROI", 
    currentValue: "22.0%", 
    projectedValue: "24.5%", 
    growth: "+2.5%",
    progress: 90,
    category: "roi"
  },
];

export default function Forecast() {
  const [timeRange, setTimeRange] = useState("year");
  const [forecastType, setForecastType] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [includeHistorical, setIncludeHistorical] = useState(true);
  const [activeTab, setActiveTab] = useState("forecast"); // New state for tabs

  // Function to handle timeRange change
  const handleTimeRangeChange = (value: string) => {
    setIsLoading(true);
    setTimeRange(value);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Previsión actualizada", {
        description: `Datos de previsión actualizados para ${value === "year" ? "año completo" : value === "quarter" ? "trimestre" : "mes"}`
      });
    }, 800);
  };

  // Function to refresh forecasts
  const handleRefreshForecast = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Previsión actualizada", {
        description: "Datos de previsión actualizados correctamente"
      });
    }, 1200);
  };

  // Function to export data
  const handleExportData = () => {
    toast.success("Datos exportados", {
      description: "Los datos de previsión se han exportado correctamente"
    });
  };

  return (
    <Layout>
      <main className="flex-1 p-6 text-finance-text">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold">Previsiones Financieras</h2>
              <p className="text-muted-foreground">
                Analice y planifique el rendimiento financiero futuro
              </p>
            </div>
            <div className="flex gap-2">
              <Select defaultValue="2023" onValueChange={(value) => {
                toast.success(`Año seleccionado: ${value}`);
              }}>
                <SelectTrigger className="w-[120px]">
                  <Calendar className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Año" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                </SelectContent>
              </Select>
              <Button 
                variant="outline"
                onClick={handleRefreshForecast}
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : null}
                Actualizar
              </Button>
              <Button 
                variant="outline"
                onClick={handleExportData}
              >
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>

          {/* New tabs for main content */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="forecast">Previsión</TabsTrigger>
              <TabsTrigger value="sales">Ventas</TabsTrigger>
              <TabsTrigger value="expenses">Gastos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="forecast">
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-6">
                  <Tabs value={forecastType} onValueChange={setForecastType} className="w-[400px]">
                    <TabsList>
                      <TabsTrigger value="all">Todo</TabsTrigger>
                      <TabsTrigger value="revenue">Ingresos</TabsTrigger>
                      <TabsTrigger value="expenses">Gastos</TabsTrigger>
                      <TabsTrigger value="profit">Beneficios</TabsTrigger>
                    </TabsList>
                  </Tabs>
                  
                  <div className="flex gap-4 items-center">
                    <span className="text-sm">Incluir datos históricos:</span>
                    <Switch 
                      checked={includeHistorical}
                      onCheckedChange={setIncludeHistorical}
                    />
                    <Select value={timeRange} onValueChange={handleTimeRangeChange}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Periodo de previsión" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="month">Próximo mes</SelectItem>
                        <SelectItem value="quarter">Próximo trimestre</SelectItem>
                        <SelectItem value="year">Año completo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
                  {projections
                    .filter(p => forecastType === 'all' || p.category === forecastType)
                    .map((projection, index) => (
                      <Card key={index} className={index === 2 ? "border-finance-secondary" : ""}>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">
                            {projection.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">{projection.projectedValue}</div>
                          <div className="flex items-center justify-between mt-2">
                            <div className="text-sm">Actual: {projection.currentValue}</div>
                            <Badge 
                              className={`bg-${projection.category === 'expenses' ? 'finance-light text-finance-text' : 'finance-primary/10 text-finance-primary'}`}
                            >
                              {projection.growth}
                            </Badge>
                          </div>
                          <Progress value={projection.progress} className="h-2 mt-2" />
                          <div className="text-xs text-muted-foreground mt-1">
                            {projection.progress}% del objetivo anual
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  }
                </div>

                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Evolución de Ingresos y Gastos</CardTitle>
                    <CardDescription>Previsión para los próximos {timeRange === "year" ? "12 meses" : timeRange === "quarter" ? "3 meses" : "30 días"}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={forecastData}
                          margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip formatter={(value) => [`€${value}`, '']} />
                          <Legend />
                          {(forecastType === 'all' || forecastType === 'revenue') && (
                            <Line 
                              type="monotone" 
                              dataKey="ingresos" 
                              stroke="#227C9D" 
                              strokeWidth={2} 
                              name="Ingresos" 
                              dot={{ r: 4 }}
                              activeDot={{ r: 6 }}
                            />
                          )}
                          {(forecastType === 'all' || forecastType === 'expenses') && (
                            <Line 
                              type="monotone" 
                              dataKey="gastos" 
                              stroke="#FE6D73" 
                              strokeWidth={2} 
                              name="Gastos" 
                              dot={{ r: 4 }}
                              activeDot={{ r: 6 }}
                            />
                          )}
                          {(forecastType === 'all' || forecastType === 'profit') && (
                            <Line 
                              type="monotone" 
                              dataKey="beneficios" 
                              stroke="#17C3B2" 
                              strokeWidth={2} 
                              name="Beneficios" 
                              dot={{ r: 4 }}
                              activeDot={{ r: 6 }}
                            />
                          )}
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Simulación de Escenarios</CardTitle>
                        <CardDescription>Visualice diferentes escenarios financieros</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <Button 
                            className="w-full" 
                            style={{ backgroundColor: "#227C9D" }}
                            onClick={() => toast.success("Simulación optimista", {
                              description: "Previsión actualizada con escenario optimista"
                            })}
                          >
                            Escenario Optimista
                          </Button>
                          <Button 
                            className="w-full" 
                            variant="outline"
                            onClick={() => toast.success("Simulación realista", {
                              description: "Previsión actualizada con escenario realista"
                            })}
                          >
                            Escenario Realista
                          </Button>
                          <Button 
                            className="w-full" 
                            variant="outline"
                            onClick={() => toast.success("Simulación pesimista", {
                              description: "Previsión actualizada con escenario pesimista"
                            })}
                          >
                            Escenario Pesimista
                          </Button>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="font-medium mb-2">Parámetros de simulación</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm mb-1">Variación Ingresos: <span className="font-medium">+8.5%</span></p>
                              <Progress value={85} className="h-1.5" />
                            </div>
                            <div>
                              <p className="text-sm mb-1">Variación Gastos: <span className="font-medium">+5.2%</span></p>
                              <Progress value={52} className="h-1.5" />
                            </div>
                            <div>
                              <p className="text-sm mb-1">Inflación Estimada: <span className="font-medium">3.2%</span></p>
                              <Progress value={32} className="h-1.5" />
                            </div>
                            <div>
                              <p className="text-sm mb-1">Crecimiento Mercado: <span className="font-medium">4.8%</span></p>
                              <Progress value={48} className="h-1.5" />
                            </div>
                          </div>
                          <div className="mt-4 text-right">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => toast.success("Parámetros ajustados", {
                                description: "Los parámetros de simulación han sido ajustados"
                              })}
                            >
                              Ajustar Parámetros
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <ForecastCard />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="sales">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <SalesUploader />
                </div>
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Resumen de Ventas</CardTitle>
                      <CardDescription>
                        Análisis de los datos de ventas importados
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-medium text-sm mb-2">Última importación</h3>
                          <p className="text-muted-foreground text-sm">
                            No hay datos importados recientemente. Sube un archivo Excel para ver el análisis.
                          </p>
                        </div>
                        
                        <div className="pt-2">
                          <h3 className="font-medium text-sm mb-2">Instrucciones para importar datos</h3>
                          <ul className="text-sm space-y-1 list-disc pl-5 text-muted-foreground">
                            <li>El archivo debe estar en formato Excel (.xlsx o .xls)</li>
                            <li>La primera fila debe contener los encabezados de columnas</li>
                            <li>Incluye columnas para fecha, concepto, cliente e importe</li>
                            <li>Los importes deben estar en formato numérico</li>
                          </ul>
                        </div>
                        
                        <div className="bg-finance-primary/10 p-3 rounded-md">
                          <p className="text-sm text-finance-primary">
                            Los datos importados se utilizarán para actualizar automáticamente las previsiones financieras.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="expenses">
              <MonthlyExpenseTracker />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </Layout>
  );
}
