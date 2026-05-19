import { Link, NavLink } from "react-router-dom";
import { FaThreads } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { sidebarLinks } from "../../Constants/sidebarLinks";




const LargeNavbar = () => {
  return (
    <div className="w-full h-full relative">
      <Link className="mb-10 px-2 lg:block md:hidden  sm:hidden hidden">
        <img src="/images/Logo.png" alt="logo" className="invert w-37.5" />
      </Link>
      <Link className="mb-10 px-2 lg:hidden md:block  sm:block block">
        <img
          src="/images/instagramlogo.png"
          alt="logo"
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
          <NavLink
            to={item.link}
            key={item.id}
            className={({ isActive }) =>
              `w-full h-auto flex items-center gap-x-4 p-3 rounded-md ease-out duration-500 group ${
                isActive ? "bg-gray-800/80 font-bold" : "hover:bg-gray-800/60"
              }`
            }
          >
            <item.icon />
            <p className="text-medium font-bold lg:block md:hidden sm:hidden hidden">
              {item.name}
            </p>
          </NavLink>
        ))}

        {/* profile section */}
        <Link
          to="/profile"
          className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group"
        >
          <img
            src="/images/profilepicture.jpg"
            alt="profile"
            className="w-6 h-6 object-cover rounded-full group-hover:scale-105 ease-out duration-300"
          />
          <p>Profile</p>
        </Link>
      </div>
      {/* Threads and More Nav */}
      <div className="w-full h-auto absolute bottom-0 left-0 px-0 text-white">
        <Link
          to="/threads"
          className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group mb-2"
        >
          <FaThreads size={25} />
          <p className="text-medium font-bold lg:block md:hidden sm:hidden hidden">
            Threads
          </p>
        </Link>
        <Link
          to="/more"
          className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group mb-2"
        >
          <IoMdMenu size={25} />
          <p className="text-medium font-bold lg:block md:hidden sm:hidden hidden">
            More
          </p>
        </Link>
      </div>
    </div>
  );
};

export default LargeNavbar;



      