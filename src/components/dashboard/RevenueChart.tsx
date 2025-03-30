
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, BarChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', revenue: 4000, expenses: 2400, profit: 1600 },
  { name: 'Feb', revenue: 5000, expenses: 2800, profit: 2200 },
  { name: 'Mar', revenue: 6000, expenses: 3200, profit: 2800 },
  { name: 'Apr', revenue: 7000, expenses: 3400, profit: 3600 },
  { name: 'May', revenue: 8500, expenses: 3800, profit: 4700 },
  { name: 'Jun', revenue: 9200, expenses: 4000, profit: 5200 },
  { name: 'Jul', revenue: 8700, expenses: 4200, profit: 4500 },
  { name: 'Aug', revenue: 9500, expenses: 4400, profit: 5100 },
  { name: 'Sep', revenue: 10000, expenses: 4600, profit: 5400 },
  { name: 'Oct', revenue: 11000, expenses: 4800, profit: 6200 },
  { name: 'Nov', revenue: 10500, expenses: 5000, profit: 5500 },
  { name: 'Dec', revenue: 12000, expenses: 5200, profit: 6800 },
];

export default function RevenueChart() {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Financial Performance</CardTitle>
        <CardDescription>
          Monthly breakdown of revenue, expenses and profit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="line">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="line">Line</TabsTrigger>
              <TabsTrigger value="bar">Bar</TabsTrigger>
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
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#0EA5E9" activeDot={{ r: 8 }} strokeWidth={2} />
                <Line type="monotone" dataKey="expenses" stroke="#EF4444" strokeWidth={2} />
                <Line type="monotone" dataKey="profit" stroke="#22C55E" strokeWidth={2} />
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
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#0EA5E9" />
                <Bar dataKey="expenses" fill="#EF4444" />
                <Bar dataKey="profit" fill="#22C55E" />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
