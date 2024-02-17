import React from 'react';
import ObjectData from '../data/users.json';
import '../App.css'

function PostList() {
  return (
    <div className="container">
      <h1>List of Users</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {ObjectData.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.address}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PostList;
