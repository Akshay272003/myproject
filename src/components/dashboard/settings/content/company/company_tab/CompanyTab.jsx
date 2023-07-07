import styles from "./company_tab.module.css";
import EditForm from "../../reusables/EditForm";
import {Divider} from "@mui/material"

const CompanyTab = () => {
    return (
        <>
            <div className={`${styles.main_container} w-full flex-col gap-2 bg-light rounded`}>

                <div className={`flex-col w-full`}>
                    
                    <h6 className="heading">Company Details</h6>
                    
                    <EditForm
                        title="Company Name"
                        detail="Lambeau Logix"
                        fieldsDetail={[{fieldLabel:'Company Name', fieldType:'text'}]}
                    />
                    <Divider />
                    <EditForm
                        title="Job Title"
                        detail="VP Logistics"
                        fieldsDetail={[{fieldLabel:'Job Title', fieldType:'text'}]}
                    />
                    <Divider />
                    <EditForm
                        title="User Role"
                        detail="Owner"
                        fieldsDetail={[{fieldLabel:'User Role', fieldType:'text'}]}
                    />
                    <Divider />
                    <EditForm
                        title="Industry"
                        detail="Automative"
                        fieldsDetail={[{fieldLabel:'Industry', fieldType:'text'}]}
                    />
                    <Divider />
                    <EditForm
                        title="Address"
                        detail="88 Park Lawn Rd, Suite 1906, Etobicoke, Ontario, CA M8Y 0B5"
                        fieldsDetail={[{fieldLabel:'Address', fieldType:'text'}]}
                    />
                    
                </div>

            </div>
        </>
    );
}

export default CompanyTab;