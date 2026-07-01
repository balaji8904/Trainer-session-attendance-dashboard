import React, { useState } from 'react';
import { Trash2, Edit2 } from 'lucide-react';

const initialData = [
  { id: 1, name: 'Arun', date: '2026-07-01', status: 'Present', notes: 'Attended class' },
  { id: 2, name: 'Priya', date: '2026-07-01', status: 'Absent', notes: 'Medical leave' },
];

export default function AttendanceTable() {
  const [records, setRecords] = useState(initialData);

  const deleteRecord = (id: number) => {
    setRecords(records.filter(r => r.id !== id));
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4">Student Name</th>
            <th className="p-4">Date</th>
            <th className="p-4">Status</th>
            <th className="p-4">Notes</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id} className="border-t">
              <td className="p-4">{record.name}</td>
              <td className="p-4">{record.date}</td>
              <td className="p-4">
                <span className={`px-2 py-1 rounded-full text-sm ${
                  record.status === 'Present' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {record.status}
                </span>
              </td>
              <td className="p-4">{record.notes}</td>
              <td className="p-4 flex gap-2">
                <button className="text-blue-600 hover:text-blue-800">
                  <Edit2 size={18} />
                </button>
                <button 
                  onClick={() => deleteRecord(record.id)} 
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
