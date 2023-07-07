import Topbar from "../../topbar/Topbar";
import styles from "./subscription.module.css";
import SideHelper from "../reusables/SideHelper";
import KeyLogo from "../../../../../assets/key.svg";
import { Divider, Button } from "@mui/material";
import CreditCardTwoToneIcon from '@mui/icons-material/CreditCardTwoTone';

const subscriptionDetails = [
    { label: "Account Id", value: "12354898" },
    { label: "Status", value: "Active" },
    { label: "Product", value: "Basic Shipper" },
    { label: "Amount", value: "$0.00 CAD" },
    { label: "Billing", value: "Monthly" },
    { label: "Billing Start Date", value: "06 Oct 2022" },
    { label: "Last Billed", value: "06 Dec 2022" },
    { label: "Next Bill", value: "06 Dec 2023" },
    { label: "Trial Expiration Date", value: "14 Oct 2022" },
    { label: "Account", value: "22 Frb 2020" }
]

const Subscription = () => {


    return (
        <>
            <Topbar title={`Subscriptions & Products`} link_title="Subscriptions" />

            <div className={`${styles.container} flex flex-wrap`}>
                <div className={`${styles.main_container} flex-col gap-2`}>

                    {/* subscription details  */}
                    <div className={`${styles.preferred_container} rounded`}>
                        <h6 className="heading mb-2">Subscription Details</h6>

                        <Divider />

                        <div className={`flex-col font-title`}>
                            {subscriptionDetails.map(tuple => (
                                <div className={`flex p-1 ${styles.sub_detail_list}`} key={tuple.label}>
                                    <div className={`${styles.flex_basis_half}`}>
                                        {tuple.label}
                                    </div>
                                    <div>
                                        {tuple.value}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Divider />
                        <div className="mt-2">
                            <Button size="small" variant="contained" color="error" style={{ textTransform: 'none' }}>Cancel Subscription</Button>
                        </div>
                    </div>

                    {/* billing details  */}
                    <div className={`${styles.preferred_container} rounded`}>
                        <div className="flex items-center justify-content-between">
                            <h6 className="heading">
                                Billing Details
                            </h6>
                            <Button size="small" style={{ textTransform: 'none' }}>Edit</Button>
                        </div>

                        <div>
                            <div className={`${styles.card_detail} font-white mt-2`}>
                                <div className="flex gap-1">
                                    <CreditCardTwoToneIcon fontSize="small" />

                                    <div className="flex-col gap-half">
                                        <span>mastercard</span>
                                        <span>**** **** 4444</span>
                                        <span className="font-light">Exp: 04/35</span>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className={`${styles.helper_container} flex-col flex-1`}>
                    <div className={`flex-col gap-2 bg-light rounded p-1`}>

                        <SideHelper
                            iconSrc={KeyLogo}
                            heading="Need help or want to change your subscription?"
                            descriptions={[
                                <a href="">1-888-MYKARGO</a>
                            ]} />
                        <SideHelper
                            iconSrc="src\assets\idPass.png"
                            heading="Contact us 7 days a week"
                            descriptions={[
                                "For more info or changes to your subscription. email us at",
                                <a href="hello@Kargoplex.com">hello@Kargoplex.com</a>
                            ]} />
                    </div>
                </div>

            </div>
        </>
    );
}

export default Subscription;