import {TextField, Button} from '@mui/material';

const EditLegalName = ({ setEmail }) => {
    return (
        <>
            <form autoComplete='off'>

                <div className='flex flex-wrap justify-content-between items-center gap-1 mt-1'>
                    <TextField id="outlined-basic" type="email" label="E-mail" variant="outlined" size="small" />
                    <Button size="small" variant="contained" style={{textTransform:'none'}}>Save</Button>
                </div>

            </form>
        </>
    );
}

export default EditLegalName;