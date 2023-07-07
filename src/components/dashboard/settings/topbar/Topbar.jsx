import NavTree from "./NavTree";
import Style from "./topbar.module.css";

const Topbar = ({ title, link_title }) => {
    return (
        <div className={Style.topbar}>

            <NavTree title={link_title ? link_title : title} />

            <h2 className={`heading ${Style.topbar_heading}`}>
                {title}
            </h2>

        </div>
    );
}

export default Topbar;