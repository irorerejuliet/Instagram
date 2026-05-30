"use client";


import { AtSign, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "../constants/sidebarLinks";

const LargeNavBar = () => {
  return (
    <div className="w-full h-full relative">
      <Link
        href={"/"}
        className="mb-10 px-2 lg:block md:hidden  sm:hidden hidden"
      >
        <Image
          src="/images/Logo.png"
          width={200}
          height={200}
          alt="logo"
          className="invert w-37.5"
        />
      </Link>
      <Link
        href={"/"}
        className="mb-10 px-2 lg:hidden md:block  sm:block block"
      >
        <Image
          src="/images/instagramlogo.png"
          alt="logo"
          width={12}
          height={12}
          className="rounded-lg w-12"
        />
      </Link>
      <div className="w-full h-auto flex items-start flex-col gap-y-2 text-white">
        {/* Loop other navlinks */}
        {/* {sidebarLinks.map((item) => (
          <NavLink
            to={item.link}
            key={item.id}
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group"
          >
            <item.icon/>
            <p className="text-medium font-bold lg:block md:hidden sm:hidden hidden">
              {item.name}
            </p>
          </NavLink>
        ))} */}
        {sidebarLinks.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className="w-full h-auto flex items-center gap-x-4 p-3 rounded-md hover:bg-gray-800/60 ease-out duration-500 group"
          >
            <item.icon />
            <p className="text-medium font-bold lg:block md:hidden sm:hidden hidden">
              {item.name}
            </p>
          </Link>
        ))}

        {/* profile section */}
        <Link
          href="/profile"
          className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group"
        >
          <Image
            src="/images/profilepicture.jpg"
            alt="profile"
            width={6}
            height={6}
            className="w-6 h-6 object-cover rounded-full group-hover:scale-105 ease-out duration-300"
          />
          <p>Profile</p>
        </Link>
      </div>
      {/* Threads and More Nav */}
      <div className="w-full h-auto absolute bottom-0 left-0 px-0 text-white ">
        <Link
          href="/threads"
          className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group mb-2"
        >
          <AtSign size={25} />
          <p className="text-medium font-bold lg:block md:hidden sm:hidden hidden">
            Threads
          </p>
        </Link>
        <Link
          href="/more"
          className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group mb-2"
        >
          <Menu size={25} />
          <p className="text-medium font-bold lg:block md:hidden sm:hidden hidden">
            More
          </p>
        </Link>
      </div>
    </div>
  );
};

export default LargeNavBar;
