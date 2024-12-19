export default function ReviewStep({ formData, onEdit, onSubmit }) {
  const sections = [
    {
      title: 'Family Information',
      data: formData.family,
      fields: [
        { label: 'Family Name', key: 'familyName' },
        { label: 'Home Phone', key: 'homePhone' },
        { label: 'Address', key: 'streetAddress' },
        { label: 'City', key: 'city' },
        { label: 'State', key: 'state' },
        { label: 'ZIP Code', key: 'zipCode' }
      ]
    },
    {
      title: 'Parents',
      data: formData.parents,
      isArray: true,
      fields: [
        { label: 'Name', key: 'firstName', format: (item) => `${item.firstName} ${item.lastName}` },
        { label: 'Email', key: 'email' },
        { label: 'Cell Phone', key: 'cellPhone' },
        { label: 'Occupation', key: 'occupation' }
      ]
    },
    {
      title: 'Students',
      data: formData.students,
      isArray: true,
      fields: [
        { label: 'Name', key: 'firstName', format: (item) => `${item.firstName} ${item.lastName}` },
        { label: 'Grade', key: 'grade' },
        { label: 'Date of Birth', key: 'dateOfBirth' },
        { label: 'Gender', key: 'gender' }
      ]
    },
    {
      title: 'Emergency Contacts',
      data: formData.emergencyContacts,
      isArray: true,
      fields: [
        { label: 'Name', key: 'firstName', format: (item) => `${item.firstName} ${item.lastName}` },
        { label: 'Relationship', key: 'relationDescription' },
        { label: 'Cell Phone', key: 'cellPhone' }
      ]
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Review Information</h2>
        <button
          onClick={() => window.print()}
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          Print
        </button>
      </div>

      {sections.map((section) => (
        <div key={section.title} className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-center bg-gray-50">
            <h3 className="text-lg font-medium text-gray-900">{section.title}</h3>
            <button
              onClick={() => onEdit(section.title.toLowerCase())}
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              Edit
            </button>
          </div>
          <div className="px-4 py-5 sm:p-6">
            {section.isArray ? (
              <div className="space-y-4">
                {section.data.map((item, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                    {section.fields.map((field) => (
                      <div key={field.key} className="grid grid-cols-2 gap-4 py-2">
                        <dt className="text-sm font-medium text-gray-500">{field.label}</dt>
                        <dd className="text-sm text-gray-900">
                          {field.format ? field.format(item) : item[field.key] || '-'}
                        </dd>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <dl className="grid grid-cols-2 gap-4">
                {section.fields.map((field) => (
                  <div key={field.key} className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">{field.label}</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {section.data[field.key] || '-'}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>
      ))}

      <div className="flex justify-between pt-6">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          onClick={onSubmit}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </div>
  )
}
