import React, { use } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useAuth0 } from '@auth0/auth0-react';

export default function Profile() {
  const { user, error, isLoading, } = useUser();
  const {isAuthenticated} = useAuth0()

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>

        <a href="/api/auth/logout">Logout</a>
      </div>
    )
  );
}