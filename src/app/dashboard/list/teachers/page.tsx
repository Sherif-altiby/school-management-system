import MainTable from "@/components/MainTable"

const columns = [
  {
    header: "Info",
  },
  {
    header: "Teacher ID",
    className: "hidden lg:table-cell",
  },
  {
    header: "Subjects",
    className: "hidden lg:table-cell",
  },
  {
    header: "Classes",
    className: "hidden lg:table-cell",
  },
  {
    header: "Phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
  },
];


const page = () => {
  return (
    <div className="bg-white m-3 rounded-xl " > 
      <MainTable tableHeader={columns} type={"teachers"} /> 
    </div>
  )
}

export default page