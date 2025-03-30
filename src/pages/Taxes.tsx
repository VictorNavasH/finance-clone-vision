
import { TooltipProvider } from "@/components/ui/tooltip";
import AppSidebar from "@/components/AppSidebar";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator } from "lucide-react";

export default function Taxes() {
  return (
    <div className="flex h-screen overflow-hidden">
      <AppSidebar />
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Header />
        <main className="flex-1 p-6 text-finance-text">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Impuestos</h2>
            <p className="text-muted-foreground">
              Gestione y calcule sus impuestos
            </p>
          </div>
          
          <Tabs defaultValue="calculator" className="space-y-4">
            <TabsList>
              <TabsTrigger value="calculator">Calculadora de Impuestos</TabsTrigger>
              <TabsTrigger value="history">Historial</TabsTrigger>
              <TabsTrigger value="reports">Informes</TabsTrigger>
            </TabsList>
            
            <TabsContent value="calculator" className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center">
                  <div className="flex items-center space-x-2">
                    <Calculator className="h-5 w-5 text-finance-primary" />
                    <CardTitle>Calculadora de IRPF</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Calcule su impuesto sobre la renta en función de sus ingresos anuales.
                  </p>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="income" className="text-sm font-medium">
                          Ingresos Anuales (€)
                        </label>
                        <input
                          id="income"
                          type="number"
                          className="w-full p-2 border border-gray-300 rounded-md"
                          placeholder="Ej: 30000"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="deductions" className="text-sm font-medium">
                          Deducciones Totales (€)
                        </label>
                        <input
                          id="deductions"
                          type="number"
                          className="w-full p-2 border border-gray-300 rounded-md"
                          placeholder="Ej: 2000"
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      className="bg-finance-primary text-white px-4 py-2 rounded-md hover:bg-finance-primary/90 transition-colors"
                    >
                      Calcular Impuestos
                    </button>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Resultado del Cálculo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Base Imponible:</span>
                        <span>-</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tipo Impositivo:</span>
                        <span>-</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Impuestos a Pagar:</span>
                        <span>-</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Desglose de Impuestos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tramo 1 (hasta 12.450€):</span>
                        <span>-</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tramo 2 (12.450€ - 20.200€):</span>
                        <span>-</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tramo 3 (20.200€ - 35.200€):</span>
                        <span>-</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tramo 4 (35.200€ - 60.000€):</span>
                        <span>-</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tramo 5 (más de 60.000€):</span>
                        <span>-</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="history" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Historial de Impuestos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>El historial de impuestos se mostrará aquí.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reports" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Informes de Impuestos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Los informes de impuestos se mostrarán aquí.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
