import { useState } from "react";
import { TextField, Button } from "@mui/material"

const EditForm = ({ title, detail, editDescription, fieldsDetail }) => {

    const [isFormOpen, setIsFormOpen] = useState(false);

    const toggleEdit = (planDetailId, editFormId) => {
        const planDetail = document.getElementById(planDetailId);
        const editForm = document.getElementById(editFormId);

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
                    <Button size="small" style={{ textTransform: 'none' }} onClick={() => toggleEdit(title, `${title}-form`)}>
                        {isFormOpen ? "Cancel" : "Edit"}
                    </Button>
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
                                style={{ textTransform: 'none' }}
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