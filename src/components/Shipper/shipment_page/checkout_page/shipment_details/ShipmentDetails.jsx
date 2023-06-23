import Style from "./shipment_details.module.css";
import { Divider } from "@mui/material";
import FromTo from "../../../reusables/from_to/FromTo";

const ShipmentDetails = () => {
    return (
        <div className={`bg-light flex-col ${Style.container}`}>

            {/* shipment details--------------  */}
            <span className="px-1" style={{ fontSize: '18px', fontWeight: '500' }}>
                Shipment Details
            </span>
            <Divider />

            <div className="flex-col p-1 gap-half">
                <span style={{ fontSize: '14px', fontWeight: '600' }}>ID: KP-654654</span>
                <span className="font-light mt-1" style={{ fontWeight: '13.22px' }}>FCL</span>
                <img src="src\assets\fcl_7x40.SVG" style={{ height: '38px', width: '85px' }} />
                <span className="font-light" style={{ fontWeight: '13.22px' }}>7 X 40' OPEN TOP</span>

            </div>

            <div className={`p-1 rounded flex-col`} style={{ gap: '0.3em', background: '#F8F9FF' }}>
                <FromTo
                    title="PLACE OF LOADING"
                    placeName="Indore, India"
                    flag="&#127470;&#127475;"
                    isFrom={true}
                />
                <FromTo
                    title="PLACE OF DISCHARGE"
                    placeName="Dewas, India"
                    flag="&#127470;&#127475;"
                />
            </div>

            <div className="flex-col px-1 gap-1 mb-1">
                <div className="flex">
                    <span className="font-light" style={{ flexBasis: '50%', fontSize: '14px' }}>EST. Transit time</span>
                    <span className="font-light" style={{ flexBasis: '50%', fontSize: '14px' }}>25-30 days</span>
                </div>
                <div className="flex">
                    <span className="font-light" style={{ flexBasis: '50%', fontSize: '14px' }}>Goods ready</span>
                    <span className="font-light" style={{ flexBasis: '50%', fontSize: '14px' }}>Aug 17, 2020</span>
                </div>
                <div className="flex">
                    <span className="font-light" style={{ flexBasis: '50%', fontSize: '14px' }}>Valid until</span>
                    <span className="font-light" style={{ flexBasis: '50%', fontSize: '14px' }}>Aug 31, 2020</span>
                </div>
                <div className="flex">
                    <span className="font-light" style={{ flexBasis: '50%', fontSize: '14px' }}>Additional Details</span>
                    <span className="font-light" style={{ flexBasis: '50%', fontSize: '14px' }}>None Selected</span>
                </div>
            </div>

            {/* service  provider--------------  */}
            <Divider />
            <span className="px-1" style={{ fontSize: '18px', fontWeight: '500' }}>
                Service Provider
            </span>
            <Divider />

            <div className="flex-col gap-1 px-1 mb-1">
                {/* company logo */}
                <div>
                    <img src="src\assets\temp-logo.svg" style={{ width: '267px', height: '93px' }} />
                </div>
                <div className="flex">
                    <span className="font-light" style={{ flexBasis: '50%', fontSize: '12px' }}>VESSAL/CARRIER</span>
                    <span className="font-light" style={{ flexBasis: '50%', fontSize: '12px' }}>eShipper</span>
                </div>
                <div className="flex">
                    <span className="font-light" style={{ flexBasis: '50%', fontSize: '12px' }}>Customs Brokerage</span>
                    <span className="font-light" style={{ flexBasis: '50%', fontSize: '12px' }}>1 Commodity, Continious Bond</span>
                </div>
                <div className="flex">
                    <span className="font-light" style={{ flexBasis: '50%', fontSize: '12px' }}>Insurance</span>
                    <span className="font-light" style={{ flexBasis: '50%', fontSize: '12px' }}>Value of goods <strong>$ 5000.00</strong></span>
                </div>
            </div>

            {/* load info  */}
            <Divider />
            <div className="px-1 flex justify-content-between gap-1">
                <span style={{ fontSize: '18px', fontWeight: '500' }}>
                    Load Information
                </span>
                <span className={Style.status}>
                    To be confirmed after pickup
                </span>
            </div>
            <Divider />

            <div className="flex-col gap-1 px-1 mb-1">
                <div className="flex">
                    <span className="font-light" style={{ flexBasis: '50%', fontSize: '12px' }}>Load</span>
                    <span className="font-light" style={{ flexBasis: '50%', fontSize: '12px' }}>1 Paller_48_40</span>
                </div>
                <div className="flex">
                    <span className="font-light" style={{ flexBasis: '50%', fontSize: '12px' }}>Total Shipment</span>
                    <span className="font-light" style={{ flexBasis: '50%', fontSize: '12px' }}>111.11 cft 30kg</span>
                </div>
            </div>

            {/* cancelation policy */}
            <Divider />
            <div className="px-1 flex justify-content-between gap-1">
                <span style={{ fontSize: '18px', fontWeight: '500' }}>
                    Cancellation Policy
                </span>
                <span className={Style.status}>
                    To be confirmed after pickup
                </span>
            </div>
            <Divider />

            <div className="px-1">
                <p className="font-light" style={{ fontSize: '12px' }}>
                    Shipment may be cancelled with no additional charge before the seller has processed your shipment, Otherwise, you will be charged for any direct costs.
                </p>
            </div>






        </div>
    );
}

export default ShipmentDetails;