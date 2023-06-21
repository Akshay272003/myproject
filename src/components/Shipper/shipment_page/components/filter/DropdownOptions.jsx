import { useState, useEffect } from "react";
import Style from "./filter.module.css";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IconButton, Checkbox } from "@mui/material";

const DropdownOptions = ({ header, options }) => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const elem = document.getElementById(`${header}-options`)
        if (isOpen === false) {
            elem.classList.add(Style.hidden);
        }
        else {
            elem.classList.remove(Style.hidden);
        }
    }, [isOpen])

    return (
        <>
            <div className="flex-col gap-half" style={{ overflow: 'hidden' }}>
                <div className={`${Style.option_container} flex justify-content-between items-center px-1`} >
                    <span className="font-title font-dark">{header}</span>
                    <IconButton onClick={() => setIsOpen(state => !state)} size="small">
                        {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </div>
                <div id={`${header}-options`} className={`${Style.filter_by} ${Style.hidden} flex-col`}>
                    {options && options.map(option => (
                        <div key={option}>
                            <Checkbox id={option} />
                            <label htmlFor={option} className="font-title font-light">{option}</label>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default DropdownOptions;