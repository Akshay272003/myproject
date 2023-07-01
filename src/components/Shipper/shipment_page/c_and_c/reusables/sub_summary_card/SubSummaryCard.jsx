import Style from "./sub_summary_card.module.css";
import { Divider } from "@mui/material";

const SubSummaryCard = ({ title, details }) => {
    return (
        <div className="flex-col gap-1 w-full mt-1">
            <span className={Style.title}>{title.toUpperCase()}</span>
            <Divider />

            {details && details.map(detail => (
                <div className="flex-col gap-1" key={detail.title}>
                    <span style={{ color: '#4431B8', fontSize: '16px', fontWeight: '600' }}>{detail.title}</span>
                    <div className="flex-col gap-half">
                        {detail.subDetails.map(sub => (
                            <div key={sub.label} className={`flex gap-1`}>
                                <span className={Style.key_label}>{sub.label}</span>
                                <span className={Style.key_value}>{sub.value}</span>
                            </div>

                        ))}
                    </div>
                </div>
            ))}


        </div>
    )
}

export default SubSummaryCard