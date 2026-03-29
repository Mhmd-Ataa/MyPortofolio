import Hero from "./hero/Hero";

import Intro from "./Introduction/Intro";

const Home = () => {
  return (
    <>
      <div className="">
        <Hero />
        <div className="divider" />
        <Intro />
      </div>
    </>
  );
};

export default Home;
