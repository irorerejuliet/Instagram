import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillLike } from 'react-icons/ai';
import { reelCardData } from '../Constants/reelCardData';

const ReelCard = () => {
  return (
    <>
      {reelCardData.map(({ id, video, likeCount, commentCount }) => (
        <Link
          to="/"
          key={id}
          className="md:w-[24.675%] w-[32.5%] lg:h-[48vh] md:h-[40vh] sm:h-[30vh] relative group"
        >
          <video
            src={video}
            title="reel video"
            loop
            muted
            autoPlay
            className="w-full h-full object-cover"
          />
          <div className="hidden group-hover:flex items-center justify-center gap-x-3 absolute top-[50%] left-[50%] translate-x-[50%]">
            <div className="flex items-center gap-x-1">
              <AiFillLike />
              <p className="text-base text-white font-medium">{likeCount}</p>
            </div>
            <div className="flex items-center gap-x-1">
              <AiFillLike />
              <p className="text-base text-white font-medium">{commentCount}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default ReelCard
