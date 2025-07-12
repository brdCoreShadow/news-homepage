import * as SC from "./AboutStyled";

import retroPc from "../../assets/images/image-retro-pcs.jpg";
import laptopPic from "../../assets/images/image-top-laptops.jpg";
import gamingPic from "../../assets/images/image-gaming-growth.jpg";

const About: React.FC = () => {
  return (
    <SC.AboutCon>
      <ul>
        <SC.AboutItem>
          <SC.AboutItemPicThumb>
            <img src={retroPc} alt="retroPc" />
          </SC.AboutItemPicThumb>
          <SC.AboutItemContentCon>
            <h3>01</h3>
            <h4>Reviving Retro PCs</h4>
            <p>What happens when old PCs are given modern upgrades?</p>
          </SC.AboutItemContentCon>
        </SC.AboutItem>
        <SC.AboutItem>
          <SC.AboutItemPicThumb>
            <img src={laptopPic} alt="laptop" />
          </SC.AboutItemPicThumb>
          <SC.AboutItemContentCon>
            <h3>02</h3>
            <h4>Top 10 Laptops of 2022</h4>
            <p>Our best picks for various needs and budgets.</p>
          </SC.AboutItemContentCon>
        </SC.AboutItem>
        <SC.AboutItem>
          {" "}
          <SC.AboutItemPicThumb>
            <img src={gamingPic} alt="gaming" />
          </SC.AboutItemPicThumb>
          <SC.AboutItemContentCon>
            <h3>03</h3>
            <h4>The Growth of Gaming</h4>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </SC.AboutItemContentCon>
        </SC.AboutItem>
      </ul>
    </SC.AboutCon>
  );
};

export default About;
