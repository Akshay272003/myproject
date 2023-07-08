import { Carousel } from "react-responsive-carousel";
import Style from "./carousal.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';


const CustomCarousal = () => {
    return (
        <div className="relative">
            <Carousel
                showThumbs={false}
                showStatus={false}
                dynamicHeight={false}
                className={Style.carousal}
                renderArrowPrev={(onClickHandler, hasPrev) => (
                    <div className={Style.prev_arrow_container}>
                        <button
                            type="button"
                            onClick={onClickHandler}
                            className={`${Style.custom_arrow} ${!hasPrev ? Style.disable_arrow : Style.active_arrow}`}
                            disabled={!hasPrev}
                        >
                            <WestIcon sx={{ color: hasPrev ? "white" : "black" }} />
                        </button>
                    </div>
                )}
                renderArrowNext={(onClickHandler, hasNext) => (
                    <div className={Style.next_arrow_container}>
                        <button
                            type="button"
                            onClick={onClickHandler}
                            className={`${Style.custom_arrow} ${!hasNext ? Style.disable_arrow : Style.active_arrow}`}
                            disabled={!hasNext}
                        >
                            <EastIcon sx={{ color: hasNext ? 'white' : "black" }} />
                        </button>
                    </div>
                )}
            >
                <div className={Style.image_container}>
                    <img src="src\assets\authentication\container-yard.jpg" alt="" className={Style.carousel_img} />
                    <p className={`${Style.legend} legend`}>The simplest way to manage your workforce</p>
                </div>
                <div>
                    <img src="src\assets\authentication\container-yard.jpg" alt="" className={Style.carousel_img} />
                    <p className={`${Style.legend} legend`}>The simplest way to manage your workforce</p>
                </div>
                <div>
                    <img src="src\assets\authentication\container-yard.jpg" alt="" className={Style.carousel_img} />
                    <p className={`${Style.legend} legend`}>The simplest way to manage your workforce</p>
                </div>
            </Carousel>
            <div className={Style.headline_container}>
                <div className={Style.headline}>
                    Free for personal use
                </div>
            </div>
        </div>
    )
}

export default CustomCarousal