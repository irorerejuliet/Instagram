import LargeNavbar from "@/components/layouts/LargeNavBar";
import FeedSection from "./feed/FeedSection";
import MobileNav from "@/components/layouts/MobileNav";


const Home = () => {
  return (
    <div className="w-full h-auto flex items-start justify-between lg:gap-x-32 md:gap-x-16 sm:gap-x-8 gap-x-4 relative">
      {/* Sidebar */}
      <div className="lg:w-[16%] md:w-[17%] h-screen pt-10 px-3 border-r border-gray-500 sticky top-0 left-0 lg:block md:block hidden">
        <LargeNavbar />
      </div>

      {/* Feed and profile routing section */}
      <div className="w-full min-h-screen px-3 pt-3 pb-20">
        <FeedSection /> {/* 👈 FeedPage or others will render here */}
      </div>

      {/* Mobile Navbar */}
      <div className="w-full h-auto py-1 px-3 border-t fixed bottom-0 left-0 lg:hidden sm:block bg-black z-50">
        <MobileNav />
      </div>
    </div>
  );
};

export default Home;
