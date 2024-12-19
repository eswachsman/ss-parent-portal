import { Fragment, useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { 
  BellIcon, 
  UserCircleIcon, 
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { useAuth } from '../contexts/AuthContext';
import schoolsetLogo from '../assets/schoolset-logo.svg';
import Footer from './Footer';

const navigation = [
  { name: 'Dashboard', href: '/' },
  { name: 'Family Info', href: '/family' },
  { name: 'Contract Details', href: '/contract' },
  { name: 'Payment Methods', href: '/payment-methods' },
  { name: 'Immunizations', href: '/immunizations' },
  { name: 'Notifications', href: '/notifications' }
];

export default function Layout() {
  const { user, logout, selectedSchool, setSelectedSchool } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleSchoolChange = () => {
    setSelectedSchool(null);
    navigate('/school-select');
  };

  const handleLogout = () => {
    setMobileMenuOpen(false);
    logout();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Desktop Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="relative flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-600"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
            </div>

            {/* Logo and School Selection */}
            <div className="flex items-center">
              <img src={schoolsetLogo} alt="SchoolSet" className="h-8" />
              {selectedSchool && (
                <button
                  onClick={handleSchoolChange}
                  className="hidden sm:flex items-center gap-1 ml-4 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <span>{selectedSchool.name}</span>
                  <ChevronDownIcon className="h-4 w-4 opacity-50" />
                </button>
              )}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center gap-6">
              <Link
                to="/payment"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
              >
                Make a Payment
              </Link>

              <Link to="/notifications" className="relative p-2 text-gray-600 hover:text-gray-900">
                <BellIcon className="h-6 w-6" />
                <span className="absolute top-1 right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  3
                </span>
              </Link>

              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2"
                >
                  <UserCircleIcon className="h-8 w-8 text-gray-400" />
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    <div className="text-sm text-gray-500">Account</div>
                  </div>
                </button>

                {/* User Dropdown Menu */}
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <div className="hidden sm:block">
            <div className="flex space-x-8 px-4 sm:px-6 lg:px-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    border-b-2 py-4 px-1 text-sm font-medium
                    ${location.pathname === item.href
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                {/* Mobile User Info */}
                <div className="px-4 py-6 border-b border-gray-200">
                  <div className="flex items-center">
                    <UserCircleIcon className="h-10 w-10 text-gray-400" />
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">{user.name}</div>
                      <div className="text-sm font-medium text-gray-500">{user.email}</div>
                    </div>
                  </div>
                </div>

                {/* School Selection */}
                {selectedSchool && (
                  <div className="px-4 py-6 border-b border-gray-200">
                    <button
                      onClick={handleSchoolChange}
                      className="flex items-center justify-between w-full"
                    >
                      <span className="text-sm font-medium text-gray-900">
                        {selectedSchool.name}
                      </span>
                      <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                )}

                {/* Mobile Navigation Links */}
                <div className="space-y-6 px-4 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block text-base font-medium ${
                        location.pathname === item.href
                          ? 'text-blue-600'
                          : 'text-gray-900'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Action Buttons */}
                <div className="space-y-6 px-4 py-6 border-t border-gray-200">
                  <Link
                    to="/payment"
                    className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Make a Payment
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                  >
                    Sign out
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto py-6 px-4 sm:px-6 lg:px-8 pb-24 sm:pb-28">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
