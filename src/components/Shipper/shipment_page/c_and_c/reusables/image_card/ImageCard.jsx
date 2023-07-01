import { useState } from "react";
import Style from "./image_card.module.css";
import { IconButton, Divider } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import EditIcon from '@mui/icons-material/Edit';
import { openDialog } from "../popup/Popup";

const ImageCard = ({ label, uploadedImages, dialogId }) => {


    return (
        <div className={`${Style.card}`}>
            <div className={`flex justify-content-between items-center gap-1 ${Style.card_header}`}>
                <div className="flex gap-1 items-center">
                    <span className={`${Style.card_title}`}>PRODUCT IMAGES</span>
                    <div className={Style.required_status}><span>REQUIRED</span></div>
                </div>
                <div className="flex gap-half items-center">
                    <IconButton
                        onClick={() => openDialog(dialogId)}
                        className={Style.add_button}>
                        <AddIcon style={{ color: 'white', fontSize: '15px' }} />
                    </IconButton>
                    <span style={{ color: '#4431B8', fontSize: 'clamp(12px, 2.5vw, 15px)' }}>
                        Add Images
                    </span>
                </div>
            </div>
            <div className="flex-col gap-half p-2">

                <span className={Style.card_desc}>Upload your product images allowed format (JPG, PNG, JPEG)*</span>

                <Divider />

                {uploadedImages
                    ?
                    <div className="flex gap-1 mt-1 flex-wrap">

                        {uploadedImages.slice(0, 5).map(imgDetails => (
                            <div key={imgDetails.id}>
                                <img src={imgDetails.img} style={{ width: '80px' }} />
                            </div>
                        ))}

                        <div className="flex justify-content-center items-center" style={{ height: '80px', width: '80px' }}>
                            <span
                                style={{ color: '#4431BB', fontSize: '16px', fontWeight: '500', cursor: 'pointer' }}
                            >6+</span>
                        </div>
                    </div>
                    :
                    <div className="py-1 mt-1">
                        <span style={{ fontSize: 'clamp(10px, 2.5vw, 14px)', color: '#5A6470' }}>No Images Uploaded...</span>
                    </div>

                }



            </div>
        </div>
    )
}
export default ImageCard