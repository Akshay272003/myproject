import { useState } from 'react';
import { Tab, Tabs } from "@mui/material";
import Style from "./tabs.module.css";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}



const TabsNav = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className={`flex justify-content-center bg-light p-half rounded ${Style.container}`}>
                <Tabs
                    className={Style.tabs}
                    value={value}
                    onChange={handleChange}
                    aria-label="Sort"
                >
                    <Tab label="Cheapest" />
                    <Tab label="Best Value" />
                    <Tab label="Quickest" />
                </Tabs>
            </div>
            {/* <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel> */}
        </>
    );
}

export default TabsNav;