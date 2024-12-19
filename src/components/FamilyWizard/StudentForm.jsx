import { useFormik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  dateOfBirth: Yup.date().required('Required'),
  gender: Yup.string().required('Required')
})

export default function StudentForm({ initialValues, onSubmit }) {
  const formik = useFormik({
    initialValues: initialValues || {
      useFamilyInfo: true,
      firstName: '',
      lastName: '',
      firstNameHebrew: '',
      lastNameHebrew: '',
      legalName: '',
      kodeshName: '',
      email: '',
      phone: '',
      gender: '',
      dateOfBirth: '',
      grade: '',
      previousSchool: '',
      specialNeeds: '',
      allergies: '',
      medications: ''
    },
    validationSchema,
    onSubmit
  })

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Student Information</h2>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Add Student
          </button>
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              {...formik.getFieldProps('useFamilyInfo')}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-600">
              Use family information (address and last name)
            </span>
          </label>
        </div>

        <div className="space-y-6">
          {/* Names Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">Names</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  {...formik.getFieldProps('firstName')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  {...formik.getFieldProps('lastName')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstNameHebrew" className="block text-sm font-medium text-gray-700">
                  First Name (Hebrew)
                </label>
                <input
                  type="text"
                  id="firstNameHebrew"
                  {...formik.getFieldProps('firstNameHebrew')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="lastNameHebrew" className="block text-sm font-medium text-gray-700">
                  Last Name (Hebrew)
                </label>
                <input
                  type="text"
                  id="lastNameHebrew"
                  {...formik.getFieldProps('lastNameHebrew')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="legalName" className="block text-sm font-medium text-gray-700">
                  Legal Name
                </label>
                <input
                  type="text"
                  id="legalName"
                  {...formik.getFieldProps('legalName')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="kodeshName" className="block text-sm font-medium text-gray-700">
                  Kodesh Name
                </label>
                <input
                  type="text"
                  id="kodeshName"
                  {...formik.getFieldProps('kodeshName')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">Personal Information</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  id="gender"
                  {...formik.getFieldProps('gender')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  {...formik.getFieldProps('dateOfBirth')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="grade" className="block text-sm font-medium text-gray-700">
                Grade
              </label>
              <select
                id="grade"
                {...formik.getFieldProps('grade')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select grade</option>
                {[...Array(12)].map((_, i) => (
                  <option key={i} value={i + 1}>Grade {i + 1}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Medical Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">Medical Information</h3>
            
            <div>
              <label htmlFor="allergies" className="block text-sm font-medium text-gray-700">
                Allergies
              </label>
              <textarea
                id="allergies"
                {...formik.getFieldProps('allergies')}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="medications" className="block text-sm font-medium text-gray-700">
                Medications
              </label>
              <textarea
                id="medications"
                {...formik.getFieldProps('medications')}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </form>
  )
}
