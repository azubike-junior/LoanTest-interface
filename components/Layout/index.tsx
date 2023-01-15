import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

interface LayoutProp {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProp) {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex relative font-poppins">
      <Sidebar open={open} />
      <div className="w-full bg-[#F3F5FC] h-[100%]" >
        <Navbar setOpen={setOpen} open={open}/>
        <div onClick={() => setOpen(false)}  className="py-10 2xl:py-20 2xl:pb-20 sm:pl-0 md:pl-0 pl-[250px] 2xl:pl-[250px] lg:pl-[220px] lg:py-16 xl:py-16">{children}</div>
      </div>
    </div>
  );
}
