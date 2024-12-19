import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import schoolsetLogo from '../assets/schoolset-logo.svg';

export default function SchoolSelector() {
  const { user, setSelectedSchool } = useAuth();
  const navigate = useNavigate();

  const handleSchoolSelect = (school) => {
    setSelectedSchool(school);
    navigate('/');
  };

  if (!user?.schools?.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-lg shadow-sm p-8">
          <div className="flex flex-col items-center">
            <img src={schoolsetLogo} alt="SchoolSet" className="h-12 w-12 mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No Schools Found</h2>
            <p className="text-gray-600 text-center">
              No schools are associated with your account. Please contact support.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-sm p-8">
        <div className="flex flex-col items-center mb-8">
          <img src={schoolsetLogo} alt="SchoolSet" className="h-12 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900">Welcome to SchoolSet</h2>
          <p className="mt-2 text-gray-600">
            {user?.schools?.length === 1 
              ? 'Please confirm your school to continue'
              : 'Please select your school to continue'
            }
          </p>
        </div>

        <div className="space-y-3">
          {user?.schools.map(school => {
            const SchoolLogo = school.Logo;
            return (
              <button
                key={school.id}
                onClick={() => handleSchoolSelect(school)}
                className="w-full p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors duration-200 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg shadow-sm overflow-hidden flex-shrink-0">
                    {SchoolLogo && <SchoolLogo />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium text-gray-900 truncate">{school.name}</h3>
                    <p className="text-sm text-gray-500 truncate">{school.address}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
