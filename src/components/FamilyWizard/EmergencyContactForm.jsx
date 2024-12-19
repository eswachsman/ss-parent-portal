import { useFormik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  contactType: Yup.string().required('Required'),
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  relationDescription: Yup.string().required('Required'),
  cellPhone: Yup.string().required('Required')
})

export default function EmergencyContactForm({ initialValues, onSubmit }) {
  const formik = useFormik({
    initialValues: initialValues || {
      contactType: '',
      relationDescription: '',
      firstName: '',
      lastName: '',
      firstNameHebrew: '',
      lastNameHebrew: '',
      email: '',
      cellPhone: '',
      homePhone: '',
      workPhone: '',
      occupation: '',
      jobTitle: ''
    },
    validationSchema,
    onSubmit
  })

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Emergency Contacts</h2>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Add Contact
          </button>
        </div>

        <div className="space-y-6">
          {/* Contact Type */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="contactType" className="block text-sm font-medium text-gray-700">
                Contact Type
              </label>
              <select
                id="contactType"
                {...formik.getFieldProps('contactType')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select type</option>
                <option value="family">Family</option>
                <option value="friend">Friend</option>
                <option value="neighbor">Neighbor</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="relationDescription" className="block text-sm font-medium text-gray-700">
                Relation Description
              </label>
              <input
                type="text"
                id="relationDescription"
                {...formik.getFieldProps('relationDescription')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Describe relationship"
              />
            </div>
          </div>

          {/* Names */}
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

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="homePhone" className="block text-sm font-medium text-gray-700">
                  Home Phone
                </label>
                <input
                  type="tel"
                  id="homePhone"
                  {...formik.getFieldProps('homePhone')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="workPhone" className="block text-sm font-medium text-gray-700">
                  Work Phone
                </label>
                <input
                  type="tel"
                  id="workPhone"
                  {...formik.getFieldProps('workPhone')}
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
