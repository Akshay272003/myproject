import {Divider} from "@mui/material";
import ActivityDetail from "./ActivityDetail";

const Activity = () => {
    return ( 
        <div>
            {/* head  */}
            <div className="p-1 bg-less-light mb-1">
                <h5 className="heading">Shipment Activity Feed</h5>
            </div>

            <Divider />

            <div className="flex-col">
                <ActivityDetail 
                    name="Alisa Charm"
                    title="Customs clearance payment received"
                    date="Dec 22, 2022"
                    time="05:00 PM"
                    avatarSrc="src\assets\person-avatar.jpg"
                />
                <ActivityDetail 
                    name="Alisa Charm"
                    title="Customs clearance payment received"
                    date="Dec 22, 2022"
                    time="05:00 PM"
                    avatarSrc="src\assets\person-avatar.jpg"
                />
                <ActivityDetail 
                    name="Alisa Charm"
                    title="Customs clearance payment received"
                    date="Dec 22, 2022"
                    time="05:00 PM"
                    avatarSrc="src\assets\person-avatar.jpg"
                />
                <ActivityDetail 
                    name="Alisa Charm"
                    title="Customs clearance payment received"
                    date="Dec 22, 2022"
                    time="05:00 PM"
                    avatarSrc="src\assets\person-avatar.jpg"
                />
                <ActivityDetail 
                    name="Alisa Charm"
                    title="Customs clearance payment received"
                    date="Dec 22, 2022"
                    time="05:00 PM"
                    avatarSrc="src\assets\person-avatar.jpg"
                />
                <ActivityDetail 
                    name="Alisa Charm"
                    title="Customs clearance payment received"
                    date="Dec 22, 2022"
                    time="05:00 PM"
                    avatarSrc="src\assets\person-avatar.jpg"
                />
                <ActivityDetail 
                    name="Alisa Charm"
                    title="Customs clearance payment received"
                    date="Dec 22, 2022"
                    time="05:00 PM"
                    avatarSrc="src\assets\person-avatar.jpg"
                />
            </div>

        </div>
     );
}
 
export default Activity;