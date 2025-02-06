'use client'
import React, { useState, useEffect } from "react";
type Skill = {
  name: string;
  value: string;
};
interface User {
  id: string;
  name: string;
  email: string;
  number: string;
  salary: string;
  introduction: string;
  experience: string;
  skill: Skill[];
  status: string;
}

export default function DataPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {

    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data: User[]) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));

  }, []);

  return (
    <div>
      <table className="w-full border-collapse border border-blue-500 max-w-4xl mt-16 mx-auto">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Number</th>
            <th className="py-2 px-4 text-left">Salary</th>
            <th className="py-2 px-4 text-left">Introduction</th>
            <th className="py-2 px-4 text-left">Experience</th>
            <th className="py-2 px-4 text-left">Skill</th>
            <th className="py-2 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index} className="bg-white border-b border-blue-500">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.number}</td>
                <td className="py-2 px-4">${user.salary}</td>
                <td className="py-2 px-4">{user.introduction}</td>
                <td className="py-2 px-4">{user.experience}</td>
                <td className="py-2 px-4">{users[index]?.skill?.map((skill,ind)=> <span key={ind}>{skill.name}, </span>)}</td>
                <td className="py-2 px-4">{user.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={9} className="text-center py-4">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
