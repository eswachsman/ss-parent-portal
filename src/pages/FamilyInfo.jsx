import { useNavigate } from 'react-router-dom'

const mockFamilyData = {
  familyName: 'Buckridge',
  homePhone: '+1-832-363-5020',
  address: '123 Main Street',
  city: 'Brooklyn',
  state: 'NY',
  zipCode: '11213',
  country: 'USA',
  parents: [
    {
      id: 1,
      prefix: 'Mrs',
      firstName: 'Izabell',
      lastName: 'Buckridge',
      firstNameHebrew: 'רבקה',
      lastNameHebrew: 'בוקרידג',
      email: 'izabell@example.com',
      cellPhone: '+1-555-123-4567',
      workPhone: '+1-555-987-6543',
      occupation: 'Software Engineer',
      employer: 'Tech Corp',
      jobTitle: 'Senior Developer',
      maritalStatus: 'Married',
      dateOfBirth: '1985-03-15',
      hebrewDateOfBirth: 'כ״ב אדר תשמ״ה',
      maidenName: 'Cohen'
    },
    {
      id: 2,
      prefix: 'Mr',
      firstName: 'Ansel',
      lastName: 'Buckridge',
      firstNameHebrew: 'אברהם',
      lastNameHebrew: 'בוקרידג',
      email: 'ansel@example.com',
      cellPhone: '+1-555-234-5678',
      workPhone: '+1-555-876-5432',
      occupation: 'Financial Analyst',
      employer: 'Finance Corp',
      jobTitle: 'Senior Analyst',
      maritalStatus: 'Married',
      dateOfBirth: '1983-07-22',
      hebrewDateOfBirth: 'י״ב אב תשמ״ג'
    }
  ],
  students: [
    {
      id: 1,
      firstName: 'Rollin',
      lastName: 'Buckridge',
      firstNameHebrew: 'ראובן',
      lastNameHebrew: 'בוקרידג',
      grade: '12',
      dateOfBirth: '2012-05-15',
      hebrewDateOfBirth: 'כ״ג אייר תשע״ב',
      gender: 'Male',
      medicalInfo: {
        allergies: 'Peanuts',
        medications: 'None',
        conditions: 'None'
      }
    },
    {
      id: 2,
      firstName: 'Adam',
      lastName: 'Buckridge',
      firstNameHebrew: 'אדם',
      lastNameHebrew: 'בוקרידג',
      grade: '1',
      dateOfBirth: '2023-01-10',
      hebrewDateOfBirth: 'י״ז טבת תשפ״ג',
      gender: 'Male',
      medicalInfo: {
        allergies: 'None',
        medications: 'None',
        conditions: 'None'
      }
    }
  ],
  emergencyContacts: [
    {
      id: 1,
      firstName: 'Sarah',
      lastName: 'Cohen',
      relationship: 'Grandmother',
      cellPhone: '+1-555-111-2222',
      homePhone: '+1-555-333-4444',
      email: 'sarah.cohen@example.com'
    },
    {
      id: 2,
      firstName: 'David',
      lastName: 'Roth',
      relationship: 'Uncle',
      cellPhone: '+1-555-555-6666',
      homePhone: '+1-555-777-8888',
      email: 'david.roth@example.com'
    }
  ]
}

export default function FamilyInfo() {
  const navigate = useNavigate()

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Family Information</h1>
        <button
          onClick={() => navigate('/family/edit')}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Edit Information
        </button>
      </div>

      <div className="space-y-6">
        {/* Family Information */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Family Details</h2>
          </div>
          <div className="px-6 py-4">
            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Family Name</dt>
                <dd className="mt-1 text-sm text-gray-900">{mockFamilyData.familyName}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Home Phone</dt>
                <dd className="mt-1 text-sm text-gray-900">{mockFamilyData.homePhone}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {mockFamilyData.address}<br />
                  {mockFamilyData.city}, {mockFamilyData.state} {mockFamilyData.zipCode}<br />
                  {mockFamilyData.country}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Parents */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Parents</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {mockFamilyData.parents.map((parent) => (
              <div key={parent.id} className="px-6 py-4">
                <dl className="grid grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Name</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {parent.prefix} {parent.firstName} {parent.lastName}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Hebrew Name</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {parent.firstNameHebrew} {parent.lastNameHebrew}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="mt-1 text-sm text-gray-900">{parent.email}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Cell Phone</dt>
                    <dd className="mt-1 text-sm text-gray-900">{parent.cellPhone}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Work Phone</dt>
                    <dd className="mt-1 text-sm text-gray-900">{parent.workPhone}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Occupation</dt>
                    <dd className="mt-1 text-sm text-gray-900">{parent.occupation}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Employer</dt>
                    <dd className="mt-1 text-sm text-gray-900">{parent.employer}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Job Title</dt>
                    <dd className="mt-1 text-sm text-gray-900">{parent.jobTitle}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Date of Birth</dt>
                    <dd className="mt-1 text-sm text-gray-900">{parent.dateOfBirth}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Hebrew Date of Birth</dt>
                    <dd className="mt-1 text-sm text-gray-900">{parent.hebrewDateOfBirth}</dd>
                  </div>
                  {parent.maidenName && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Maiden Name</dt>
                      <dd className="mt-1 text-sm text-gray-900">{parent.maidenName}</dd>
                    </div>
                  )}
                </dl>
              </div>
            ))}
          </div>
        </div>

        {/* Students */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Students</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {mockFamilyData.students.map((student) => (
              <div key={student.id} className="px-6 py-4">
                <dl className="grid grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Name</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {student.firstName} {student.lastName}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Hebrew Name</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {student.firstNameHebrew} {student.lastNameHebrew}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Grade</dt>
                    <dd className="mt-1 text-sm text-gray-900">{student.grade}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Gender</dt>
                    <dd className="mt-1 text-sm text-gray-900">{student.gender}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Date of Birth</dt>
                    <dd className="mt-1 text-sm text-gray-900">{student.dateOfBirth}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Hebrew Date of Birth</dt>
                    <dd className="mt-1 text-sm text-gray-900">{student.hebrewDateOfBirth}</dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-sm font-medium text-gray-500">Medical Information</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      <div className="space-y-2">
                        <div>
                          <span className="font-medium">Allergies:</span> {student.medicalInfo.allergies}
                        </div>
                        <div>
                          <span className="font-medium">Medications:</span> {student.medicalInfo.medications}
                        </div>
                        <div>
                          <span className="font-medium">Conditions:</span> {student.medicalInfo.conditions}
                        </div>
                      </div>
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Emergency Contacts</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {mockFamilyData.emergencyContacts.map((contact) => (
              <div key={contact.id} className="px-6 py-4">
                <dl className="grid grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Name</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {contact.firstName} {contact.lastName}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Relationship</dt>
                    <dd className="mt-1 text-sm text-gray-900">{contact.relationship}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Cell Phone</dt>
                    <dd className="mt-1 text-sm text-gray-900">{contact.cellPhone}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Home Phone</dt>
                    <dd className="mt-1 text-sm text-gray-900">{contact.homePhone}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="mt-1 text-sm text-gray-900">{contact.email}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
