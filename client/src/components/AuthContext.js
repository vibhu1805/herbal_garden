/*import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const login = async (username, password) => {
    try {
      // Replace this with your actual API call
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      
      console.log('Login response:', data);

      if (response.ok) {
        setIsLoggedIn(true);
        setUserData(data.user); // Assuming 'user' is the property in response
        navigate('/'); // Redirect to home after login
      } else {
        console.error('Login failed:', data.message || 'Invalid credentials');
        alert(data.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const signup = async (username,password,email) => {
    try {
      // Replace this with your actual signup API call
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(username,email,password),
      });

      const data = await response.json();
      
      console.log('Signup response:', data);

      if (response.ok) {
        setIsLoggedIn(true);
        setUserData(data.user); // Assuming 'user' is the property in response
        navigate('/'); // Redirect to home after signup
      } else {
        console.error('Signup failed:', data.message || 'Signup failed');
        alert(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userData, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
*/
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

 const login = async (email, password) => {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    
    console.log('Login response:', data);

    if (response.ok) {
      setIsLoggedIn(true);
      setUserData(data.user);
      navigate('/'); // Redirect to home after login
    } else {
      console.error('Login failed:', data.message || 'Invalid credentials');
      alert(data.message || 'Invalid credentials');
    }
  } catch (error) {
    console.error('Login error:', error);
    alert('An error occurred. Please try again.');
  }
};

const signup = async (username, email, password) => {
  try {
    const response = await fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();
    
    console.log('Signup response:', data);

    if (response.ok) {
      setIsLoggedIn(true);
      setUserData(data.user);
      navigate('/'); // Redirect to home after signup
    } else {
      console.error('Signup failed:', data.message || 'Signup failed');
      alert(data.message || 'Signup failed');
    }
  } catch (error) {
    console.error('Signup error:', error);
    alert('An error occurred. Please try again.');
  }
};

  const logout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userData, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
