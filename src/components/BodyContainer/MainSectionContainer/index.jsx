import React from "react";
import ImageWeather from "./ImageWeather";
import WelcomeContainer from "./WelcomeContainer";
import OrderStatus from "./OrderStatus";

const MainSectionContainer = () => {
  return (
    <div className="m-8">
      <ImageWeather />
      <WelcomeContainer />
      <OrderStatus />
    </div>
  );
};

export default MainSectionContainer;
