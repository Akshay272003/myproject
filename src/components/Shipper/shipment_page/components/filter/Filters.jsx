import { useState } from "react";
import Style from "./filter.module.css";
import { Divider, Slider, Button } from "@mui/material";
import DropdownOptions from "./DropdownOptions";

function valuetext(value) {
    return `$ ${value}`;
}


const Filters = () => {

    const [value, setValue] = useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={`flex-col p-1 gap-1 bg-light rounded ${Style.container}`}>

            <div className="flex-col gap-half">
                <h4 className="text-center font-dark" style={{ fontWeight: '600' }}>
                    Filters
                </h4>
                <Divider />
            </div>

            <div className="flex-col gap-half">
                <span className="font-light">
                    Price
                </span>
                <div style={{ padding: '0 7px' }}>
                    <Slider
                        size="small"
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    />
                </div>
                <div className="flex justify-content-between">
                    <span className="font-small font-dark">$ 1000</span>
                    <span className="font-small font-dark">$ 1000</span>
                </div>
            </div>

            <DropdownOptions header="Seller" options={["All Cargo Logistics", "ECU Worldwide", "Seabay International"]} />
            <DropdownOptions header="Origin Port" options={["All Cargo Logistics", "ECU Worldwide", "Seabay International"]} />
            <DropdownOptions header="Destination Port" />

            <Button
                size="small"
                variant="contained"
                style={{ textTransform: 'none', backgroundColor: '#3B44B1' }}
            >
                Search
            </Button>

        </div>
    );
}

export default Filters;