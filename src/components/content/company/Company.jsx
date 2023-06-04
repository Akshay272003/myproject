import {useState} from 'react';
import Topbar from "../../topbar/Topbar";
import styles from "./company.module.css";
import CompanyTab from "./company_tab/CompanyTab";
import TeamTab from "./team_tab/TeamTab";
import SideHelper from "../reusables/SideHelper";
import ProfileView from "../reusables/ProfileView";
import {Tab, Tabs} from "@mui/material";


function TabPanel(props) {
    const { children, value, index } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {value === index && (
                <div className="flex flex-wrap">
                    {children}
                </div>
            )}
        </div>
    );
}

// main component
const Company = () => {

    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Topbar title="Company Info" />

            {/* profile view */}
            <div className={`${styles.container}`}>
                <div className={`${styles.profile_container}`}>
                    <ProfileView
                            name="Lambeau Logix"
                            isPerson={false}
                            isVerified={true}
                            yearJoined="2022"
                            role="Shipping"
                            avatarSrc="src\assets\person-avatar.jpg"
                            shipments="400"
                            messages="12,500"
                            issues="50"
                            ratingValue="5"
                        />
                </div>
            </div>

            {/* tabs  */}
            <div className={`${styles.container}`}>

                <div>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="tabs">
                        <Tab label="Company" />
                        <Tab label="Team" />
                    </Tabs>
                </div>

                <div className='flex flex-wrap'>
                    <div className={`${styles.main_container} flex-col gap-2`}>
                        <TabPanel value={value} index={0}>
                            <CompanyTab />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <TeamTab />
                        </TabPanel>
                    </div>

                    {/* side helper  */}
                    <div className={`${styles.helper_container} flex-col flex-1`}>
                        <div className={`flex-col gap-2 bg-light rounded p-1`}>

                            <SideHelper
                                iconSrc="src\assets\bell-icon.png"
                                heading="Keep upto date on important info about using Kargoplex."
                                descriptions={[
                                    "Stay on top of your reservtions, account activity, changes to Kargoplex rules and policies, plus tax and requlatory updates.",
                                    "Never miss important messages and reminders about your reservations and account activity."
                                ]} />
                            <SideHelper
                                iconSrc="src\assets\bell-icon.png"
                                heading="Would you like to get text messages?"
                                descriptions={[
                                    "By checking the SMS box, you agree to receive autodialed promotional texts from Kargoplex and Kargoplex's partners.",
                                    "For more info, text HELP to 247262. To cancel mobile notifications, reply STOP to 247262. Message data rates may apply."
                                ]} />
                        </div>
                    </div>
                </div>



            </div>

        </>
    );
}

export default Company;