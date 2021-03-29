import React from "react";
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

const LargeHero = () => {
  return (
    <StyledLargeHero>
      <video src={video} playsInline autoPlay muted loop></video>
      <StyledOverlay />
      <StyledText>
        <h2>Never Stop</h2>
        <h3>Exploring the world</h3>
        <p>
          Welcome to Nilgiris, one of the oldest mountain ranges, located at the
          tri-junction of Tamil Nadu, Kerala and Karnataka. Nilgiris is a part
          of the Western Ghats. Ooty the “Queen of Hill Stations”
        </p>
        <a href="#">Explore</a>
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
