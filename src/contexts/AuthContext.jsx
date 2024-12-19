import { createContext, useContext, useState, useEffect } from 'react';
import LincolnElementaryLogo from '../assets/lincoln-elementary-logo';
import WashingtonHighLogo from '../assets/washington-high-logo';

const AuthContext = createContext();

// Mock user data with school information
const mockUserData = {
  email: '',
  name: 'John Doe',
  schools: [
    { 
      id: 1, 
      name: 'Lincoln Elementary',
      address: '123 Lincoln Ave, Brooklyn, NY 11213',
      Logo: LincolnElementaryLogo,
      logoBackground: 'bg-blue-700'
    },
    { 
      id: 2, 
      name: 'Washington High',
      address: '456 Washington St, Brooklyn, NY 11213',
      Logo: WashingtonHighLogo,
      logoBackground: 'bg-green-700'
    }
  ]
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  
  const [selectedSchool, setSelectedSchool] = useState(() => {
    const savedSchool = localStorage.getItem('selectedSchool');
    return savedSchool ? JSON.parse(savedSchool) : null;
  });

  useEffect(() => {
    if (user) {
      // When saving to localStorage, we need to remove the Logo component
      const userToSave = {
        ...user,
        schools: user.schools.map(school => ({
          ...school,
          Logo: undefined // Remove Logo component before saving
        }))
      };
      localStorage.setItem('user', JSON.stringify(userToSave));
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('selectedSchool');
    }
  }, [user]);

  useEffect(() => {
    if (selectedSchool) {
      // When saving to localStorage, we need to remove the Logo component
      const schoolToSave = {
        ...selectedSchool,
        Logo: undefined // Remove Logo component before saving
      };
      localStorage.setItem('selectedSchool', JSON.stringify(schoolToSave));
    } else {
      localStorage.removeItem('selectedSchool');
    }
  }, [selectedSchool]);

  const login = (email, password) => {
    if (email && password.length >= 6) {
      const userData = {
        ...mockUserData,
        email
      };
      setUser(userData);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setSelectedSchool(null);
    localStorage.removeItem('user');
    localStorage.removeItem('selectedSchool');
  };

  // When retrieving from localStorage, we need to reattach the Logo components
  const getSchoolWithLogo = (school) => {
    if (!school) return null;
    const matchingSchool = mockUserData.schools.find(s => s.id === school.id);
    return matchingSchool ? { ...school, Logo: matchingSchool.Logo } : school;
  };

  const contextValue = {
    user: user ? {
      ...user,
      schools: user.schools.map(getSchoolWithLogo)
    } : null,
    isAuthenticated: !!user,
    login,
    logout,
    selectedSchool: getSchoolWithLogo(selectedSchool),
    setSelectedSchool
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
