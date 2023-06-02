import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const SideLink = ({ linkName, url, isActive, data }) => {
    
    const location = useLocation();
    const {pathname} = location;


    return (
        <>  
            <Link 
                to={url ? url : "/"}
                className={`side-link ${pathname === url ? 'side-link-active' : ''} `}>

                <span>{linkName}</span>
                <Badge badgeContent={data} color="primary">
                    <ArrowRightIcon />
                </Badge>

            </Link>
        </>
    );
}

export default SideLink;