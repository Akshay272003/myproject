import { useState } from "react";
import Style from "./document_card.module.css";
import { IconButton, Divider } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import EditIcon from '@mui/icons-material/Edit';
import { openSlide } from "../right_slide/RightSlide";
import Popup, { openDialog } from "../popup/Popup";
import UploadDocuments from "../upload_documents/UploadDocuments";

const DocumentCard = ({ title = "title", label }) => {

    const dialogId = "upload-documents";

    const [hasCommercialInvoice, setCommercialInvoice] = useState("normal");
    const [hasPackingList, setPackingList] = useState("normal");
    const [hasPanCardFront, setPanCardFront] = useState('normal');
    const [hasPanCardBack, setPanCardBack] = useState('normal');

    const getColor = (state) => {
        // console.log(state)
        if (state === "complete") return "#34A855"
        else if (state === "required") return "red"
        else return "#5A6470"
    }

    return (
        <div className={`${Style.card}`}>
            <div className={`flex justify-content-between items-center gap-1 ${Style.card_header}`}>
                <div className="flex gap-1 items-center">
                    <span className={`${Style.card_title}`}>{title.toUpperCase()}</span>
                    <div className={Style.required_status}><span>REQUIRED</span></div>
                </div>
                <div className="flex gap-half items-center">
                    <IconButton
                        onClick={() => openDialog(dialogId)}
                        className={Style.add_button}
                    >
                        <AddIcon style={{ color: 'white', fontSize: '15px' }} />
                    </IconButton>
                    <span style={{ color: '#4431B8', fontSize: 'clamp(12px, 2.5vw, 15px)' }}>
                        Add {title}
                    </span>
                </div>
            </div>
            <div className="flex-col gap-half p-2">

                <span className={Style.card_desc}>Get this document form your supplier</span>

                <Divider />

                {/* comercial invoice  */}
                <div className="flex-col gap-1 mt-half">
                    <div className={`flex gap-1 items-center`}>
                        <CircleRoundedIcon
                            style={{ width: '8px', height: '8px', color: getColor(hasCommercialInvoice) }}
                        />
                        <span
                            style={{ fontSize: '11px', color: getColor(hasCommercialInvoice) }}
                        >Commercial Invoice <sup>*</sup></span>

                        {hasCommercialInvoice === "complete" &&
                            <IconButton style={{ backgroundColor: 'rgba(52, 168, 85, 0.12)', width: '18px', height: '18px' }}>
                                <EditIcon style={{ color: '#34A855', fontSize: '12px' }} />
                            </IconButton>
                        }
                    </div>
                </div>
                {/* packing list  */}
                <div className="flex-col gap-1 mt-half">
                    <div className={`flex gap-1 items-center`}>
                        <CircleRoundedIcon
                            style={{ width: '8px', height: '8px', color: getColor(hasPackingList) }}
                        />
                        <span
                            style={{ fontSize: '11px', color: getColor(hasPackingList) }}
                        >Packing List</span>

                        {hasPackingList === "complete" &&
                            <IconButton style={{ backgroundColor: 'rgba(52, 168, 85, 0.12)', width: '18px', height: '18px' }}>
                                <EditIcon style={{ color: '#34A855', fontSize: '12px' }} />
                            </IconButton>
                        }
                    </div>
                </div>
                {/* pan card front  */}
                <div className="flex-col gap-1 mt-half">
                    <div className={`flex gap-1 items-center`}>
                        <CircleRoundedIcon
                            style={{ width: '8px', height: '8px', color: getColor(hasPanCardFront) }}
                        />
                        <span
                            style={{ fontSize: '11px', color: getColor(hasPanCardFront) }}
                        >PAN Card Front</span>

                        {hasPanCardFront === "complete" &&
                            <IconButton style={{ backgroundColor: 'rgba(52, 168, 85, 0.12)', width: '18px', height: '18px' }}>
                                <EditIcon style={{ color: '#34A855', fontSize: '12px' }} />
                            </IconButton>
                        }
                    </div>
                </div>
                {/* pan card back  */}
                <div className="flex-col gap-1 mt-half">
                    <div className={`flex gap-1 items-center`}>
                        <CircleRoundedIcon
                            style={{ width: '8px', height: '8px', color: getColor(hasPanCardBack) }}
                        />
                        <span
                            style={{ fontSize: '11px', color: getColor(hasPanCardBack) }}
                        >PAN Card Back</span>

                        {hasPanCardBack === "complete" &&
                            <IconButton style={{ backgroundColor: 'rgba(52, 168, 85, 0.12)', width: '18px', height: '18px' }}>
                                <EditIcon style={{ color: '#34A855', fontSize: '12px' }} />
                            </IconButton>
                        }
                    </div>
                </div>

            </div>
            <Popup id={dialogId} >
                <UploadDocuments
                    dialogId={dialogId}
                    setCommercialInvoice={setCommercialInvoice}
                    setPackingList={setPackingList}
                    setPanCardFront={setPanCardFront}
                    setPanCardBack={setPanCardBack}
                />
            </Popup>
        </div>
    )
}

export default DocumentCard