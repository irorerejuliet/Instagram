import React from 'react'
import { Link } from 'react-router-dom';

const Tags = () => {
  return (
    <>
      <div className="w-full h-auto  flex items-center gap-1 flex-wrap">
        <Link
          t="/"
          className="md:w-[33%] w-[32.5%] lg:[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
          style={{
            backgroundImage: 'url("/images/vacation.jpeg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Link
          to="/"
          className="md:w-[33%] w-[32.5%] lg:[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
          style={{
            backgroundImage: 'url("/images/snacks.jpeg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Link
          to="/"
          className="md:w-[33%] w-[32.5%] lg:[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
          style={{
            backgroundImage: 'url("/images/smilingGirl.jpeg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Link
          to="/"
          className="md:w-[33%] w-[32.5%] lg:[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
          style={{
            backgroundImage: 'url("/images/party.jpeg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Link
          to="/"
          className="md:w-[33%] w-[32.5%] lg:[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
          style={{
            backgroundImage: 'url("/images/daimond2.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Link
          to="/"
          className="md:w-[33%] w-[32.5%] lg:[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
          style={{
            backgroundImage: 'url("/images/foodTray.jpeg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Link
          to="/"
          className="md:w-[33%] w-[32.5%] lg:[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
          style={{
            backgroundImage: 'url("/images/Goodlife.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Link
          to="/"
          className="md:w-[33%] w-[32.5%] lg:[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
          style={{
            backgroundImage: 'url("/images/lifestyle.jpeg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </>
  );
}

export default Tags
