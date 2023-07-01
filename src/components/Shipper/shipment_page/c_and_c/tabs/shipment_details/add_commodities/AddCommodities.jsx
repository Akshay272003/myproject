import { useState } from "react";
import InputWithLabel from "../../../reusables/input_width_label/InputWithLabel";
import Style from "./add_commodities.module.css";
import { Modal, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { Button, Divider, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { closeSlide } from "../../../reusables/right_slide/RightSlide";


const AddCommodities = () => {

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    const [fileList, setFileList] = useState([]);

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
        <div className="flex items-center p-half gap-1">
            <div>
                <img src="src\assets\c_and_c\doc_thumbnail.svg" alt="" />
            </div>
            <div className="flex-col">
                <span style={{ color: '#313131', fontSize: "12px", textAlign: 'left' }}>Upload your product image</span>
                <span style={{ fontSize: '10px', color: '#5A6470', textAlign: 'left' }}>File shouldn’t exceed 7 MB</span>
            </div>
        </div>
    );

    return (
        <div className={`relative flex-col gap-1 p-1 bg-light`}>

            <div className="relative px-1">
                <span className={Style.heading}>
                    Commodities
                </span>

                <IconButton
                    onClick={() => closeSlide(1)}
                    className={Style.close_btn}>
                    <CloseIcon />
                </IconButton>
            </div>


            <InputWithLabel
                label="Product Name"
                placeholder={"Bottles Ltd.."}
                required={true}
            />
            <InputWithLabel
                label="SKU"
                placeholder={"Bottles Ltd.."}
            />
            <InputWithLabel
                label="Detailed product description"
                placeholder={"Bottles Ltd.."}
                isMultiline={true}
                rows={3}
            />
            <InputWithLabel
                label="End-use of product"
                placeholder={"Bottles Ltd.."}
            />
            <InputWithLabel
                label="Product URL"
                placeholder={"Bottles Ltd.."}
            />
            <InputWithLabel
                label="HS/HTS code"
                placeholder={"Bottles Ltd.."}
            />


            {/* image upload section  */}
            <div className="flex-col gap-half p-half">
                <span className={`${Style.label}`}>
                    Supporting document and images
                    <span className={`${Style.optional}`}>&nbsp; (Optional)</span>
                </span>
                <span className={Style.optional}>
                    Adding additional document such as product specs, PDF data sheets, government agency forms, and photograph will help your customs broker classify your more accurately.
                </span>
                <span
                    style={{ fontSize: '11.134px', color: '#5A6470', fontWeight: '500' }}
                >Bottles Ltd.</span>

                <div className="mt-1 flex gap-2 flex-wrap">

                    {/* upload 1  */}
                    <div className="flex-1">
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

                    {/* upload 2 */}
                    <div className="flex-1">
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
                </div>
            </div>

            <Divider />


            <div className="px-1 flex justify-content-between" style={{ alignItems: 'end' }}>
                <span style={{ color: '#4431B8', fontSize: '14px' }}>What can’t I ship?</span>
                <Button
                    size="small"
                    variant="contained"
                    style={{ textTransform: 'none', backgroundColor: '#4431B8' }}
                >
                    Save
                </Button>
            </div>

        </div>
    )
}

export default AddCommodities