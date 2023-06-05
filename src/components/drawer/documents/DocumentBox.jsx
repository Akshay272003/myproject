import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {IconButton} from "@mui/material"
import styles from "./documents.module.css";

const DocumentBox = ({title, date, icon}) => {
    return ( 
        <>
            <div className={`${styles.doc_box} bg-less-light flex justify-content-between items-center rounded`}>
                <div className="flex gap-half">
                    <div>
                        <img src={icon} alt="" />
                    </div>
                    <div className="flex-col justify-content-center">
                        <span className="heading">
                            {title}
                        </span>
                        <span className="font-xs font-light mt-half">
                            {date}
                        </span>
                    </div>
                </div>
                <IconButton>
                    <ArrowForwardIcon />
                </IconButton>
            </div>
        </>
     );
}
 
export default DocumentBox;