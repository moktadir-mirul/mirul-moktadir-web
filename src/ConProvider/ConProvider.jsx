import { useState } from "react";
import ConContext from "./ConContext";



const ConProvider = ({children}) => {
    const [openMenu, setOpenMenu] = useState(false);
    const conValue = {
        openMenu, setOpenMenu
    }

    return(
        <ConContext value={conValue}>
            {children}
        </ConContext>
    )
}
export default ConProvider;