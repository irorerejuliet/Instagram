import Link from "next/link";

const images = [
  "/images/faceCard.jpeg",
  "/images/blackDress.jpeg",
  "/images/blackDiamond.jpeg",
  "/images/beauty.jpeg",
  "/images/nysc2.jpeg",
  "/images/nativeTwo.jpeg",
  "/images/redDress.jpeg",
  "/images/nysc.jpeg",
  "/images/Goodlife.jpg",
  "/images/lemon.jpeg",
  "/images/pulple.jpeg",
  "/images/chubby.jpeg",
];

const cardClass =
  "md:w-[33%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh] bg-center bg-cover bg-no-repeat";

const Tags = () => {
  return (
    <div className="w-full flex flex-wrap gap-1 items-center ">
      {images.map((img, index) => (
        <Link
          key={index}
          href="/"
          className={cardClass}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
    </div>
  );
};

export default Tags;
