import styles from "./referrals.module.css";
import { Avatar } from "@mui/material"

const DetailBox = ({ avatarSrc, title, data, outOfData, backgroundClass }) => {
    return (
        <>
            <div className={`p-1 ${backgroundClass} ${styles.detail_box_container} rounded ${styles.font_little_white}`}>
                <div className={`flex  gap-1 justify-content-between items-center`}>
                    <div className="flex-col gap-half">
                        <p className="font-title">{title}</p>
                        <span className={` ${styles.credit_data} font-white`}>{data}</span>
                    </div>
                    
                    <Avatar
                        style={{
                            borderRadius: '15%'
                        }}
                        alt="name"
                        src={avatarSrc}
                        sx={{ width: 30, height: 30 }}
                    />
                </div>
                <div className="flex items-end gap-half mt-1">
                    <span className="font-white">{outOfData.value}</span>
                    <span className="font-small">{outOfData.label}</span>
                </div>
            </div>
        </>

    );
}

export default DetailBox;