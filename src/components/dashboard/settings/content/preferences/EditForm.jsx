import { Button, TextField, MenuItem } from "@mui/material";
import styles from "./preferences.module.css";
import { Edit } from "@mui/icons-material";
import { useState } from "react";
import CustomButton from "../../reusables/button/Button";

const EditForm = ({ title, data, options, onChange }) => {

    const [isFormOpen, setIsFormOpen] = useState(false);

    const toggleEdit = (planDetailId, editFormId) => {
        const planDetail = document.getElementById(planDetailId);
        const editForm = document.getElementById(editFormId);

        planDetail.classList.toggle("hidden")
        editForm.classList.toggle("hidden")
        editForm.classList.contains("hidden") ? setIsFormOpen(false) : setIsFormOpen(true);
    }


    return (
        <div className="py-1">

            <div className="flex justify-content-between items-center">
                <span className="sub-title">{title}</span>

                {isFormOpen
                    ?
                    <CustomButton
                        onClick={() => toggleEdit(`${title}-detail`, `${title}-edit-form`)}
                        style={{ fontSize: '0.8rem' }}
                    >
                        Cancel
                    </CustomButton>
                    :
                    <CustomButton
                        onClick={() => toggleEdit(`${title}-detail`, `${title}-edit-form`)}
                        icon={<Edit sx={{ fontSize: '0.8rem' }} />}
                        style={{ fontSize: '0.8rem' }}
                        tooltip="Edit"
                    >
                        Edit
                    </CustomButton>
                }
            </div>

            <div id={`${title}-detail`} className="heading">
                {data}
            </div>
            {/* edit form  */}
            <div id={`${title}-edit-form`} className="hidden mt-1">
                <div className={`flex justify-content-between items-center flex-wrap gap-1 ${styles.edit_form}`}>
                    <TextField
                        id="select-timezone"
                        select
                        label={title}
                        size="small"
                        value={data}
                        onChange={onChange}
                    >
                        {options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <Button
                        onClick={() => toggleEdit(`${title}-detail`, `${title}-edit-form`)}
                        variant="contained"
                        size="small"
                        style={{ backgroundColor: '#3c44b1', textTransform: 'none' }}
                    >Save</Button>
                </div>
            </div>
        </div>
    )
}

export default EditForm