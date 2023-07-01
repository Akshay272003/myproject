import { useState } from "react";
import Style from "./c_and_c.module.css";
import { Divider } from "@mui/material";
import { IconButton, Step, Stepper, StepLabel } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ShipmentDetails from "./tabs/shipment_details/ShipmentDetails";
import { Tab, Tabs } from "@mui/material";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Quotes from "./tabs/quotes/Quotes";
import StaticStepper from "../../reusables/static_stepper/StaticStepper";

// tabs ***********************
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
                <div className="mt-2">
                    {children}
                </div>
            )}
        </div>
    );
}

// main component *************************
const CandC = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={`${Style.container}`}>
            <div className="bg-light flex justify-content-between gap-1 items-center flex-wrap">
                <div className="flex gap-1 items-center p-1">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <div className="flex-col">
                        <span className={Style.heading}>Enter your PO/SKU/Internal reference</span>
                        <span className={Style.heading_id}>#S228937299771</span>
                    </div>
                </div>

                <Divider orientation="vertical" flexItem />

                <div className="p-1">
                    <StaticStepper current={2} />
                </div>
            </div>


            <div style={{ backgroundColor: '#F0F0F0' }} className={`p-2`}>

                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="SHIPMENT DETAILS" />
                    <Tab label="Shipment Charges" />
                    <Tab label="Quotes" />
                </Tabs>

                <TabPanel value={value} index={0}>
                    <ShipmentDetails />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Shipment Charges
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Quotes />
                </TabPanel>


            </div>
        </div>
    )
}

export default CandC