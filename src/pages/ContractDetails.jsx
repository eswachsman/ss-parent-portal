import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

const mockContractData = {
  academicYear: '2024-2025',
  totalContract: 16715.00,
  paid: 3530.00,
  balance: 13185.00,
  dueToday: 6219.92,
  family: {
    name: 'Buckridge',
    homePhone: '+18963225645',
    mobilePhone: '+15556554459',
    email: 'chaim@fligman.com'
  },
  paymentHistory: [
    {
      date: '11/26/2024',
      amount: 400.00,
      paymentType: 'Check',
      paymentSource: 'Check number: 1886',
      ref: '4513',
      acceptedBy: 'Snpomerantz User',
      status: 'Accepted',
      runningBalance: 16315.00
    },
    {
      date: '11/28/2024',
      amount: 1130.00,
      paymentType: 'Credit card',
      paymentSource: 'Transaction number: r197818705',
      ref: '4514',
      acceptedBy: 'Support User',
      status: 'Accepted',
      runningBalance: 15185.00
    },
    {
      date: '12/10/2024',
      amount: 1000.00,
      paymentType: 'Credit card',
      paymentSource: 'Transaction number: r199064717',
      ref: '4541',
      acceptedBy: 'Support User',
      status: 'Accepted',
      runningBalance: 14185.00
    },
    {
      date: '12/18/2024',
      amount: 1000.00,
      paymentType: 'Credit card',
      paymentSource: 'Transaction number: r110013507',
      ref: '4586',
      acceptedBy: 'Support User',
      status: 'Accepted',
      runningBalance: 13185.00
    }
  ]
}

export default function ContractDetails() {
  const { selectedSchool } = useAuth()
  const [activeTab, setActiveTab] = useState('fees')

  const percentagePaid = (mockContractData.paid / mockContractData.totalContract) * 100

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-900">Contract Details</h1>
            <select className="border rounded-md px-3 py-1.5 text-sm text-gray-700">
              <option>Academic year {mockContractData.academicYear}</option>
            </select>
          </div>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Family Info */}
            <div className="bg-white rounded-lg border p-4">
              <h2 className="text-lg font-medium mb-4">Family Members</h2>
              <div className="space-y-2">
                <select className="w-full border rounded-md px-3 py-2">
                  <option>{mockContractData.family.name}</option>
                </select>
                <p className="text-sm text-gray-600">
                  Home phone: {mockContractData.family.homePhone}
                </p>
                <p className="text-sm text-gray-600">
                  Mobile phone: {mockContractData.family.mobilePhone}
                </p>
                <p className="text-sm text-gray-600">
                  Email: <a href={`mailto:${mockContractData.family.email}`} className="text-blue-500">
                    {mockContractData.family.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Payment Status */}
            <div className="bg-white rounded-lg border p-4">
              <h2 className="text-lg font-medium mb-4">Payment status</h2>
              <div className="space-y-4">
                <div className="text-right">
                  <span className="text-lg font-medium">
                    Total contract: ${mockContractData.totalContract.toFixed(2)}
                  </span>
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
                  <span>Paid - ${mockContractData.paid.toFixed(2)}</span>
                  <span>Balance - ${mockContractData.balance.toFixed(2)}</span>
                </div>
                <div className="bg-red-100 text-red-800 p-2 rounded-md flex items-center">
                  <span className="font-medium">
                    Total Due Today ${mockContractData.dueToday.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6 border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {['Fees', 'Payment History', 'Payment Plan'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`
                    py-4 px-1 border-b-2 font-medium text-sm
                    ${activeTab === tab.toLowerCase()
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                  `}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Payment History Table */}
          <div className="mt-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Payment Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Payment Source
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ref #
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Accepted By
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Running Balance
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockContractData.paymentHistory.map((payment, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {payment.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ${payment.amount.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {payment.paymentType}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {payment.paymentSource}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {payment.ref}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {payment.acceptedBy}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {payment.status}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ${payment.runningBalance.toFixed(2)}
                      </td>
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
