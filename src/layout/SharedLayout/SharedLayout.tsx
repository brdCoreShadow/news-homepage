import * as SC from "./SharedLayoutStyled"

import { ChildrenProps } from "@/utils/types";

const SharedLayout:React.FC<ChildrenProps> = ({children}) => {
    return ( 
        <SC.SharedLayoutCon>
            {children}
        </SC.SharedLayoutCon>
     );
}
 
export default SharedLayout;