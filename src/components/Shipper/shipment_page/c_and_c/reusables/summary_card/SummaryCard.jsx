import Style from "./summary_card.module.css";
import { Divider } from "@mui/material";

const SummaryCard = ({ title, details }) => {
    return (
        <div className={`${Style.summary_card} flex-col gap-1 w-full`}>
            <span className={Style.title}>{title.toUpperCase()}</span>
            <Divider />
            {details
                ?
                <div className="flex-col gap-half">
                    {details.map(detail => (
                        <div key={detail.label} className={`flex gap-1`}>
                            <span className={Style.key_label}>{detail.label}</span>
                            <span className={Style.key_value}>{detail.value}</span>
                        </div>
                    ))}
                </div>
                :
                <div style={{ width: '100%', backgroundColor: 'white', paddingTop: '2em' }} className="flex items-center justify-content-center">
                    <img src="src\assets\c_and_c\shipping_detail_summary.svg" className={Style.summary_img} />
                </div>
            }

        </div>
    )
}

export default SummaryCard