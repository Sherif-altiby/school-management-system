import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex">
      {/* left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]  ">
        <div className=" fixed top-0 bottom-0 overflow-x-auto p-4" >
          <Link
            href={"/"}
            className="flex items-center justify-center lg:justify-start gap-2"
          >
            <Image src="/logo.png" alt="logo-img" width={32} height={32} />
            <span className="hidden lg:block"> School </span>
          </Link>
          <Menu />
        </div>
      </div>
      {/* Right */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA]">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
