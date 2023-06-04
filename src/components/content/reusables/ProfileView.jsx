import { styled } from '@mui/material/styles';
import { Badge, Avatar, Button } from '@mui/material';
import styles from "./resuables.module.css";
import HistoryIcon from '@mui/icons-material/History';
import StarIcon from '@mui/icons-material/Star';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const SmallAvatar = styled(Avatar)(() => ({
    width: 22,
    height: 22
}));


const ProfileView = ({ name, avatarSrc, role, yearJoined, shipments, issues, messages, isPerson, isVerified, ratingValue }) => {
    return (
        <>
            <div className={`${styles.profile_container} flex justify-content-between`}>
                <div className="flex flex-wrap p-1 gap-1">
                    {/* avatar detail  */}
                    <div className='flex-col gap-1'>
                        <Badge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            badgeContent={
                                <SmallAvatar src="src\assets\green-status-icon.png" />
                            }
                        >
                            <Avatar 
                                style={{
                                    borderRadius:`${isPerson ? '50%' : '15%'}`
                                }}

                                alt="name" 
                                src={avatarSrc} 
                                sx={{ width: 85, height: 85 }} />
                        </Badge>

                        <Button style={{
                            fontSize: '0.6rem',
                            color: 'red',
                            textTransform: 'none'
                        }}>Remove Photo</Button>
                    </div>
                    {/* user details  */}
                    <div className={`${styles.font_little_white} flex-col gap-half`}>
                        <span className="font-small">{role}</span>
                        <span className={`font-white ${styles.profile_name}`}>{name}</span>
                        <div className="flex gap-half font-small items-center">
                            <HistoryIcon style={{ height: '15px', width: '15px' }} />
                            <span>Joined in {yearJoined}</span>
                        </div>
                        {/* number data  */}
                        <div className="flex flex-wrap gap-1 mt-1">
                            <div className={`flex gap-half ${styles.data_container}`}>
                                <span className={`${styles.data_number} font-white`}>{shipments}</span>
                                <span className="font-small">Shipments</span>
                            </div>
                            <div className={`flex gap-half ${styles.data_container}`}>
                                <span className={`${styles.data_number} font-white`}>{messages}</span>
                                <span className="font-small">Messages</span>
                            </div>
                            <div className={`flex gap-half ${styles.data_container}`}>
                                <span className={`${styles.data_number} font-white`}>{issues}</span>
                                <span className="font-small">Issues</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* options  */}
                <div className={`p-1`}>
                    <div>
                        <div className={`flex flex-wrap gap-half`}>
                            <div className={`bg-light flex items-center gap-half ${styles.rating_container}`}>
                                <StarIcon style={{ height: '12px', width: '12px' }} />
                                <span className="font-small">{ratingValue}</span>
                            </div>
                            <Button variant="contained" style={{
                                textTransform: 'none',
                                fontSize: '10px',
                                padding: '3px 6px',
                                minWidth: '45px',
                                boxShadow: 'none'
                            }}
                            >Go to Profile</Button>
                        </div>

                        {isVerified && <>
                            <div className={`flex gap-half font ${styles.font_little_white} font-title mt-1`}>
                                <VerifiedUserIcon style={{ fontSize: '16px' }} />
                                <span>{isPerson ? "Identity" : "Company"} verified</span>
                            </div>
                        </>}
                    </div>

                </div>
            </div>
        </>
    );
}

export default ProfileView;