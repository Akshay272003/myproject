import { useState } from 'react';
import styles from "./notifications.module.css";
import { Divider, Switch, Radio, RadioGroup, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ActivityToggle from '../reusables/ActivityToggle';
import MessageLogo from '../../../assets/message-icon.svg'
import Topbar from "../../topbar/Topbar"
import SideHelper from '../reusables/SideHelper';
import BoxToggleMenus from '../reusables/BoxToggleMenus';

const Notifications = () => {

    const [preferredNotifyMethod, setPreferredNotifyMethod] = useState('email')

    return (
        <>
            <Topbar title="Notifications" />

            <div className={`${styles.container} flex flex-wrap`}>

                <div className={`${styles.main_container} flex-col gap-2`}>
                    {/* preferred notification method container  */}
                    <div className={`${styles.preferred_container} rounded`}>
                        <h6 className="heading mb-2">Preferred Notification Method</h6>

                        <Divider />

                        {/* <div className={styles.preferred_options}> */}

                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            value={preferredNotifyMethod}
                            onChange={(e) => setPreferredNotifyMethod(e.target.value)}
                            name="radio-buttons-group"
                        >
                            <div className="flex gap-1 items-center">
                                <Radio
                                    value="email"
                                    id='email'
                                    size='small'
                                    inputProps={{ 'aria-label': 'Email' }}
                                />
                                <label htmlFor='email' className="flex gap-half items-center">
                                    <EmailIcon fontSize="small" />
                                    <span className="sub-title">la************.com</span>
                                </label>
                            </div>
                            
                            <div className="flex gap-1 items-center">
                                <Radio
                                    value="phone"
                                    id='phone'
                                    size='small'
                                    inputProps={{ 'aria-label': 'Phone' }}
                                />
                                <label htmlFor='phone' className="flex gap-half items-center">
                                    <LocalPhoneIcon fontSize="small" />
                                    <span className="sub-title">627******9</span>
                                </label>
                            </div>
                        </RadioGroup>

                        <Divider />

                        <div className={`flex w-full ${styles.save_btn_container}`}>
                            <Button variant="contained" size="small" fontSize="small">Save</Button>
                        </div>
                    </div>

                    {/* turn all notification on container  */}
                    <div className={`rounded p-1 flex justify-content-between items-center ${styles.bg_little_dark}`}>
                        <span className={styles.sub_dark_title}>Turn all notifications on</span>
                        <Switch color='default' size='small' />
                    </div>

                    {/* acount activity and policies  */}
                    <BoxToggleMenus
                        heading="Acount activity and policies"
                        description="Confirm yout shipment and account activity, and learn about important Kargoplex policies."
                        options={[
                            "Account Activity", "Shipment Activity", "In-app purchases", "User policies"
                        ]}
                    />

                    {/* Kargoplex updates  */}
                    <BoxToggleMenus
                        heading="Kargoplex Updates"
                        description="Stay up to date on the latest news from Kargoplex, and let us know how we can improve."
                        options={[
                            "News and Updates", "Feedback", "Freight regulations", "Product and features"
                        ]}
                    />

                    {/* -------user offers and updates-------  */}
                    <BoxToggleMenus
                        heading="User Offers and Updates"
                        description="Get updates about programes, features and regulations. Learn  about best shipping practices, and get access to exclusive perks."
                        options={[
                            "Insights and tips", "Perks and offers", "Pricing trends and suggestions"
                        ]}
                    />


                    {/* ---------unsubscribe from all marketing emails--------- */}
                    <div className={`${styles.bg_little_dark} ${styles.preferred_container} flex flex-col gap-1 rounded`}>
                        <div className='flex justify-content-between items-center gap-1'>
                            <h6 className="font-small font-dark">
                                Unsubscribe from all marketing emails
                            </h6>
                            <Switch color='default' size='small' />
                        </div>
                        <div className="sub-title">
                            You will be unsubscribing from all marketing emails from Kargoplex. This includes recommandations, logistics inspiration and deals, Cargo insurence and finance, how Kargoplex works, invites and referrals, surveys and research studies, and exprience logistics tips and promotions.
                        </div>
                    </div>

                </div>

                <div className={`${styles.helper_container} flex-col flex-1`}>
                    <div className={`flex-col gap-2 bg-light rounded p-1`}>

                        <SideHelper
                            iconSrc="src\assets\bell-icon.png"
                            heading="Keep upto date on important info about using Kargoplex."
                            descriptions={[
                                "Stay on top of your reservtions, account activity, changes to Kargoplex rules and policies, plus tax and requlatory updates.",
                                "Never miss important messages and reminders about your reservations and account activity."
                            ]} />
                        <SideHelper
                            iconSrc={MessageLogo}
                            heading="Would you like to get text messages?"
                            descriptions={[
                                "By checking the SMS box, you agree to receive autodialed promotional texts from Kargoplex and Kargoplex's partners.",
                                "For more info, text HELP to 247262. To cancel mobile notifications, reply STOP to 247262. Message data rates may apply."
                            ]} />
                    </div>
                </div>

            </div>
        </>
    );
}

export default Notifications;