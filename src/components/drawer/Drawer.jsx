import { useState } from "react";
import { Tabs, Tab, Divider, IconButton } from "@mui/material";
import styles from "./drawer.module.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import Overview from "./overview/Overview";
import Tracking from "./tracking/Tracking";
import Payment from "./payment/Payment";
import Collaborators from "./collaborators/Collaborators";
import Activity from "./activity/Activity";
import Documents from "./documents/Documents";



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
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}

const Drawer = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClose = () => {
        document.getElementById("drawer").classList.toggle(styles.hidden);
    }

    return (
        <div className={`relative`}>
            <div id="drawer" className={`${styles.drawer} ${styles.hidden}`}>

                <div className={`${styles.inner_main}`}>
                    {/* head section  */}
                    <div className="flex justify-content-between items-center relative">
                        {/* close button  */}
                        <div 
                            className={`${styles.close_button}`}
                            onClick={handleClose}
                        >
                            <IconButton style={{padding:'0'}}>
                                <CloseIcon style={{width:'15px'}} />
                            </IconButton>
                        </div>

                        <h5 className="font-dark">Shipping Details</h5>
                        {/* more button  */}
                        <IconButton aria-label="more">
                            <MoreHorizIcon />
                        </IconButton>
                    </div>

                    <Divider />

                    <div className={``}>
                        <Tabs variant="scrollable" value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab className={`${styles.tab}`} label="Overview" />
                            <Tab className={`${styles.tab}`} label="Payment" />
                            <Tab className={`${styles.tab}`} label="Collaborators" />
                            <Tab className={`${styles.tab}`} label="Tracking" />
                            <Tab className={`${styles.tab}`} label="Documents" />
                            <Tab className={`${styles.tab}`} label="Activity" />
                        </Tabs>
                    </div>

                    <Divider />

                    {/* content here  */}
                    <div className={`${styles.container}`}>
                        <TabPanel value={value} index={0}>
                            <Overview />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Payment />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Collaborators />
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <Tracking />
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <Documents />
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                            <Activity />
                        </TabPanel>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Drawer;