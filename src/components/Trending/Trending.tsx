import * as SC from "./TrendingStyled"

const Trending:React.FC = () => {
  return (
    <SC.TrendingCon>
      <h3>New</h3>
      <ul>
        <SC.TrendingItem>
          <h4>Hydrogen VS Electric Cars</h4>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </SC.TrendingItem>
        <SC.TrendingItem>
            <h4>The Downsides of AI Artistry</h4>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
        </SC.TrendingItem>
        <SC.TrendingItem>
            <h4>Is VC Funding Drying Up?</h4>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </SC.TrendingItem>
      </ul>
    </SC.TrendingCon>
  );
};

export default Trending;
