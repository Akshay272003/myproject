import Style from "./customer_review.module.css";
import { Rating } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ReviewCard = () => {
    return (
        <div className={`${Style.card} flex-col bg-less-light p-1`}>
            <div className="flex items-center gap-half">
                <span style={{ fontWeight: '500', fontSize: '17px' }}>Diana Settle</span>
                <Rating name="rating" value={4} readOnly style={{ fontSize: '1em' }} />
            </div>
            <div className="flex gap-half">
                <span className={`${Style.review_label} font-dark`}>Model: </span>
                <span className={`${Style.review_detail} font-light`}>LCL</span>
            </div>
            <div className="flex gap-half">
                <span className={`${Style.review_label} font-dark`}>Origin: </span>
                <span className={`${Style.review_detail} font-light`}>CNNGB Ningbo, Zhejiang</span>
            </div>
            <div className="flex gap-half">
                <span className={`${Style.review_label} font-dark`}>Destination: </span>
                <span className={`${Style.review_detail} font-light`}>33333 JJ Lemnon road Dallas, TX 75241</span>
            </div>
            <span className="font-small font-light">Reviewed: Aug 2020 Brazil</span>
            <div className="flex justify-content-end">
                <span className={`${Style.read_more} font-xs font-dark flex items-center`}>Read more <ArrowForwardIcon style={{ fontSize: '1.3em' }} /></span>
            </div>

        </div>
    );
}

export default ReviewCard;