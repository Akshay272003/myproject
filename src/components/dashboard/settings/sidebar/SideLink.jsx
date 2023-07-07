import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Style from "./sidebar.module.css";


const SideLink = ({ linkName, url, isActive, data }) => {

    const location = useLocation();
    const { pathname } = location;
    console.log(pathname)
    console.log("url", url)

    return (
        <>
            <Link
                to={url ? url : "/"}
                className={`${Style.side_link} ${pathname === url ? Style.side_link_active : ''} `}>

                <span>{linkName}</span>
                <Badge badgeContent={data} color="primary">
                    <ArrowRightIcon />
                </Badge>

            </Link>
        </>
    );
}

export default SideLink;