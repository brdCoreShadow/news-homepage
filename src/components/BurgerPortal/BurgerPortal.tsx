import { ChildrenProps } from "../../utils/types";

import ReactDOM from "react-dom";

const BurgerPortal:React.FC<ChildrenProps> = ({children}) => {
    const portalRoot = document.getElementById("burger-portal");
    if (!portalRoot) return null;

    return ReactDOM.createPortal(children, portalRoot)
}
 
export default BurgerPortal;