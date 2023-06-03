import styles from "./account.module.css";
import { Divider, Button } from "@mui/material"
import Loginpage from "./login/Loginpage";
import SmartphoneTwoToneIcon from '@mui/icons-material/SmartphoneTwoTone';
import LaptopMacTwoToneIcon from '@mui/icons-material/LaptopMacTwoTone';
import DeviceHistoryComps from "./DeviceHistoryInfo";
import SideHelper from "../../reusables/SideHelper";

const Account = () => {

    return (
        <>
            <div className={`${styles.main_container} flex-col gap-2`}>

                {/* login container  */}
                <div className={`rounded bg-light ${styles.subcontainer}`}>
                    <Loginpage />
                </div>

                {/* device history */}
                <div className={`rounded bg-light ${styles.subcontainer}`}>
                    <h6 className="heading mb-2">
                        Device History
                    </h6>
                    <Divider />

                    <div className="flex-col">
                        <DeviceHistoryComps
                            info={
                                {
                                    deviceIcon: { LaptopMacTwoToneIcon },
                                    deviceName: "OS X 10.15.7",
                                    browserName: "Chrome",
                                    location: "Calgary, AB",
                                    date_time: "June 1, 2023 at 20:30"
                                }
                            }

                        />
                        <DeviceHistoryComps
                            info={
                                {
                                    deviceIcon: { SmartphoneTwoToneIcon },
                                    deviceName: "Mobile Device",
                                    browserName: "Kargoplex",
                                    location: "Etobicoke, ON",
                                    date_time: "June 1, 2023 at 20:30"
                                }
                            }

                        />
                        <DeviceHistoryComps
                            info={
                                {
                                    deviceIcon: { LaptopMacTwoToneIcon },
                                    deviceName: "iOS 16.0.2",
                                    browserName: "Mobile Safari",
                                    location: "Toronto, ON",
                                    date_time: "June 1, 2023 at 20:30"
                                }
                            }
                        />
                    </div>
                </div>

                {/* account deactivation section  */}
                <div className={`rounded bg-light ${styles.subcontainer}`}>
                    <h6 className="heading mb-2">
                        Account
                    </h6>
                    <Divider />
                    <div className="flex flex-wrap justify-content-between items-center py-1">
                        <span className="font-dark font-small">Deactivate your account</span>
                        <Button size="small" color="error" style={{textTransform:'none'}} >Deactivate</Button>
                    </div>
                </div>

            </div>

            <div className={`${styles.helper_container} flex-col flex-1`}>
                <div className={`flex-col gap-2 bg-light rounded p-1`}>
                    <SideHelper
                        iconSrc={"src\\assets\\sheild.png"}
                        heading="Keep your account secure"
                        descriptions={["We regularly review accounts to make sure they're secure as possible. We'll also let you know if there's more we can do to increase the security of your account."]}
                    />
                </div>
            </div>
        </>
    );
}

export default Account;
