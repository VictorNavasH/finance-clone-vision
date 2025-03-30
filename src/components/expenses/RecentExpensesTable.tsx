
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Edit, Trash2, Eye } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { 
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Expense = {
  id: number;
  description: string;
  category: string;
  amount: string;
  date: string;
}

interface RecentExpensesTableProps {
  expenses: Expense[];
  showActions?: boolean;
  onView?: (id: number) => void;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
  itemsPerPage?: number;
}

export default function RecentExpensesTable({ 
  expenses, 
  showActions = false, 
  onView,
  onEdit, 
  onDelete,
  itemsPerPage = 10
}: RecentExpensesTableProps) {
  const [currentPage, setCurrentPage] = useState(1);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(expenses.length / itemsPerPage);
  
  // Obtener solo los gastos para la página actual
  const indexOfLastExpense = currentPage * itemsPerPage;
  const indexOfFirstExpense = indexOfLastExpense - itemsPerPage;
  const currentExpenses = expenses.slice(indexOfFirstExpense, indexOfLastExpense);

  // Manejar cambio de página
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Mapear colores para las categorías
  const getCategoryColor = (category: string) => {
    const categoryColors: { [key: string]: string } = {
      "Personal": "bg-[#227C9D]/10 text-[#227C9D]",
      "Alquiler": "bg-[#17C3B2]/10 text-[#17C3B2]",
      "Marketing": "bg-[#FFCB77]/10 text-[#FFCB77]",
      "Servicios": "bg-[#FE6D73]/10 text-[#FE6D73]",
      "Suministros": "bg-[#2F2F4C]/10 text-[#2F2F4C]",
      "Otros": "bg-[#8E9196]/10 text-[#8E9196]"
    };
    return categoryColors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[#2F2F4C]">Gastos Recientes</CardTitle>
        <CardDescription>Últimas transacciones registradas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-2 font-medium">Descripción</th>
                <th className="pb-2 font-medium">Categoría</th>
                <th className="pb-2 font-medium">Importe</th>
                <th className="pb-2 font-medium">Fecha</th>
                <th className="pb-2 font-medium text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {currentExpenses.length > 0 ? (
                currentExpenses.map((expense) => (
                  <tr key={expense.id} className="border-b last:border-0">
                    <td className="py-3">{expense.description}</td>
                    <td className="py-3">
                      <Badge variant="outline" className={getCategoryColor(expense.category)}>
                        {expense.category}
                      </Badge>
                    </td>
                    <td className="py-3 font-medium">{expense.amount}</td>
                    <td className="py-3 text-muted-foreground">{expense.date}</td>
                    <td className="py-3 text-right">
                      {showActions ? (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <FileText className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => onView && onView(expense.id)}>
                              <Eye className="h-4 w-4 mr-2" /> Ver detalle
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => onEdit && onEdit(expense.id)}>
                              <Edit className="h-4 w-4 mr-2" /> Editar
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              onClick={() => onDelete && onDelete(expense.id)}
                              className="text-red-600"
                            >
                              <Trash2 className="h-4 w-4 mr-2" /> Eliminar
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ) : (
                        <Button variant="ghost" size="icon">
                          <FileText className="h-4 w-4" />
                        </Button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-6 text-center text-muted-foreground">
                    No se encontraron gastos
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {totalPages > 1 && (
          <Pagination className="mt-4">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)} 
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                // Mostrar páginas cercanas a la actual
                let pageToShow;
                if (totalPages <= 5) {
                  pageToShow = i + 1;
                } else if (currentPage <= 3) {
                  pageToShow = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageToShow = totalPages - 4 + i;
                } else {
                  pageToShow = currentPage - 2 + i;
                }
                
                return (
                  <PaginationItem key={i}>
                    <PaginationLink
                      isActive={pageToShow === currentPage}
                      onClick={() => handlePageChange(pageToShow)}
                    >
                      {pageToShow}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </CardContent>
    </Card>
  );
}
