
import AppSidebar from "@/components/AppSidebar";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { LineChart, AreaChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar, Download, Filter, Plus } from "lucide-react";

const revenueData = [
  { month: 'Jan', sales: 8500, services: 2500, subscriptions: 1500, total: 12500 },
  { month: 'Feb', sales: 9200, services: 3000, subscriptions: 1800, total: 14000 },
  { month: 'Mar', sales: 9800, services: 3200, subscriptions: 2000, total: 15000 },
  { month: 'Apr', sales: 10200, services: 3500, subscriptions: 2200, total: 15900 },
  { month: 'May', sales: 10800, services: 3800, subscriptions: 2400, total: 17000 },
  { month: 'Jun', sales: 11500, services: 4000, subscriptions: 2600, total: 18100 },
  { month: 'Jul', sales: 12000, services: 4200, subscriptions: 2800, total: 19000 },
  { month: 'Aug', sales: 11800, services: 4000, subscriptions: 3000, total: 18800 },
  { month: 'Sep', sales: 12500, services: 4300, subscriptions: 3200, total: 20000 },
  { month: 'Oct', sales: 13200, services: 4500, subscriptions: 3400, total: 21100 },
  { month: 'Nov', sales: 14000, services: 4800, subscriptions: 3600, total: 22400 },
  { month: 'Dec', sales: 15000, services: 5000, subscriptions: 4000, total: 24000 },
];

const revenueBySource = [
  { source: "Product Sales", amount: 145000, percentage: 60.4 },
  { source: "Services", amount: 52000, percentage: 21.7 },
  { source: "Subscriptions", amount: 43000, percentage: 17.9 },
];

export default function Revenue() {
  return (
    <div className="flex h-screen overflow-hidden">
      <AppSidebar />
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Header />
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Revenue Analysis</h2>
            <div className="flex gap-2">
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Year 2023
              </Button>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Revenue
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$240,000</div>
                <div className="text-sm text-finance-accent flex items-center">
                  +12.5% from last year
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Average Monthly Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$20,000</div>
                <div className="text-sm text-finance-accent flex items-center">
                  +8.3% from last year
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Revenue Growth Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12.5%</div>
                <div className="text-sm text-finance-accent flex items-center">
                  +2.1% from last year
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Revenue Trends</CardTitle>
              <CardDescription>Monthly revenue breakdown by source</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="line">
                <div className="flex justify-between items-center mb-4">
                  <TabsList>
                    <TabsTrigger value="line">Line Chart</TabsTrigger>
                    <TabsTrigger value="area">Area Chart</TabsTrigger>
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
                      <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
                      <Legend />
                      <Line type="monotone" dataKey="sales" stroke="#0EA5E9" strokeWidth={2} name="Product Sales" />
                      <Line type="monotone" dataKey="services" stroke="#7E69AB" strokeWidth={2} name="Services" />
                      <Line type="monotone" dataKey="subscriptions" stroke="#22C55E" strokeWidth={2} name="Subscriptions" />
                      <Line type="monotone" dataKey="total" stroke="#F97316" strokeWidth={3} name="Total Revenue" />
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
                      <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
                      <Legend />
                      <Area type="monotone" dataKey="sales" stackId="1" stroke="#0EA5E9" fill="#0EA5E9" name="Product Sales" />
                      <Area type="monotone" dataKey="services" stackId="1" stroke="#7E69AB" fill="#7E69AB" name="Services" />
                      <Area type="monotone" dataKey="subscriptions" stackId="1" stroke="#22C55E" fill="#22C55E" name="Subscriptions" />
                    </AreaChart>
                  </ResponsiveContainer>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue by Source</CardTitle>
                <CardDescription>Breakdown of revenue by business area</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {revenueBySource.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{item.source}</span>
                        <span className="text-sm font-medium">${item.amount.toLocaleString()}</span>
                      </div>
                      <div className="h-2 bg-muted rounded overflow-hidden">
                        <div 
                          className="h-full bg-finance-primary" 
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-end mt-1">
                        <span className="text-xs text-muted-foreground">{item.percentage}% of total</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Quarterly Revenue</CardTitle>
                <CardDescription>Revenue performance by quarter</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/20 p-4 rounded-lg">
                    <div className="text-sm font-medium text-muted-foreground mb-2">Q1</div>
                    <div className="text-2xl font-bold">$41,500</div>
                    <div className="text-sm text-finance-accent">+10.2% YoY</div>
                  </div>
                  <div className="bg-muted/20 p-4 rounded-lg">
                    <div className="text-sm font-medium text-muted-foreground mb-2">Q2</div>
                    <div className="text-2xl font-bold">$51,000</div>
                    <div className="text-sm text-finance-accent">+12.8% YoY</div>
                  </div>
                  <div className="bg-muted/20 p-4 rounded-lg">
                    <div className="text-sm font-medium text-muted-foreground mb-2">Q3</div>
                    <div className="text-2xl font-bold">$57,800</div>
                    <div className="text-sm text-finance-accent">+13.5% YoY</div>
                  </div>
                  <div className="bg-muted/20 p-4 rounded-lg">
                    <div className="text-sm font-medium text-muted-foreground mb-2">Q4</div>
                    <div className="text-2xl font-bold">$89,700</div>
                    <div className="text-sm text-finance-accent">+15.2% YoY</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
