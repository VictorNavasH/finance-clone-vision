
# Financial Dashboard Application - Detailed Prompt

## Overview
Create a comprehensive financial management dashboard application for businesses with a focus on revenue analysis, expense tracking, budgeting, and forecasting. The application should have a clean, professional interface with responsive design that works well on all devices.

## Design System
- **Color Palette**: Use a professional financial theme with primary colors #227C9D (blue), #17C3B2 (teal), #FFCB77 (gold), and #FE6D73 (coral)
- **Typography**: Clean, readable fonts with clear hierarchy
- **Components**: Shadcn/UI component library with custom styling to match the financial theme
- **Icons**: Lucide React icon library
- **Layout**: Responsive with sidebar navigation and content area

## Core Features

### 1. Main Dashboard
- KPI cards showing total revenue, expenses, net profit, and budget variance
- Financial performance chart (monthly trends with toggle between line and bar views)
- Expense breakdown by category
- Budget progress tracking
- Financial forecast card
- Upcoming payments list
- Quick access to add new transactions

### 2. Revenue Analysis Module
#### Revenue Overview
- **Revenue Toolbar**:
  - Title "Análisis de Ingresos"
  - Year filter dropdown (2022-2025)
  - Filter button for additional filtering options
  - Export button to download data
  - "Add Revenue" button to record new income

- **KPI Cards**:
  - Total Revenue with year-over-year change
  - Average Monthly Income with year-over-year change
  - Growth Rate with year-over-year change

- **Revenue Trends Chart**:
  - Monthly revenue breakdown by source
  - Toggle between line chart and area chart views
  - Interactive tooltips showing exact values
  - Multiple data series (Product Sales, Services, Subscriptions, Total)

- **Revenue by Source**:
  - Visual breakdown of revenue sources using progress bars
  - Percentage contribution of each revenue stream
  - Absolute value display

- **Quarterly Revenue**:
  - Quarterly performance metrics
  - Year-over-year change for each quarter
  - Visual representation of quarterly data

- **Add Revenue Functionality**:
  - Modal dialog for adding new revenue entries
  - Form fields for amount, date, category, and description
  - Validation for required fields
  - Success notification upon submission

### 3. Expense Tracking
- Comprehensive expense entry form
- Categorization of expenses
- Recent transactions table
- Expense statistics and trends
- Filtering and search capabilities

### 4. Budget Management
- Department budget allocation
- Budget vs. actual tracking
- Visual progress indicators
- Budget creation dialog

### 5. Financial Forecasting
- Sales projections
- Monthly expense tracking
- Data upload capabilities for analysis

### 6. Restaurant-Specific Dashboard
- Occupancy tracking
- Revenue metrics specific to restaurant operations
- Performance analytics

### 7. Tax Management
- Tax calculation tools
- Tax payment scheduling
- Tax documentation

## Technical Requirements

### Responsive Design
- Mobile-first approach
- Adaptive layouts for different screen sizes
- Touch-friendly interface elements

### Data Visualization
- Interactive charts using Recharts
- Multiple visualization options (line, bar, area charts)
- Clear data representation with appropriate colors

### State Management
- React Query for server state
- React useState/useContext for local state
- Efficient data fetching and caching

### Form Handling
- React Hook Form for form state management
- Zod for schema validation
- Intuitive error messaging

### Notifications
- Toast notifications for user feedback
- Clear success/error states

### Navigation
- Collapsible sidebar with icon and full views
- Mobile-optimized navigation with hamburger menu
- Breadcrumbs for deep navigation

## Implementation Notes
1. Use React, TypeScript, and Vite for the frontend
2. Implement Tailwind CSS for styling
3. Create reusable components for common UI elements
4. Ensure all forms have proper validation
5. Implement responsive design for all screen sizes
6. Enable dark/light mode toggle
7. Ensure accessibility compliance
8. Add animations for improved UX
9. Implement proper error handling throughout the application

## Future Enhancements
- User authentication and role-based access
- Multi-language support
- Advanced financial reporting
- PDF export functionality
- Email notifications
- Custom dashboard layouts
- Data import/export capabilities
- Integration with accounting software
