import React from "react";
import ImageWeather from "./ImageWeather";
import WelcomeContainer from "./WelcomeContainer";

const MainSectionContainer = () => {
  return (
    <div className="m-8 w-full">
      <ImageWeather />
      <WelcomeContainer />
    </div>
  );
};

export default MainSectionContainer;
