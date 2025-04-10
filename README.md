
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/05cfdfd0-bd1b-4d89-be21-a2e2dd6fa08a

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/05cfdfd0-bd1b-4d89-be21-a2e2dd6fa08a) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Documentación de implementación: Módulo de Ingresos

El módulo de ingresos (Revenue) actualmente utiliza datos simulados y funciones de marcador de posición. A continuación, se detalla la documentación para implementar la lógica real:

### Acciones simuladas que requieren implementación real

#### 1. Gestión de ingresos
**Archivos involucrados:** 
- `src/pages/Revenue.tsx`
- `src/components/revenue/AddRevenueDialog.tsx`

**Funciones a implementar:**
```typescript
// En Revenue.tsx
const handleAddRevenue = (data: any) => {
  console.log("Nuevo ingreso:", data);
  toast({
    title: "Ingreso añadido",
    description: `Se ha añadido un nuevo ingreso de €${data.amount}`,
    variant: "default",
  });
  // Aquí debe implementarse la lógica real para añadir ingresos a la base de datos
};
```

**Implementación sugerida:**
- Crear un servicio API para persistir los datos de ingresos
- Implementar la validación de datos antes de almacenarlos
- Actualizar los gráficos y KPIs después de añadir un nuevo ingreso

#### 2. Filtrado de datos
**Archivos involucrados:**
- `src/pages/Revenue.tsx`
- `src/components/revenue/RevenueToolbar.tsx`

**Funciones a implementar:**
```typescript
// En Revenue.tsx
const changeYear = (year: string) => {
  setYearFilter(year);
  toast({
    title: `Año cambiado: ${year}`,
    description: `Mostrando datos del año ${year}`,
  });
  // Implementar filtrado real basado en el año seleccionado
};

const handleFilter = () => {
  toast({
    title: "Filtros aplicados",
    description: "Mostrando datos filtrados",
  });
  // Aquí iría la lógica real de filtrado
};
```

**Implementación sugerida:**
- Crear un endpoint API que permita filtrar los datos por año y otros criterios
- Implementar el estado de carga durante la recuperación de datos filtrados
- Actualizar todos los componentes visuales cuando se apliquen los filtros

#### 3. Exportación de datos
**Archivos involucrados:**
- `src/pages/Revenue.tsx`
- `src/components/revenue/RevenueToolbar.tsx`

**Funciones a implementar:**
```typescript
// En Revenue.tsx
const handleExport = () => {
  toast({
    title: "Exportando datos",
    description: "Los datos de ingresos se están exportando",
  });
  // Aquí iría la lógica real de exportación
  setTimeout(() => {
    toast({
      title: "Exportación completada",
      description: "Los datos se han exportado correctamente",
      variant: "default",
    });
  }, 1500);
};
```

**Implementación sugerida:**
- Generar un archivo CSV o Excel con los datos de ingresos
- Ofrecer opciones para seleccionar el formato y el rango de fechas a exportar
- Proporcionar un diálogo de progreso durante la exportación

### Sugerencias para la integración con backend

1. **Base de datos**: Crear una tabla `revenues` con los siguientes campos:
   - id (PK)
   - amount (decimal)
   - date (timestamp)
   - category (string)
   - description (text, opcional)
   - created_at (timestamp)
   - updated_at (timestamp)

2. **API Endpoints**:
   - GET `/api/revenues` - Listar ingresos con opciones de filtrado
   - POST `/api/revenues` - Crear un nuevo ingreso
   - PUT `/api/revenues/:id` - Actualizar un ingreso existente
   - DELETE `/api/revenues/:id` - Eliminar un ingreso
   - GET `/api/revenues/export` - Exportar datos en formato CSV/Excel

3. **Integración con visualizaciones**:
   - Actualizar los datos de los gráficos y KPIs en tiempo real cuando se modifiquen los ingresos
   - Implementar cache de datos para mejorar el rendimiento

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/05cfdfd0-bd1b-4d89-be21-a2e2dd6fa08a) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)

