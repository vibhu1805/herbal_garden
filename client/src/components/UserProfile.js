import React, { useContext } from 'react';
import { AuthContext } from './AuthContext'; // Adjust the path accordingly

const ProfilePage = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div>
      <h1>Profile Page</h1>
      {userData ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Add more profile details as needed */}
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default ProfilePage;
