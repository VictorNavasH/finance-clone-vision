
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { KpiBlock } from "@/components/ui/kpi-block";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription } from "@/components/ui/form";
import { 
  TrendingUp, TrendingDown, DollarSign, Users, Percent, 
  Calendar, BarChart4, PieChart, GaugeCircle 
} from "lucide-react";
import { useForm } from "react-hook-form";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell, 
  BarChart, Bar
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// Definición de tipos 
interface FormData {
  period: string;
  averageTicket: number;
  totalAttendance: number;
  foodCostPercentage: number;
  variableStaffPercentage: number;
  otherVariableCostsPercentage: number;
  rent: number;
  fixedStaffCosts: number;
  otherFixedCosts: number;
  totalSeats: number;
  servicesPerDay: number;
  operationDays: number;
}

interface CalculatedResults {
  totalSales: number;
  totalVariableCost: number;
  variableCostPerAttendee: number;
  contributionMarginPerAttendee: number;
  totalFixedCosts: number;
  breakEvenPoint: number;
  breakEvenPointSales: number;
  profitLoss: number;
  variableCostsPercentage: number;
  fixedCostsPercentage: number;
  staffCostsPercentage: number;
  rentPercentage: number;
  totalPeriodCapacity: number;
  averageOccupancy: number;
  netProfitMargin: number;
  profitPerAttendee: number;
  attendeesPerSeatPerDay: number;
  breakEvenOccupancy: number;
  totalAttendance: number;
}

export default function OccupancyDashboard() {
  // Estado para almacenar los resultados calculados
  const [results, setResults] = useState<CalculatedResults | null>(null);
  const [activeTab, setActiveTab] = useState("input");

  // Configuración del formulario
  const form = useForm<FormData>({
    defaultValues: {
      period: `${new Date().toLocaleString('es-ES', { month: 'long' })} ${new Date().getFullYear()}`,
      averageTicket: 25,
      totalAttendance: 1200,
      foodCostPercentage: 30,
      variableStaffPercentage: 5,
      otherVariableCostsPercentage: 8,
      rent: 3000,
      fixedStaffCosts: 12000,
      otherFixedCosts: 4000,
      totalSeats: 50,
      servicesPerDay: 2,
      operationDays: 30
    }
  });

  // Calcular resultados cuando cambian los valores del formulario
  const formValues = form.watch();
  
  useEffect(() => {
    calculateResults(formValues);
  }, [formValues]);

  // Función para calcular todos los resultados
  const calculateResults = (data: FormData) => {
    // Ventas totales
    const totalSales = data.totalAttendance * data.averageTicket;
    
    // Costo variable total y por comensal
    const totalVariableCostPercentage = data.foodCostPercentage + data.variableStaffPercentage + data.otherVariableCostsPercentage;
    const totalVariableCost = totalSales * (totalVariableCostPercentage / 100);
    const variableCostPerAttendee = data.totalAttendance > 0 ? totalVariableCost / data.totalAttendance : 0;
    
    // Margen de contribución por comensal
    const contributionMarginPerAttendee = data.averageTicket - variableCostPerAttendee;
    
    // Costos fijos totales
    const totalFixedCosts = data.rent + data.fixedStaffCosts + data.otherFixedCosts;
    
    // Punto de equilibrio
    const breakEvenPoint = contributionMarginPerAttendee > 0 ? totalFixedCosts / contributionMarginPerAttendee : 0;
    const breakEvenPointSales = breakEvenPoint * data.averageTicket;
    
    // Beneficio/pérdida
    const profitLoss = (data.totalAttendance * contributionMarginPerAttendee) - totalFixedCosts;
    
    // Porcentajes sobre ventas
    const variableCostsPercentage = totalSales > 0 ? (totalVariableCost / totalSales) * 100 : 0;
    const fixedCostsPercentage = totalSales > 0 ? (totalFixedCosts / totalSales) * 100 : 0;
    
    // Costo de personal sobre ventas
    const variableStaffCost = totalSales * (data.variableStaffPercentage / 100);
    const staffCostsPercentage = totalSales > 0 ? ((data.fixedStaffCosts + variableStaffCost) / totalSales) * 100 : 0;
    
    // Porcentaje de renta sobre ventas
    const rentPercentage = totalSales > 0 ? (data.rent / totalSales) * 100 : 0;
    
    // Capacidad total del periodo
    const totalPeriodCapacity = data.totalSeats * data.servicesPerDay * data.operationDays;
    
    // Ocupación media
    const averageOccupancy = totalPeriodCapacity > 0 ? (data.totalAttendance / totalPeriodCapacity) * 100 : 0;
    
    // Ocupación necesaria para BEP
    const breakEvenOccupancy = totalPeriodCapacity > 0 ? (breakEvenPoint / totalPeriodCapacity) * 100 : 0;
    
    // Margen de beneficio neto
    const netProfitMargin = totalSales > 0 ? (profitLoss / totalSales) * 100 : 0;
    
    // Beneficio por comensal
    const profitPerAttendee = data.totalAttendance > 0 ? profitLoss / data.totalAttendance : 0;
    
    // Comensales por asiento por día
    const attendeesPerSeatPerDay = (data.totalSeats * data.operationDays) > 0 
      ? data.totalAttendance / (data.totalSeats * data.operationDays) 
      : 0;
    
    setResults({
      totalSales,
      totalVariableCost,
      variableCostPerAttendee,
      contributionMarginPerAttendee,
      totalFixedCosts,
      breakEvenPoint,
      breakEvenPointSales,
      profitLoss,
      variableCostsPercentage,
      fixedCostsPercentage,
      staffCostsPercentage,
      rentPercentage,
      totalPeriodCapacity,
      averageOccupancy,
      netProfitMargin,
      profitPerAttendee,
      attendeesPerSeatPerDay,
      breakEvenOccupancy,
      totalAttendance: data.totalAttendance
    });
  };

  // Formatear número como EUR
  const formatEUR = (value: number) => {
    return value.toLocaleString('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  // Formatear número como porcentaje
  const formatPercent = (value: number) => {
    return value.toFixed(1) + '%';
  };

  // Formatear número con dos decimales
  const formatNumber = (value: number) => {
    return value.toLocaleString('es-ES', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  // Generar datos para el gráfico de punto de equilibrio
  const generateBreakEvenChartData = () => {
    if (!results) return [];
    
    const maxAttendees = Math.max(results.totalPeriodCapacity, results.breakEvenPoint * 1.5, results.totalAttendance * 1.2);
    const step = Math.ceil(maxAttendees / 10);
    
    return Array.from({ length: 11 }, (_, i) => {
      const attendees = i * step;
      const revenue = attendees * formValues.averageTicket;
      const variableCosts = attendees * results.variableCostPerAttendee;
      const totalCosts = variableCosts + results.totalFixedCosts;
      
      return {
        attendees,
        revenue,
        totalCosts,
        fixedCosts: results.totalFixedCosts,
      };
    });
  };

  // Generar datos para el gráfico de desglose de costos
  const generateCostBreakdownData = () => {
    if (!results) return [];
    
    const foodCost = formValues.averageTicket * (formValues.foodCostPercentage / 100);
    const variableStaffCost = formValues.averageTicket * (formValues.variableStaffPercentage / 100);
    const otherVariableCost = formValues.averageTicket * (formValues.otherVariableCostsPercentage / 100);
    
    const profitPercentage = results.netProfitMargin;
    
    return [
      { name: 'Materia Prima', value: formValues.foodCostPercentage, amount: foodCost },
      { name: 'Personal Variable', value: formValues.variableStaffPercentage, amount: variableStaffCost },
      { name: 'Otros Variables', value: formValues.otherVariableCostsPercentage, amount: otherVariableCost },
      { name: 'Alquiler', value: results.rentPercentage, amount: formValues.rent / results.totalSales * formValues.averageTicket },
      { name: 'Personal Fijo', value: results.staffCostsPercentage - formValues.variableStaffPercentage, amount: formValues.fixedStaffCosts / results.totalSales * formValues.averageTicket },
      { name: 'Otros Fijos', value: results.fixedCostsPercentage - results.rentPercentage - (results.staffCostsPercentage - formValues.variableStaffPercentage), amount: formValues.otherFixedCosts / results.totalSales * formValues.averageTicket },
      { name: 'Beneficio', value: profitPercentage, amount: profitPercentage / 100 * formValues.averageTicket }
    ].filter(item => item.value > 0);
  };

  // Generar datos para el gráfico de ocupación
  const generateOccupancyChartData = () => {
    if (!results) return [];
    
    return [
      { name: 'Ocupación Actual', value: results.averageOccupancy },
      { name: 'Ocupación BEP', value: results.breakEvenOccupancy },
      { name: 'Capacidad Total', value: 100 }
    ];
  };

  // Colores para los gráficos
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#FF6B6B', '#4CAF50'];

  return (
    <div className="p-3 sm:p-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-3">
        <h1 className="text-2xl sm:text-3xl font-bold text-finance-text">
          Dashboard de Rentabilidad y Ocupación
        </h1>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-3">
        <TabsList className="w-full sm:w-auto grid grid-cols-2 sm:inline-flex">
          <TabsTrigger value="input">Datos de Entrada</TabsTrigger>
          <TabsTrigger value="results">Resultados</TabsTrigger>
        </TabsList>
      
        <TabsContent value="input" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Entradas de Datos</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Grupo 1: Datos básicos */}
                  <div className="space-y-3">
                    <h3 className="font-medium text-sm text-muted-foreground mb-2">Datos Básicos</h3>
                    
                    <FormField
                      control={form.control}
                      name="period"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Periodo Analizado</FormLabel>
                          <FormControl>
                            <Input placeholder="Abril 2025" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="averageTicket"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ticket Medio (€)</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              min={0} 
                              step={0.01} 
                              placeholder="25.00" 
                              {...field}
                              onChange={(e) => field.onChange(parseFloat(e.target.value))} 
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="totalAttendance"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Asistencia Total (Nº Comensales)</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              min={0} 
                              step={1} 
                              placeholder="1200" 
                              {...field}
                              onChange={(e) => field.onChange(parseInt(e.target.value))} 
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  {/* Grupo 2: Costos Variables */}
                  <div className="space-y-3">
                    <h3 className="font-medium text-sm text-muted-foreground mb-2">Costos Variables (%)</h3>
                    
                    <FormField
                      control={form.control}
                      name="foodCostPercentage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>% Costo Materia Prima</FormLabel>
                          <div className="flex items-center gap-2">
                            <FormControl className="flex-1">
                              <Input 
                                type="number" 
                                min={0} 
                                max={100} 
                                step={0.1} 
                                placeholder="30" 
                                {...field}
                                onChange={(e) => field.onChange(parseFloat(e.target.value))} 
                              />
                            </FormControl>
                            <span className="text-sm">%</span>
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="variableStaffPercentage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>% Costo Personal Variable</FormLabel>
                          <div className="flex items-center gap-2">
                            <FormControl className="flex-1">
                              <Input 
                                type="number" 
                                min={0} 
                                max={100} 
                                step={0.1} 
                                placeholder="5" 
                                {...field}
                                onChange={(e) => field.onChange(parseFloat(e.target.value))} 
                              />
                            </FormControl>
                            <span className="text-sm">%</span>
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="otherVariableCostsPercentage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>% Otros Costos Variables</FormLabel>
                          <div className="flex items-center gap-2">
                            <FormControl className="flex-1">
                              <Input 
                                type="number" 
                                min={0} 
                                max={100} 
                                step={0.1} 
                                placeholder="8" 
                                {...field}
                                onChange={(e) => field.onChange(parseFloat(e.target.value))} 
                              />
                            </FormControl>
                            <span className="text-sm">%</span>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  {/* Grupo 3: Costos Fijos */}
                  <div className="space-y-3">
                    <h3 className="font-medium text-sm text-muted-foreground mb-2">Costos Fijos Mensuales (€)</h3>
                    
                    <FormField
                      control={form.control}
                      name="rent"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Alquiler (€)</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              min={0} 
                              step={100} 
                              placeholder="3000" 
                              {...field}
                              onChange={(e) => field.onChange(parseFloat(e.target.value))} 
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="fixedStaffCosts"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Costos Personal Fijo (€)</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              min={0} 
                              step={100} 
                              placeholder="12000" 
                              {...field}
                              onChange={(e) => field.onChange(parseFloat(e.target.value))} 
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="otherFixedCosts"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Otros Costos Fijos (€)</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              min={0} 
                              step={100} 
                              placeholder="4000" 
                              {...field}
                              onChange={(e) => field.onChange(parseFloat(e.target.value))} 
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  {/* Grupo 4: Capacidad y Operación */}
                  <div className="space-y-3 md:col-span-2 lg:col-span-3">
                    <h3 className="font-medium text-sm text-muted-foreground mb-2">Capacidad y Operación</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="totalSeats"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Capacidad Total (Nº Asientos)</FormLabel>
                            <FormControl>
                              <Input 
                                type="number" 
                                min={1} 
                                step={1} 
                                placeholder="50" 
                                {...field}
                                onChange={(e) => field.onChange(parseInt(e.target.value))} 
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="servicesPerDay"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nº Servicios por Día</FormLabel>
                            <FormControl>
                              <Input 
                                type="number" 
                                min={1} 
                                max={5} 
                                step={1} 
                                placeholder="2" 
                                {...field}
                                onChange={(e) => field.onChange(parseInt(e.target.value))} 
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="operationDays"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Días de Operación en el Periodo</FormLabel>
                            <FormControl>
                              <Input 
                                type="number" 
                                min={1} 
                                max={31} 
                                step={1} 
                                placeholder="30" 
                                {...field}
                                onChange={(e) => field.onChange(parseInt(e.target.value))} 
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end mt-6">
                  <Button 
                    type="button" 
                    onClick={() => setActiveTab("results")}
                    className="bg-finance-primary hover:bg-finance-primary/90"
                  >
                    Ver Resultados
                  </Button>
                </div>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="results" className="mt-0">
          {results && (
            <>
              {/* KPIs principales */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
                <KpiBlock
                  title="Beneficio / Pérdida"
                  value={results.profitLoss}
                  prefix=""
                  formatter={(val) => formatEUR(Number(val))}
                  change={results.profitLoss > 0 ? 
                    (results.profitLoss / Math.abs(results.totalFixedCosts) * 100) : 
                    -(Math.abs(results.profitLoss) / results.totalFixedCosts * 100)}
                  icon={results.profitLoss >= 0 ? <TrendingUp className="h-5 w-5" /> : <TrendingDown className="h-5 w-5" />}
                  variant={results.profitLoss >= 0 ? "primary" : "danger"}
                />
                
                <KpiBlock
                  title="Margen de Beneficio Neto"
                  value={results.netProfitMargin}
                  formatter={(val) => formatPercent(Number(val))}
                  change={results.netProfitMargin}
                  icon={<Percent className="h-5 w-5" />}
                  variant={results.netProfitMargin >= 0 ? "primary" : "danger"}
                />
                
                <KpiBlock
                  title="Punto de Equilibrio"
                  value={results.breakEvenPoint}
                  formatter={(val) => Math.round(Number(val)).toLocaleString('es-ES')}
                  suffix=" comensales"
                  change={((results.totalAttendance - results.breakEvenPoint) / results.breakEvenPoint) * 100}
                  icon={<Users className="h-5 w-5" />}
                  variant="default"
                />
                
                <KpiBlock
                  title="Comensales vs BEP"
                  value={results.totalAttendance - results.breakEvenPoint}
                  formatter={(val) => {
                    const num = Number(val);
                    return (num >= 0 ? "+" : "") + Math.round(num).toLocaleString('es-ES');
                  }}
                  change={(results.totalAttendance - results.breakEvenPoint) / results.breakEvenPoint * 100}
                  icon={<Users className="h-5 w-5" />}
                  variant={results.totalAttendance >= results.breakEvenPoint ? "primary" : "danger"}
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
                <KpiBlock
                  title="Ocupación Media"
                  value={results.averageOccupancy}
                  formatter={(val) => formatPercent(Number(val))}
                  change={results.averageOccupancy - results.breakEvenOccupancy}
                  icon={<GaugeCircle className="h-5 w-5" />}
                  variant={results.averageOccupancy >= results.breakEvenOccupancy ? "primary" : "default"}
                />
                
                <KpiBlock
                  title="Ticket Medio"
                  value={formValues.averageTicket}
                  prefix="€"
                  formatter={(val) => formatNumber(Number(val))}
                  icon={<DollarSign className="h-5 w-5" />}
                  variant="default"
                />
                
                <KpiBlock
                  title="Beneficio por Comensal"
                  value={results.profitPerAttendee}
                  prefix="€"
                  formatter={(val) => formatNumber(Number(val))}
                  change={results.profitPerAttendee / formValues.averageTicket * 100}
                  icon={<DollarSign className="h-5 w-5" />}
                  variant={results.profitPerAttendee >= 0 ? "primary" : "danger"}
                />
                
                <KpiBlock
                  title="Comensales/Asiento/Día"
                  value={results.attendeesPerSeatPerDay}
                  formatter={(val) => formatNumber(Number(val))}
                  icon={<Users className="h-5 w-5" />}
                  variant="default"
                />
              </div>
              
              {/* Gráficos */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3">
                {/* Gráfico de Desglose de Costos */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <PieChart className="h-5 w-5 mr-2" />
                      Desglose de Costos sobre Ventas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsPieChart>
                          <Pie
                            data={generateCostBreakdownData()}
                            cx="50%"
                            cy="50%"
                            labelLine={true}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, value }) => `${name}: ${value.toFixed(1)}%`}
                          >
                            {generateCostBreakdownData().map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip 
                            formatter={(value: number) => [`${value.toFixed(1)}%`, 'Porcentaje']}
                            labelFormatter={(name) => `${name}`}
                          />
                          <Legend />
                        </RechartsPieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-3 text-sm text-muted-foreground">
                      De cada € vendido: {generateCostBreakdownData().map((item, i) => (
                        <span key={i}>
                          {i > 0 ? ', ' : ''}
                          {(item.value).toFixed(1)}% {item.name.toLowerCase()}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Gráfico de Punto de Equilibrio */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <BarChart4 className="h-5 w-5 mr-2" />
                      Punto de Equilibrio ({Math.round(results.breakEvenPoint)} comensales)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={generateBreakEvenChartData()}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis 
                            dataKey="attendees" 
                            label={{ value: 'Comensales', position: 'insideBottomRight', offset: -5 }} 
                          />
                          <YAxis 
                            label={{ value: 'Euros (€)', angle: -90, position: 'insideLeft' }} 
                          />
                          <Tooltip 
                            formatter={(value: number) => [formatEUR(value), '']}
                            labelFormatter={(value) => `${value} comensales`}
                          />
                          <Legend />
                          <Line type="monotone" dataKey="revenue" name="Ingresos" stroke="#4CAF50" activeDot={{ r: 8 }} />
                          <Line type="monotone" dataKey="totalCosts" name="Costos Totales" stroke="#FF5722" />
                          <Line type="monotone" dataKey="fixedCosts" name="Costos Fijos" stroke="#2196F3" strokeDasharray="5 5" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-3 text-sm text-muted-foreground">
                      Comensales actuales: {formValues.totalAttendance} | BEP: {Math.round(results.breakEvenPoint)} | 
                      Diferencia: {formValues.totalAttendance >= results.breakEvenPoint ? '+' : ''}
                      {Math.round(formValues.totalAttendance - results.breakEvenPoint)}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Análisis de Ocupación */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <GaugeCircle className="h-5 w-5 mr-2" />
                    Análisis de Ocupación
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={generateOccupancyChartData()}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 100]} />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip 
                          formatter={(value: number) => [`${value.toFixed(1)}%`, 'Ocupación']}
                        />
                        <Legend />
                        <Bar dataKey="value" name="% Ocupación" fill="#8884d8">
                          <Cell fill={results.averageOccupancy >= results.breakEvenOccupancy ? '#4CAF50' : '#FF5722'} />
                          <Cell fill="#2196F3" />
                          <Cell fill="#9E9E9E" />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-3 text-sm text-muted-foreground">
                    <p>
                      Ocupación actual: {formatPercent(results.averageOccupancy)} | 
                      Ocupación necesaria para BEP: {formatPercent(results.breakEvenOccupancy)} | 
                      {results.averageOccupancy >= results.breakEvenOccupancy 
                        ? ` Margen: +${formatPercent(results.averageOccupancy - results.breakEvenOccupancy)}`
                        : ` Déficit: ${formatPercent(results.averageOccupancy - results.breakEvenOccupancy)}`
                      }
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Resumen de resultados numéricos */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Resumen de Resultados</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Ventas Totales:</span>
                      <span className="font-medium">{formatEUR(results.totalSales)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Costo Variable Total:</span>
                      <span className="font-medium">{formatEUR(results.totalVariableCost)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Costo Var. por Comensal:</span>
                      <span className="font-medium">{formatEUR(results.variableCostPerAttendee)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Margen Contrib. por Comensal:</span>
                      <span className="font-medium">{formatEUR(results.contributionMarginPerAttendee)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Costos Fijos Totales:</span>
                      <span className="font-medium">{formatEUR(results.totalFixedCosts)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Punto Equilibrio (Ventas):</span>
                      <span className="font-medium">{formatEUR(results.breakEvenPointSales)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">% Costos Variables:</span>
                      <span className="font-medium">{formatPercent(results.variableCostsPercentage)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">% Costos Fijos:</span>
                      <span className="font-medium">{formatPercent(results.fixedCostsPercentage)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">% Costos de Personal:</span>
                      <span className="font-medium">{formatPercent(results.staffCostsPercentage)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">% Renta sobre Ventas:</span>
                      <span className="font-medium">{formatPercent(results.rentPercentage)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Capacidad Total del Periodo:</span>
                      <span className="font-medium">{results.totalPeriodCapacity} comensales</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Ocupación para BEP:</span>
                      <span className="font-medium">{formatPercent(results.breakEvenOccupancy)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Instrucciones de interpretación */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Cómo Interpretar los Resultados</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>KPIs:</strong> Observa si tu Beneficio/Pérdida es positivo y compara los Comensales Actuales vs. BEP.
                      El Margen de Beneficio Neto refleja la rentabilidad general del negocio. El Beneficio por Comensal muestra
                      el valor promedio que aporta cada cliente.
                    </li>
                    <li>
                      <strong>Desglose de Costos:</strong> Analiza qué porcentaje de cada euro vendido se destina a cada partida.
                      Evalúa si los costos variables son razonables o si el alquiler o personal fijo tienen un peso excesivo.
                    </li>
                    <li>
                      <strong>Punto de Equilibrio:</strong> Visualiza cuánto margen tienes (o te falta) sobre el punto de equilibrio.
                      Si estás por debajo, necesitas más clientes, aumentar el ticket medio o reducir costos.
                    </li>
                    <li>
                      <strong>Análisis de Ocupación:</strong> Compara tu Ocupación Media Actual con la Ocupación Necesaria para BEP.
                      El objetivo es mantener una ocupación consistentemente por encima de la necesaria para el BEP.
                      El indicador Comensales por Asiento por Día muestra la eficiencia en el uso de tus instalaciones.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

