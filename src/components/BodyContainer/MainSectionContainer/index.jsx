import React from "react";
import ImageWeather from "./ImageWeather";
import WelcomeContainer from "./WelcomeContainer";
import OrderStatus from "./OrderStatus";
import StatusSummary from "./StatusSummary";
import Footer from "./Footer";

const MainSectionContainer = () => {
  return (
    <div className="m-8">
      <ImageWeather />
      <WelcomeContainer />
      <OrderStatus />
      <StatusSummary />
      <Footer />
    </div>
  );
};

export default MainSectionContainer;
