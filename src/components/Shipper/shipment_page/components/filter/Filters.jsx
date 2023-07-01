import { useState } from "react";
import Style from "./filter.module.css";
import { Divider, Button } from "@mui/material";
import { Slider } from "antd";
import DropdownOptions from "./DropdownOptions";


const Filters = () => {

    // const formatter = (value) => <span style={{ color: '#4431B8' }}>$ {value}</span>;
    const formatter = (value) => `$ ${value}`;

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
                {/* slider  */}
                <Slider
                    range
                    defaultValue={[0, 1500]}
                    className={Style.slider}
                    tooltip={{
                        formatter,
                    }}
                />

                <div className="flex justify-content-between">
                    <span className="font-small font-dark">$ 1000</span>
                    <span className="font-small font-dark">$ 2000</span>
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