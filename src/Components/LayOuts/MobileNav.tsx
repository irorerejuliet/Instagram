import { Clapperboard, FolderPlus, Home, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MobileNav = () => {
  const sideBarItems = [
    {
      link: "/search",
      icon: <Search size={25} />,
      id: 1,
    },

    {
      link: "/Reels",
      icon: <Clapperboard size={25} />,
      id: 2,
    },

    {
      link: "/Create",
      icon: <FolderPlus size={25} />,
      id: 3,
    },
  ];

  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto flex items-center gap-x-2 text-white">
        <Link
          href="/"
          className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent group"
        >
          <Home size={25} className="text-white" />
        </Link>
        {sideBarItems.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent  duration-500 group"
          >
            {item.icon}
          </Link>
        ))}
        <Link
          href="/profile"
          className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent group"
        >
          <Image
            src="/images/profilepicture.jpg"
            width={10}
            height={10}
            alt="profile"
            className="w-6 h-6 object-cover rounded-full group-hover:scale-105 ease-out duration-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
