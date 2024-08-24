import React, { useState } from 'react';
import { useMutation } from 'react-relay';
import AddUserMutation from '../graphql/AddUserMutation';
import UpdateUserMutation from '../graphql/UpdateUserMutation';
import DeleteUserMutation from '../graphql/DeleteUserMutation';

const UserManager = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState(null);
  const [commitAddUser] = useMutation(AddUserMutation);
  const [commitUpdateUser] = useMutation(UpdateUserMutation);
  const [commitDeleteUser] = useMutation(DeleteUserMutation);

  const handleAddUser = () => {
    console.log('Attempting to add user:', name);
    commitAddUser({
      variables: { name },
      onCompleted: (response) => {
        console.log('User added:', response);
      },
      onError: (error) => {
        console.error('Add user mutation error:', error);
      },
    });
  };

  const handleUpdateUser = () => {
    if (id == null || name === '') {
      console.error('ID and name are required for updating user');
      return;
    }
    console.log('Attempting to update user:', { id, name });
    commitUpdateUser({
      variables: { id, name },
      onCompleted: (response) => {
        console.log('User updated:', response);
      },
      onError: (error) => {
        console.error('Update user mutation error:', error);
      },
    });
  };
  
  const handleDeleteUser = () => {
    if (id == null) {
      console.error('ID is required for deleting user');
      return;
    }
    console.log('Attempting to delete user with ID:', id);
    commitDeleteUser({
      variables: { id: String(id) },
      onCompleted: (response) => {
        console.log('User deleted:', response);
      },
      onError: (error) => {
        console.error('Delete user mutation error:', error);
      },
    });
  };

  return (
    <div>
      <h2>User Table</h2>
      <input
        type="text"
        placeholder="Enter user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter user ID (for update/delete)"
        value={id || ''}
        onChange={(e) => setId(Number(e.target.value))}
      />
      <button onClick={handleAddUser}>Add User</button>
      <button onClick={handleUpdateUser}>Update User</button>
      <button onClick={handleDeleteUser}>Delete User</button>
    </div>
  );
};

export default UserManager;
