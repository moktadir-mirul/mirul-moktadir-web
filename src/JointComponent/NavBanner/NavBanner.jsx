import React from "react";
import StarBorder from "../../ReactBits/StarBorder/StarBorder";
import NavBar from "../../Component/NavBar/NavBar";
import SmallNavLinks from "../../Component/NavBar/SmallNavLinks";
import Banner from "../../Component/Banner/Banner";
import DotGrid from "../../ReactBits/DotGrid/DotGrid";

const NavBanner = () => {
  return (
    <div className="relative w-full min-h-screen pt-5">
         <div className="absolute inset-0 -z-10">
            <DotGrid
         className=""
    dotSize={3}
    gap={18}
    baseColor="#14532d"
    activeColor="#166534"
    proximity={120}
    shockRadius={250}
    shockStrength={10}
    resistance={750}
    returnDuration={1.5}
  />
    
 
         </div>
       <nav>
        <StarBorder
          as="div"
          className="custom-class"
          color="cyan"
          speed="5s"
          thickness={5}
        >
          <NavBar></NavBar>
        </StarBorder>
        <SmallNavLinks></SmallNavLinks>
      </nav>
      <section>
        <Banner></Banner>
      </section>
    </div>
  );
};

export default NavBanner;
