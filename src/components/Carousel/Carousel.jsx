import React, { useRef, useState, useEffect } from "react";
import panfleto1 from "../../assets/images/panfleto1.png";
import panfleto2 from "../../assets/images/panfleto2.png";
import panfleto3 from "../../assets/images/panfleto3.png";
import panfleto4 from "../../assets/images/panfleto4.png";
import panfleto5 from "../../assets/images/panfleto5.png";
import panfleto6 from "../../assets/images/panfleto6.png";
import panfleto7 from "../../assets/images/panfleto7.png";
import panfleto8 from "../../assets/images/panfleto8.png";
import panfleto9 from "../../assets/images/panfleto9.png";
import panfleto10 from "../../assets/images/panfleto10.png";

import { Carrosel, Content, Inner, Img, Item } from "./style";

const images = [
  panfleto1,
  panfleto2,
  panfleto3,
  panfleto4,
  panfleto10,
  panfleto5,
  panfleto6, 
  panfleto7,
  panfleto8,
  panfleto10,
  panfleto9,
  panfleto9,
  panfleto9,
  panfleto10,
  panfleto9,
  panfleto9,
  panfleto9,
];

const Carousel = () => {
  const [width, setWidth] = useState(0);
  const innerRef = useRef();

  useEffect(() => {
    if (innerRef.current) {
      setWidth(innerRef.current.scrollWidth - innerRef.current.offsetWidth);
    }
  }, []);

  return (
    <Carrosel>
      <Content whileTap={{ cursor: "grabbing" }}>
        <Inner
          ref={innerRef}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {images.map((image, index) => (
            <Item key={index}>
              <Img src={image} alt={`Panfleto ${index + 1}`} />
            </Item>
          ))}
        </Inner>
      </Content>
    </Carrosel>
  );
};

export default Carousel;
