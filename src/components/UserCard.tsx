import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (  
      <div className="p-3 rounded-xl odd:bg-customPurple even:bg-customYellow flex-1 w-1/2 md:w-auto" >
          <div className="flex items-center justify-between mb-3" >
              <p className="bg-white py-1 px-2 text-[10px] rounded-2xl text-green-500" > 2025/21 </p>
              <div> <Image src={'/more.png'} alt="More Image" width={20} height={20} /> </div>
          </div>
          <p className="text-xl font-semibold mb-2" >  1,3534  </p>
          <div className="text-sm font-medium text-gray-500" > {type} </div>
      </div>
  )
};

export default UserCard;
