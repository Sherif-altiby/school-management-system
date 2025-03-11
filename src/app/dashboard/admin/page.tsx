import AttendanceChart from "@/components/AttendanceChart";
import CalenderAdmin from "@/components/Calender";
import LineChartComponent from "@/components/LinChart";
import StudentChart from "@/components/StudentChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="flex p-4 gap-2 flex-col md:flex-row">

      {/* Left */}
      <div className="w-full md:w-2/3">

        {/* User cards */}
        <div className="flex justify-between gap-4 flex-wrap w-full">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>

        {/* Charts */}
        <div className="flex gap-3 mt-4 flex-col lg:flex-row" > 
            <div className="w-full lg:w-1/2 xl:w-1/3" > <StudentChart /> </div>
            <div className="flex-1" > <AttendanceChart />  </div>
        </div>
        <div className="bg-white rounded-xl mt-4 p-3 h-[400px]" > <LineChartComponent /> </div>
      </div>
      {/* Right */}
      <div className="w-full md:w-1/3">
        <div> <CalenderAdmin /> </div>
      </div>
    </div>
  );
};

export default AdminPage;
