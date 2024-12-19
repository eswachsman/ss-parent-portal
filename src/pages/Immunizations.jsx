const mockImmunizationData = {
  familyName: 'Buckridge',
  students: [
    {
      id: 1,
      studentName: 'Rollin Buckridge',
      grade: 'Pre 1A2',
      overallStatus: 'Not Up to Date',
      immunizations: {
        diphtheria: { status: 'Completed', date: '06/18/2024' },
        hepatitisB: { status: 'In-Process', date: '02/07/2025', doses: 4 },
        haemophilus: { status: 'Completed', date: null },
        polio: { status: 'Completed', date: '07/01/2024' },
        mmr: { status: 'In-Process', date: '08/13/2024', doses: 2 },
        meningococcal: { status: 'Not Applicable', date: '09/01/2030' }
      }
    },
    {
      id: 2,
      studentName: 'Adam Buckridge',
      grade: '1st Grade',
      overallStatus: 'Up to Date',
      immunizations: {
        diphtheria: { status: 'Completed', date: '06/17/2024' },
        hepatitisB: { status: 'Completed', date: '08/08/2024' },
        haemophilus: { status: 'Completed', date: null },
        polio: { status: 'Completed', date: '06/17/2024' },
        mmr: { status: 'Completed', date: null },
        meningococcal: { status: 'Not Applicable', date: '09/01/2029' }
      }
    }
  ]
}

export default function Immunizations() {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'text-green-600'
      case 'in-process':
        return 'text-orange-600'
      case 'due':
        return 'text-red-600'
      case 'exempt':
        return 'text-purple-600'
      default:
        return 'text-gray-600'
    }
  }

  const getOverallStatusBadge = (status) => {
    const isUpToDate = status === 'Up to Date'
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        isUpToDate ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}>
        {status}
      </span>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">
          Immunizations - {mockImmunizationData.familyName} Family
        </h1>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Student Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Grade
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Diphtheria
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Hepatitis B
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Haemophilus
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Polio
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                MMR
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Meningococcal
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockImmunizationData.students.map((student) => (
              <tr key={student.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {student.studentName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {student.grade}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getOverallStatusBadge(student.overallStatus)}
                </td>
                {Object.entries(student.immunizations).map(([key, value], i) => (
                  <td key={i} className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm ${getStatusColor(value.status)}`}>
                      {value.status}
                      {value.doses && <span className="ml-1">({value.doses})</span>}
                    </div>
                    {value.date && (
                      <div className="text-xs text-gray-500">{value.date}</div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
