import React, { useRef, useEffect } from "react";
import {
  StyledLargeHero,
  StyledOverlay,
  StyledText,
  StyledSocial,
} from "./LargeHero.styled";
import video from "../../assets/playback.mp4";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import instagram from "../../assets/images/instagram.png";
import { TweenMax, Power3 } from "gsap";

const LargeHero = () => {
  let textH2 = useRef(null);
  let textH3 = useRef(null);
  let textP = useRef(null);
  let textButton = useRef(null);

  useEffect(() => {
    //console.log(textH2);
    TweenMax.fromTo(textH2, 1, { x: -1000 }, { x: 0 });
    TweenMax.fromTo(textH3, 1.5, { x: -1000 }, { x: 0 });
    TweenMax.fromTo(textP, 2, { x: -1000 }, { x: 0 });
    TweenMax.to(textButton, 1.5, { opacity: 1, y: 0, ease: Power3.easeOut });
  }, []);
  return (
    <StyledLargeHero>
      <video src={video} playsInline autoPlay muted loop></video>
      <StyledOverlay />
      <StyledText>
        <h2
          ref={(e) => {
            textH2 = e;
          }}
        >
          Never Stop
        </h2>
        <h3
          ref={(e) => {
            textH3 = e;
          }}
        >
          Exploring the world
        </h3>
        <p
          ref={(e) => {
            textP = e;
          }}
        >
          Welcome to Nilgiris, one of the oldest mountain ranges, located at the
          tri-junction of Tamil Nadu, Kerala and Karnataka. Nilgiris is a part
          of the Western Ghats. Ooty the “Queen of Hill Stations”
        </p>
        <a
          href="#"
          ref={(e) => {
            textButton = e;
          }}
        >
          Explore
        </a>
      </StyledText>
      <StyledSocial>
        <li>
          <a href="#">
            <img src={facebook} alt="social" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} alt="social" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={instagram} alt="social" />
          </a>
        </li>
      </StyledSocial>
    </StyledLargeHero>
  );
};

export default LargeHero;
