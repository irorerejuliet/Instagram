import FeedCard from "../FeedCard";
import TopNavBar from "../LayOuts/TopNavBar";
import RecommendationUser from "../RecommendationUser";
import Stories from "../Stories";
import UploadPost from "../UploadPost";

const FeedSection = () => {
  
  return (
    <>
      <div className="lg:w-[83%] md:w-[83%] sm:w-full w-full min-h-screen lg:py-7  md:py-7 sm:py-4 py-3 px-3 flex  items-start gap-x-20">
        {/* Feed + story section*/}
        <div className="lg:w-[55%] md:w-full sm:w-full w-full h-auto relative">
          {/* Top Navbar (only visible on small screen) */}
          <TopNavBar />
          {/* Stories section */}
          <Stories />
          {/* Feed section */}
          <div className="w-full h-auto flex items-center justify-center mt-6">
            <div className="lg:w-[73%] md:[73%] sm:w-[80%] w-[80%] h-auto">
              <UploadPost />
              {/* 👇 Dynamic post rendering */}
              {/* {loading ? (
                <p className="text-white">Loading posts...</p>
              ) : (
                posts.map((post) => <PostCard key={post.id} post={post} />)
              )} */}
              <FeedCard />
              <FeedCard />
              <FeedCard />
              <FeedCard />
            </div>
          </div>
        </div>
        {/* Recommended user section */}
        <div className="w-[25%] h-auto lg:block md:hidden sm:hidden hidden">
          {/*  */}
          <RecommendationUser />
        </div>
      </div>
    </>
  );
};

export default FeedSection;
