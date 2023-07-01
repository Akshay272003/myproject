import { useState } from "react";
import Style from "./accordion.module.css";
import { Icon, IconButton } from "@mui/material";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';


const Accordion = ({ title, icon, children, status = false, isDropdown = false }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        const element = document.getElementById(`detail-box-${title}`);
        // elem.classList.toggle(Style.hidden)
        if (element.clientHeight === 0) {
            element.style.height = element.scrollHeight + "px";
        } else {
            element.style.height = 0;
        }
        setIsOpen(state => !state);

    }

    return (
        <div className="flex-col gap-1">

            <div className="flex gap-1 items-center">
                <img src={icon} className={Style.head_icon} />
                <span className={Style.title}>{title}</span>

                {isDropdown
                    ?
                    <IconButton
                        size="small"
                        onClick={handleClick}
                    >
                        {isOpen ? <KeyboardArrowUpRoundedIcon /> : <KeyboardArrowDownRoundedIcon />}
                    </IconButton>
                    :
                    <>
                        {status ? <TaskAltRoundedIcon style={{ color: 'green' }} /> : <ErrorOutlineRoundedIcon style={{ color: 'red' }} />}
                    </>
                }

            </div>
            <div id={`detail-box-${title}`} className={`${isDropdown && Style.detail_box}`}>  {/*add Styles.hidden to add dropdown functionality*/}
                <div className={`${Style.innerBox} flex gap-2 flex-wrap`}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Accordion