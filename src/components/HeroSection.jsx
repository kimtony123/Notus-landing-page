//import video1 from "../assets/video1.mp4";
//import video2 from "../assets/zion chatx.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Notus 
        <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
          {" "}
          DAO.
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Real world Assets(RWA) DAO, Tokenizing the world's climate one city at a time.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="https://notus-front-end-i7kt.vercel.app/"
          className="bg-gradient-to-r from-green-500 to-green-800 py-3 px-4 mx-3 rounded-md"
        >
          Go to App.
        </a>
      </div></div>
  );
};

export default HeroSection;