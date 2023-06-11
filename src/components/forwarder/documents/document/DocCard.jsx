import Style from "./document.module.css";
import FileLogo from "../../../../assets/file.svg";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {IconButton} from "@mui/material";

const DocCard = ({name, size, lastUpdated}) => {
    return ( 
        <div className={`p-1 flex-cols gap-1 bg-light rounded ${Style.doc_card}`}>

            <div className={`${Style.card_icon} bg-less-light p-half`}>
                <img src={FileLogo} alt="" />
            </div>

            <div className="flex justify-content-between items-center gap-2">
                <div className="flex-col gap-half">
                    <p className="font-dark font-title">{name}</p>
                    <span className="sub-title">{size} MB</span>
                    <span className="font-xs font-light">
                        Last Updated: &nbsp;&nbsp;
                        <span className="font-dark">{lastUpdated}</span>
                    </span>
                </div>
                <IconButton size="small">
                    <KeyboardArrowRightIcon />
                </IconButton>
            </div>

        </div>
     );
}
 
export default DocCard;