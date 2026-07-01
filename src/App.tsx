import Sidebar from './components/Sidebar';
import StatsCard from './components/StatsCard';
import AttendanceTable from './components/AttendanceTable';

export default function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        <h1 className="text-2xl font-bold mb-6">Trainer Attendance Dashboard</h1>
        <div className="grid grid-cols-3 gap-6 mb-8">
          <StatsCard title="Total" count={0} />
          <StatsCard title="Present" count={0} />
          <StatsCard title="Absent" count={0} />
        </div>
        <AttendanceTable />
      </main>
    </div>
  );
}
