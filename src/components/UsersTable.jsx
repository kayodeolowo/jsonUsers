import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Fetch users data
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the users data", error);
      });
  }, []);

  // Handle row click to navigate to user details
  const handleRowClick = (userId) => {
    navigate(`/user/${userId}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Users Table</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b-2 border-r-2 border-gray-300 text-gray-600">
                Name
              </th>
              <th className="py-2 px-4 border-b-2 border-r-2 border-gray-300 text-gray-600">
                Username
              </th>
              <th className="py-2 px-4 border-b-2 border-r-2 border-gray-300 text-gray-600">
                Email
              </th>
              <th className="py-2 px-4 border-b-2 border-r-2 border-gray-300 text-gray-600">
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                onClick={() => handleRowClick(user.id)}
                className="hover:bg-gray-100 hover:cursor-pointer transition-colors"
              >
                <td className="py-3 px-4 border-b border-r-2 border-gray-300">
                  {user.name}
                </td>
                <td className="py-3 px-4 border-b border-r-2 border-gray-300">
                  {user.username}
                </td>
                <td className="py-3 px-4 border-b border-r-2 border-gray-300">
                  {user.email}
                </td>
                <td className="py-3 px-4 border-b border-r-2 border-gray-300">
                  {user.phone}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
