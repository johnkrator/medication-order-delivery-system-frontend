# Medication Order Delivery System Frontend

A modern, responsive React frontend application for the Medication Order Delivery System. Built with React, Redux
Toolkit, and TypeScript, this application provides a seamless interface for managing medications, orders, deliveries,
and user interactions.

## 🚀 Features

### User Interface

- Responsive dashboard layout
- Role-based access control
- Real-time data updates
- Interactive charts and statistics

### Authentication & Authorization

- User login and registration
- Admin-specific features
- Protected routes
- Session management

### Dashboard Features

- Sales analytics
- Inventory management
- Order tracking
- Payment processing
- Delivery partner management

### Data Management

- Redux state management
- RTK Query for API integration
- Efficient caching
- Optimistic updates
- Error handling

### Components

- Reusable UI components
- Form validation
- Data tables
- Charts and graphs
- Loading states
- Error boundaries

## 🛠 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **State Management**: Redux Toolkit + RTK Query
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Charts**: Recharts
- **Forms**: React Hook Form
- **Icons**: Lucide React

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Backend API running (see backend repository)

## 🔧 Installation

1. Clone the repository:

```bash
git clone https://github.com/johnkrator/medication-order-delivery-system-frontend.git
cd medication-order-delivery-system-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

Edit the `.env` file with your configuration.

## 🚀 Running the Application

### Development mode:

```bash
npm run dev
```

### Production build:

```bash
npm run build
npm run preview
```

### Running tests:

```bash
npm run test
```

## 📁 Project Structure

```
src/
├── assets/           # Static assets
├── components/       # Reusable UI components
│   ├── Layout.tsx
│   ├── Sidebar.tsx
│   └── ...
├── pages/           # Application pages
│   ├── auth/
│   ├── DashboardPage.tsx
│   └── ...
├── redux/           # Redux state management
│   ├── features/    # Redux slices and RTK Query APIs
│   └── store/       # Redux store configuration
├── types/           # TypeScript type definitions
└── common/          # Shared utilities and interfaces
```

## 🔐 Environment Variables

Required environment variables:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_AUTH_TOKEN_KEY=auth_token
VITE_REFRESH_TOKEN_KEY=refresh_token
```

## 📱 Key Components

### Layout Components

- `Layout.tsx`: Main application layout
- `Sidebar.tsx`: Navigation sidebar
- `DashboardHeader.tsx`: Dashboard header with user info

### Feature Components

- `CreateOrderForm.tsx`: Order creation form
- `InventoryRow.tsx`: Inventory item display
- `SalesChart.tsx`: Sales analytics visualization
- `StatCard.tsx`: Statistics display card

### Authentication Components

- `ProtectedRoute.tsx`: Route protection HOC
- `LoginPage.tsx`: User login page
- `UserSignupPage.tsx`: User registration
- `AdminSignupPage.tsx`: Admin registration

## 🔄 State Management

### Redux Structure

- Features-based organization
- RTK Query for API calls
- Thunks for complex operations
- Typed selectors and actions

### API Integration

- Centralized API configuration
- Request/response transformations
- Error handling
- Cache management

## 💅 Styling

- TailwindCSS for utility-first styling
- Responsive design
- Theme customization
- Component-specific styles
- Design system integration

## 🔒 Security Features

- JWT token management
- Route protection
- Input validation
- XSS prevention
- CSRF protection
- Secure storage handling

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact

1. Email - cchidieberejohn@gmail.com
2. Project Link: https://github.com/johnkrator/medication-order-delivery-system-frontend
3. Deployed UI Link: https://pharmatrade.vercel.app/

## 🔗 Related Projects

- [Backend Repository](https://github.com/yourusername/medication-order-delivery-system-backend)

## 🙏 Acknowledgments

- React Team
- Redux Toolkit Team
- Vite Team
- shadcn/ui
- TailwindCSS Team
