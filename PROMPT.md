
# Financial Dashboard Application - Detailed Prompt

## Overview
Create a comprehensive financial management dashboard application for businesses with a focus on revenue analysis, expense tracking, budgeting, and forecasting. The application should have a clean, professional interface with responsive design that works well on all devices. The dashboard will serve as a central hub for financial decision-making, providing real-time insights and visualizations of key financial metrics.

## Design System
- **Color Palette**: 
  - Primary Blue: #227C9D - Use for main actions, headers, and primary UI elements
  - Teal: #17C3B2 - Use for secondary actions, success states, and growth indicators
  - Gold: #FFCB77 - Use for warnings, highlights, and accent elements
  - Coral: #FE6D73 - Use for errors, alerts, and negative indicators
  - Neutral Gray: #8E9196 - Use for text, borders, and non-interactive elements
  - Light Background: #F9FAFB - Use for card backgrounds and container elements
  - Dark Text: #2F2F4C - Use for primary text content
  
- **Typography**: 
  - Headings: Sans-serif font (e.g., Inter, Roboto) with weights 600-700
  - Body text: Sans-serif font with weights 400-500
  - Font sizes: 
    - Large headings: 2rem (32px)
    - Section headings: 1.5rem (24px)
    - Subheadings: 1.25rem (20px)
    - Body text: 1rem (16px)
    - Small text/captions: 0.875rem (14px)
  - Line height: 1.5 for body text, 1.2 for headings

- **Components**: 
  - Shadcn/UI component library with custom styling to match the financial theme
  - Custom KPI cards with trend indicators
  - Interactive data visualization components
  - Form components with validation states
  - Modal dialogs for forms and detailed views
  - Toast notifications for system feedback

- **Icons**: 
  - Lucide React icon library
  - Use consistent icon sizes: 16px for inline, 20px for buttons, 24px for features
  - Apply the color palette to icons to maintain visual harmony

- **Layout**: 
  - Responsive sidebar navigation that collapses to a hamburger menu on mobile
  - Content area with responsive grid system (12-column layout)
  - Card-based UI for distinct content sections
  - Proper spacing system with consistent margins and padding
  - Responsive breakpoints:
    - Mobile: 0-640px
    - Tablet: 641px-1024px
    - Desktop: 1025px+

## Core Features

### 1. Main Dashboard
- **KPI Cards**:
  - Total Revenue card with year-over-year change percentage
  - Total Expenses card with year-over-year change percentage
  - Net Profit card with profit margin percentage
  - Budget Variance card showing actual vs. planned spending
  - All cards should include visual trend indicators (up/down arrows)
  - Clickable cards that navigate to detailed views

- **Financial Performance Chart**:
  - Monthly trends visualization with toggle between line and bar views
  - Multi-metric display showing revenue, expenses, and profit lines
  - Interactive tooltips showing exact values on hover
  - Time period selector (Last 30 days, Last 90 days, Last 12 months, YTD)
  - Option to compare with previous periods
  - Legend with toggleable metrics

- **Expense Breakdown**:
  - Category-based donut chart showing proportional spending
  - Top spending categories highlighted
  - Interactive segments that show exact amounts and percentages
  - Comparison with previous period or budget allocation

- **Budget Progress Tracking**:
  - Visual progress bars for each budget category
  - Percentage completion indicators
  - Color-coded status (under budget, on track, over budget)
  - Time remaining until end of budget period

- **Financial Forecast Card**:
  - Projected revenue and expenses for the next period
  - Confidence interval visualization
  - Key factors influencing the forecast
  - Quick link to detailed forecast page

- **Upcoming Payments List**:
  - Scrollable list of upcoming payment obligations
  - Due dates with countdown indicators
  - Payment amounts and recipients
  - Status indicators (pending, scheduled, overdue)
  - Quick action buttons (pay now, edit, postpone)

- **Quick Access Actions**:
  - "Add Expense" button that opens the expense entry form
  - "Add Revenue" button that opens the revenue entry form
  - "Create Budget" button that opens the budget creation dialog
  - "Generate Report" button that opens the reporting interface

### 2. Revenue Analysis Module
#### Revenue Overview
- **Revenue Toolbar**:
  - Title "Análisis de Ingresos" with customizable language option
  - Year filter dropdown (2022-2025) with custom styling
  - Month filter dropdown for more granular analysis
  - Filter button that opens a comprehensive filtering panel with:
    - Date range selectors
    - Revenue source filters
    - Customer/client filters
    - Amount range sliders
  - Export button with dropdown options:
    - Export to Excel
    - Export to CSV
    - Export to PDF
    - Print report
  - "Add Revenue" button with icon and text that opens the revenue entry modal

- **KPI Cards**:
  - Total Revenue card with:
    - Large currency amount display
    - Year-over-year change percentage with arrow indicator
    - Color-coded positive/negative change
    - Sparkline trend visualization
  - Average Monthly Income card with:
    - Currency amount display
    - Year-over-year change percentage
    - Small bar chart showing monthly distribution
  - Growth Rate card with:
    - Percentage display with decimals
    - Year-over-year change comparison
    - Visual trend indicator
    - Historical growth rate mini-chart

- **Revenue Trends Chart**:
  - Monthly revenue breakdown by source visualized as:
    - Stacked area chart (default view)
    - Line chart (toggle option)
    - Stacked bar chart (toggle option)
  - Interactive tooltip showing:
    - Date
    - Total revenue for the period
    - Breakdown by revenue source with amounts and percentages
    - Year-over-year comparison
  - Multiple data series clearly color-coded:
    - Product Sales (blue)
    - Services (teal)
    - Subscriptions (gold)
    - Other Income (gray)
    - Total (bold line above areas)
  - Zoom and pan capabilities
  - Data point markers on hover
  - Animation on load and data change

- **Revenue by Source**:
  - Visual breakdown using:
    - Horizontal progress bars showing relative contribution
    - Percentage labels with exact values
    - Absolute currency amount for each source
    - Icons representing each revenue category
  - Color-coded categories matching the chart colors
  - Sortable by amount or percentage
  - Comparison toggle with previous period
  - Small trend indicator for each source

- **Quarterly Revenue**:
  - Quarterly performance metrics displayed in a card grid
  - Each quarter card showing:
    - Quarter designation (Q1, Q2, Q3, Q4)
    - Total revenue amount
    - Year-over-year change percentage and indicator
    - Small bar or sparkline showing monthly breakdown
  - Visual representation as a column chart comparing quarters
  - Highest/lowest quarter highlighting
  - Seasonal pattern identification

- **Add Revenue Functionality**:
  - Modal dialog with professional design and clear sections
  - Form fields with proper validation:
    - Amount field with currency prefix and decimal validation
    - Date field with date picker calendar
    - Category dropdown with customizable options
    - Description text area with character count
    - Customer/client field with autocomplete
    - Payment method dropdown
    - Receipt upload capability
    - Tax rate field with percentage validation
  - Required field indicators and inline validation messages
  - Save and cancel buttons with proper states (disabled when invalid)
  - Success notification upon submission with amount and category details
  - Option to add another entry without closing the modal
  - Recent entries quick-view toggle

### 3. Expense Tracking
- **Expense Entry Form**:
  - Clean, multi-section form layout
  - Amount field with currency formatting
  - Date picker with calendar interface
  - Category selector with icons and subcategories
  - Vendor/payee field with autocomplete from history
  - Payment method dropdown (Cash, Credit Card, Bank Transfer, etc.)
  - Receipt upload with drag-and-drop and preview
  - Tags input for custom categorization
  - Split expense functionality for multi-category expenses
  - Tax-deductible toggle with percentage field
  - Notes section with formatting options
  - Save as recurring expense option with frequency settings

- **Expense Categorization**:
  - Predefined business categories with icons:
    - Office Supplies
    - Utilities
    - Rent
    - Salaries
    - Marketing
    - Travel
    - Meals
    - Software
    - Hardware
    - Professional Services
    - Taxes
    - Insurance
    - Miscellaneous
  - Custom category creation interface
  - Category reordering capability
  - Category budget allocation view
  - Category spending trends

- **Recent Transactions Table**:
  - Sortable and filterable data grid
  - Columns:
    - Date
    - Category (with icon)
    - Description
    - Amount
    - Payment Method
    - Status (Pending, Cleared, Reconciled)
    - Actions (Edit, Delete, Duplicate)
  - Pagination with customizable rows per page
  - Search functionality by any field
  - Batch operations (delete, categorize, export)
  - Row expansion for additional details
  - Receipt thumbnail with full-size preview
  - Color-coded categories and statuses

- **Expense Statistics and Trends**:
  - Month-over-month spending chart
  - Category distribution pie chart
  - Expense heat map by day/week
  - Running average line
  - Unusual spending detection
  - Recurring expense identification
  - Spend forecast based on historical data
  - Budget compliance indicators

- **Filtering and Search**:
  - Advanced filtering panel with:
    - Date range selectors
    - Amount range slider
    - Category multi-select
    - Vendor/payee search
    - Payment method filter
    - Tag filters
    - Tax-deductible filter
  - Saved filter presets
  - Recent searches history
  - Quick filter buttons for common scenarios

### 4. Budget Management
- **Department Budget Allocation**:
  - Visual department hierarchy with nested budgets
  - Drag-and-drop budget allocation interface
  - Percentage and absolute amount views
  - Historical allocation comparison
  - Department performance metrics
  - User assignment to departments for reporting
  - Budget transfer between departments functionality
  - Department budget utilization heatmap

- **Budget vs. Actual Tracking**:
  - Side-by-side bar comparison of budget vs. actual
  - Variance calculation and display
  - Trend line showing cumulative spending
  - Daily/weekly burn rate calculation
  - Projected overspend/underspend alerts
  - Drill-down capability to expense level
  - Export to spreadsheet functionality
  - Period-over-period comparison

- **Visual Progress Indicators**:
  - Circular progress gauges for overall budget
  - Linear progress bars for categories
  - Color-coded status indicators
  - Tooltip breakdowns on hover
  - Animated progress updates
  - Critical threshold notifications
  - Time-based projections
  - Budget velocity indicators

- **Budget Creation Dialog**:
  - Step-by-step budget creation wizard
  - Period selection (monthly, quarterly, annual)
  - Template selection from previous budgets
  - Category-based allocation interface
  - Historical data-based suggestions
  - Department assignment
  - Approval workflow integration
  - Notification settings for alerts
  - Attachment of supporting documents
  - Recurrence settings for auto-renewal

### 5. Financial Forecasting
- **Sales Projections**:
  - Multiple projection models:
    - Linear regression
    - Seasonal adjustment
    - Growth-based
    - Moving average
  - Confidence interval visualization
  - Scenario modeling (best case, expected, worst case)
  - Factor adjustment sliders
  - Market condition variables
  - Revenue source breakdown
  - Historical accuracy tracking
  - Revision history

- **Monthly Expense Tracking**:
  - Fixed vs. variable expense categorization
  - Monthly trend visualization
  - Anomaly detection and highlighting
  - Seasonal pattern identification
  - Cost-cutting opportunity identification
  - Expense growth rate calculation
  - Correlation with revenue analysis
  - Cost center breakdown

- **Data Upload Capabilities**:
  - File upload interface supporting:
    - Excel (.xlsx)
    - CSV
    - PDF (with data extraction)
    - Bank statement imports
  - Column mapping interface
  - Data validation and error correction
  - Duplicate detection
  - Batch processing status
  - Template saving for recurring imports
  - Import scheduling
  - API integration with accounting software

### 6. Restaurant-Specific Dashboard
- **Occupancy Tracking**:
  - Real-time occupancy rate display
  - Hourly, daily, weekly views
  - Table utilization heatmap
  - Average seating duration metrics
  - Turn rate calculation
  - Peak hour identification
  - Capacity planning tools
  - Reservation integration

- **Revenue Metrics**:
  - Average check amount tracking
  - Per-seat revenue calculation
  - Menu item sales breakdown
  - Beverage vs. food sales ratio
  - Revenue per hour visualization
  - Promotion effectiveness measurement
  - Server performance metrics
  - Payment method distribution

- **Performance Analytics**:
  - Labor cost as percentage of revenue
  - Food cost tracking
  - Inventory turnover rates
  - Menu engineering quadrant analysis
  - Customer satisfaction correlation
  - Return customer rate
  - Order timing analytics
  - Peak performance indicators

### 7. Tax Management
- **Tax Calculation Tools**:
  - Sales tax calculator
  - Income tax estimator
  - Deduction optimizer
  - Tax category assignment
  - Tax rate management by jurisdiction
  - Quarterly tax liability projection
  - Tax-deductible expense tagging
  - Sales tax by state/location

- **Tax Payment Scheduling**:
  - Tax calendar with due dates
  - Payment scheduling interface
  - Reminder setup
  - Payment history tracking
  - Estimated vs. actual payment comparison
  - Payment method selection
  - Electronic filing integration
  - Late payment penalty calculator

- **Tax Documentation**:
  - Document storage and organization
  - Tax form repository
  - Receipt categorization for tax purposes
  - Audit trail maintenance
  - Document expiration tracking
  - Secure sharing capabilities
  - OCR for document data extraction
  - Year-end tax package preparation

## Technical Requirements

### Responsive Design
- **Mobile-first Approach**:
  - Designs start with mobile layouts then scale up
  - Touch-optimized interface elements
  - Simplified views for small screens
  - Critical functions accessible on all devices
  - Performance optimization for mobile networks

- **Adaptive Layouts**:
  - Fluid grid system that adapts to screen width
  - Breakpoints at 640px, 768px, 1024px, 1280px, and 1536px
  - Component reordering at different breakpoints
  - Collapsible sections on smaller screens
  - Alternative visualizations for complex charts on mobile

- **Touch-friendly Interface**:
  - Appropriately sized touch targets (minimum 44x44px)
  - Swipe gestures for common actions
  - Pull-to-refresh functionality
  - Bottom navigation on mobile
  - Reduced hover dependency

### Data Visualization
- **Interactive Charts using Recharts**:
  - Line charts for trends
  - Bar charts for comparisons
  - Area charts for composition
  - Pie/donut charts for distribution
  - Scatter plots for correlation
  - Radar charts for multi-variable comparison
  - Responsive chart sizing and simplification

- **Multiple Visualization Options**:
  - Toggle between chart types
  - Data density controls
  - Zoom and pan capabilities
  - Drill-down functionality
  - Data point highlighting
  - Custom time period selection
  - Annotation capabilities

- **Clear Data Representation**:
  - Consistent color coding scheme
  - Clear labels and legends
  - Appropriate scales and axes
  - Data point markers
  - Context-providing annotations
  - Trend lines and forecasts
  - Benchmark indicators

### State Management
- **React Query for Server State**:
  - Cached data fetching
  - Background refetching
  - Pagination handling
  - Optimistic updates
  - Error handling and retries
  - Prefetching for improved UX
  - Mutation capabilities for data changes

- **React useState/useContext for Local State**:
  - Component-specific state
  - Shared state via context providers
  - Theme and preference management
  - Form state handling
  - UI state (modals, dropdowns, etc.)
  - Navigation state

- **Efficient Data Fetching and Caching**:
  - Request deduplication
  - Stale-while-revalidate pattern
  - Conditional fetching
  - Polling for real-time data
  - Cache invalidation strategies
  - Offline capability with cached data

### Form Handling
- **React Hook Form for State Management**:
  - Uncontrolled components for performance
  - Field arrays for dynamic inputs
  - Form state access and manipulation
  - Form submission handling
  - Form reset and default values
  - Watch functionality for dependent fields

- **Zod for Schema Validation**:
  - Type-safe validation schemas
  - Complex validation rules
  - Custom error messages
  - Conditional validation
  - Field dependencies
  - Form-level validation
  - TypeScript integration

- **Intuitive Error Messaging**:
  - Inline error display
  - Field highlighting
  - Error summaries
  - Contextual help
  - Validation timing control
  - Progressive disclosure
  - Accessible error notifications

### Notifications
- **Toast Notifications for User Feedback**:
  - Success confirmations
  - Error alerts
  - Warning messages
  - Information updates
  - Process completion notifications
  - Timed auto-dismissal
  - Action buttons within toasts

- **Clear Success/Error States**:
  - Consistent color coding (green for success, red for errors)
  - Icon reinforcement
  - Descriptive messages
  - Recovery suggestions for errors
  - Next step guidance for success
  - Animation for state changes
  - Focus management for accessibility

### Navigation
- **Collapsible Sidebar**:
  - Full sidebar with labels for desktop
  - Icon-only sidebar for tablet
  - Hidden sidebar with hamburger for mobile
  - Toggle control for user preference
  - Keyboard navigation support
  - Active state indication
  - Nested navigation groups

- **Mobile-optimized Navigation**:
  - Bottom navigation bar on mobile
  - Hamburger menu for full site map
  - Back button integration
  - Reduced navigation options
  - Context-aware navigation
  - Gesture support
  - One-handed operation zones

- **Breadcrumbs for Deep Navigation**:
  - Hierarchical path display
  - Clickable breadcrumb links
  - Truncation for long paths
  - Current location emphasis
  - Integration with browser history
  - SEO-friendly structure
  - Contextual breadcrumbs for complex flows

## Implementation Notes
1. **Use React, TypeScript, and Vite**:
   - React 18+ for component architecture
   - TypeScript for type safety and developer experience
   - Vite for fast development and optimized builds
   - ESLint and Prettier for code quality

2. **Implement Tailwind CSS**:
   - Utility-first approach
   - Custom theme extension
   - Component-specific styles
   - Responsive utilities
   - Dark mode support
   - Animation classes
   - Performance optimization

3. **Create Reusable Components**:
   - Atomic design approach (atoms, molecules, organisms)
   - Component documentation
   - Consistent props API
   - Accessibility built-in
   - Responsive behavior
   - Theming support
   - Test coverage

4. **Ensure Form Validation**:
   - Client-side validation
   - Server validation integration
   - Field-level validation
   - Form-level validation
   - Async validation
   - Error recovery patterns
   - Validation timing control

5. **Implement Responsive Design**:
   - Viewport meta tags
   - Media queries
   - Fluid typography
   - Flexible images
   - Testing across devices
   - Touch-friendly controls
   - Print stylesheet support

6. **Enable Dark/Light Mode**:
   - OS preference detection
   - User preference toggle
   - Persistent preference storage
   - Smooth transition effects
   - Consistent color mapping
   - Image and media adaptation
   - SVG and icon adjustments

7. **Ensure Accessibility Compliance**:
   - WCAG 2.1 AA standard
   - Semantic HTML
   - ARIA attributes
   - Keyboard navigation
   - Screen reader support
   - Sufficient color contrast
   - Focus management
   - Skip links

8. **Add Animations for UX**:
   - Page transitions
   - Component enter/exit animations
   - Loading states
   - Hover and active states
   - Attention-guiding animations
   - Performance-conscious implementation
   - Respect reduced motion preferences

9. **Implement Error Handling**:
   - Global error boundary
   - API error handling
   - Offline detection
   - Retry mechanisms
   - Fallback UI
   - User-friendly error messages
   - Error logging and reporting

## Future Enhancements
- **User Authentication and Role-based Access**:
  - Secure login system
  - Role definition and assignment
  - Permission management
  - User profile management
  - Password reset flow
  - Two-factor authentication
  - Session management
  - Activity logging

- **Multi-language Support**:
  - Translation system
  - Language detection
  - User language preference
  - RTL support
  - Date and number formatting
  - Currency localization
  - Translatable components

- **Advanced Financial Reporting**:
  - Custom report builder
  - Scheduled report generation
  - Report templates
  - Interactive dashboards
  - Comparative analysis
  - Trend identification
  - Executive summaries
  - Financial statement generation

- **PDF Export Functionality**:
  - Report to PDF conversion
  - Custom PDF templates
  - Branding options
  - Table and chart rendering
  - Multi-page support
  - Headers and footers
  - Password protection

- **Email Notifications**:
  - Alert system
  - Scheduled reports
  - Custom notification preferences
  - Email templates
  - Mobile-friendly email design
  - Click-through tracking
  - Unsubscribe management

- **Custom Dashboard Layouts**:
  - Drag-and-drop configuration
  - Widget library
  - Layout saving
  - Dashboard sharing
  - Widget customization
  - Default views by role
  - Mobile layout options

- **Data Import/Export Capabilities**:
  - Multiple format support
  - Mapping interface
  - Scheduled imports
  - Error handling and validation
  - Duplicate management
  - Version control
  - Audit history

- **Integration with Accounting Software**:
  - QuickBooks integration
  - Xero integration
  - SAP integration
  - Data synchronization
  - Authentication handling
  - Error reconciliation
  - Manual override capabilities
