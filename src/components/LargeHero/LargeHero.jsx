import React from "react";
import Styles from "./LargeHero.module.css";
import video from "../../assets/playback.mp4";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import instagram from "../../assets/images/instagram.png";

const LargeHero = () => {
  return (
    <div className={Styles.container}>
      <video src={video} playsInline autoPlay muted loop></video>
      <div className={Styles.overlay}></div>
      <div className={Styles.text}>
        <h2>Never Stop</h2>
        <h3>Exploring the world</h3>
        <p>
          Welcome to Nilgiris, one of the oldest mountain ranges, located at the
          tri-junction of Tamil Nadu, Kerala and Karnataka. Nilgiris is a part
          of the Western Ghats. Ooty the “Queen of Hill Stations”
        </p>
        <a href="#">Explore</a>
      </div>
      <ul className={Styles.social}>
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
      </ul>
    </div>
  );
};

export default LargeHero;
