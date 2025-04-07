
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
          <h3 className="text-lg font-semibold mb-2">3. Requisitos previos</h3>
          <p className="text-muted-foreground mb-2">
            Antes de clonar y ejecutar el proyecto, asegúrate de tener instalado:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
            <li>Node.js (versión 16 o superior) - <a href="https://nodejs.org" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">https://nodejs.org</a></li>
            <li>npm (normalmente viene incluido con Node.js)</li>
            <li>Git - <a href="https://git-scm.com/downloads" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">https://git-scm.com/downloads</a></li>
          </ul>
          <p className="text-muted-foreground mt-2">
            Puedes verificar tus instalaciones con estos comandos:
          </p>
          <div className="bg-muted p-3 rounded-md text-sm font-mono mt-2">
            node --version<br />
            npm --version<br />
            git --version
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">4. Contenido del README.md</h3>
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
# Requisitos previos
# Asegúrate de tener instalado Node.js (v16+) y npm
# https://nodejs.org

# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]

# Navegar al directorio del proyecto
cd [NOMBRE_DEL_PROYECTO]

# Instalar dependencias
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
          <h3 className="text-lg font-semibold mb-2">5. Clonación y ejecución local</h3>
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

        <div>
          <h3 className="text-lg font-semibold mb-2">6. Solución de problemas comunes</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-medium">Error: 'npm' no se reconoce como un comando interno o externo</h4>
              <p className="text-muted-foreground text-sm">
                Esto significa que Node.js no está instalado correctamente o no está en tu PATH. Solución:
              </p>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-2">
                <li>Reinstala Node.js desde <a href="https://nodejs.org" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">nodejs.org</a></li>
                <li>Asegúrate de marcar la opción "Add to PATH" durante la instalación</li>
                <li>Reinicia tu terminal o computadora después de la instalación</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Error: No se pueden instalar las dependencias</h4>
              <p className="text-muted-foreground text-sm">
                Prueba estos comandos alternativos:
              </p>
              <div className="bg-muted p-3 rounded-md text-xs font-mono mt-1">
                # Si npm falla, intenta con:<br />
                npx npm install<br /><br />
                # O utiliza yarn si lo tienes instalado:<br />
                yarn install
              </div>
            </div>
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
