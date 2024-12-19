import { useFormik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  familyName: Yup.string().required('Required'),
  homePhone: Yup.string().required('Required'),
  streetAddress: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  zipCode: Yup.string().required('Required'),
  country: Yup.string().required('Required')
})

export default function FamilyForm({ initialValues, onSubmit }) {
  const formik = useFormik({
    initialValues: initialValues || {
      familyName: '',
      homePhone: '',
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    },
    validationSchema,
    onSubmit
  })

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Family Information</h2>
          <button type="button" className="text-blue-600 text-sm hover:text-blue-700">
            Select Existing Family
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="familyName" className="block text-sm font-medium text-gray-700">
              Family Name
            </label>
            <input
              type="text"
              id="familyName"
              {...formik.getFieldProps('familyName')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {formik.touched.familyName && formik.errors.familyName && (
              <div className="mt-1 text-sm text-red-600">{formik.errors.familyName}</div>
            )}
          </div>

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
            {formik.touched.homePhone && formik.errors.homePhone && (
              <div className="mt-1 text-sm text-red-600">{formik.errors.homePhone}</div>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">Address</h3>
            
            <div>
              <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700">
                Street Address
              </label>
              <input
                type="text"
                id="streetAddress"
                {...formik.getFieldProps('streetAddress')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  {...formik.getFieldProps('city')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  {...formik.getFieldProps('state')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  {...formik.getFieldProps('zipCode')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  {...formik.getFieldProps('country')}
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
