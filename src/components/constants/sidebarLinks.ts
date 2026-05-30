import {
  House,
  Search,
  Compass,
  Clapperboard,
  MessageCircle,
  Heart,
  SquarePlus,
} from "lucide-react";

export const sidebarLinks = [
  {
    name: "Home",
    link: "/",
    icon: House,
    id: 1,
  },

  {
    name: "Search",
    link: "/search",
    icon: Search,
    id: 2,
  },

  {
    name: "Explore",
    link: "/Explore",
    icon: Compass,
    id: 3,
  },

  {
    name: "Reels",
    link: "/Reels",
    icon: Clapperboard,
    id: 4,
  },

  {
    name: "Messages",
    link: "/Messages",
    icon: MessageCircle,
    id: 5,
  },

  {
    name: "Notifications",
    link: "/Notifications",
    icon: Heart,
    id: 6,
  },

  {
    name: "Create",
    link: "/Create",
    icon: SquarePlus,
    id: 7,
  },
];