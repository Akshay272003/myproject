import { Link } from "react-router-dom";
import Style from "./topbar.module.css"

const NavTree = ({ title }) => {
    return (
        <div className={`${Style.nav_tree} sub-title`}>
            <Link to="/" className={`${Style.bold} sub-title`}>Dashboard</Link>
            {'>'}
            <Link to="/" className={`${Style.bold} sub-title`}>Settings</Link>
            {'>'}
            <span className="sub-title">{title}</span>
        </div>
    );
}

export default NavTree;