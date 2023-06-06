import styles from "./overview.module.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ShipSource from "./ShipSource";
import CarrierDetail from "../reuse/CarrierDetail";
import { useState } from "react";
import { Divider } from "@mui/material";
import Map from "./Map";

const OverView = () => {

    const [progress, setProgress] = useState(79)

    return (
        <div>
            {/* from to section  */}
            <div className="flex justify-content-between flex-wrap gap-1">
                <div className='flex gap-half items-center font-small font-dark'>
                    <span>
                        From
                    </span>
                    <span className="font-light">
                        <ArrowRightAltIcon />
                    </span>
                    <span>
                        Destination
                    </span>
                </div>
                <div className='flex-col gap-half justify-content-center'>
                    <span className='font-xs font-light'>OVERALL STATUS</span>
                    <span className={`${styles.status}`}>
                        Transhipment Discharged
                    </span>
                </div>
            </div>

            {/* map container  */}
            <div className="rounded mt-1">
                <Map />
            </div>

            {/* shipping details  */}
            <div className="flex justify-content-between mt-1 gap-1 flex-wrap">
                <div>
                    <h6 className="font-xs font-dark mb-1">
                        ID: container id
                    </h6>
                    <div className="flex-col gap-small">
                        {/* container type */}
                        <span className="font-xs font-light">
                            FCL
                        </span>
                        {/* container img  */}
                        <div>
                            <img src="src\assets\container_fcl.png" alt="" />
                        </div>
                        {/* more info */}
                        <div className="flex gap-half font-xs">
                            <span>8 X 40</span>
                            <span>REFRIGERATED</span>
                        </div>
                    </div>
                </div>

                {/* shipping citys  */}
                <div className={`bg-less-light p-1 ${styles.shipping_details} flex-col gap-1`}>
                    <ShipSource
                        title="PLACE OF LOADING"
                        placeName="Indore, India"
                        flag="&#127470;&#127475;"
                        isFrom={true}
                    />
                    <ShipSource
                        title="PLACE OF DISCHARGE"
                        placeName="Dewas, India"
                        flag="&#127470;&#127475;"
                    />
                </div>
            </div>

            {/* carrier details  */}
            <CarrierDetail
                vessal={"MSC"}
                billOfLanding={"MEDUMT146799"}
                container={"CXDU2004500"}
                bookingRef={"193CA0679879"}
            />

            {/* progress  */}
            <div className={`${styles.progress_container} bg-less-light mt-2 rounded`}>

                {/* progress bar  */}
                <div className="relative">

                    {/* current position */}
                    {progress > 20 && progress < 80 &&
                        <div
                            style={{ left: `${progress}%` }}
                            className={`${styles.current_progress} flex gap-half`}
                        >
                            <span className="font-xs">Dewas, India</span>
                            <div className={`${styles.red_pin}`}>
                            </div>
                        </div>
                    }


                    <div className={`${styles.progress}`}>
                        <div
                            className={`${styles.progress_bar}`}
                            style={{ translate: `${progress - 100}%` }}
                        >
                        </div>
                    </div>

                    <div className="flex justify-content-between mt-half">
                        <span className="font-small font-dark">
                            Indore, India
                        </span>
                        <span className="font-small font-dark">
                            Bhopal, India
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex-col mt-1 mb-1">
                <div className="flex gap-1">
                    <span className="font-xs">COMMODITY NAME:</span>
                    <span className="font-xs font-dark">Soda Ash</span>
                </div>
                <div className="flex gap-1">
                    <span className="font-xs">PRODUCT CATEGORY:</span>
                    <span className="font-xs font-dark">Organic salt</span>
                </div>
            </div>

            <Divider />

        </div>
    );
}

export default OverView;