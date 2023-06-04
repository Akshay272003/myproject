import Topbar from "../../topbar/Topbar";
import styles from "./referrals.module.css";
import DetailBox from "./DetailBox";
import InvitedPeople from "./InvitedPeople";
import { Button, IconButton, Divider } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CompassCalibrationOutlinedIcon from '@mui/icons-material/CompassCalibrationOutlined';
import SideHelper from "../reusables/SideHelper";

const Referrals = () => {
    return (
        <>
            <Topbar title={`Subscriptions & Products`} link_title="Subscriptions" />

            <div className={`${styles.container} flex flex-wrap`}>
                <div className={`${styles.main_container} flex-col gap-2`}>

                    {/* detail boxes  */}
                    <div className="flex-col gap-1">
                        <div className="flex flex-wrap w-full justify-content-between gap-1">
                            <DetailBox
                                title="TOTAL CREDITS EARNED"
                                data={`$ 200`}
                                outOfData={{ value: `$ 200`, label: "Remaining" }}
                                avatarSrc="src\assets\credits.png"
                                backgroundClass="blue_grad"
                            />
                            <DetailBox
                                title=" COMPLETED REFERRALS"
                                data={`2`}
                                outOfData={{ value: `/ 5`, label: "total referrals" }}
                                avatarSrc="src\assets\checked-person.png"
                                backgroundClass="green_grad"
                            />                        
                        </div>
                        <div className="flex flex-wrap w-full justify-content-between gap-1">
                            <DetailBox
                                title="PENDING INVITES"
                                data={`2`}
                                outOfData={{ value: `/ 5`, label: "total referrals" }}
                                avatarSrc="src\assets\add-person.png"
                                backgroundClass="orange_grad"
                            />
                            <DetailBox
                                title="EXPIRED INVITES"
                                data={`1`}
                                outOfData={{ value: `/ 5`, label: "total referrals" }}
                                avatarSrc="src\assets\expired-person.png"
                                backgroundClass="brown_grad"
                            />
                        </div>
                    </div>

                    {/* referral link  */}
                    <div className={`${styles.preferred_container} rounded`}>
                        <h6 className="heading mb-2">
                            Your Referral Link
                        </h6>

                        <div className={`p-1 ${styles.referral_link} p-1`}>
                            <div className="flex justify-content-between items-center">
                                <span className="sub-title">
                                    www.kargoplex.com/r/lambeau123
                                </span>
                                <div className="flex gap-half">
                                    <Button
                                        size="small"
                                        style={{
                                            textTransform: 'none',
                                            color: 'rgb(62, 55, 90)'
                                        }}
                                    >Copy</Button>

                                    <Button
                                        size="small"
                                        variant="contained"
                                        startIcon={<ShareIcon />}
                                        style={{
                                            textTransform: 'none'
                                        }}
                                    >Share</Button>
                                </div>
                            </div>
                        </div>
                        <p className="sub-title mt-1">Copy or share your referral link with friends.</p>
                    </div>

                    {/* people you have invited  */}
                    <div className={`${styles.preferred_container} rounded`}>
                        <div className="mb-2 flex items-center justify-content-between">
                            <h6 className="heading">People you've invited</h6>
                            <div className="flex">
                                <IconButton>
                                    <CompassCalibrationOutlinedIcon />
                                </IconButton>
                                <IconButton aria-label="settings">
                                    <SettingsOutlinedIcon />
                                </IconButton>
                            </div>
                        </div>
                        <Divider />

                        <div className="felx-col gap-1 mt-1">
                            <div className={`flex`}>
                                <div className={`${styles.basis_33}`}>
                                    <h6 className={`heading`}>DATE</h6>
                                </div>
                                <div className={`${styles.basis_33}`}>
                                    <h6 className={`heading`}>INVITEE</h6>
                                </div>
                                <div className={`flex justify-content-end flex-1`}>
                                    <h6 className={`heading`}>CREDIT</h6>
                                </div>
                            </div>
                            <InvitedPeople
                                date="Feb 22 2022"
                                name="John Smith"
                                email="abc@gmail.com"
                                status="Completed"
                                credit="$ 100.00 USD"
                            />
                            <InvitedPeople
                                date="Apr 22 2022"
                                name="John Wick"
                                email="abc@gmail.com"
                                status="Pending"
                                credit="$ 0.00 USD"
                            />
                        </div>
                    </div>
                </div>

                <div className={`${styles.helper_container} flex-col flex-1`}>
                    <div className={`flex-col gap-2 bg-light rounded p-1`}>

                        <SideHelper
                            iconSrc="src\assets\bell-icon.png"
                            heading="Earn $100 USD for every new Shipper you refer"
                            descriptions={[
                                "Invite a shipper or forwarder and earn $100 USD when they complete their first qualifying shipment. The person you refer will get $20 USD, too.",
                                <a href="">Read terms and program requirements.</a>
                            ]} />
                        <SideHelper
                            iconSrc="src\assets\bell-icon.png"
                            heading="Your Available credits"
                            descriptions={[
                                "The travel credit you earn can be used to book your next home or experience on Kargoplex."
                            ]} />
                    </div>
                </div>
                

            </div>
        </>
    );
}

export default Referrals;