import LargeNavBar from "../Components/LayOuts/LargeNavBar";
import MobileNav from "../Components/LayOuts/MobileNav";

const Home = ({ children }) => {
  return (
    <div className="w-full h-auto flex items-start justify-between lg:gap-x-32 md:gap-x-16 sm:gap-x-8 gap-x-4 relative">
      {/* Sidebar */}
      <div className="lg:w-[16%] md:w-[17%] h-screen pt-10 px-3 border-r border-gray-500 sticky top-0 left-0 lg:block md:block hidden">
        <LargeNavBar />
      </div>

      {/* THIS IS WHERE PAGES APPEAR */}
      <div className="w-full min-h-screen px-3 pt-3 pb-20">{children}</div>

      {/* Mobile Navbar */}
      <div className="w-full h-auto py-1 px-3 border-t fixed bottom-0 left-0 lg:hidden sm:block bg-black z-50">
        <MobileNav />
      </div>
    </div>
  );
};

export default Home;
