import {Button} from "@mui/material"


// helper component 
const DeviceHistoryComps = ({info}) => {

    return (
        <div className="py-1 flex flex-wrap justify-content-between">
            <div className={`flex gap-half`}>
                {info.eviceIcon}
                <div className="flex-col">
                    <p className="font-dark font-title">{info.deviceName}-{info.browserName}</p>
                    <p className="sub-title">{info.location}-{info.date_time}</p>
                </div>
            </div>
            <Button style={{ textTransform: 'none' }} size="small">Logout</Button>
        </div>
    );
}

export default DeviceHistoryComps;