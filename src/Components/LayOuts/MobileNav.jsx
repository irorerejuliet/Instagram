import { Link } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { IoSearchOutline } from "react-icons/io5";
import { TbFreezeRow } from "react-icons/tb";
import { MdCreateNewFolder } from "react-icons/md";

const MobileNav = () => {
  const sideBarItems = [
    {
      link: "/search",
      icon: <IoSearchOutline size={25} />,
      id: 1,
    },

    {
      link: "/Reels",
      icon: <TbFreezeRow size={25} />,
      id: 2,
    },

    {
      link: "/Create",
      icon: <MdCreateNewFolder size={25} />,
      id: 3,
    },
  ];

  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto flex items-center gap-x-2 text-white">
        <Link
          to="/"
          className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent group"
        >
          <TiHome size={25} className="text-white" />
        </Link>
        {sideBarItems.map((item) => (
          <Link
            to={item.link}
            key={item.id}
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent  duration-500 group"
          >
            {item.icon}
          </Link>
        ))}
        <Link
          to="/profile"
          className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent group"
        >
          <img
            src="/images/profilepicture.jpg"
            alt="profile"
            className="w-6 h-6 object-cover rounded-full group-hover:scale-105 ease-out duration-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
