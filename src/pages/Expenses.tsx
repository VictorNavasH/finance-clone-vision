
import { Layout } from "@/components/Layout";
import ExpenseForm from "@/components/expenses/ExpenseForm";
import RecentExpensesTable from "@/components/expenses/RecentExpensesTable";
import ExpenseStats from "@/components/expenses/ExpenseStats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function Expenses() {
  // Mock data for expenses
  const [expenses] = useState([
    {
      id: 1,
      description: "Material de oficina",
      category: "Suministros",
      amount: "€45,00",
      date: "10/04/2025"
    },
    {
      id: 2,
      description: "Publicidad en redes sociales",
      category: "Marketing",
      amount: "€120,00",
      date: "08/04/2025"
    },
    {
      id: 3,
      description: "Suscripción software",
      category: "Servicios",
      amount: "€59,99",
      date: "05/04/2025"
    },
    {
      id: 4,
      description: "Alquiler local",
      category: "Alquiler",
      amount: "€800,00",
      date: "01/04/2025"
    }
  ]);

  return (
    <Layout>
      <div className="dashboard-container">
        <h1 className="text-3xl font-bold mb-8 text-finance-text">Gestión de Gastos</h1>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Visión General</TabsTrigger>
            <TabsTrigger value="add">Añadir Gasto</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-8">
            <ExpenseStats />
            <RecentExpensesTable expenses={expenses} />
          </TabsContent>
          
          <TabsContent value="add">
            <ExpenseForm />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
