import Style from "./module_card.module.css";
import {IconButton, Divider} from "@mui/material";
// import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
// import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
// import CardImg from "../../../assets/CardImg.svg"
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

const Card = () => {
    return ( 
            <div className={Style.card}>
                {/* img container */}
                <div>
                    <img className={Style.card_img} src="src\assets\3.jpg" alt="" />
                </div>
                
                <p className={Style.card_title}>
                    Good title good title good title good title
                </p>
                
                <p className={`${Style.desc}`}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, est?
                </p>

                <Divider />

                <div className={Style.foot}>
                    <div>
                        <CategoryOutlinedIcon style={{fontSize:'0.8rem'}} />
                        <span>
                            category
                        </span>
                    </div>
                    <div>
                        <TagOutlinedIcon style={{fontSize:'0.8rem'}} />
                        <span>
                            tags
                        </span>
                    </div>
                </div>
            </div>
     );
}
 
export default Card;