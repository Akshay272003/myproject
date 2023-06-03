import {Link} from "react-router-dom";

const NavTree = ({title}) => {
    return ( 
        <div className="nav-tree sub-title">
            <Link to="/" className="bold sub-title">Dashboard</Link>
            {'>'}
            <Link to="/" className="bold sub-title">Settings</Link>
            {'>'}
            <span className="sub-title">{title}</span>
        </div>
     );
}
 
export default NavTree;