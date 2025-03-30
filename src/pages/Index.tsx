
import { useState } from "react";
import { Calendar, CreditCard } from "lucide-react";
import AppSidebar from "@/components/AppSidebar";
import Header from "@/components/Header";
import FinancialSummary from "@/components/dashboard/FinancialSummary";
import RevenueChart from "@/components/dashboard/RevenueChart";
import ForecastCard from "@/components/dashboard/ForecastCard";
import ExpenseBreakdown from "@/components/dashboard/ExpenseBreakdown";
import BudgetProgress from "@/components/dashboard/BudgetProgress";
import UpcomingPayments from "@/components/dashboard/UpcomingPayments";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Index = () => {
  const [view, setView] = useState("all");
  
  return (
    <div className="flex h-screen overflow-hidden">
      <AppSidebar />
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Header />
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Financial Dashboard</h2>
            <div className="flex gap-2">
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Oct 1 - Oct 31, 2023
              </Button>
              <Button variant="default">
                <CreditCard className="h-4 w-4 mr-2" />
                Add Transaction
              </Button>
            </div>
          </div>

          <Tabs value={view} onValueChange={setView} className="mb-6">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="expenses">Expenses</TabsTrigger>
              <TabsTrigger value="budget">Budget</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="space-y-6">
            <FinancialSummary />
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <RevenueChart />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <ExpenseBreakdown />
              <BudgetProgress />
              <div className="col-span-1 lg:col-span-2 space-y-6">
                <ForecastCard />
                <UpcomingPayments />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
