import Style from "./upload_documents.module.css"
import { Select, MenuItem, FormControl, InputLabel, Button } from "@mui/material";
import { useState } from "react";
// import { InboxOutlined } from '@ant-design/icons';
// import { message, Upload } from 'antd';
import { Modal, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { closeDialog } from "../popup/Popup";
// const { Dragger } = Upload;

const props = {
    name: 'file',
    multiple: false,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

// main component 
const UploadDocuments = ({ dialogId, setCommercialInvoice, setPackingList, setPanCardFront, setPanCardBack, fileType, setFileType }) => {

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    const handleDoneClick = () => {
        setFileType(null)
        console.log(dialogId)
        closeDialog(dialogId)

        // check if file is uploded or not 
        // if yes then change the status at DocumentCard 
        // if (fileList.length === 1) {
        //     if (fileType === "ci") { setCommercialInvoice("complete") }
        //     else if (fileType === "pl") { setPackingList("complete") }
        //     else if (fileType === "pcf") { setPanCardFront("complete") }
        // }

        if (fileType === "ci") { setCommercialInvoice("complete") }
        else if (fileType === "pl") { setPackingList("complete") }
        else if (fileType === "pcf") { setPanCardFront("complete") }

    }

    // select 
    const handleChange = (event) => {
        setFileType(event.target.value);
    };

    // upload file functionality 
    const [fileList, setFileList] = useState([
        // {
        //     uid: '-1',
        //     name: 'image.png',
        //     status: 'done',
        //     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        // },
    ]);

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    const uploadButton = (
        <div>
            <div style={{ color: '#4431B8', fontSize: '14px', fontWeight: '500' }}>
                Upload
            </div>
        </div>
    );


    return (
        <div className={`${Style.card}`}>
            <div className={`flex justify-content-between items-center gap-1 ${Style.card_header}`}>

                <span className={`${Style.card_title}`}>UPLOAD DOCUMENTS</span>

            </div>
            <div className="flex-col gap-2 p-2">
                <div className="flex-col">
                    <span className={Style.card_desc}>The exporter of record for your shipment. Usually the factory.</span>
                    <div className="flex gap-half">
                        <span className={Style.card_desc}>sourcing agent, etc.</span>
                        <a href="#" className={Style.learn_more}>Learn more</a>
                    </div>
                </div>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">{`Select Document Type`}</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={fileType}
                        disabled={fileType}
                        label={`Select Document Type`}
                        onChange={handleChange}
                    >
                        {/* <MenuItem className={Style.menu_item} value="none">Select Document Type</MenuItem> */}
                        <MenuItem className={Style.menu_item} value="ci">Commercial Invoice</MenuItem>
                        <MenuItem className={Style.menu_item} value="pl">Packing List</MenuItem>
                        <MenuItem className={Style.menu_item} value="pcf">PAN card</MenuItem>
                        <MenuItem className={Style.menu_item} value="other">Others</MenuItem>
                    </Select>
                </FormControl>

                {fileType &&
                    <div className="flex-col gap-2">

                        <div>
                            {/* <Dragger {...props}>
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined style={{ color: '#4431B8' }} />
                                </p>
                                <p className={Style.card_desc}>Click or drag file to this area to upload</p>
                            </Dragger> */}
                            <ImgCrop rotationSlider>
                                <Upload
                                    // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    listType="picture-card"
                                    fileList={fileList}
                                    onChange={onChange}
                                    onPreview={handlePreview}
                                    className={Style.upload}
                                >
                                    {fileList.length < 1 && uploadButton}
                                </Upload>
                            </ImgCrop>
                            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                                <img
                                    alt="example"
                                    style={{
                                        width: '100%',
                                    }}
                                    src={previewImage}
                                />
                            </Modal>


                        </div>
                        <div className="flex gap-1">
                            <Button
                                size="small"
                                variant="contained"
                                style={{ textTransform: 'none', backgroundColor: '#4431B8' }}
                                onClick={handleDoneClick}
                            >
                                Done
                            </Button>

                            <Button
                                size="small"
                                variant="outlined"
                                style={{ textTransform: 'none', backgroundColor: 'rgba(68, 49, 184, 0.08)', color: '#4431B8', border: '1px solid #4431B8' }}
                                onClick={() => { closeDialog(dialogId); setFileType(null) }}
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>

                }

            </div>
        </div>
    )
}

export default UploadDocuments