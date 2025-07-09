"use client";
import React, { useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [addUser, setaddUser] = useState("");
  const [addAge, setAddAge] = useState("");

  async function getUsers() {
    const res = await fetch("/posts");
    const data = await res.json();
    setUsers(data);
  }

  async function addData() {
    const res = await fetch("/posts", {
      method: "POST",
      body: JSON.stringify({ title: addUser, age: Number(addAge) }),
    });
    getUsers();
    setaddUser("");
    setAddAge("");
  }

  async function deleteUser(id) {
    const res = await fetch("/posts", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
      getUsers();
      
  }

  return (
    <>
      <main className="flex-grow py-10 px-4 bg-gray-100">
        <div className="flex justify-center mb-8">
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg font-semibold transition duration-300"
            onClick={getUsers}
          >
            Show Users
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-gray-800 text-white rounded-xl shadow-lg p-6 border border-purple-700 transition hover:scale-105 duration-300"
            >
              <h3 className="text-xl text-purple-400 font-bold mb-2">
                {user.name}
              </h3>
              <p className="text-gray-300">Age: {user.age}</p>

              <button
                onClick={() => deleteUser(user.id)}
                className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-1.5 rounded-lg transition duration-300"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md space-y-4 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 text-center mb-2">
            Add New User
          </h2>

          <input
            type="text"
            value={addUser}
            onChange={(e) => setaddUser(e.target.value)}
            placeholder="Enter user name"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="number"
            value={addAge}
            onChange={(e) => setAddAge(e.target.value)}
            placeholder="Enter user age"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition duration-300"
            onClick={addData}
          >
            Add User
          </button>
        </div>
      </main>
    </>
  );
}

export default Users;
