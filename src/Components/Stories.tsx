import Link from "next/link";
import TextEllipse from "./TexEllipse";
import Image from "next/image";
import { storieDatas } from "./constants/storieDatas";

const Stories = () => {
  return (
    <>
      <div className="lg:max-w-[41vm] md:max-w-[70vm] sm:max-w-full max-w-full w-full h-auto flex items-center gap-x-3.5 overflow-x-scroll">
        <Link
          href="/"
          className="flex items-center justify-center flex-col shrink-0"
        >
          <div className="w-16 h-16 rounded-full object-cover p-0.5 bg-green-500">
            <Image
              src="/images/foodTray.jpeg"
              width={10}
              height={10}
              alt="storyImg"
              className="rounded-full w-full h-full object-cover p-[2.5px] bg-black"
            />
          </div>
          <TextEllipse username="Food Tray" maxlength={8} />
        </Link>
        {storieDatas.map(({ id, image, username }) => (
          <Link
            href="/"
            key={id}
            className="flex items-center justify-center flex-col shrink-0 "
          >
            <div className="w-16 h-16 rounded-full object-cover p-0.5 bg-linear-to-r from-[#f02aa6] to-[#ff6f48] ">
              <Image
                src={image}
                alt="storyImg"
                width={100}
                height={100}
                className="rounded-full w-full h-full object-cover p-[2.5px] bg-black"
              />
            </div>
            <TextEllipse username={username} maxlength={8} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Stories;
