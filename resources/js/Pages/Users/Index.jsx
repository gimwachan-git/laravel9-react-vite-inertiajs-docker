import React from 'react';
import { Link } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';


function Index({ users }) {
  const handleClick = () => {
    Inertia.get('/');
  };
  return (
    <div>
      <h1>User Lists</h1>
      <ul>
        {users && users.length > 0 ? (
          users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))
          ) : (
            <li>no user</li>
          )
        }
      </ul>
      <h2>Create User</h2>
      <Link href="/users/create">go to Create User Page</Link>
      <hr />
      <div>
      <Link
          href='/'
          as="button"
          type="button"                    
      >Back</Link>

      </div>
    </div>
  );
}

export default Index;
