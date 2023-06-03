import { Button, TextField, MenuItem  } from '@mui/material';

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
    return (
        <>
            <form autoComplete='off' className=''>

                <div className="mt-1 flex flex-wrap gap-1 justify-content-between items-center">
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
                    <Button size="small" variant="contained" style={{ textTransform: 'none' }}>Save</Button>
                </div>

            </form>
        </>
    );
}

export default EditGender;