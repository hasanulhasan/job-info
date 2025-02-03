import React from "react";

export default function DataPage() {
  return (
    <div>
      <table className="w-full border-collapse border border-blue-500 max-w-xl mt-16 mx-auto">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Age</th>
            <th className="py-2 px-4 text-left">City</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b border-blue-500">
            <td className="py-2 px-4">John Doe</td>
            <td className="py-2 px-4">25</td>
            <td className="py-2 px-4">New York</td>
          </tr>
          <tr className="bg-white border-b border-blue-500">
            <td className="py-2 px-4">Jane Smith</td>
            <td className="py-2 px-4">30</td>
            <td className="py-2 px-4">Los Angeles</td>
          </tr>
          <tr className="bg-white border-b border-blue-500">
            <td className="py-2 px-4">Bob Johnson</td>
            <td className="py-2 px-4">40</td>
            <td className="py-2 px-4">Chicago</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
