import styles from "./account.module.css";
import Topbar from "../../topbar/Topbar";
import SideHelper from "../reusables/SideHelper";
import { Divider, Button } from "@mui/material"
import { useState } from "react";
import EditGender from "./EditGender";
import EditForm from "../reusables/EditForm";
import ProfileView from "../reusables/ProfileView";
import KeyLogo from "../../../assets/key.svg";


const Account = () => {

    const [firstName, setFirstName] = useState("George");
    const [lastName, setLastName] = useState("Lambeau");
    const [gender, setGender] = useState("Not Provided")
    const [phone, setPhone] = useState("1234567890")
    const [email, setEmail] = useState("abc@gmail.com")

    const toggleEdit = (planDetailId, editFormId) => {
        const planDetail = document.getElementById(planDetailId);
        const editForm = document.getElementById(editFormId);

        planDetail.classList.toggle("hidden")
        editForm.classList.toggle("hidden")
    }

    return (
        <>
            <Topbar title={`General Account Settings`} />

            {/* profile view */}
            <div className={`${styles.container}`}>
                <div className={`${styles.profile_container}`}>
                    <ProfileView
                        name="George Lambeau"
                        isPerson={true}
                        isVerified={true}
                        yearJoined="2022"
                        role="Admin"
                        avatarSrc="src\assets\person-avatar.jpg"
                        shipments="400"
                        messages="12,500"
                        issues="100"
                        ratingValue="4.7"
                    />
                </div>
            </div>

            <div className={`${styles.container} flex flex-wrap`}>
                <div className={`${styles.main_container} flex-col gap-2`}>

                    {/* Personal Details  */}
                    <div className={`${styles.preferred_container} rounded`}>
                        <h6 className="heading mb-2">
                            Personal Details
                        </h6>

                        <div className="flex-col">
                            <div className="py-1">
                                <p className="font-small">Account ID</p>
                                <p className="font-dark font-title mt-half">65454654146514651456</p>
                            </div>
                            <Divider />
                            {/* edit name details */}
                            <EditForm
                                title="Legal Name"
                                editDescription=""
                                detail={`${firstName} ${lastName}`}
                                fieldsDetail={[
                                    {fieldLabel:'First Name', fieldType:'text'},
                                    {fieldLabel:'Last Name', fieldType:'text'}
                                ]}
                            />
                            <Divider />
                            {/* gender  */}
                            <div className="py-1">
                                <div className="flex justify-content-between items-center">
                                    <span className="font-small">Gender</span>
                                    <Button size="small" style={{ textTransform: 'none' }} onClick={() => toggleEdit("gender-detail", "gender-form")}>Edit</Button>
                                </div>
                                <span id="gender-detail" className="font-title font-light">{gender}</span>

                                <div id="gender-form" className="hidden">
                                    <EditGender gender={gender} setGender={setGender} />
                                </div>
                            </div>
                            <Divider />
                            {/* Date of birth  */}
                            <div className="py-1">
                                <div className="flex justify-content-between items-center">
                                    <span className="font-small">Date of Birth</span>
                                    {/* <Button size="small" style={{ textTransform: 'none' }} onClick={() => toggleEdit("gender-detail", "gender-form")}>Edit</Button> */}
                                </div>
                                <span id="gender-detail" className="font-title font-light">Not Provided</span>
                            </div>
                            <Divider />
                            {/* Phone number   */}
                            <EditForm
                                title="Phone Number"
                                editDescription=""
                                detail={`${phone}`}
                                fieldsDetail={[
                                    {fieldLabel:'Phone Number', fieldType:'number'}
                                ]}
                            />
                            <Divider />
                            {/* email   */}
                            <EditForm
                                title="Email"
                                editDescription=""
                                detail={`${email}`}
                                fieldsDetail={[
                                    {fieldLabel:'E-mail', fieldType:'email'}
                                ]}
                            />

                        </div>

                    </div>

                </div>

                {/* side helper container */}
                <div className={`${styles.helper_container} flex-col flex-1`}>
                    <div className={`flex-col gap-2 bg-light rounded p-1`}>

                        <SideHelper
                            iconSrc={KeyLogo}
                            heading="Which details can be edited"
                            descriptions={[
                                "Details Kargoplex uses to verify your itentity can't be changed. Contact info and some personal details can be edited, but we may ask you verify yout identity the next time you book or create shipment."
                            ]} />
                        <SideHelper
                            iconSrc="src\assets\idPass.png"
                            heading="What info is shared with others?"
                            descriptions={[
                                "Kargoplex only releases contact information for shippers and forwarders after a shipment is confirmed."
                            ]} />
                    </div>
                </div>

            </div>

        </>
    );
}

export default Account;