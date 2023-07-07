import { Button } from "@mui/material"
import CustomButton from "../../../reusables/button/Button";


// helper component 
const DeviceHistoryComps = ({ info }) => {

    return (
        <div className="py-1 flex flex-wrap justify-content-between items-center">
            <div className={`flex gap-half`}>
                {info.eviceIcon}
                <div className="flex-col">
                    <p className="font-dark font-title">{info.deviceName}-{info.browserName}</p>
                    <p className="sub-title">{info.location}-{info.date_time}</p>
                </div>
            </div>
            <CustomButton
                style={{ fontSize: '0.8rem' }}
            >Logout</CustomButton>
        </div>
    );
}

export default DeviceHistoryComps;