import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="flex p-4 gap-2 flex-col md:flex-row">
      {/* Left */}
      <div className="w-full md:w-2/3">
        {/* User cards */}
        <div className="flex justify-between gap-4">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
      </div>
      {/* Right */}
      <div className="w-full md:w-1/3">Right</div>
    </div>
  );
};

export default AdminPage;
