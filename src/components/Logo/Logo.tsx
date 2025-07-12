import * as SC from "./LogoStyled"

import logoIcon from "../../assets/images/logo.svg"

const Logo:React.FC = () => {
    return ( 
        <SC.LogoThump>
            <img src={logoIcon} alt="logo" />
        </SC.LogoThump>
     );
}
 
export default Logo;