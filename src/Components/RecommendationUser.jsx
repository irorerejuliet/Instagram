import React from 'react'
import ProfileNav from './ProfileNav';
import { Link } from 'react-router-dom';
import { recommendationUserData } from '../Constants/recommendationUserData';
import { linkData } from '../Constants/linkData';

const RecommendationUser = () => {
  return (
    <>
      <div className="w-full h-auto py-3">
        {/* profile nagigation */}
        <ProfileNav />
        {/* Suggested user */}
        <div className="w-full h-auto my-8">
          <div className="w-full h-auto flex items-center justify-between">
            <h6 className="text-sm text-gray-400 font-medium ">
              Suggested for you
            </h6>
            <Link
              to="/"
              className="text-sm font-semibold text-gray-300 hover:text-gray-600"
            >
              See all
            </Link>
          </div>
          {/* All users */}
          {recommendationUserData.map(({ id, username, image, follow }) => (
            <div
              className="w-full h-auto flex items-center justify-between my-4"
              key={id}
            >
              <Link
                to="/profile"
                className="w-full h-auto flex items-center gap-x-2"
              >
                <img
                  src={image}
                  alt={username}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex items-start gap-y-0 flex-col">
                  <p className="text-[0.9rem]  text-white font-medium mb-0">
                    {username}
                  </p>
                  <h6 className="text-xs text-gray-500 font-normal">
                    Siggested for you
                  </h6>
                </div>
              </Link>
              <Link
                to="/"
                className="text-[0.855rem] text-blue-500 hover:text-gray-200"
              >
                {follow}
              </Link>
            </div>
          ))}
        </div>
        {/* footer links */}
        <div className="w-full h-auto">
          <div className="w-full h-auto flex items-center gap-x-[4px] flex-wrap mb-3">
            {linkData.map(({ id, link, title }) => (
              <div className="w-fit h-a flex items-center gap-x-[4px]" key={id}>
                <Link
                  to={link}
                  className="text-[0.8rem] font text-[#5b5b5b] hover:underline"
                >
                  {title}
                </Link>
                <div className="w-[0.8rem] h-[1.5px] bg-[#5b5b5b] rounded-b-full"></div>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#5b5b5b] font-normal">
            &copy; 2025 INSTAGRAM FROM META
          </p>
        </div>
      </div>
    </>
  );
}

export default RecommendationUser
