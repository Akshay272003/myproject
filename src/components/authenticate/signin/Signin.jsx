import Style from "./signin.module.css";
import { Input, Button, Checkbox, Divider } from "antd";
import LinkedinLogo from "../../../assets/linkedin-logo.svg";
import GoogleLogo from "../../../assets/google-logo.svg";
import { useState } from "react";

const Signin = () => {

    const [isValid, setIsValid] = useState(true);
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = () => {
        setIsPending(true);
        setTimeout(() => {
            setIsPending(false);
        }, 1000);
        //process the credientials and redirect
    }

    return (
        <div className={`${Style.container} flex justify-content-center items-center bg-light p-2`}>
            <div className={`${Style.main} flex-col items-center p-2`}>
                <h3 className={`font-dark text-center`}>
                    Welcome back
                </h3>
                <span className={`font-title font-light`}>Shipping. Simplified.</span>

                {/* login form  */}
                <form className={`flex-col gap-1 mt-2 w-full`}>

                    {!isValid && 
                        <div className={`font-small ${Style.error_message}`}>
                            Email or password is invalid!
                        </div>
                    }

                    <div className="flex-col gap-half">
                        <label className="font-small font-dark" htmlFor="email">Email</label>
                        <Input
                            id="email"
                            placeholder="Email"
                            type="email"
                        />
                    </div>

                    <div className="flex-col gap-half">
                        <label className="font-small font-dark" htmlFor="password">Password</label>
                        <Input.Password
                            id="password"
                            placeholder="input password"
                        />
                    </div>

                    <Button 
                        onClick={handleSubmit}
                        className={Style.singin_btn}
                        disabled = {isPending}
                    >Log in</Button>

                    <div className="flex justify-content-between items-center gap-1">
                        <Checkbox className="font-small">Remember me</Checkbox>
                        <a className="font-small" href="#">Forgot password?</a>
                    </div>
                </form>

                <Divider><span className="font-small font-light">Or</span></Divider>

                <div className="flex-col gap-1 w-full">
                    <Button className="flex gap-half items-center justify-content-center">
                        <img style={{ width: '20px' }} src={GoogleLogo} />
                        Google
                    </Button>
                    <Button className="flex gap-half items-center justify-content-center">
                        <img style={{ width: '20px' }} src={LinkedinLogo} />
                        Linkedin
                    </Button>
                </div>

                <div className="text-center font-small mt-1">
                    <span className="font-light">Don't have an account? &nbsp;</span>
                    <a href="#">Sign up</a>
                </div>

            </div>
        </div>
    );
}

export default Signin;