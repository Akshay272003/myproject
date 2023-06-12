import { useState } from "react";
import Style from "./twoFAOtp.module.css";
import { InputNumber, Button } from "antd";

const TwoFAOtp = () => {

    const [isOtpValid, setIsOtpValid] = useState(true);

    return (
        <div className={`${Style.container} flex justify-content-center items-center bg-light p-2`}>
            <div className={`${Style.main} flex-col items-center`}>
                <div className="flex w-full">
                    <Button type="link">{'<'} &nbsp; Back</Button>
                </div>
                <h3 className={`font-dark text-center`}>
                    Verify Otp
                </h3>
                <span className={`font-small font-light`}>Enter the otp sent on your email</span>

                {/* otp form  */}
                <form className={`flex-col gap-1 mt-2 w-full px-1`}>

                    {!isOtpValid &&
                        <span className={`font-small ${Style.error_message}`}>Enter a valid otp!</span>
                    }

                    <InputNumber
                        placeholder="Enter otp"
                        style={{ width: '100%' }}
                    />

                    <Button
                        className={`${Style.verify_btn}`}
                    >
                        Verify
                    </Button>
                </form>
                <span className="font-small mt-2">
                    Did not got otp? <a href="#">resend again</a>
                </span>
            </div>
        </div>
    );
}

export default TwoFAOtp;