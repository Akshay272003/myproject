import styles from "./privacy.module.css";
import SideHelper from "../../reusables/SideHelper";
import ActivityToggle from "../../reusables/ActivityToggle";
import { Divider, Button } from "@mui/material"

const Privacy = () => {
    return (
        <>
            <div className={`${styles.main_container} flex-col gap-2`}>

                {/* manage your account data */}
                <div className={`rounded bg-light ${styles.subcontainer} flex-col gap-1`}>
                    <div>
                        <h6 className="heading">
                            Manage your account data
                        </h6>
                        <p className="font-small font-light mt-half">
                            You can make a request to download or delete your personal data from Kargoplex.
                        </p>
                    </div>

                    <Divider />
                    <div>
                        <div className="flex justify-content-between items-center">
                            <span className="font-dark font-small">
                                Request your personal data
                            </span>
                            <Button size="small" style={{ textTransform: 'none' }}>
                                Request
                            </Button>
                        </div>
                        <p className="font-light font-xs">
                            We will create a file for you to download your personal data.
                        </p>
                    </div>

                    <Divider />
                    <div>
                        <div className="flex justify-content-between items-center">
                            <span className="font-dark font-small">
                                Delete your account
                            </span>
                            <Button size="small" color="error" style={{ textTransform: 'none' }}>
                                Delete
                            </Button>
                        </div>
                        <p className="font-light font-xs">
                            This will permanently delete your accout and your data. In accordence with applicable law.
                        </p>
                    </div>
                </div>

                {/* activity and data sharing */}
                <div className={`rounded bg-light ${styles.subcontainer} flex-col gap-1`}>
                    <div>
                        <h6 className="heading">
                            Activity and data sharing
                        </h6>
                        <p className="font-small font-light mt-half">
                            Decide how your profle and activity shown to others and your data is used for Kargoplex research.
                        </p>
                    </div>
                    <Divider />
                    <div>
                        <ActivityToggle 
                            label="Include my profile and listing in search engines"
                            labelColorClass="font-dark"
                            labelSizeClass="font-small"
                        />
                        <p className="font-xs font-light">
                            Turning this on means search engines, like Google, will display your profile and listing pages in search results.
                        </p>
                    </div>
                    <Divider />
                    <div>
                        <ActivityToggle 
                            label="Use my first name and profile photo to help fight discrimination"
                            labelColorClass="font-dark"
                            labelSizeClass="font-small"
                        />
                        <p className="font-xs font-light">
                            Leaving this on means that you're helping us further studies to help identify and prevent discrimination from happening on Kargoplex.
                            <br />
                            <a href="" className="color-blue">Learn more</a>
                        </p>
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

export default Privacy;