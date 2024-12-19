import { useAuth } from '../contexts/AuthContext';

export default function Footer() {
  const { selectedSchool } = useAuth();
  const SchoolLogo = selectedSchool?.Logo;

  return (
    <footer className="bg-white border-t border-gray-200 fixed bottom-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto py-3 sm:py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg shadow-sm overflow-hidden flex-shrink-0">
            {SchoolLogo && <SchoolLogo />}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-sm sm:text-base font-medium text-gray-900 truncate">
              {selectedSchool?.name}
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center text-xs sm:text-sm text-gray-500 sm:gap-4">
              <p className="truncate">{selectedSchool?.address}</p>
              <div className="hidden sm:block">•</div>
              <p className="truncate">info@school.edu</p>
              <div className="hidden sm:block">•</div>
              <p className="truncate">(555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
