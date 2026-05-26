import React, { useState } from "react";

import { highlightData } from "../Constants/highlightData";
import Image from "next/image";
import Link from "next/link";
import { Clapperboard, Grid3X3, LinkIcon, Tag } from "lucide-react";
import Tab from "../Tab";
import Posts from "../Posts";
import Reels from "../Reels";
import Tags from "../Tags";

type TabType = "posts" | "reels" | "tagged";
const MobileProfile = () => {
  const [activeTab, setActiveTab] = useState<TabType>("posts");
  const [isContentVisible, setContentVisible] = useState(true);

  const handleTabClick = (tab: TabType) => {
    setContentVisible(false);

    // delay animation
    setTimeout(() => {
      setActiveTab(tab);
      setContentVisible(true);
    }, 300);
  };
  return (
    <>
      <div className="w-full h-auto md:hidden block text-white">
        {/* Your info section */}
        <div className="w-full h-auto flex items-center lg:gap-x-20 md:gap-x-16 sm:gap-x-12 gap-x-3.5 justify-center mb-10">
          <Image
            src="/images/ProfilePictureMobile.jpg"
            alt="profile-img"
            className="rounded-full md:w-44 w-20  h-20 object-cover"
          />
          <div className="flex items-start flex-col gap-y-3">
            {/* username */}
            <Link href="/profile" className="text-lg text-gray-200 font-normal">
              Code_With_Juliet
            </Link>
            {/* buttons */}
            <div className="flex items-center gap-x-2">
              <button className="bg-[#1d1d1d] rounded-lg px-4 py-1.5 text-base text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150">
                Edit profile
              </button>
              <button className="bg-[#1d1d1d] rounded-lg px-4 py-1.5 text-base text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150">
                Veiw archive
              </button>
            </div>
          </div>
          {/* for refrence use only */}
        </div>
        {/* Bio */}
        <p className="text-base text-gray-100 font-normal">
          FrontEnd Developer
        </p>
        <p className="text-base text-gray-100 font-normal">
          IRORERE JULIET <br />
          Web/app Enthusiast <br />
          LifeLong Learner <br />
          web/App Developer <br />
        </p>
        {/* Link section */}
        <p className="text-base text-gray-100 font-normal flex items-center gap-x-2 mb-5">
          <LinkIcon size={18} />
          <Link href="/" className="text-blue-500 hover:underline font-medium">
            irorerejuliet@gmail.com
          </Link>
        </p>
        {/* Highlight section */}
        <div className="w-full h-auto flex items-center gap-x-9 mb-10">
          <div className=" w-full h-auto flex items-center gap-x-3.5 overflow-x-scroll">
            {highlightData.map(({ id, image, username }) => (
              <Link
                href="/"
                key={id}
                className="flex items-center justify-between flex-col shrink-0"
              >
                <div className="w-16 h-16 rounded-full object-cover p-0.5 bg-linear-to-r from-[#1d1d1d] to-[#1d1d1d]">
                  <Image
                    src={image}
                    alt={username}
                    className="rounded-full h-full w-full object-cover p-[2.5px] bg-black"
                  />
                  <p className="text-white text-sm mt-1">{username}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Posts, followers, following */}
        <div className="w-full h-auto flex items-center justify-around border-t border-t-[#1d1d1d]">
          <div className="flex items-center flex-col py-3">
            <h6 className="text-base text-white font-medium mb-0">55</h6>
            <p className="text-sm text-white/40 font-thin">Posts</p>
          </div>
          <div className="flex items-center flex-col py-3">
            <h6 className="text-base text-white font-medium mb-0">1300</h6>
            <p className="text-sm text-white/40 font-thin">Followers</p>
          </div>
          <div className="flex items-center flex-col py-3">
            <h6 className="text-base text-white font-medium mb-0">85</h6>
            <p className="text-sm text-white/40 font-thin">Following</p>
          </div>
        </div>
        {/* Post, Reels, Tagged section */}
        <div className="w-full h-auto">
          {/* tag section */}
          <div className="w-full h-auto flex items-center justify-center gap-x-6 mb-4 border-t border-[#313131]">
            <Tab
              label="POSTS"
              icon={<Grid3X3 />}
              isActive={activeTab === "posts"}
              onclick={() => handleTabClick("posts")}
            />

            <Tab
              label="REELS"
              icon={<Clapperboard />}
              isActive={activeTab === "reels"}
              onclick={() => handleTabClick("reels")}
            />

            <Tab
              label="TAGGED"
              icon={<Tag />}
              isActive={activeTab === "tagged"}
              onclick={() => handleTabClick("tagged")}
            />
          </div>
          {/* Tab content section */}
          <div
            className={`mt-4 transition-opacity duration-300 ease-out ${
              isContentVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {activeTab === "posts" && <Posts />}
            {activeTab === "reels" && <Reels />}
            {activeTab === "tagged" && <Tags />}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileProfile;
