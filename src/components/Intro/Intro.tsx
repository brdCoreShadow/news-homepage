import * as SC from "./IntroStyled";

import heroPicMob from "../../assets/images/image-web-3-mobile.jpg";
import heroPicDesk from "../../assets/images/image-web-3-desktop.jpg"
import { useScreenSize } from "@/hooks/useScreenSize";

const Intro: React.FC = () => {

    const {isDesktop} = useScreenSize()

  return (
    <SC.IntroCon>
      <SC.IntroPicThumb>
        <img src={isDesktop ? heroPicDesk : heroPicMob} alt="hero" />
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
