
import { Layout } from "@/components/Layout";
import { ExpenseForm } from "@/components/expenses/ExpenseForm";
import { RecentExpensesTable } from "@/components/expenses/RecentExpensesTable";
import { ExpenseStats } from "@/components/expenses/ExpenseStats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Expenses() {
  return (
    <Layout>
      <div className="dashboard-container">
        <h1 className="text-3xl font-bold mb-6 text-finance-text">Gestión de Gastos</h1>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Visión General</TabsTrigger>
            <TabsTrigger value="add">Añadir Gasto</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <ExpenseStats />
            <RecentExpensesTable />
          </TabsContent>
          
          <TabsContent value="add">
            <ExpenseForm />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
