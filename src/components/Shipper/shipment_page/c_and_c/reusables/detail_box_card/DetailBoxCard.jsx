import Style from "./detail_box_card.module.css";
import AddIcon from '@mui/icons-material/Add';
import { IconButton, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useState } from "react";
import { openSlide } from "../right_slide/RightSlide";


const DetailBoxCard = ({ title, label, setSlideContent, content }) => {

    const [data, setData] = useState('');

    const handleChange = (event) => {
        setData(event.target.value);
    };

    return (
        <div className={`${Style.card}`}>
            <div className={`flex justify-content-between items-center gap-1 ${Style.card_header}`}>
                <div className="flex gap-1 items-center">
                    <span className={`${Style.card_title}`}>{title.toUpperCase()}</span>
                    <div className={Style.required_status}><span>Required</span></div>
                </div>
                <div className="flex gap-half items-center">
                    <IconButton
                        onClick={() => { openSlide(1), setSlideContent(content) }}
                        className={Style.add_button}>
                        <AddIcon style={{ color: 'white', fontSize: '15px' }} />
                    </IconButton>
                    <span style={{ color: '#4431B8', fontSize: 'clamp(12px, 2.5vw, 15px)' }}>
                        Add {title}
                    </span>

                </div>
            </div>
            <div className="flex-col gap-2 p-2">
                <div className="flex-col">
                    <span className={Style.card_desc}>The exporter of record for your shipment. Usually the factory.</span>
                    <div className="flex gap-half">
                        <span className={Style.card_desc}>sourcing agent, etc.</span>
                        <a href="#" className={Style.learn_more}>Learn more</a>
                    </div>
                </div>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">{`Select ${label}`}</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={data}
                        label={`select ${label}`}
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default DetailBoxCard