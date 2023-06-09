import { useState } from "react";
import Style from "./profile.module.css";
import { Avatar, IconButton, Divider, TextField, Button, Tabs, Tab } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}


const Profile = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className={`${Style.container}`}>
                <div className={`${Style.main}`}>

                    {/* user profile  */}
                    <div className={`${Style.profile_container}`}>

                        <h4 className={`${Style.profile_name}`}>
                            Akshay Mundra
                        </h4>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className={Style.avatar_container}>
                                <Avatar
                                    alt="Cindy Baker"
                                    src="src\assets\person-avatar.jpg"
                                    sx={{ width: 95, height: 95 }}
                                />
                                <IconButton className={`${Style.image_edit_btn}`} size="small">
                                    <EditIcon />
                                </IconButton>
                            </div>
                        </div>

                        <Divider />

                        <div className={`${Style.profile_info}`}>

                            <div>
                                <InfoIcon style={{ width: '0.8rem', color: 'blue' }} />
                                <span className={`${Style.text_small} ${Style.about}`}>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quaerat sequi nulla ducimus, facilis distinctio sapiente aspernatur mollitia suscipit minus!
                                </span>
                            </div>
                            <div>
                                <LocalPhoneIcon style={{ width: '0.8rem', color: 'blue' }} />
                                <span className={`${Style.text_small}`}>
                                    1234567890
                                </span>
                            </div>
                            <div>
                                <EmailIcon style={{ width: '0.8rem', color: 'blue' }} />
                                <span className={`${Style.text_small}`}>
                                    abc@gmail.com
                                </span>
                            </div>
                            <div>
                                <LocationOnIcon style={{ width: '0.8rem', color: 'blue' }} />
                                <span className={`${Style.text_small}`}>
                                    Indore, India
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* edit profile  */}
                    <div className={`${Style.edit_profile}`}>

                        <div className={`${Style.head_container}`}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab style={{textTransform:'none', fontSize:"0.7rem"}} label="Edit Profile" />
                                <Tab style={{textTransform:'none', fontSize:"0.7rem"}} label="Change Password" />
                            </Tabs>
                        </div>
                        
                        <div style={{ padding: '2em' }}>
                            <TabPanel value={value} index={0}>
                                <form className={Style.edit_form}>
                                    <TextField
                                        label="Name"
                                        variant="outlined"
                                        size="small"
                                        style={{ maxWidth: '200px' }}
                                    />
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1em' }}>
                                        <TextField
                                            label="Phone"
                                            variant="outlined"
                                            size="small"
                                            style={{ maxWidth: '200px' }}
                                        />
                                        <TextField
                                            label="Email"
                                            variant="outlined"
                                            type="email"
                                            size="small"
                                            style={{ maxWidth: '200px' }}
                                        />
                                    </div>
                                    <TextField
                                        label="Designation"
                                        variant="outlined"
                                        size="small"
                                        style={{ maxWidth: '200px' }}
                                    />
                                    <TextField
                                        label="About"
                                        variant="outlined"
                                        size="small"
                                        multiline
                                        maxRows={4}
                                        fullWidth
                                    />
                                    <div>
                                        <Button variant="contained" size="small" style={{ textTransform: 'none' }}>
                                            Save
                                        </Button>
                                    </div>
                                </form>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <form className={Style.change_password_form}>
                                    <TextField
                                        label="Current Password"
                                        size="small"
                                    />
                                    <TextField
                                        label="New Password"
                                        size="small"
                                    />
                                    <TextField
                                        label="Confirm Password"
                                        size="small"
                                    />
                                    <div>
                                        <Button size="small" style={{textTransform:'none'}} variant="contained">
                                            Save
                                        </Button>
                                    </div>
                                </form>
                            </TabPanel>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Profile;