import Style from "./login.module.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button, Checkbox } from "@mui/material";
import { useState } from "react";
import GoogleLogo from "../../../assets/authentication/google.svg";
import AppleLogo from "../../../assets/authentication/apple.svg";
import FacebookLogo from "../../../assets/authentication/facebook.svg";
import CustomCarousal from "./carousal/Carousal";


const Login = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleEyeClick = () => {
        setIsVisible(state => !state);
    }

    return (
        <div className={Style.container}>
            <div className={`${Style.main_container}`}>
                <p className={Style.brand_name}>Kargo<span style={{ fontWeight: '600' }} >plex</span></p>

                <div className={`${Style.flex_container} flex gap-2 flex-wrap w-full`}>
                    <div className={`flex-1 flex-col gap-1 ${Style.form_container}`}>

                        <div className={`flex-col`}>
                            <p className={`text-center ${Style.heading}`}>LOG IN</p>
                            <p className={`text-center ${Style.description}`}>
                                Lorem ipsum dolor sit amet, consectetur
                            </p>
                        </div>

                        <div className="flex-col gap-2 mt-1">

                            <div className="flex-col gap-half">
                                <label htmlFor="email" className={Style.label}>Email</label>
                                <input type="email" id="email" className={Style.input} />
                            </div>


                            <div className="flex-col gap-half">
                                <div className="flex justify-content-between items-center">
                                    <label htmlFor="email" className={Style.label}>Password</label>
                                    <div
                                        className="flex gap-half"
                                        style={{ cursor: 'pointer' }}
                                        onClick={handleEyeClick}
                                    >
                                        {isVisible
                                            ?
                                            <>
                                                <VisibilityOffIcon style={{ color: '#666666CC', fontSize: '16px' }} />
                                                <span style={{ color: '#666666CC', fontSize: '16px' }}>Hide</span>
                                            </>
                                            :
                                            <>
                                                <VisibilityIcon style={{ color: '#666666CC', fontSize: '16px' }} />
                                                <span style={{ color: '#666666CC', fontSize: '16px' }}>Show</span>
                                            </>
                                        }
                                    </div>
                                </div>
                                <input type={isVisible ? "text" : "password"} id="password" className={Style.input} />
                            </div>

                            <div className="flex justify-content-end">
                                <a href="#" className={Style.forget_password}>
                                    Forget your password
                                </a>
                            </div>

                            <div>
                                <Checkbox

                                    defaultChecked
                                    id="remember-me"
                                    sx={{
                                        color: '#111111',
                                        '&.Mui-checked': {
                                            color: '#111111',
                                        },
                                    }}
                                />
                                <label htmlFor="remember-me">Remember Me</label>
                            </div>

                            <Button
                                style={{ textTransform: 'none', borderRadius: '21px', background: '#111111', color: 'white' }}
                                variant="contained"
                            >
                                Log in
                            </Button>
                        </div>

                        <div className="flex-col gap-1 mt-1">
                            <span>OR Continue with</span>

                            <div className="flex gap-1">
                                <div className={`${Style.social_link} flex gap-half flex-1 items-center justify-content-center p-half`}>
                                    <img src={FacebookLogo} alt="" />
                                    <span>FaceBook</span>
                                </div>
                                <div className={`${Style.social_link} flex gap-half flex-1 items-center justify-content-center p-half`}>
                                    <img src={GoogleLogo} alt="" />
                                    <span>Google</span>
                                </div>
                                <div className={`${Style.social_link} flex gap-half flex-1 items-center justify-content-center p-half`}>
                                    <img src={AppleLogo} alt="" />
                                    <span>Apple</span>
                                </div>
                            </div>


                        </div>

                    </div>

                    {/* right carousel  */}
                    <div className="flex-1">
                        <CustomCarousal />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login