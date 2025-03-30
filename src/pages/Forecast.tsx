
import { TooltipProvider } from "@/components/ui/tooltip";
import AppSidebar from "@/components/AppSidebar";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Forecast() {
  return (
    <div className="flex h-screen overflow-hidden">
      <AppSidebar />
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Header />
        <main className="flex-1 p-6 text-finance-text">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Previsiones Financieras</h2>
            <p className="text-muted-foreground">
              Analice y planifique el rendimiento financiero futuro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Previsión de Ingresos</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Los datos de previsión de ingresos se mostrarán aquí.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Previsión de Gastos</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Los datos de previsión de gastos se mostrarán aquí.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Flujo de Caja Estimado</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Los datos de flujo de caja estimado se mostrarán aquí.</p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
