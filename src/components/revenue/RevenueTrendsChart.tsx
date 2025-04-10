
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { LineChart, AreaChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface RevenueTrendsChartProps {
  data: Array<{
    month: string;
    sales: number;
    services: number;
    subscriptions: number;
    total: number;
  }>;
}

const RevenueTrendsChart = ({ data }: RevenueTrendsChartProps) => {
  return (
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
                data={data}
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
                data={data}
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
  );
};

export default RevenueTrendsChart;
