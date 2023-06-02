import { useState } from 'react';
import styles from "./notifications.module.css";
import Divider from '@mui/material/Divider';
import Switch from '@mui/material/Switch'
import Radio from '@mui/material/Radio';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Button from '@mui/material/Button';
import ActivityToggle from './ActivityToggle';
import MessageLogo from '../../../assets/message-icon.svg'

const Notifications = () => {

    const [preferredNotifyMethod, setPreferredNotifyMethod] = useState()

    return (
        <>
            <div className={`main-content ${styles.container}`}>

                <div className={`left-container bg-transparent flex-col ${styles.gap_2}`}>
                    {/* preferred notification method container  */}
                    <div className={`${styles.preferred_container} rounded`}>
                        <h6 className="heading mb-2">Preferred Notification Method</h6>

                        <Divider />

                        <div className={styles.preferred_options}>

                            <div className="flex gap-1 items-center">
                                <Radio
                                    checked={preferredNotifyMethod === 'a'}
                                    onChange={(e) => setPreferredNotifyMethod(e.target.value)}
                                    value="a"
                                    id='a'
                                    size='small'
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'A' }}
                                />
                                <label htmlFor='a' className="flex gap-half items-center">
                                    <EmailIcon fontSize="small" />
                                    <span className="sub-title">la************.com</span>
                                </label>
                            </div>

                            <div className="flex gap-1 items-center">
                                <Radio
                                    checked={preferredNotifyMethod === 'b'}
                                    onChange={(e) => setPreferredNotifyMethod(e.target.value)}
                                    value="b"
                                    id='b'
                                    size='small'
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'B' }}
                                />
                                <label htmlFor='b' className="flex gap-half items-center">
                                    <LocalPhoneIcon fontSize="small" />
                                    <span className="sub-title">627******9</span>
                                </label>

                            </div>
                        </div>
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
                    <div className={`${styles.preferred_container} flex flex-col gap-1 rounded`}>
                        <div>
                            <h6 className="heading">Acount activity and policies</h6>
                            <p className={`sub-title ${styles.mt_small}`}>Confirm yout shipment and account activity, and learn about important Kargoplex policies.</p>
                        </div>
                        <Divider />
                        <ActivityToggle label="Account Activity" isChecked={true} />
                        <Divider />
                        <ActivityToggle label="Shipment Activity" isChecked={true} />
                        <Divider />
                        <ActivityToggle label="In-app purchases" isChecked={true} />
                        <Divider />
                        <ActivityToggle label="User policies" isChecked={true} />
                    </div>

                    {/* Kargoplex updates  */}
                    <div className={`${styles.preferred_container} flex flex-col gap-1 rounded`}>
                        <div>
                            <h6 className="heading">Kargoplex Updates</h6>
                            <p className={`sub-title ${styles.mt_small}`}>Stay up to date on the latest news from Kargoplex, and let us know how we can improve.</p>
                        </div>
                        <Divider />
                        <ActivityToggle label="News and Updates" isChecked={false} />
                        <Divider />
                        <ActivityToggle label="Feedback" isChecked={false} />
                        <Divider />
                        <ActivityToggle label="Freight regulations" isChecked={true} />
                        <Divider />
                        <ActivityToggle label="Product and features" isChecked={true} />
                    </div>

                    {/* user offers and updates  */}
                    <div className={`${styles.preferred_container} flex flex-col gap-1 rounded`}>
                        <div>
                            <h6 className="heading">User Offers and Updates</h6>
                            <p className={`sub-title ${styles.mt_small}`}>Get updates about programes, features and regulations. Learn  about best shipping practices, and get access to exclusive perks.</p>
                        </div>
                        <Divider />
                        <ActivityToggle label="Insights and tips" isChecked={false} />
                        <Divider />
                        <ActivityToggle label="Perks and offers" isChecked={true} />
                        <Divider />
                        <ActivityToggle label="Pricing trends and suggestions" isChecked={true} />
                    </div>

                    {/* unsubscribe from all marketing emails */}
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

                <div className="right-container bg-transparent">
                    <div className={`flex-col ${styles.gap_2} bg-light p-1 rounded`}>
                        <div className='flex-col gap-half'>
                            <img src="src\assets\bell-icon.png" alt="" />
                            <h6 className="font-small font-dark">
                                Keep upto date on important info about using Kargoplex.
                            </h6>
                            <p className="sub-title">
                                Stay on top of your reservtions, account activity, changes to Kargoplex rules and policies, plus tax and requlatory updates.
                            </p>
                            <p className="sub-title">
                                Never miss important messages and reminders about your reservations and account activity.
                            </p>
                        </div>

                        <div className='flex-col gap-half'>
                            <img src={MessageLogo} alt="" />
                            <h6 className="font-small font-dark">
                                Would you like to get text messages?
                            </h6>
                            <p className="sub-title">
                                By checking the SMS box, you agree to receive autodialed promotional texts from Kargoplex and Kargoplex's partners.
                            </p>
                            <p className="sub-title">
                                For more info, text HELP to 247262. To cancel mobile notifications, reply STOP to 247262. Message data rates may apply.
                            </p>
                        </div>
                        
                        
                    </div>
                </div>

            </div>
        </>
    );
}

export default Notifications;