import { useState } from "react";
import styles from "../account.module.css";
import { Divider, Button, TextField, Switch, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import ActivityToggle from "../../../reusables/ActivityToggle";
import CustomButton from "../../../../reusables/button/Button";
import { Edit } from "@mui/icons-material";

const Loginpage = () => {

    const [twofactorAuthStatus, setTwoFactorAuthStatus] = useState(false)
    const [open, setOpen] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const toggleEditPassword = (elementId) => {
        const element = document.getElementById(elementId);
        element.classList.toggle("hidden");
        element.classList.contains("hidden") ? setIsFormOpen(false) : setIsFormOpen(true);
    }

    const handleAuthChange = () => {
        setOpen(true);
    }
    const handleDialogClose = () => {
        setOpen(false);
    }
    const handleVerify = () => {
        //verify
        // if success then change the auth state and close the dialog
        handleDialogClose();
        setTwoFactorAuthStatus(true);
    }


    return (
        <>
            <h6 className="heading mb-2">Login</h6>

            <Divider />
            {/* ----change password----  */}
            <div className="py-1">
                <div className="flex justify-content-between items-center">
                    <span className="font-small font-dark">Password</span>

                    {isFormOpen
                        ?
                        <CustomButton
                            onClick={() => toggleEditPassword("password-edit-form")}
                            style={{ fontSize: '0.8rem' }}
                            tooltip="Cancel"
                        >
                            Cancel
                        </CustomButton>
                        :
                        <CustomButton
                            onClick={() => toggleEditPassword("password-edit-form")}
                            icon={<Edit sx={{ fontSize: '0.8rem' }} />}
                            style={{ fontSize: '0.8rem' }}
                            tooltip="Edit"
                        >
                            Edit
                        </CustomButton>}
                </div>
                <p className="sub-title font-xs">Last updated on</p>

                {/* edit form  */}
                <div id="password-edit-form" className="hidden">
                    <form autoComplete="off" className={`flex-col gap-half ${styles.edit_form}`}>

                        <TextField required type="password" id="standard-basic" label="Current password" variant="standard" />
                        <TextField required type="password" id="standard-basic" label="New passoword" variant="standard" />
                        <TextField required type="password" id="standard-basic" label="Confirm password" variant="standard" />

                        <div className="flex justify-content-end">
                            <Button
                                size="small"
                                style={{ textTransform: 'none' }}
                                variant="contained"
                            >Submit</Button>
                        </div>
                    </form>
                </div>
            </div>

            <Divider />
            {/* -----two factor authentication-----  */}
            <div className="py-1">
                <div className='flex justify-content-between items-center'>
                    <span className="font-small font-dark flex gap-1">
                        {`Two-Factor Authentication`}
                        <span className="bg-dark sub-title font-white">{twofactorAuthStatus ? "Enabled" : "Disabled"}</span>
                    </span>
                    <Switch size='small' checked={twofactorAuthStatus} onChange={handleAuthChange} />
                    {/* open dialog box when clicked on switch */}
                    <Dialog open={open} onClose={handleDialogClose}>
                        <DialogTitle>Verify OTP</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Enter the One-Time-Password that had been sent to you.
                            </DialogContentText>
                            <TextField
                                required
                                autoFocus
                                margin="dense"
                                id="otp"
                                label="One Time Password"
                                type="text"
                                fullWidth
                                variant="standard"
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleDialogClose}>Cancel</Button>
                            <Button onClick={handleVerify}>Submit</Button>
                        </DialogActions>
                    </Dialog>

                </div>
                <p className="sub-title font-xs">Enable two factor authentication using one or more of the options.</p>

                <div className={`py-1`}>
                    <ActivityToggle label="Phone" isChecked={false} />
                    <ActivityToggle label="Email" isChecked={false} />
                    <ActivityToggle label="Google Auth" isChecked={false} />
                </div>
            </div>

            <Divider />
            {/*--------- login pin code query---------  */}
            <div className="py-1">
                <ActivityToggle label="Require Login Pin Code" isChecked={false} labelColorClass="font-dark" labelSizeClass="font-small" />
                <p className="sub-title font-xs">
                    Enable the requirement for all login attempts.
                </p>
            </div>
        </>
    );
}

export default Loginpage;