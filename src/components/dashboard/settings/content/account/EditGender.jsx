import { Button, TextField, MenuItem } from '@mui/material';
import CustomButton from '../../reusables/button/Button';
import { Edit } from '@mui/icons-material';
import { useState } from 'react';

const genders = [
    {
        value: 'Male',
        label: 'Male',
    },
    {
        value: 'Female',
        label: 'Female',
    },
    {
        value: 'Not Provided',
        label: 'Not Provided',
    }
]

const EditGender = ({ gender, setGender }) => {

    const [isFormOpen, setIsFormOpen] = useState(false);

    const toggleEdit = (planDetailId, editFormId) => {
        const planDetail = document.getElementById(planDetailId);
        const editForm = document.getElementById(editFormId);

        planDetail.classList.toggle("hidden")
        editForm.classList.toggle("hidden")
        editForm.classList.contains("hidden") ? setIsFormOpen(false) : setIsFormOpen(true);
    }

    return (
        <>
            <div className="py-1">
                <div className="flex justify-content-between items-center">
                    <span className="font-small">Gender</span>
                    {isFormOpen
                        ?
                        <CustomButton
                            onClick={() => toggleEdit("gender-detail", "gender-form")}
                            style={{ fontSize: '0.8rem' }}
                            tooltip="Cancel"
                        >
                            Cancel
                        </CustomButton>
                        :
                        <CustomButton
                            onClick={() => toggleEdit("gender-detail", "gender-form")}
                            icon={<Edit sx={{ fontSize: '0.8rem' }} />}
                            style={{ fontSize: '0.8rem' }}
                            tooltip="Edit"
                        >
                            Edit
                        </CustomButton>}
                </div>
                <span id="gender-detail" className="font-title font-light">{gender}</span>

                <div id="gender-form" className="hidden">
                    <form autoComplete='off' className=''>

                        <div className="mt-1 flex-col gap-1">
                            <div>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Select"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    size="small"
                                >
                                    {genders.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                            <div>
                                <Button size="small" variant="contained" style={{ textTransform: 'none', backgroundColor: '#2f358b' }}>Save</Button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

        </>
    );
}

export default EditGender;