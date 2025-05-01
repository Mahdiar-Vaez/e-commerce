import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'

export default function AdminUsers() {
  // Static users data
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Ali Reza", email: "ali@example.com", role: "Moderator" },
  ])

  const [form, setForm] = useState({ name: "", email: "", role: "User" })

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email) return
    setUsers([
      ...users,
      {
        id: users.length + 1,
        name: form.name,
        email: form.email,
        role: form.role,
      },
    ])
    setForm({ name: "", email: "", role: "User" })
  }

  return (
    <div className="w-full mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-indigo-700">Add New User</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow p-6 mb-8 flex flex-col gap-4"
      >
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Password</label>
            <input type="password" className='border-gray-300 rounded border px-3 py-2 w-full' />
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Add User
        </button>
      </form>

      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Users List</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className='px-4 py-2'> 
                    <button><FaEdit/> </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}