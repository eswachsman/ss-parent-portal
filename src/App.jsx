import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import { FamilyWizardProvider } from './contexts/FamilyWizardContext';
import Layout from './components/Layout';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import FamilyInfo from './pages/FamilyInfo';
import FamilyWizard from './pages/FamilyWizard';
import PaymentMethods from './pages/PaymentMethods';
import Notifications from './pages/Notifications';
import SchoolSelector from './components/SchoolSelector';
import Payment from './pages/Payment';
import ContractDetails from './pages/ContractDetails';
import Immunizations from './pages/Immunizations';

function PrivateRoute({ children }) {
  const { isAuthenticated, selectedSchool } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (isAuthenticated && !selectedSchool) {
    return <SchoolSelector />;
  }

  return children;
}

export default function App() {
  return (
    <FamilyWizardProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/school-select" element={<SchoolSelector />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="family" element={<FamilyInfo />} />
          <Route path="family/edit" element={<FamilyWizard />} />
          <Route path="payment-methods" element={<PaymentMethods />} />
          <Route path="payment" element={<Payment />} />
          <Route path="contract" element={<ContractDetails />} />
          <Route path="immunizations" element={<Immunizations />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </FamilyWizardProvider>
  );
}
