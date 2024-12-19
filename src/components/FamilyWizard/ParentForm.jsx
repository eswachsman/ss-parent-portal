import { useFormik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  cellPhone: Yup.string().required('Required'),
  parentType: Yup.string().required('Required')
})

export default function ParentForm({ initialValues, onSubmit }) {
  const formik = useFormik({
    initialValues: initialValues || {
      useFamilyInfo: true,
      parentType: '',
      firstName: '',
      lastName: '',
      firstNameHebrew: '',
      lastNameHebrew: '',
      prefix: '',
      suffix: '',
      hebrewPrefix: '',
      hebrewSuffix: '',
      email: '',
      cellPhone: '',
      homePhone: '',
      workPhone: '',
      occupation: '',
      jobTitle: '',
      employer: '',
      maritalStatus: '',
      dateOfBirth: '',
      hebrewDateOfBirth: '',
      maidenName: ''
    },
    validationSchema,
    onSubmit
  })

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Parent Information</h2>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Add Parent
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
          {/* Parent Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Parent Type
            </label>
            <select
              {...formik.getFieldProps('parentType')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select type</option>
              <option value="mother">Mother</option>
              <option value="father">Father</option>
              <option value="guardian">Guardian</option>
            </select>
          </div>

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
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">Contact Information</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...formik.getFieldProps('email')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="cellPhone" className="block text-sm font-medium text-gray-700">
                  Cell Phone
                </label>
                <input
                  type="tel"
                  id="cellPhone"
                  {...formik.getFieldProps('cellPhone')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">Professional Information</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">
                  Occupation
                </label>
                <input
                  type="text"
                  id="occupation"
                  {...formik.getFieldProps('occupation')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                  Job Title
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  {...formik.getFieldProps('jobTitle')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
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
