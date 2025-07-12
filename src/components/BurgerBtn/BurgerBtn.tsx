import { ToggleProps } from "@/utils/types";
import * as SC from "./BurgerBtnStyled"

const BurgerBtn:React.FC<Partial<ToggleProps>> = ({openShare}) => {
    return ( 
        <SC.BurgerBtnStyled onClick={openShare}></SC.BurgerBtnStyled>
     );
}
 
export default BurgerBtn;