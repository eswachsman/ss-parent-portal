import { useAuth } from '../contexts/AuthContext';
import { formatDate } from '../utils/dateFormatter';

export default function Dashboard() {
  const { selectedSchool } = useAuth();
  
  const financialSummary = {
    totalBalance: 16715.00,
    dueToday: 6219.92,
    nextPaymentDate: '2024-01-15',
    lastPayment: {
      amount: 1000.00,
      date: '2023-12-18'
    }
  };

  return (
    <div className="space-y-6">
      {/* Financial Summary */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Financial Summary</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="bg-red-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-red-800">Due Today</h3>
              <p className="mt-1 text-2xl font-semibold text-red-900">
                ${financialSummary.dueToday.toFixed(2)}
              </p>
            </div>
          </div>
          <div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-700">Total Balance</h3>
              <p className="mt-1 text-2xl font-semibold text-gray-900">
                ${financialSummary.totalBalance.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          <p>Last payment: ${financialSummary.lastPayment.amount.toFixed(2)} on {formatDate(financialSummary.lastPayment.date)}</p>
          <p>Next payment due: {formatDate(financialSummary.nextPaymentDate)}</p>
        </div>
      </div>
    </div>
  );
}
