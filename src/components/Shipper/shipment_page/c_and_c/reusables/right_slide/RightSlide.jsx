import Style from "./right_slide.module.css";

export const closeSlide = (slideId) => {
    const slide = document.getElementById(`right-slide-${slideId}`);
    slide.classList.add(Style.hidden);
}
export const openSlide = (slideId) => {
    const slide = document.getElementById(`right-slide-${slideId}`);
    slide.classList.remove(Style.hidden);
}

const RightSlide = ({ content, id }) => {

    return (
        <div id={`right-slide-${id}`} className={`${Style.container} ${Style.hidden}`}>
            {content}
        </div>
    )
}

export default RightSlide