import { useState } from 'react';
import { Link } from 'react-router-dom';
import schoolsetLogo from '../assets/schoolset-logo.svg';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    // Mock password reset request
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-sm rounded-lg sm:px-10">
            <div className="flex flex-col items-center">
              <img 
                src={schoolsetLogo} 
                alt="SchoolSet" 
                className="h-12 mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                Check Your Email
              </h2>
              <p className="text-center text-gray-600 mb-6 text-sm sm:text-base px-4">
                If an account exists for {email}, you will receive password reset instructions.
              </p>
              <Link
                to="/login"
                className="text-sm text-blue-600 hover:text-blue-500"
              >
                Return to sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm rounded-lg sm:px-10">
          <div className="flex flex-col items-center mb-8">
            <img 
              src={schoolsetLogo} 
              alt="SchoolSet" 
              className="h-12 mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-900 text-center">
              Reset Your Password
            </h2>
            <p className="mt-2 text-gray-600 text-center text-sm sm:text-base px-4">
              Enter your email address and we'll send you instructions to reset your password.
            </p>
          </div>

          {error && (
            <div className="mb-6 p-2 bg-red-50 text-red-600 text-sm rounded text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Reset Instructions
            </button>

            <div className="text-center">
              <Link
                to="/login"
                className="text-sm text-blue-600 hover:text-blue-500"
              >
                Return to sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
