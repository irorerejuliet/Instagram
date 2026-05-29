
import Image from 'next/image';
import { feedData } from './Constants/feedData';
import Link from 'next/link';
import { Bookmark, Ellipsis, Heart, MessageCircle, Send, Smile } from 'lucide-react';

const FeedCard = () => {
  return (
    <>
      {feedData.map(
        ({
          id,
          username,
          time,
          profileImg,
          postImg,
          mutualFrndimg1,
          mutualFrndimg2,
          likeCount,
          caption,
          commentCount,
        }) => (
          <div key={id} className="w-full h-auto mb-6">
            {/* pp and username, and time */}
            <div className="w-full h-auto flex items-center justify-between mb-2">
              <div className="flex items-center gap-x-2">
                <Link
                  href="/"
                  key={id}
                  className="flex items-center justify-center flex-col shrink-0 "
                >
                  <div className="w-10 h-10 rounded-full object-cover p-0.5 bg-linear-to-r from-[#f02aa6] to-[#ff6f48] ">
                    <Image
                      src={profileImg}
                      alt={profileImg}
                      width={40}
                      height={50}
                      className="rounded-full w-full h-full object-cover p-[2.5px] bg-black"
                    />
                  </div>
                </Link>
                <div className="flex items-center gap-x-2">
                  <p className="text-white text-sm font-sans">{username}</p>
                  <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                  <p className="text-white text-sm font-sans">{time}</p>
                </div>
              </div>
              <Ellipsis className="text-white" />
            </div>
            {/* feedimage */}
            <div className="w-full lg:max-h-[75vh] md:max-h-[70vh] sm:max-h-[65vh] max-h-[50vh] lg:h-[70vh] md:h-[60vh] sm:h-[50vh] lg:min-h-[65vh] md:min-h-[55vh] sm:min-h-[50vh] border border-gray-300 rounded overflow-hidden mb-3">
              <Image
                src={postImg}
                width={493}
                height={511}
                alt={caption}
                className="w-full rounded object-center"
              />
            </div>
            {/* user action (like, comment, share and save) */}
            <div className="w-full h-auto flex items-center justify-between text-white">
              <div className="flex items-center gap-x-3 ">
                <Heart size={25} /> {/*likes */}
                <MessageCircle /> {/*comment*/}
                <Send />
              </div>
              <Bookmark />
            </div>
            {/* like count */}
            <Link
              href="/"
              className="w-full h-auto flex items-center gap-x-2 text-base text-gray-200 font-medium my-2"
            >
              <div className="flex items-center">
                <Image
                  src={mutualFrndimg1}
                  alt={likeCount}
                  width={20}
                  height={20}
                  className="w-5 h-5 rounded-full object-fill p-[1.5px] bg-black"
                />
                <Image
                  src={mutualFrndimg2}
                  alt={likeCount}
                  width={20}
                  height={20}
                  className="w-5 h-5 rounded-full object-fill p-[1.5px] bg-black -ml-3"
                />
              </div>
              {likeCount} {/* likes */}
            </Link>
            {/* Caption section */}
            <div className="w-full h-auto flex items-center gap-x-1">
              <div className="w-full h-auto text-sm text-gray-200 font-thin">
                <Link href="/" className="text-white font-medium text-sm me-1">
                  {username}
                </Link>
                {caption}
                <Link href="/" className="text-gray-400  text-sm ms-1">
                  More
                </Link>
              </div>
            </div>
            {/* comment count */}
            <Link href="/" className="text-gray-400 font-normal my-2">
              View all {commentCount} Comment
            </Link>
            {/* Comment */}
            <div className="w-full h-auto flex items-center justify-between border-b border-b-gray-500">
              <input
                type="text"
                className="w-[90%] h-auto bg-transparent border-none outline-none text-sm text-gray-400 py-3"
                placeholder="Add a Comment...."
              />
              <Smile className="text-white" />
            </div>
          </div>
        ),
      )}
    </>
  );
}

export default FeedCard
