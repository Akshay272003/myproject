import {Avatar, Divider} from "@mui/material";

const ActivityDetail = ({date, time, title, avatarSrc, name}) => {
    return ( 
        <>
            <div className="mt-1 mb-1">
                <div className="flex justify-content-between gap-1 items-center">
                    <span className="font-small font-dark">{title}</span>
                    <span className="font-xs font-light">
                        {`${date} ${time}`}
                    </span>
                </div>

                <div className="flex gap-1 items-center mt-half">
                    <Avatar src={avatarSrc} sx={{ width: 18, height: 18 }}/>
                    <span className="font-xs font-light">
                        {name}
                    </span>
                </div>
            </div>
            <Divider />
        </>
     );
}
 
export default ActivityDetail;