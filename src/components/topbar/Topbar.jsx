import NavTree from "./NavTree";
import "./style.css";

const Topbar = () => {
    return ( 
        <div className="topbar">

            <NavTree />

            <h2 className="heading topbar-heading">
                Global Preferences
            </h2>

        </div>
     );
}
 
export default Topbar;