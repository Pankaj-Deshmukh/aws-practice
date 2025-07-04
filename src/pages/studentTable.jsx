import React from "react";

const students = [
  { id: 1, name: "Aarav", roll: "101", grade: "A" },
  { id: 2, name: "Bhavya", roll: "102", grade: "B" },
  { id: 3, name: "Chirag", roll: "103", grade: "A" },
  { id: 4, name: "Diya", roll: "104", grade: "C" },
  { id: 5, name: "Eshan", roll: "105", grade: "B+" },
  { id: 6, name: "Farhan", roll: "106", grade: "A" },
  { id: 7, name: "Gia", roll: "107", grade: "B" },
  { id: 8, name: "Harsh", roll: "108", grade: "A-" },
  { id: 9, name: "Isha", roll: "109", grade: "A+" },
  { id: 10, name: "Jay", roll: "110", grade: "C+" },
];

export default function StudentTable() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Table</h1>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Roll No</th>
            <th className="py-2 px-4 border">Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id} className="text-center">
              <td className="py-2 px-4 border">{s.id}</td>
              <td className="py-2 px-4 border">{s.name}</td>
              <td className="py-2 px-4 border">{s.roll}</td>
              <td className="py-2 px-4 border">{s.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
