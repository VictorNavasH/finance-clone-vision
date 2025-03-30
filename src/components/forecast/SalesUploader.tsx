
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Upload } from "lucide-react";

export default function SalesUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Check if file is an Excel file
      const isExcel = selectedFile.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || 
                     selectedFile.type === "application/vnd.ms-excel" ||
                     selectedFile.name.endsWith('.xlsx') ||
                     selectedFile.name.endsWith('.xls');

      if (isExcel) {
        setFile(selectedFile);
      } else {
        toast.error("Formato inválido", {
          description: "Por favor, sube un archivo Excel (.xlsx o .xls)"
        });
      }
    }
  };

  const handleUpload = () => {
    if (!file) {
      toast.error("Ningún archivo seleccionado");
      return;
    }

    setIsUploading(true);

    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      setFile(null);
      toast.success("Datos de ventas importados", {
        description: `El archivo ${file.name} se ha procesado correctamente`
      });
    }, 1500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Importar Datos de Ventas</CardTitle>
        <CardDescription>
          Sube un archivo Excel con tus datos de ventas para actualizar las previsiones
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label htmlFor="salesFile" className="text-sm font-medium">
              Seleccionar archivo Excel
            </label>
            <Input
              id="salesFile"
              type="file"
              accept=".xlsx,.xls"
              className="cursor-pointer"
              onChange={handleFileChange}
            />
          </div>
          
          {file && (
            <div className="px-3 py-2 border rounded text-sm flex items-center justify-between">
              <span className="truncate">{file.name}</span>
              <span className="text-xs text-muted-foreground">
                {(file.size / 1024).toFixed(1)} KB
              </span>
            </div>
          )}
          
          <Button
            onClick={handleUpload}
            disabled={!file || isUploading}
            className="w-full"
            style={{ backgroundColor: "#227C9D" }}
          >
            <Upload className="mr-2 h-4 w-4" />
            {isUploading ? "Importando..." : "Importar Datos"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
