import { useAuth } from '../contexts/AuthContext'
import schoolsetLogo from '../assets/schoolset-logo.svg'

export default function Payment() {
  const { selectedSchool } = useAuth()

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <p className="text-gray-600 text-center">Existing payment link functionality goes here.</p>
      </div>
    </div>
  )
}
