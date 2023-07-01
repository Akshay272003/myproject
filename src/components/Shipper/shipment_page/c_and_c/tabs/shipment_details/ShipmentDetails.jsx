import { useState } from "react";
import Style from "./shipment_details.module.css";
import Accordion from "../../reusables/accordion/Accordion";
import StatusDetail from "../../reusables/status_detail/StatusDetail";
import DetailBoxCard from "../../reusables/detail_box_card/DetailBoxCard";
import DocumentCard from "../../reusables/document_card/DocumentCard";
import ImageCard from "../../reusables/image_card/ImageCard";
import SummaryCard from "../../reusables/summary_card/SummaryCard";
import SubSummaryCard from "../../reusables/sub_summary_card/SubSummaryCard";
import RightSlide from "../../reusables/right_slide/RightSlide";
import Add from "./add_consignee_n_consignor/Add";
import AddCommodities from "./add_commodities/AddCommodities";
import UploadDocuments from "../../reusables/upload_documents/UploadDocuments";
import UploadImages from "../../reusables/upload_images/UploadImages";
import Popup from "../../reusables/popup/Popup";

const ShipmentDetails = () => {

    const [slideContent, setSlideContent] = useState(null);

    return (
        <div className="flex-col gap-2 mt-1">

            {/* <StatusDetail /> */}

            <Accordion
                title="Consignor And Consignee"
                icon="src\assets\c_and_c\truck.png"
            >
                <DetailBoxCard
                    title="Consignor"
                    label="consignor"
                    setSlideContent={setSlideContent}
                    content={<Add heading="Consignor" />}
                />
                <DetailBoxCard
                    title="Consignee"
                    label="consignee"
                    setSlideContent={setSlideContent}
                    content={<Add heading="Consignee" />}
                />
            </Accordion>

            <Accordion
                title="Commodities"
                icon="src\assets\c_and_c\truck.png"
            >
                <DetailBoxCard
                    title="Commodities"
                    label="Product"
                    setSlideContent={setSlideContent}
                    content={<AddCommodities />}
                />
            </Accordion>

            {/* document and images ------------ */}
            <Accordion
                title="Document & Product Images"
                icon="src\assets\c_and_c\truck.png"
            >
                <DocumentCard
                    title="Documents"
                    dialogId="upload-documents"
                />
                <ImageCard
                    title="Product Images"
                    dialogId="upload-images"
                    uploadedImages={[
                        { img: "src\\assets\\c_and_c\\product_img.png", id: 1 },
                        { img: "src\\assets\\c_and_c\\product_img.png", id: 2 },
                        { img: "src\\assets\\c_and_c\\product_img.png", id: 3 },
                        { img: "src\\assets\\c_and_c\\product_img.png", id: 4 },
                        { img: "src\\assets\\c_and_c\\product_img.png", id: 5 },
                        { img: "src\\assets\\c_and_c\\product_img.png", id: 6 },
                        { img: "src\\assets\\c_and_c\\product_img.png", id: 7 },
                    ]}
                />
            </Accordion>

            {/* summary  */}
            <Accordion
                title="Summary"
                isDropdown={true}
                icon="src\assets\c_and_c\truck.png"
            >
                <SummaryCard
                    title="Goods"
                    details={[
                        { label: "Load:", value: "1.48 x  40 Pallet, 100in, 30 KG" },
                        { label: "Total Weight:", value: "30 KG" },
                        { label: "Total Volume:", value: "111.09 CFt" },
                        { label: "Commodities:", value: "Bottles" },
                        { label: "Value:", value: "$5.000" },
                        { label: "Ready For Pickup:", value: "Aug 24. 2020" }
                    ]}
                />
                <SummaryCard
                    title="Routes"
                    details={[
                        { label: "Load:", value: "1.48 x  40 Pallet, 100in, 30 KG" },
                        { label: "Total Weight:", value: "30 KG" },
                        { label: "Total Volume:", value: "111.09 CFt" },
                        { label: "Commodities:", value: "Bottles" },
                        { label: "Value:", value: "$5.000" },
                        { label: "Ready For Pickup:", value: "Aug 24. 2020" }
                    ]}
                />
                <SummaryCard
                    title="Booking Details"
                    details={[
                        { label: "Load:", value: "1.48 x  40 Pallet, 100in, 30 KG" },
                        { label: "Total Weight:", value: "30 KG" },
                        { label: "Total Volume:", value: "111.09 CFt" },
                        { label: "Commodities:", value: "Bottles" },
                        { label: "Value:", value: "$5.000" },
                        { label: "Ready For Pickup:", value: "Aug 24. 2020" }
                    ]}
                />
                <SubSummaryCard
                    title="Requested Services"
                    details={[
                        {
                            title: "Insurance",
                            subDetails: [
                                { label: "Good Values:", value: '$3.40' },
                                { label: "Provider:", value: 'Falvey' },
                            ]
                        }
                    ]}
                />
                <SummaryCard
                    title="Additional Details"
                />
            </Accordion>


            {/* slides */}
            <RightSlide
                id={1}
                content={slideContent}
            />
            <Popup id="upload-images"><UploadImages id="upload-images" /></Popup>
            {/* <Popup id="upload-documents">
                <UploadDocuments id="upload-documents" />
            </Popup> */}


        </div>
    )
}

export default ShipmentDetails