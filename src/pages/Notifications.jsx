const mockNotifications = [
  {
    id: 1,
    message: 'Cash Payment in the amount of $50.00 is due date on 11/26/2024',
    user: 'Bill Peck',
    time: '12:17 AM',
    read: false
  },
  {
    id: 2,
    message: 'Cash Payment in the amount of $100.00 is due date on 11/26/2024',
    user: 'Bill Peck',
    time: '12:17 AM',
    read: false
  },
  {
    id: 3,
    message: 'The Check payment (No. ), in the amount of $100.00, due date 11/20/2024',
    user: 'Destin Welch',
    time: '12:17 AM',
    read: false
  },
  {
    id: 4,
    message: 'Cash Payment in the amount of $500.00 is due date on 12/01/2024',
    user: 'Doris Kaiser',
    time: '12:17 AM',
    read: true
  },
  {
    id: 5,
    message: 'The Check payment (No. ), in the amount of $200.00, due date 11/24/2024',
    user: 'Brooke Ramsey',
    time: '12:17 AM',
    read: true
  }
]

export default function Notifications() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Notifications</h1>

      <div className="space-y-4">
        {mockNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`
              bg-white rounded-lg shadow-sm p-4 flex items-start gap-4
              ${notification.read ? 'opacity-75' : ''}
            `}
          >
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600">💬</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900">{notification.message}</p>
              <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                <span>{notification.user}</span>
                <span>•</span>
                <span>{notification.time}</span>
              </div>
            </div>
            {!notification.read && (
              <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
