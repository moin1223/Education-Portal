import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";

import "./Header.css";
const Header = () => {
  return (
    <div style={{ position: "relative", top: "-10px" }}>
      <Carousel>
        <div className="header_img_1">
          {" "}
          <h6>You only have to know one thing</h6>
          <h2>You can learn anything</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <button>start now!</button>
        </div>
        <div className="header_img_1">
          {" "}
          <h6>You only have to know one thing</h6>
          <h2>You can learn anything</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <button>start now!</button>
        </div>
        <div className="header_img_1">
          {" "}
          <h6>You only have to know one thing</h6>
          <h2>You can learn anything</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <button>start now!</button>
        </div>
        <div className="header_img_1">
          {" "}
          <h6>You only have to know one thing</h6>
          <h2>You can learn anything</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <button>start now!</button>
        </div>
        <div className="header_img_1">
          {" "}
          <h6>You only have to know one thing</h6>
          <h2>You can learn anything</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <button>start now!</button>
        </div>
      </Carousel>
    </div>
  );
};

export default Header;
