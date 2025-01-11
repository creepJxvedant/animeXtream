import React from "react";
  import Lottie from "lottie-react";
  import loadingAnimation from "../loading_animation.json";
  
const CardLoader = () => {
    return (
      <div style={{ width: "200px", height: "200px" }}>
        <Lottie 
          animationData={loadingAnimation} 
          loop={true} 
        />
      </div>
    );
  };

export default CardLoader