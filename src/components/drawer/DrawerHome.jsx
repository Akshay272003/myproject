import {Button} from "@mui/material"
import Drawer from "./Drawer";
import styles from "./drawer.module.css";

const DrawerHome = () => {

    const handleToggle = () => {
        const drawerElem = document.getElementById("drawer")
        drawerElem.classList.toggle(styles.hidden)
    }

    return ( 
        <>
            <div className="p-2">
                    <Button onClick={handleToggle}>Open drawer</Button>
                    <Drawer />
            </div>
        </>
    );
}
 
export default DrawerHome;