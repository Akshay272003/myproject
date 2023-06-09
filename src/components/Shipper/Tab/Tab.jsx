import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from "../../card_shipper/card/Card";
import Style from "./Tab.module.css"
import RightSlide from "./RightSlide/RightSlide"

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

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div style={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab className={`${Style.tab}`} label="Active Shipments" {...a11yProps(0)} />
                    <Tab className={`${Style.tab}`} label="Pending Shipments" {...a11yProps(1)} />
                    <Tab className={`${Style.tab}`} label="Archived Shipments" {...a11yProps(2)} />
                </Tabs>
            </div>
            <div className="">
                <TabPanel value={value} index={0} >
                    <div className={Style.shipperDashboard_bodyTransit_cards}>
                        <RightSlide>
                            <Card Mode='Truck' PlateNo='KP-502050' RecieptNo='REF : 1202CA25152102' Status='Transhipment Loaded' Source='Las Vegas, CA' Destination='Miami, US' StatusColor='lightcoral' />
                        </RightSlide>
                        <Card Mode='Rail' PlateNo='QT-562301' RecieptNo='REF : 3202RA25112056' Status='Transhipment Loaded' Source='Las Vegas, CA' Destination='Miami, US' StatusColor='lightgreen' />
                        <Card Mode='Rail' PlateNo='QT-562301' RecieptNo='REF : 3202RA25112056' Status='Transhipment Loaded' Source='Las Vegas, CA' Destination='Miami, US' StatusColor='lightblue' />
                        <Card Mode='Rail' PlateNo='QT-562301' RecieptNo='REF : 3202RA25112056' Status='Transhipment Loaded' Source='Las Vegas, CA' Destination='Miami, US' StatusColor='lightpink' />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Pending Shipments
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Archived Shipments
                </TabPanel>
            </div>
        </div>
    );
}