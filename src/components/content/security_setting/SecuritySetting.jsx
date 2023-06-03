import {useState} from "react";
import styles from "./security_setting.module.css";
import Topbar from "../../topbar/Topbar";
import { Tab, Tabs } from "@mui/material";
import Account from "./account/Account";
import Cookies from "./cookies/Cookies";
import Privacy from "./privacy/Privacy";

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

const SecuritySetting = () => {

    // tabs controller 
    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Topbar title="Security and Privacy" link_title={"Security"} />

            <div className={`${styles.container}`}>

                <div>
                    <Tabs 
                        value={value} 
                        onChange={handleChange} 
                        aria-label="tabs">
                            <Tab label="Account" />
                            <Tab label="Privacy" />
                            <Tab label="Cookies" />
                    </Tabs>
                </div>

                <TabPanel value={value} index={0}>
                    <Account />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Privacy />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Cookies />
                </TabPanel>

            </div>
        </>
    );
}

export default SecuritySetting;