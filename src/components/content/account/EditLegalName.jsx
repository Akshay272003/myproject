import {TextField, Button} from '@mui/material';

const EditLegalName = ({ setFirstName, setLastName }) => {
    return (
        <>
            <form autoComplete='off'>
                <span className="sub-title">
                    This is the name on yout travel document, Which chould be a licence or a passport.
                </span>

                <div className='flex flex-wrap gap-1 mt-1'>
                    <TextField id="outlined-basic" label="First Name" variant="outlined" size="small" />
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" size="small" />
                </div>
                <div className="mt-1">
                <Button size="small" variant="contained" style={{textTransform:'none'}}>Save</Button>
                </div>

            </form>
        </>
    );
}

export default EditLegalName;