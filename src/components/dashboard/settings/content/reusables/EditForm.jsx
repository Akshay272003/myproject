import { useState } from "react";
import { TextField, Button } from "@mui/material"
import CustomButton from "../../reusables/button/Button";
import { Edit } from "@mui/icons-material";

const EditForm = ({ title, detail, editDescription, fieldsDetail }) => {

    const [isFormOpen, setIsFormOpen] = useState(false);

    const toggleEdit = (planDetailId, editFormId) => {
        const planDetail = document.getElementById(planDetailId);
        const editForm = document.getElementById(editFormId);
        console.log("clicked")
        planDetail.classList.toggle("hidden")
        editForm.classList.toggle("hidden")

        editForm.classList.contains("hidden") ? setIsFormOpen(false) : setIsFormOpen(true);
    }

    const handleClick = () => {
        //save the info
        toggleEdit(title, `${title}-form`);
    }

    return (
        <>
            <div className="py-1">
                <div className="flex justify-content-between items-center">
                    <span className="font-small">{title}</span>
                    {isFormOpen
                        ?
                        <CustomButton
                            onClick={() => toggleEdit(title, `${title}-form`)}
                            style={{ fontSize: '0.8rem' }}

                        >
                            Cancel
                        </CustomButton>
                        :
                        <CustomButton
                            onClick={() => toggleEdit(title, `${title}-form`)}
                            icon={<Edit sx={{ fontSize: '0.8rem' }} />}
                            style={{ fontSize: '0.8rem' }}
                            tooltip="Edit"
                        >
                            Edit
                        </CustomButton>}
                </div>
                <span id={title} className="font-title font-light">{detail}</span>

                <div id={`${title}-form`} className="hidden">
                    {/* form  */}
                    <form autoComplete='off'>
                        <span className="sub-title">
                            {editDescription}
                        </span>

                        <div className='flex flex-wrap gap-1 mt-1'>
                            {fieldsDetail && fieldsDetail.map(option => (
                                <TextField key={option.fieldLabel} type={option.fieldType} id="outlined-basic" label={option.fieldLabel} variant="outlined" size="small" />
                            ))}
                        </div>

                        <div className="mt-1">
                            <Button size="small"
                                variant="contained"
                                style={{ textTransform: 'none', backgroundColor: '#2f358b' }}
                                onClick={handleClick}
                            >Save</Button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}

export default EditForm;