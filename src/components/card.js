import React, { Component } from "react";
import Product from "./product.js";
import iconLuxury from "../image/icon-luxury.svg";
import iconSedans from "../image/icon-sedans.svg";
import iconSuvs from "../image/icon-suvs.svg";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <Product
          start={true}
          color="brightorange"
          icon={iconSedans}
          title="SEDANS"
          description="Choose a sedan for its affordability and excellent 
                fuel economy. Ideal for cruising in the city or on your next road trip."
          buttonText="Learn More"
        />
        <Product
          color="darkcyan"
          icon={iconSuvs}
          title="SUVS"
          description="Take an SUV for its spacious interior, power and versatility. 
                Perfect for your next family vacation and off-road adventures."
          buttonText="Learn More"
        />
        <Product
          end={true}
          color="verydarkcyan"
          icon={iconLuxury}
          title="LUXURY"
          description="Cruise in the best car brands without the bloated prices. 
                Enjoy the enhanced comfort of a luxury rental and arrive in style."
          buttonText="Learn More"
        />
      </div>
    );
  }
}

export default Card;
