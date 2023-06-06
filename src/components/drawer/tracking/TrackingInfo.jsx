import styles from "./tracking.module.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const TrakingInfo = ({title, date, time, icon, iconClass}) => {
    return ( 
        <div className="flex gap-1 pt-1">
            <div className={`${iconClass} ${styles.side_icon} font-white flex justify-content-center items-center`}>
                {icon}
            </div>
            <div className="flex-col">
                <h6 className="heading">
                    {title}
                </h6>
                <div className="flex items-center gap-half font-xs font-light">
                    <CalendarMonthIcon style={{width:'14px'}} />
                    {date}
                </div>
                <div className="flex items-center gap-half font-xs font-light">
                    <AccessTimeIcon style={{width:'14px'}} />
                    {time}
                </div>
                
            </div>

        </div>
     );
}
 
export default TrakingInfo;