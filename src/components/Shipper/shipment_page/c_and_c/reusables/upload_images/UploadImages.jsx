import { useState } from "react";
import Style from "./upload_images.module.css";
import { Modal, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { Button } from "@mui/material";
import { closeDialog } from "../popup/Popup";

const UploadImages = ({ id }) => {

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    const [fileList, setFileList] = useState([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
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
                <div className="">
                    <span className={`${Style.card_title}`}>PRODUCT IMAGES</span>
                </div>
            </div>
            <div className="flex-col gap-2 p-2">

                <span className={Style.card_desc}>Upload your product images allowed format (JPG, PNG, JPEG)*</span>

                {/* upload and preview images  */}
                <div>
                    <ImgCrop rotationSlider>
                        <Upload
                            // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChange}
                            onPreview={handlePreview}
                        >
                            {fileList.length < 10 && uploadButton}
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

                <div>
                    <Button
                        onClick={() => closeDialog(id)}
                        size="small"
                        variant="contained"
                        style={{ textTransform: 'none', backgroundColor: '#4431B8' }}
                    >
                        Done
                    </Button>
                </div>



            </div>
        </div>
    )
}
export default UploadImages