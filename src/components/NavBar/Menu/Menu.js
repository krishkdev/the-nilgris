import React, { useRef, useEffect } from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { TweenMax } from "gsap";

const Menu = ({ open }) => {
  let slide1 = useRef(null);
  let slide2 = useRef(null);
  let slide3 = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(slide1, 1, { x: 1000 }, { x: 0 });
    TweenMax.fromTo(slide2, 1.5, { x: 1000 }, { x: 0 });
    TweenMax.fromTo(slide3, 2, { x: 1000 }, { x: 0 });
  }, [open]);
  return (
    <StyledMenu open={open}>
      <a
        href="/"
        ref={(e) => {
          slide1 = e;
        }}
      >
        About us
      </a>
      <a
        href="/"
        ref={(e) => {
          slide2 = e;
        }}
      >
        Pricing
      </a>
      <a
        href="/"
        ref={(e) => {
          slide3 = e;
        }}
      >
        Contact
      </a>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
