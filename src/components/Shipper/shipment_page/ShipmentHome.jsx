import Filters from "./components/filter/Filters";
import ProductCard from "./components/product_card/productCard";
import TabsNav from "./components/tabs/TabsNav";
import ShipmentDetails from "./checkout_page/shipment_details/ShipmentDetails";
import BookShipmentForm from "./checkout_page/forms/BookShipmentForm";
import CandC from "./c_and_c/CandC";
import UploadImages from "./c_and_c/reusables/upload_images/UploadImages";
import UploadDocuments from "./c_and_c/reusables/upload_documents/UploadDocuments";
import RightSlide, { openSlide, closeSlide } from "./c_and_c/reusables/right_slide/RightSlide";
import { useState } from "react";
import AddCommodities from "./c_and_c/tabs/shipment_details/add_commodities/AddCommodities";
import Add from "./c_and_c/tabs/shipment_details/add_consignee_n_consignor/Add";
import PaymentForm from "./payment/PaymentForm";

const ShipmentHome = () => {

    // const [slideContent, setSlideContent] = useState(null);
    // const [isSlideOpen, setIsSlideOpen] = useState(false);

    return (
        <div style={{ background: 'white', minHeight: '100vh', position: 'relative' }}>
            {/* <Filters /> */}
            {/* <ShipmentDetails /> */}
            <div className="relative" style={{ height: '100%' }}>
                {/* <ProductCard id={1} /> */}
                {/* <TabsNav /> */}
                {/* <BookShipmentForm /> */}
                <CandC />
                {/* <UploadImages /> */}
                {/* <UploadDocuments /> */}
                {/* <PaymentForm /> */}
            </div>

        </div >
    );
}

export default ShipmentHome;