
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, BarChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Ene', revenue: 4000, expenses: 2400, profit: 1600 },
  { name: 'Feb', revenue: 5000, expenses: 2800, profit: 2200 },
  { name: 'Mar', revenue: 6000, expenses: 3200, profit: 2800 },
  { name: 'Abr', revenue: 7000, expenses: 3400, profit: 3600 },
  { name: 'May', revenue: 8500, expenses: 3800, profit: 4700 },
  { name: 'Jun', revenue: 9200, expenses: 4000, profit: 5200 },
  { name: 'Jul', revenue: 8700, expenses: 4200, profit: 4500 },
  { name: 'Ago', revenue: 9500, expenses: 4400, profit: 5100 },
  { name: 'Sep', revenue: 10000, expenses: 4600, profit: 5400 },
  { name: 'Oct', revenue: 11000, expenses: 4800, profit: 6200 },
  { name: 'Nov', revenue: 10500, expenses: 5000, profit: 5500 },
  { name: 'Dic', revenue: 12000, expenses: 5200, profit: 6800 },
];

export default function RevenueChart() {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle className="text-finance-text">Rendimiento Financiero</CardTitle>
        <CardDescription>
          Desglose mensual de ingresos, gastos y beneficios
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="line">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="line">Líneas</TabsTrigger>
              <TabsTrigger value="bar">Barras</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="line" className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
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
                <Tooltip formatter={(value) => [`€${value}`, '']} />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#227C9D" activeDot={{ r: 8 }} strokeWidth={2} name="Ingresos" />
                <Line type="monotone" dataKey="expenses" stroke="#FE6D73" strokeWidth={2} name="Gastos" />
                <Line type="monotone" dataKey="profit" stroke="#17C3B2" strokeWidth={2} name="Beneficio" />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="bar" className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
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
                <Tooltip formatter={(value) => [`€${value}`, '']} />
                <Legend />
                <Bar dataKey="revenue" fill="#227C9D" name="Ingresos" />
                <Bar dataKey="expenses" fill="#FE6D73" name="Gastos" />
                <Bar dataKey="profit" fill="#17C3B2" name="Beneficio" />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
