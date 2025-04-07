import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, FileText, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { calcularIRPF, calcularIVA, calcularIS, tasasIVA, tasasIS } from "@/utils/tax-utils";
import { toast } from "sonner";
import { Layout } from "@/components/Layout";

export default function Taxes() {
  // Estado para el calculador de IRPF
  const [ingresos, setIngresos] = useState<string>("");
  const [deducciones, setDeducciones] = useState<string>("");
  const [resultadoIRPF, setResultadoIRPF] = useState<ReturnType<typeof calcularIRPF> | null>(null);

  // Estado para el calculador de IVA
  const [importeIVA, setImporteIVA] = useState<string>("");
  const [porcentajeIVA, setPorcentajeIVA] = useState<string>("21");
  const [resultadoIVA, setResultadoIVA] = useState<number | null>(null);

  // Estado para el calculador de IS
  const [beneficios, setBeneficios] = useState<string>("");
  const [porcentajeIS, setPorcentajeIS] = useState<string>("25");
  const [resultadoIS, setResultadoIS] = useState<number | null>(null);

  // Manejadores para calcular impuestos
  const calcularImpuestoIRPF = () => {
    const ingresosNum = parseFloat(ingresos);
    const deduccionesNum = parseFloat(deducciones) || 0;
    
    if (isNaN(ingresosNum) || ingresosNum <= 0) {
      toast.error("Por favor, introduce unos ingresos válidos");
      return;
    }

    const resultado = calcularIRPF(ingresosNum, deduccionesNum);
    setResultadoIRPF(resultado);
    toast.success("Cálculo de IRPF completado");
  };

  const calcularImpuestoIVA = () => {
    const importe = parseFloat(importeIVA);
    const porcentaje = parseFloat(porcentajeIVA);
    
    if (isNaN(importe) || importe <= 0) {
      toast.error("Por favor, introduce un importe válido");
      return;
    }

    const resultado = calcularIVA(importe, porcentaje);
    setResultadoIVA(resultado);
    toast.success("Cálculo de IVA completado");
  };

  const calcularImpuestoIS = () => {
    const beneficiosNum = parseFloat(beneficios);
    const porcentaje = parseFloat(porcentajeIS);
    
    if (isNaN(beneficiosNum) || beneficiosNum <= 0) {
      toast.error("Por favor, introduce beneficios válidos");
      return;
    }

    const resultado = calcularIS(beneficiosNum, porcentaje);
    setResultadoIS(resultado);
    toast.success("Cálculo de Impuesto de Sociedades completado");
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(value);
  };

  return (
    <Layout>
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Impuestos</h2>
        <p className="text-muted-foreground">
          Gestione y calcule sus impuestos
        </p>
      </div>
      
      <Tabs defaultValue="irpf" className="space-y-4">
        <TabsList className="mb-4">
          <TabsTrigger value="irpf" className="flex items-center gap-2">
            <Calculator className="h-4 w-4" />
            <span>IRPF</span>
          </TabsTrigger>
          <TabsTrigger value="iva" className="flex items-center gap-2">
            <Calculator className="h-4 w-4" />
            <span>IVA</span>
          </TabsTrigger>
          <TabsTrigger value="is" className="flex items-center gap-2">
            <Calculator className="h-4 w-4" />
            <span>Impuesto de Sociedades</span>
          </TabsTrigger>
          <TabsTrigger value="history" className="flex items-center gap-2">
            <History className="h-4 w-4" />
            <span>Historial</span>
          </TabsTrigger>
          <TabsTrigger value="reports" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span>Informes</span>
          </TabsTrigger>
        </TabsList>
        
        {/* Tab de IRPF */}
        <TabsContent value="irpf" className="space-y-4">
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
                    <Label htmlFor="income">Ingresos Anuales (€)</Label>
                    <Input
                      id="income"
                      type="number"
                      value={ingresos}
                      onChange={(e) => setIngresos(e.target.value)}
                      placeholder="Ej: 30000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="deductions">Deducciones Totales (€)</Label>
                    <Input
                      id="deductions"
                      type="number"
                      value={deducciones}
                      onChange={(e) => setDeducciones(e.target.value)}
                      placeholder="Ej: 2000"
                    />
                  </div>
                </div>
                <Button
                  type="button"
                  onClick={calcularImpuestoIRPF}
                  className="bg-finance-primary text-white hover:bg-finance-primary/90 transition-colors"
                >
                  Calcular IRPF
                </Button>
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
                    <span>{resultadoIRPF ? formatCurrency(resultadoIRPF.baseImponible) : '-'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Impuestos a Pagar:</span>
                    <span>{resultadoIRPF ? formatCurrency(resultadoIRPF.totalImpuesto) : '-'}</span>
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
                  {resultadoIRPF && resultadoIRPF.tramosPago.map((tramo, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-muted-foreground">
                        Tramo {tramo.porcentaje}%:
                      </span>
                      <span>{formatCurrency(tramo.cantidad * (tramo.porcentaje / 100))}</span>
                    </div>
                  ))}
                  {!resultadoIRPF && (
                    <div className="text-center text-muted-foreground">
                      Realice un cálculo para ver el desglose
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Tab de IVA */}
        <TabsContent value="iva" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Calculadora de IVA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="importe-iva">Importe (€)</Label>
                    <Input
                      id="importe-iva"
                      type="number"
                      value={importeIVA}
                      onChange={(e) => setImporteIVA(e.target.value)}
                      placeholder="Importe sin IVA"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="porcentaje-iva">Porcentaje de IVA</Label>
                    <Select value={porcentajeIVA} onValueChange={setPorcentajeIVA}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el tipo de IVA" />
                      </SelectTrigger>
                      <SelectContent>
                        {tasasIVA.map((tasa) => (
                          <SelectItem key={tasa.id} value={tasa.porcentaje.toString()}>
                            {tasa.nombre}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button onClick={calcularImpuestoIVA} className="bg-finance-primary text-white">
                  Calcular IVA
                </Button>

                {resultadoIVA !== null && (
                  <div className="mt-4 p-4 border rounded-md">
                    <div className="grid grid-cols-2 gap-2">
                      <span className="font-medium">Importe sin IVA:</span>
                      <span>{formatCurrency(parseFloat(importeIVA))}</span>
                      
                      <span className="font-medium">IVA ({porcentajeIVA}%):</span>
                      <span>{formatCurrency(resultadoIVA)}</span>
                      
                      <span className="font-medium">Importe total:</span>
                      <span className="font-bold">{formatCurrency(parseFloat(importeIVA) + resultadoIVA)}</span>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Tab de Impuesto de Sociedades */}
        <TabsContent value="is" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Calculadora de Impuesto de Sociedades</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="beneficios">Beneficios anuales (€)</Label>
                    <Input
                      id="beneficios"
                      type="number"
                      value={beneficios}
                      onChange={(e) => setBeneficios(e.target.value)}
                      placeholder="Beneficios de la empresa"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="porcentaje-is">Tipo impositivo</Label>
                    <Select value={porcentajeIS} onValueChange={setPorcentajeIS}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el tipo impositivo" />
                      </SelectTrigger>
                      <SelectContent>
                        {tasasIS.map((tasa) => (
                          <SelectItem key={tasa.id} value={tasa.porcentaje.toString()}>
                            {tasa.nombre}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button onClick={calcularImpuestoIS} className="bg-finance-primary text-white">
                  Calcular Impuesto de Sociedades
                </Button>

                {resultadoIS !== null && (
                  <div className="mt-4 p-4 border rounded-md">
                    <div className="grid grid-cols-2 gap-2">
                      <span className="font-medium">Beneficios:</span>
                      <span>{formatCurrency(parseFloat(beneficios))}</span>
                      
                      <span className="font-medium">Tipo impositivo:</span>
                      <span>{porcentajeIS}%</span>
                      
                      <span className="font-medium">Impuesto a pagar:</span>
                      <span className="font-bold">{formatCurrency(resultadoIS)}</span>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Tab de Historial */}
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Historial de Impuestos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                El historial de cálculos de impuestos se mostrará aquí.
                Podrás consultar tus cálculos anteriores para comparación y seguimiento.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Tab de Informes */}
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informes de Impuestos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Los informes detallados de impuestos se generarán aquí.
                Podrás exportar informes para presentación a Hacienda o para
                tu control financiero interno.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Layout>
  );
}
