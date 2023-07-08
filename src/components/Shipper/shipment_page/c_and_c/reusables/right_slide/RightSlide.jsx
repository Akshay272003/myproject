import { IconButton, useScrollTrigger } from "@mui/material";
import Style from "./right_slide.module.css";
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useRef, useState } from "react";


export const closeSlide = (slideId) => {
    const slide = document.getElementById(`right-slide-${slideId}`);
    const backdrop = document.getElementById(`slide-backdrop-${slideId}`);
    slide.classList.add(Style.hidden);
    backdrop.classList.add(Style.hide_backdrop);
    document.body.style.overflow = 'auto';

}
export const openSlide = (slideId) => {
    const slide = document.getElementById(`right-slide-${slideId}`);
    const backdrop = document.getElementById(`slide-backdrop-${slideId}`);
    slide.classList.remove(Style.hidden);
    backdrop.classList.remove(Style.hide_backdrop);
    document.body.style.overflow = 'hidden';
}

const RightSlide = ({ content, id, crossBtn = true }) => {

    return (
        <div>

            <div id={`slide-backdrop-${id}`} className={`${Style.backdrop} ${Style.hide_backdrop}`} onClick={() => closeSlide(id)}></div>

            <div id={`right-slide-${id}`} className={`${Style.container} ${Style.hidden}`}>
                {crossBtn &&

                    <IconButton
                        onClick={() => closeSlide(id)}
                        className={Style.close_btn}
                    >
                        <CloseIcon />
                    </IconButton>
                }
                <div className={Style.content}>
                    {content}
                </div>
            </div>
        </div>
    )
}

export default RightSlide