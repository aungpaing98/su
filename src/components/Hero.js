import React from "react";
import style from './Hero.module.css'

function Hero() {
  return (
    <div className={`container-fluid p-0 ${style.hero}`}>
      <div className={`d-flex flex-column align-center text-center mx-auto my-5 p-5 ${style.heroContent}`}>
        <div className="">
          <img
            src="utils/ytu_logo.png"
            alt="Yangon Technological University Logo"
          />
        </div>
        <h2>The UNIVERSITY</h2>
        <p className="bold">BIT-RIT-YIT-YTU</p>
        <p>
          For four generations from BIT of colonial age to YTU of democracy age,
          YTU has been the premiere university of engineering in Myanmar.
          Located in Insein, the university boasts a large campus with the
          country's best facilities. After years of closing undergraduate
          programs as a result of the nation wide 8888 uprisings, YTU finally
          reopened its undergraduate programs in 2012. Currently YTU offers 14
          undergraduate engineering and architecture programs a range of
          post-graduate programs. See more at YTU Official Website.-
        </p>
      </div>
    </div>
  );
}

export default Hero;
