import { useEffect } from "react";
import * as SC from "./BurgerMenuStyled"
import { ToggleProps } from "@/utils/types";
import BurgerList from "./BurgerList";

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
        <BurgerList/>
      </SC.BurgerMenuCon>
    </SC.BurgerWrapper>
  );
};

export default BurgerMenu;
