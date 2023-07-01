import Style from "./status.module.css";
// import { IconButton } from "@mui/material";
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import StatusCheck from "./status_check/StatusCheck";

const StatusDetail = () => {
    return (
        <div className={`${Style.status_card} flex`}>
            <div className={`${Style.status_number_box}`}>
                0/4
            </div>
            <div className={`${Style.status_detail} flex-col gap-1 p-1`}>

                <span style={{ color: '#444', fontSize: 'clamp(14px, 2.5vw, 20px)' }} className="flex items-center gap-half">
                    Booking placed! Complete the required information to get your shipment on its way.
                    <HelpOutlineRoundedIcon style={{ fontSize: '0.9em', marginTop: '0.3em' }} />
                </span>

                <div className="flex gap-2 flex-wrap">
                    <StatusCheck label="Complete your payment" isChecked={false} />
                    <StatusCheck label="Assign a consignor" isChecked={false} />
                    <StatusCheck label="Asssign a consignee" isChecked={false} />
                    <StatusCheck label="Upload your commercial invoice" isChecked={false} />
                </div>
            </div>
        </div>
    )
}

export default StatusDetail