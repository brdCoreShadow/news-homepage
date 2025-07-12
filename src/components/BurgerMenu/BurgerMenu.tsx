import { useEffect } from "react";
import * as SC from "./BurgerMenuStyled"
import { ToggleProps } from "@/utils/types";

const BurgerMenu: React.FC<Partial<ToggleProps>> = ({isShare, closeShare}) => {

useEffect(() => { 
if (isShare){
   document.body.style.overflow = "hidden";
} else {
    document.body.style.overflow = "";
}

 return () => {
      document.body.style.overflow = "";
    };

},[isShare])

  return (
    <SC.BurgerWrapper>
      <SC.BurgerMenuCon>
        <SC.BurgerBtnCon>
          <button type="button" onClick={closeShare}></button>
        </SC.BurgerBtnCon>
        <SC.BurgerList>
          <SC.BurgerItem>
            <a href="#">Home</a>
          </SC.BurgerItem>
          <SC.BurgerItem>
            <a href="#">New</a>
          </SC.BurgerItem>
          <SC.BurgerItem>
            <a href="#">Popular</a>
          </SC.BurgerItem>
          <SC.BurgerItem>
            <a href="#">Trending</a>
          </SC.BurgerItem>
          <SC.BurgerItem>
            <a href="#">Categories</a>
          </SC.BurgerItem>
        </SC.BurgerList>
      </SC.BurgerMenuCon>
    </SC.BurgerWrapper>
  );
};

export default BurgerMenu;
