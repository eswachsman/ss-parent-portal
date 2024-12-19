import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const mockPaymentMethods = [
  {
    id: 1,
    name: 'Elwin Morar',
    type: 'Discover',
    last4: '8130',
    isPrimary: true,
    expiryDate: '04/25'
  },
  {
    id: 2,
    name: 'Kristopher Gulgowski',
    type: 'Discover',
    last4: '6846',
    isPrimary: false,
    expiryDate: '07/24'
  }
]

export default function PaymentMethods() {
  const [paymentMethods, setPaymentMethods] = useState(mockPaymentMethods)
  const [showAddForm, setShowAddForm] = useState(false)
  const [newCard, setNewCard] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    type: 'Credit Card'
  })
  const [formError, setFormError] = useState('')

  const handleAddCard = (e) => {
    e.preventDefault()
    setFormError('')

    // Basic validation
    if (!newCard.name || !newCard.cardNumber || !newCard.expiryDate || !newCard.cvv) {
      setFormError('All fields are required')
      return
    }

    // Basic card number validation
    if (newCard.cardNumber.replace(/\s/g, '').length !== 16) {
      setFormError('Invalid card number')
      return
    }

    // Add new card
    const last4 = newCard.cardNumber.slice(-4)
    const newPaymentMethod = {
      id: Date.now(),
      name: newCard.name,
      type: newCard.type,
      last4,
      isPrimary: paymentMethods.length === 0,
      expiryDate: newCard.expiryDate
    }

    setPaymentMethods([...paymentMethods, newPaymentMethod])
    setNewCard({
      name: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      type: 'Credit Card'
    })
    setShowAddForm(false)
  }

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ''
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(' ')
    } else {
      return value
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Payment Methods</h1>
        <button
          onClick={() => setShowAddForm(true)}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Add Payment Method
        </button>
      </div>

      {/* Add Payment Method Form */}
      {showAddForm && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">Add Payment Method</h2>
              <button
                onClick={() => setShowAddForm(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {formError && (
              <div className="mb-4 p-2 bg-red-50 text-red-600 text-sm rounded">
                {formError}
              </div>
            )}

            <form onSubmit={handleAddCard} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  value={newCard.name}
                  onChange={(e) => setNewCard({ ...newCard, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Card Number
                </label>
                <input
                  type="text"
                  value={newCard.cardNumber}
                  onChange={(e) => setNewCard({ 
                    ...newCard, 
                    cardNumber: formatCardNumber(e.target.value)
                  })}
                  maxLength="19"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="1234 5678 9012 3456"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    value={newCard.expiryDate}
                    onChange={(e) => setNewCard({ ...newCard, expiryDate: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="MM/YY"
                    maxLength="5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    CVV
                  </label>
                  <input
                    type="password"
                    value={newCard.cvv}
                    onChange={(e) => setNewCard({ ...newCard, cvv: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="123"
                    maxLength="4"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Card Type
                </label>
                <select
                  value={newCard.type}
                  onChange={(e) => setNewCard({ ...newCard, type: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option>Credit Card</option>
                  <option>Debit Card</option>
                </select>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Add Card
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Payment Methods List */}
      <div className="bg-white shadow-sm rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className="border rounded-lg p-4 flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                    {method.type}
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {method.type} ending in {method.last4}
                    </p>
                    <p className="text-sm text-gray-500">
                      Expires {method.expiryDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {method.isPrimary ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Primary
                    </span>
                  ) : (
                    <button
                      onClick={() => {
                        setPaymentMethods(methods =>
                          methods.map(m => ({
                            ...m,
                            isPrimary: m.id === method.id
                          }))
                        )
                      }}
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      Make Primary
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setPaymentMethods(methods =>
                        methods.filter(m => m.id !== method.id)
                      )
                    }}
                    className="text-sm text-red-600 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
