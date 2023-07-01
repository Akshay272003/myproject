import Style from "./payment.module.css";
import StaticStepper from "../../reusables/static_stepper/StaticStepper";
import { style } from "@mui/system";

const PaymentForm = () => {
    return (
        <div className="flex-col gap-2">

            {/* container top */}
            <div className={`${Style.container} flex-col gap-2`}>
                <div className="p-1">
                    <StaticStepper current={3} />
                </div>

                {/* booking summary section  */}
                <div className="flex-col gap-1">
                    <div className={`${Style.heading_container} flex justify-content-between gap-1 items-center`}>
                        <span className={Style.heading}>Booking Summary</span>
                        <span className={Style.heading_helper}> Transparent Pricing Policy</span>
                    </div>
                </div>

                {/* Amount section  */}
                <div className="flex-col gap-1">
                    <div className={`${Style.heading_container} flex justify-content-between gap-1 items-center`}>
                        <span className={Style.heading}>Amount</span>
                        <span className={Style.heading_helper}> Transparent Pricing Policy</span>
                    </div>



                </div>
            </div>



        </div>
    )
}

export default PaymentForm