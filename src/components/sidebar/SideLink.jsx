import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Badge from '@mui/material/Badge';

const SideLink = ({ linkName, url, isActive, data }) => {

    return (
        <div className={`side-link ${isActive ? "side-link-active" : null}`}>

            <span>{linkName}</span>
            <Badge badgeContent={data} color="primary">
                <ArrowRightIcon />
            </Badge>

        </div>
    );
}

export default SideLink;