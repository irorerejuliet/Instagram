import React from 'react'
import { Link } from 'react-router-dom'

const Posts = () => {
  return (
    <>
      <div className="w-full h-auto  flex items-center gap-1 flex-wrap">
        <Link
          t="/"
          className="md:w-[33%] w-[32.5%] lg:[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
          style={{
            backgroundImage: 'url("/images/mr-felix.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Link
          to="/"
          className="md:w-[33%] w-[32.5%] lg:[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
          style={{
            backgroundImage: 'url("/images/Frank2.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Link
          to="/"
          className="md:w-[33%] w-[32.5%] lg:[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
          style={{
            backgroundImage: 'url("/images/ebony2.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Link
          to="/"
          className="md:w-[33%] w-[32.5%] lg:[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
          style={{
            backgroundImage: 'url("/images/NailedByJhay.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Link
          to="/"
          className="md:w-[33%] w-[32.5%] lg:[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
          style={{
            backgroundImage: 'url("/images/tolu.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Link
          to="/"
          className="md:w-[33%] w-[32.5%] lg:[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
          style={{
            backgroundImage: 'url("/images/joseph.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Link
          to="/"
          className="md:w-[33%] w-[32.5%] lg:[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
          style={{
            backgroundImage: 'url("/images/spaggeti.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Link
          to="/"
          className="md:w-[33%] w-[32.5%] lg:[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
          style={{
            backgroundImage: 'url("/images/testimony2.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Link
          to="/"
          className="md:w-[33%] w-[32.5%] lg:[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
          style={{
            backgroundImage: 'url("/images/gold.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </>
  );
}

export default Posts
