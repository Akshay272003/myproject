import CarrierDetail from "../reuse/CarrierDetail";
import TrackingInfo from "./TrackingInfo";
import { Divider } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import styles from "./tracking.module.css";

const Tracking = () => {
    return (
        <>
            <div className={`mb-2`}>

                <CarrierDetail
                    vessal={"MSC"}
                    billOfLanding={"MEDUMT146799"}
                    container={"CXDU2004500"}
                    bookingRef={"193CA0679879"}
                    companyImgSrc="src\assets\idPass.png"
                />
            </div>
            <Divider />

            <div className="p-1 bg-less-light mt-2 rounded flex-col">
                <TrackingInfo
                    icon={<NotificationsIcon fontSize="small" />}
                    title="Empty to Shipper"
                    date="17th December, 2022"
                    time="1:30 PM PST"
                    iconClass={styles.blue_icon}
                />
                <TrackingInfo
                    icon={<NotificationsIcon fontSize="small" />}
                    title="Empty to Shipper"
                    date="17th December, 2022"
                    time="1:30 PM PST"
                    iconClass={styles.orange_icon}
                />
                <TrackingInfo
                    icon={<NotificationsIcon fontSize="small" />}
                    title="Empty to Shipper"
                    date="17th December, 2022"
                    time="1:30 PM PST"
                    iconClass={styles.green_icon}
                />
                <TrackingInfo
                    icon={<NotificationsIcon fontSize="small" />}
                    title="Empty to Shipper"
                    date="17th December, 2022"
                    time="1:30 PM PST"
                    iconClass={styles.sky_icon}
                />
                <TrackingInfo
                    icon={<NotificationsIcon fontSize="small" />}
                    title="Empty to Shipper"
                    date="17th December, 2022"
                    time="1:30 PM PST"
                    iconClass={styles.dark_icon}
                />
            </div>
        </>
    );
}

export default Tracking;