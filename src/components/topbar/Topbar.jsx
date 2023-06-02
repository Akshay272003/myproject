import NavTree from "./NavTree";
import "./style.css";

const Topbar = ({title}) => {
    return ( 
        <div className="topbar">

            <NavTree title={title} />

            <h2 className="heading topbar-heading">
                {title}
            </h2>

        </div>
     );
}
 
export default Topbar;