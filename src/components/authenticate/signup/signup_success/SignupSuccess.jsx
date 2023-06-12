import Style from "./signup_success.module.css";
import GmailLogo from "../../../../assets/gmail-logo.svg";

const SignupSuccess = () => {
    return (
        <>
            <div className={`${Style.container} flex justify-content-center items-center bg-light p-2`}>
                <div className={`${Style.main} flex-col items-center`}>
                    <div>
                        <img style={{width:'100%'}} src="src\assets\earth.gif" />
                    </div>
                    <h2 className={`font-dark text-center`}>
                        Welcome to Kargoplex.com
                    </h2>
                    <span className={`font-title font-light`}>You are one step away from seamless freight comparision</span>

                    <span className="mt-1 font-title font-light">
                        Please check <span className="font-dark">abc@gmail.com</span> to verify your account.
                    </span>

                    <a href="#" className="mt-2 mb-1 flex items-center justify-content-center gap-half font-small">
                        <img style={{width:'20px'}} src={GmailLogo}/>
                        Gmail
                    </a>

                    <span className="font-light mt-1 font-title">
                        Can't find your email? Check your spam folder.
                    </span>

                    <span className="mt-1 font-light font-title">
                        Have an issue? <a href="#">Contact support</a>
                    </span>

                </div>
            </div>
        </>
    );
}

export default SignupSuccess;