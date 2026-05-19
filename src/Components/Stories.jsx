
import { Link } from 'react-router-dom';
import TextEllipse from '../Components/TexEllipse'
import { storieDatas } from '../Constants/storieDatas';





const Stories = () => {
  return (
    <>
      <div className="lg:max-w-[41vm] md:max-w-[70vm] sm:max-w-full max-w-full w-full h-auto flex items-center gap-x-3.5 overflow-x-scroll">
        <Link
          to="/"
          className="flex items-center justify-center flex-col flex-shrink-0"
        >
          <div className="w-16 h-16 rounded-full object-cover p-[2px] bg-green-500">
            <img
              src="/images/foodTray.jpeg"
              alt="storyImg"
              className="rounded-full w-full h-full object-cover p-[2.5px] bg-black"
            />
          </div>
          <TextEllipse username="Food Tray" maxlength={8} />
        </Link>
        {storieDatas.map(({ id, image, username }) => (
          <Link
            to="/"
            key={id}
            className="flex items-center justify-center flex-col flex-shrink-0 "
          >
            <div className="w-16 h-16 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#f02aa6] to-[#ff6f48] ">
              <img
                src={image}
                alt="storyImg"
                className="rounded-full w-full h-full object-cover p-[2.5px] bg-black"
              />
            </div>
            <TextEllipse username={username} maxlength={8} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Stories
