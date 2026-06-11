"use client";

import Tab from "./Tab";
import Posts from "./Posts";
import Reels from "./Reels";
import Tags from "./Tags";
import Link from "next/link";
import Image from "next/image";

import { Clapperboard, Grid3X3, Link2, Settings, Tag } from "lucide-react";
import { useState } from "react";
import { highlightData } from "./constants/highlightData";

type ProfileProps = {
  id: string;
  username: string;
  full_name: string | null;
  bio: string | null;
  avatar_url: string | null;
  email: string;
};


const ProfileDetails = ({profile, }: {profile: ProfileProps}) => {
  const [activeTab, setActiveTab] = useState("posts");
  const [isContentVisible, setContentVisible] = useState(true);

  const handleTabClick = (tab: string) => {
    setContentVisible(false);

    // delay animation
    setTimeout(() => {
      setActiveTab(tab);
      setContentVisible(true);
    }, 300);
  };




  return (
    <>
      <div className="w-full max-w-233.75 mx-auto hidden sm:block lg:pt-20 pb-12 px-4">
        {/* Your info section */}
        <div className="w-full flex items-center lg:gap-x-20 md:gap-x-16 sm:gap-x-12 gap-x-3.5 justify-center mb-12">
          <div className="shrink-0">
            <Image
              src="/images/ifueko.jpg"
              width={176}
              height={176}
              alt="profile-img"
              className="rounded-full md:w-44 w-32 lg:h-44 md:h-44 sm:h-36 h-36 object-cover"
            />
          </div>

          <div className="flex items-start flex-col">
            <div className="flex items-center gap-x-5 mb-4">
              <Link
                href={`/profile/${profile.username}`}
                className="text-lg text-gray-200 font-normal"
              >
                {profile.username}
              </Link>
              <div className="flex items-center gap-x-2">
                <Link
                  href="/edit-profile"
                  className="bg-[#1d1d1d] rounded-lg px-4 py-1.5 text-base text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150"
                >
                  Edit profile
                </Link>
                <button className="bg-[#1d1d1d] rounded-lg px-4 py-1.5 text-base text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150">
                  Veiw archive
                </button>
              </div>
              <Settings size={20} className="text-white" />
            </div>

            {/* Post, followers, following */}
            <div className="flex items-center gap-x-6 mb-4">
              <h6 className="text-base text-gray-100 font-normal">12 Posts</h6>
              <Link href="/" className="text-base text-gray-100 font-normal">
                3200 Followers
              </Link>
              <Link href="/" className="text-base text-gray-100 font-normal">
                200 Following
              </Link>
            </div>

            {/* fullname */}
            <p className="text-base text-gray-100 font-normal">
              {profile.full_name || "No name added"}
            </p>

            {/* Bio */}
            <p className="text-base text-gray-100 font-normal">
              {/* IRORERE JULIET <br />
              Web Enthusiast <br />
              LifeLong Learner <br />
              web/App Developer <br /> */}
              {profile.bio || "No bio yet"}
            </p>

            {/* Links */}
            <p className="text-base text-gray-100 font-normal flex items-center gap-x-2 mt-2">
              <Link2 size={16} />
              <Link
                href={`mailto:${profile.email}`}
                className="text-blue-500 hover:underline font-medium"
              >
                {profile.email}
              </Link>
            </p>
          </div>
        </div>

        {/* Highlight section */}
        <div className="w-full flex items-center mb-12 border-b border-zinc-800 pb-6">
          <div className="w-full flex items-center gap-x-6 overflow-x-auto no-scrollbar py-2">
            {highlightData.map(({ id, image, username }) => (
              <Link
                href="/"
                key={id}
                className="flex items-center justify-center flex-col shrink-0"
              >
                <div className="w-24 h-24 rounded-full p-0.5 bg-neutral-800">
                  <Image
                    src={image}
                    alt={username}
                    width={96}
                    height={96}
                    className="rounded-full h-full w-full object-cover p-[2.5px] bg-black"
                  />
                </div>
                <p className="text-gray-300 text-xs mt-2 text-center max-w-24 truncate">
                  {username}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Post, Reels, Tagged section */}
        <div className="w-full">
          {/* tag tabs wrapper */}
          <div className="w-full flex items-center justify-center gap-x-12 mb-4 border-t border-[#313131]">
            <Tab
              label="POSTS"
              icon={<Grid3X3 size={16} />}
              isActive={activeTab === "posts"}
              onclick={() => handleTabClick("posts")}
            />

            <Tab
              label="REELS"
              icon={<Clapperboard size={16} />}
              isActive={activeTab === "reels"}
              onclick={() => handleTabClick("reels")}
            />

            <Tab
              label="TAGGED"
              icon={<Tag size={16} />}
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

export default ProfileDetails;
