import React from "react";
import Styles from "./LargeHero.module.css";
import video from "../../assets/playback.mp4";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import instagram from "../../assets/images/instagram.png";

const LargeHero = () => {
  return (
    <div className={Styles.container}>
      {/* <video src={video} playsInline autoPlay muted loop></video> */}
      <div className="overlay"></div>
      <div className="text">
        <h2>Never Stop</h2>
        <h3>Exploring</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          sapiente, a ducimus nulla eveniet voluptatem architecto repellat
          commodi similique tenetur!
        </p>
        <a href="#">Explore</a>
      </div>
      <ul className="social">
        <li>
          <img src={facebook} alt="social" />
        </li>
        <li>
          <img src={twitter} alt="social" />
        </li>
        <li>
          <img src={instagram} alt="social" />
        </li>
      </ul>
    </div>
  );
};

export default LargeHero;
