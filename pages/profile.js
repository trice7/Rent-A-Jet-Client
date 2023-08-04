import React from 'react';
import UserCard from '../components/User';
import { useAuth } from '../utils/context/authContext';

export default function Profile() {
  const { user } = useAuth();
  const profileUser = {
    name: user.displayName,
    email: user.email,
    last_login: user.metadata.lastSignInTime,
    image: user.photoURL,
  };

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        <UserCard userObj={profileUser} />
      </div>
    </div>
  );
}
