import { useState } from "react";
import styles from "./drawer.module.css";
import { CloseOutlined } from "@ant-design/icons";
import HeadWithDetail from "../../reusables/HeadWithDetial";

function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {value === index && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}

const CustomQuotesDrawer = () => {

    const handleToggle = () => {
        const drawerElem = document.getElementById("custom-quotes-drawer")
        drawerElem.classList.toggle(styles.hidden)
    }

    return (

        <div id="custom-quotes-drawer" className={`${styles.drawer} ${styles.hidden}`}>

            <div className={`${styles.inner_main}`}>
                {/* head section  */}
                <div className="flex justify-content-between items-center relative">
                    {/* close button  */}
                    <div
                        className={`${styles.close_button}`}
                        onClick={handleToggle}>
                            <CloseOutlined />
                    </div>
                    <h3>CQR Details</h3>
                </div>

                <div className={`flex-col gap-2 mt-2`}>

                    <div className="flex flex-wrap gap-2">
                        {/* general info */}
                        <HeadWithDetail 
                            heading="General Info"
                            data={[
                                {label:"Sevice Tpe", value:"Port to port"},
                                {label:"Service Type", value:"Port to port"},
                                {label:"Service Tpe", value:"Port to port"},
                                {label:"Service Te", value:"Port to port"},
                                {label:"Full Name", value:"Akshay Mundra"},
                                {label:"Email", value:"abc@gmail.com"}
                            ]}
                        />

                        {/* goods info */}
                        <HeadWithDetail 
                            heading="Goods"
                            data={[
                                {label:"Load", value:"Not provided"},
                                {label:"Total Weight", value:"5500 LB"},
                                {label:"Total Volume", value:"43 CFT"},
                                {label:"Commodity", value:"Chemicals"},
                                {label:"Goods Ready", value:"June 13 2023"},
                                {label:"Goods value", value:"$ 50,000"},
                            ]}
                        />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {/* addition service info  */}
                        <HeadWithDetail 
                            heading="Additional services"
                            data={[
                                {label:"Insurence", value:"Yes"},
                                {label:"Origin Port Charges", value:"Yes"},
                                {label:"Destination Port Charges", value:"Yes"},
                            ]}
                        />

                        {/* custom quote info */}
                        <HeadWithDetail
                            heading="Custom Quote Log"
                        />
                    </div>



                </div>

            </div>
        </div>

    );
}

export default CustomQuotesDrawer;