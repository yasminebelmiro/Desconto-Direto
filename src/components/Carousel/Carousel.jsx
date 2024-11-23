import React from "react";

import panfleto1 from "../../assets/images/panfleto1.png";
import panfleto2 from "../../assets/images/panfleto2.png";
import panfleto3 from "../../assets/images/panfleto3.png";
import panfleto4 from "../../assets/images/panfleto4.png";
import panfleto5 from "../../assets/images/panfleto5.png";
import panfleto6 from "../../assets/images/panfleto6.png";

import { Carrosel, Img } from "./style";

const Carousel = () => {
  {/*TODO: fazer o carrosel*/}
  return (
    
    <Carrosel>
      <Img src={panfleto1} alt="panfleto" />
      <Img src={panfleto2} alt="panfleto" />
      <Img src={panfleto3} alt="panfleto" />
      <Img src={panfleto4} alt="panfleto" />
      <Img src={panfleto5} alt="panfleto" />
      <Img src={panfleto6} alt="panfleto" />
    </Carrosel>
  );
};

export default Carousel;
