import {Divider} from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const TransitDetail = ({number, date,  time, containerType, containerSize, containerImgSrc, source, destination, weight, estimateDate, product, country, countryFlag}) => {
    return ( 
        <>
        <div className="flex flex-wrap gap-1 py-1">
            <div className="flex-1 flex-col gap-half">
                <span className="font-title font-dark">
                    N: {number}
                </span>
                <span className="sub-title">{date} {time}</span>
                <span className="mt-small font-small">
                    {containerType}
                </span>
                <div>
                    <img src={containerImgSrc} alt="" />
                </div>
                <span className="font-small">
                    {containerSize}
                </span>
            </div>

            <div className="flex-1 flex-col">
                <span className="font-title font-dark flex gap-half items-center">
                    {source}
                    <ArrowRightAltIcon fontSize="small" />
                </span>
                <span className="sub-title mt-1">WEIGHT OF CARGO</span>
                <span className="sub-title mt-half">CARGO READY</span>
                <span className="sub-title mt-half">PRODUCT</span>
            </div>

            <div className="flex-1 flex-col">
                <span className="font-title font-dark flex gap-half items-center">
                    {destination}
                    <KeyboardArrowDownIcon fontSize="small" />
                </span>
                <span className="font-small mt-1">{weight}</span>
                <span className="font-small mt-half">{estimateDate}</span>
                <span className="font-small mt-half">{product}</span>
            </div>
            <div className="flex-1">
                <span className="font-title font-dark flex gap-half">
                    {countryFlag}
                    <span>
                        {country}
                    </span>
                </span>
            </div>
        </div>
            <Divider />
        </>
     );
}
 
export default TransitDetail;