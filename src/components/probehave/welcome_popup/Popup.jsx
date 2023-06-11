import Style from "./welcome_popup.module.css";
import {Button} from "@mui/material";
import TopLeftWave from "../../../assets/probehave/popup-top-left-wave.svg";
import BottomRightWave from "../../../assets/probehave/popup-bottom-right-wave.svg";

const Popup = () => {
    return ( 
        <div className={`${Style.container}`}>
            <div className={`${Style.main}`}>

                {/* content */}
                <div className={`${Style.content}`}>
                    <p className={`${Style.heading}`}>Welcome!</p>
                    <p className={Style.description}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod nesciunt ut perferendis quis repellat odit sequi ex alias harum aspernatur omnis tempora quisquam ipsam molestias, voluptate consequatur architecto velit magnam consequuntur obcaecati odio iusto. Architecto reiciendis nobis unde. Cupiditate, omnis!
                    </p>
                    <div className={Style.btn_container}>
                        <Button
                            variant="outlined"
                            style={{textTransform:'none'}}
                        >
                            Decline
                        </Button>

                        <Button
                            variant="contained"
                            style={{textTransform:'none'}}
                        >
                            Accept
                        </Button>
                    </div>
                </div>
                    {/* images decore */}
                <div className={Style.img_container}>
                    <div>
                        <div className={Style.conic_img_container}>
                            <img src="src\assets\probehave\jenny.png" alt="img" />
                        </div>
                        <div className={`${Style.mt_4} ${Style.circle_img_container}`}>
                            <img src="src\assets\probehave\jack.png" alt="img" />
                        </div>
                    </div>
                    <div>
                        <div className={Style.circle_img_container}>
                            <img src="src\assets\probehave\jack.png" alt="img" />
                        </div>
                        <div className={`${Style.mt_4} ${Style.conic_img_container}`}>
                            <img src="src\assets\probehave\jenny.png" alt="img" />
                        </div>
                    </div>
                </div>

                {/* top left svg  */}
                <img className={Style.top_left_back} src={TopLeftWave} />
                <img className={Style.bottom_right_back} src={BottomRightWave}/>

            </div>
        </div>
     );
}
 
export default Popup;