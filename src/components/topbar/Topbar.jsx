import NavTree from "./NavTree";
import "./style.css";

const Topbar = ({title, link_title}) => {
    return ( 
        <div className="topbar">

            <NavTree title={link_title ? link_title : title} />

            <h2 className="heading topbar-heading">
                {title}
            </h2>

        </div>
     );
}
 
export default Topbar;