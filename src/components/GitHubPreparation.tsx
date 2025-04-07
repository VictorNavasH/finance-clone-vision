
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function GitHubPreparation() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Preparación para GitHub</CardTitle>
        <CardDescription>
          Sigue estos pasos para compartir tu aplicación en GitHub
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">1. Conecta con GitHub</h3>
          <p className="text-muted-foreground">
            Haz clic en el botón "GitHub" en la parte superior derecha de la interfaz de Lovable para conectar tu cuenta de GitHub.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">2. Crea un nuevo repositorio</h3>
          <p className="text-muted-foreground">
            Cuando se te solicite, crea un nuevo repositorio o selecciona uno existente para exportar tu código.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">3. Contenido del README.md</h3>
          <div className="bg-muted p-4 rounded-md text-sm">
            <pre className="whitespace-pre-wrap break-words">
              {`# Aplicación de Gestión Financiera

## Descripción
Esta aplicación web permite gestionar finanzas empresariales, incluyendo gastos, ingresos, presupuestos y previsiones.

## Características
- Gestión de gastos y categorización
- Carga de datos de ventas por Excel
- Seguimiento de gastos mensuales recurrentes
- Previsiones financieras
- Gestión de presupuestos departamentales

## Tecnologías
- React + TypeScript
- Tailwind CSS
- Shadcn UI
- React Query
- React Router

## Instalación
\`\`\`bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]

# Instalar dependencias
cd [NOMBRE_DEL_PROYECTO]
npm install

# Iniciar el servidor de desarrollo
npm run dev
\`\`\`

## Uso
Navega a \`http://localhost:8080\` para ver la aplicación.

## Estructura del Proyecto
- \`/src/components\`: Componentes de la aplicación
- \`/src/pages\`: Páginas de la aplicación
- \`/src/hooks\`: Hooks personalizados
- \`/src/lib\`: Utilidades

## Contribución
1. Haz un fork del proyecto
2. Crea una rama (\`git checkout -b feature/nueva-funcionalidad\`)
3. Haz commit de tus cambios (\`git commit -m 'Añadir nueva funcionalidad'\`)
4. Sube tus cambios (\`git push origin feature/nueva-funcionalidad\`)
5. Abre un Pull Request`}
            </pre>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">4. Clonación y ejecución local</h3>
          <p className="text-muted-foreground mb-2">
            Una vez que tu código esté en GitHub, cualquier persona puede clonarlo y ejecutarlo localmente con estos comandos:
          </p>
          <div className="bg-muted p-4 rounded-md text-sm font-mono">
            git clone [URL_DEL_REPOSITORIO]<br />
            cd [NOMBRE_DEL_PROYECTO]<br />
            npm install<br />
            npm run dev
          </div>
        </div>

        <div className="rounded-md border p-4 bg-amber-50 border-amber-200">
          <h3 className="text-amber-800 font-semibold mb-2">Nota importante</h3>
          <p className="text-amber-700">
            Recuerda que el botón de GitHub en Lovable te permite exportar 
            directamente tu proyecto a GitHub sin necesidad de modificar 
            archivos manualmente.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
