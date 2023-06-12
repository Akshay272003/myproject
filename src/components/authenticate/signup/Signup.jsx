import Style from "./signup.module.css";
import { Input, Button, Divider } from "antd";
import LinkedinLogo from "../../../assets/linkedin-logo.svg";
import GoogleLogo from "../../../assets/google-logo.svg";

const Signup = () => {
    return (
        <>
            <div className={`${Style.container} flex justify-content-center items-center bg-light p-2`}>
                <div className={`${Style.main} flex-col items-center p-2`}>
                    <h3 className={`font-dark text-center`}>
                        Let's get started
                    </h3>
                    <span className={`font-title font-light`}>Shipping. Simplified.</span>

                    {/* signup form 1 */}
                    <form className={`flex-col gap-1 mt-2 w-full`}>

                        <div className="flex-col gap-half">
                            <label className="font-small font-dark" htmlFor="email">Sign up with your email</label>
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
                            className={Style.singup_btn}
                        >Create your free account</Button>
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
                        {/* t and c  */}
                        <div className="text-center sub-title">
                            By signing up I accept the Kargoplex <a href="#">terms and conditions.</a>
                        </div>
                        <div className="text-center sub-title">
                            I agree to receive freight-related updates, industry insights, and marketing communications from Kargoplex Group. I know I can opt of these at any time.
                        </div>
                    </div>

                    <div className="text-center font-small mt-1">
                        <span className="font-light">Have an account? &nbsp;</span>
                        <a href="#">Sign in</a>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Signup;