import { useState } from 'react'
import { Link } from 'react-router-dom'

const mockPaymentData = {
  totalContract: 16715,
  paid: 3530,
  balance: 13185,
  dueTodayAmount: 6219.92,
  paymentHistory: [
    {
      date: '11/26/2024',
      amount: 400,
      paymentType: 'Check',
      paymentSource: 'Check number: 1886',
      ref: '4513',
      acceptedBy: 'Snpomerantz User',
      status: 'Accepted',
      runningBalance: 16315
    },
    {
      date: '11/28/2024',
      amount: 1130,
      paymentType: 'Credit card',
      paymentSource: 'Transaction number: r197818705',
      ref: '4514',
      acceptedBy: 'Support User',
      status: 'Accepted',
      runningBalance: 15185
    },
    {
      date: '12/10/2024',
      amount: 1000,
      paymentType: 'Credit card',
      paymentSource: 'Transaction number: r199064717',
      ref: '4541',
      acceptedBy: 'Support User',
      status: 'Accepted',
      runningBalance: 14185
    },
    {
      date: '12/18/2024',
      amount: 1000,
      paymentType: 'Credit card',
      paymentSource: 'Transaction number: r110013507',
      ref: '4586',
      acceptedBy: 'Support User',
      status: 'Accepted',
      runningBalance: 13185
    }
  ]
}

export default function Payments() {
  const [searchTerm, setSearchTerm] = useState('')
  const [resultsPerPage, setResultsPerPage] = useState(10)

  const percentagePaid = (mockPaymentData.paid / mockPaymentData.totalContract) * 100

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-semibold text-gray-900">Contract Details</h1>
            <select className="border rounded-md px-3 py-1.5 text-sm text-gray-700">
              <option>Academic year 2024-2025</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Family Info */}
            <div className="bg-white rounded-lg border p-4">
              <h2 className="text-lg font-medium mb-4">Family Members</h2>
              <div className="space-y-2">
                <select className="w-full border rounded-md px-3 py-2">
                  <option>Chaim Fligman</option>
                </select>
                <p className="text-sm text-gray-600">
                  Home phone: +18963225645
                </p>
                <p className="text-sm text-gray-600">
                  Mobile phone: +15556554459
                </p>
                <p className="text-sm text-gray-600">
                  Email: <a href="mailto:chaim@fligman.com" className="text-blue-500">chaim@fligman.com</a>
                </p>
              </div>
            </div>

            {/* Payment Status */}
            <div className="bg-white rounded-lg border p-4">
              <h2 className="text-lg font-medium mb-4">Payment status</h2>
              <div className="space-y-4">
                <div className="text-right">
                  <span className="text-lg font-medium">Total contract: ${mockPaymentData.totalContract}</span>
                </div>
                <div className="relative pt-1">
                  <div className="flex h-2 overflow-hidden rounded bg-gray-200">
                    <div
                      className="bg-green-500"
                      style={{ width: `${percentagePaid}%` }}
                    />
                    <div
                      className="bg-red-500"
                      style={{ width: `${100 - percentagePaid}%` }}
                    />
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Paid - ${mockPaymentData.paid}</span>
                  <span>Balance - ${mockPaymentData.balance}</span>
                </div>
                <div className="bg-red-100 text-red-800 p-2 rounded-md flex items-center">
                  <span className="font-medium">Total Due Today ${mockPaymentData.dueTodayAmount}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment History Table */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Search the table..."
                  className="border rounded-md px-3 py-1.5 text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                  value={resultsPerPage}
                  onChange={(e) => setResultsPerPage(Number(e.target.value))}
                  className="border rounded-md px-3 py-1.5 text-sm"
                >
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                </select>
              </div>
              <button className="bg-blue-500 text-white px-4 py-1.5 rounded-md text-sm">
                Download
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Source</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ref #</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accepted By</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Running Balance</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockPaymentData.paymentHistory.map((payment, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${payment.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.paymentType}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.paymentSource}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.ref}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.acceptedBy}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.status}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${payment.runningBalance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
