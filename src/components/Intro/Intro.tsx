import * as SC from "./IntroStyled";

import heroPicMob from "../../assets/images/image-web-3-mobile.jpg";

const Intro: React.FC = () => {
  return (
    <SC.IntroCon>
      <SC.IntroPicThumb>
        <img src={heroPicMob} alt="hero" />
      </SC.IntroPicThumb>
      <SC.IntroContentCon>
        <h3>The Bright Future of Web 3.0?</h3>
        <SC.IntroFlexCon>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button type="button">read more</button>
        </SC.IntroFlexCon>
      </SC.IntroContentCon>
    </SC.IntroCon>
  );
};

export default Intro;
