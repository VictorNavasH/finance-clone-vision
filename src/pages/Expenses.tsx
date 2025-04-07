import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar, Download, Filter, Plus, FileText, Search } from "lucide-react";
import ExpenseStats from "@/components/expenses/ExpenseStats";
import RecentExpensesTable from "@/components/expenses/RecentExpensesTable";
import ExpenseForm from "@/components/expenses/ExpenseForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Layout } from "@/components/Layout";

const monthlyExpenses = [
  { month: 'Ene', operaciones: 4200, marketing: 1800, administracion: 1400, desarrollo: 2600, total: 10000 },
  { month: 'Feb', operaciones: 4300, marketing: 1900, administracion: 1450, desarrollo: 2700, total: 10350 },
  { month: 'Mar', operaciones: 4400, marketing: 2000, administracion: 1500, desarrollo: 2800, total: 10700 },
  { month: 'Abr', operaciones: 4500, marketing: 2100, administracion: 1550, desarrollo: 2900, total: 11050 },
  { month: 'May', operaciones: 4600, marketing: 2200, administracion: 1600, desarrollo: 3000, total: 11400 },
  { month: 'Jun', operaciones: 4700, marketing: 2300, administracion: 1650, desarrollo: 3100, total: 11750 },
  { month: 'Jul', operaciones: 4800, marketing: 2400, administracion: 1700, desarrollo: 3200, total: 12100 },
  { month: 'Ago', operaciones: 4900, marketing: 2500, administracion: 1750, desarrollo: 3300, total: 12450 },
  { month: 'Sep', operaciones: 5000, marketing: 2600, administracion: 1800, desarrollo: 3400, total: 12800 },
  { month: 'Oct', operaciones: 5100, marketing: 2700, administracion: 1850, desarrollo: 3500, total: 13150 },
  { month: 'Nov', operaciones: 5200, marketing: 2800, administracion: 1900, desarrollo: 3600, total: 13500 },
  { month: 'Dic', operaciones: 5300, marketing: 2900, administracion: 1950, desarrollo: 3700, total: 13850 },
];

const expenseCategories = [
  { name: "Personal", value: 5300, color: "#227C9D" },
  { name: "Alquiler", value: 2100, color: "#17C3B2" },
  { name: "Marketing", value: 1800, color: "#FFCB77" },
  { name: "Servicios", value: 950, color: "#FE6D73" },
  { name: "Suministros", value: 1200, color: "#2F2F4C" },
  { name: "Otros", value: 950, color: "#8E9196" },
];

const recentExpenses = [
  { id: 1, description: "Pago de nóminas", category: "Personal", amount: "€4,500", date: "2 Oct, 2023" },
  { id: 2, description: "Alquiler de oficina", category: "Alquiler", amount: "€2,100", date: "5 Oct, 2023" },
  { id: 3, description: "Campaña de publicidad", category: "Marketing", amount: "€1,200", date: "10 Oct, 2023" },
  { id: 4, description: "Servicios de internet", category: "Servicios", amount: "€120", date: "12 Oct, 2023" },
  { id: 5, description: "Material de oficina", category: "Suministros", amount: "€350", date: "15 Oct, 2023" },
  { id: 6, description: "Mantenimiento equipos", category: "Servicios", amount: "€240", date: "18 Oct, 2023" },
  { id: 7, description: "Consultoría fiscal", category: "Servicios", amount: "€780", date: "20 Oct, 2023" },
  { id: 8, description: "Seguro de oficina", category: "Servicios", amount: "€450", date: "22 Oct, 2023" },
];

export default function Expenses() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("2023");
  const [selectedPeriod, setSelectedPeriod] = useState("anual");
  const [selectedView, setSelectedView] = useState("dashboard");
  
  const filteredExpenses = recentExpenses.filter(expense => 
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gestión de Gastos</h2>
        <div className="flex gap-2">
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-[120px]">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Año" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Periodo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mensual">Mensual</SelectItem>
              <SelectItem value="trimestral">Trimestral</SelectItem>
              <SelectItem value="semestral">Semestral</SelectItem>
              <SelectItem value="anual">Anual</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtrar
          </Button>
          
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
          
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
              <Button style={{ backgroundColor: "#227C9D" }}>
                <Plus className="h-4 w-4 mr-2" />
                Registrar Gasto
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <ExpenseForm onSuccess={() => setIsFormOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <Tabs value={selectedView} onValueChange={setSelectedView} className="mb-6">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="expenses">Gastos</TabsTrigger>
          <TabsTrigger value="analysis">Análisis</TabsTrigger>
          <TabsTrigger value="reports">Informes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="dashboard" className="space-y-6">
          <ExpenseStats />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-6">
            <div className="lg:col-span-2 card">
              <Tabs defaultValue="chart" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="chart">Gráfico</TabsTrigger>
                  <TabsTrigger value="breakdown">Desglose</TabsTrigger>
                </TabsList>
                <TabsContent value="chart" className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={monthlyExpenses}
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
                      <Tooltip formatter={(value) => [`€${value}`, 'Gastos']} />
                      <Legend />
                      <Bar dataKey="operaciones" name="Operaciones" fill="#227C9D" />
                      <Bar dataKey="marketing" name="Marketing" fill="#17C3B2" />
                      <Bar dataKey="administracion" name="Administración" fill="#FFCB77" />
                      <Bar dataKey="desarrollo" name="Desarrollo" fill="#FE6D73" />
                    </BarChart>
                  </ResponsiveContainer>
                </TabsContent>
                <TabsContent value="breakdown" className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      layout="vertical"
                      data={monthlyExpenses}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 50,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="month" type="category" />
                      <Tooltip formatter={(value) => [`€${value}`, 'Gastos']} />
                      <Legend />
                      <Bar dataKey="total" name="Total" fill="#227C9D" />
                    </BarChart>
                  </ResponsiveContainer>
                </TabsContent>
              </Tabs>
            </div>
            
            <div>
              <Tabs defaultValue="pie" className="w-full h-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="pie">Distribución</TabsTrigger>
                  <TabsTrigger value="comparison">Comparativa</TabsTrigger>
                </TabsList>
                <TabsContent value="pie" className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={expenseCategories}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {expenseCategories.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value: number) => [`€${value}`, "Importe"]} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </TabsContent>
                <TabsContent value="comparison" className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { name: 'Actual', value: 142100 },
                        { name: 'Presupuestado', value: 135000 }
                      ]}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`€${value}`, 'Total']} />
                      <Bar dataKey="value" name="Valor" fill="#227C9D" />
                    </BarChart>
                  </ResponsiveContainer>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <RecentExpensesTable expenses={filteredExpenses.slice(0, 5)} />
        </TabsContent>
        
        <TabsContent value="expenses" className="space-y-6">
          <div className="flex gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar gastos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las categorías</SelectItem>
                <SelectItem value="personal">Personal</SelectItem>
                <SelectItem value="alquiler">Alquiler</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="servicios">Servicios</SelectItem>
                <SelectItem value="suministros">Suministros</SelectItem>
                <SelectItem value="otros">Otros</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <RecentExpensesTable 
            expenses={filteredExpenses} 
            showActions={true}
            onView={(id) => console.log(`Ver detalle del gasto ${id}`)}
            onEdit={(id) => console.log(`Editar gasto ${id}`)}
            onDelete={(id) => console.log(`Eliminar gasto ${id}`)}
          />
        </TabsContent>
        
        <TabsContent value="analysis" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Análisis de Tendencias</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    {name: "Ene-Mar", q1_2022: 30000, q1_2023: 32500},
                    {name: "Abr-Jun", q2_2022: 32000, q2_2023: 35000},
                    {name: "Jul-Sep", q3_2022: 33500, q3_2023: 36500},
                    {name: "Oct-Dic", q4_2022: 35000, q4_2023: 38100}
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`€${value}`, 'Gastos']} />
                  <Legend />
                  <Bar dataKey="q1_2022" name="2022" fill="#17C3B2" />
                  <Bar dataKey="q1_2023" name="2023" fill="#227C9D" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="p-6 flex items-center justify-between hover:bg-slate-50 cursor-pointer transition-colors">
              <div>
                <h3 className="font-medium">Informe Mensual</h3>
                <p className="text-sm text-muted-foreground">Octubre 2023</p>
              </div>
              <FileText className="h-8 w-8 text-[#227C9D]" />
            </Card>
            
            <Card className="p-6 flex items-center justify-between hover:bg-slate-50 cursor-pointer transition-colors">
              <div>
                <h3 className="font-medium">Informe Trimestral</h3>
                <p className="text-sm text-muted-foreground">Q3 2023</p>
              </div>
              <FileText className="h-8 w-8 text-[#17C3B2]" />
            </Card>
            
            <Card className="p-6 flex items-center justify-between hover:bg-slate-50 cursor-pointer transition-colors">
              <div>
                <h3 className="font-medium">Informe Anual</h3>
                <p className="text-sm text-muted-foreground">2023 (Preliminar)</p>
              </div>
              <FileText className="h-8 w-8 text-[#FFCB77]" />
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </Layout>
  );
}
