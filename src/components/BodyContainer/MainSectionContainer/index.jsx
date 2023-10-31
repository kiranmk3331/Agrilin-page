import React from "react";
import ImageWeather from "./ImageWeather";
import WelcomeContainer from "./WelcomeContainer";
import OrderStatus from "./OrderStatus";
import StatusSummary from "./StatusSummary";

const MainSectionContainer = () => {
  return (
    <div className="m-8">
      <ImageWeather />
      <WelcomeContainer />
      <OrderStatus />
      <StatusSummary />
    </div>
  );
};

export default MainSectionContainer;
