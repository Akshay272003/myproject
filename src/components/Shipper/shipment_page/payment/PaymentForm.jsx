import Style from "./payment.module.css";
import StaticStepper from "../../reusables/static_stepper/StaticStepper";
import { style } from "@mui/system";
import { Button, Divider, Radio, RadioGroup } from "@mui/material";
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

const PaymentForm = () => {
    return (
        <div className="flex-col gap-2 p-1">

            {/* container top */}
            <div className={`${Style.container} flex-col gap-2 py-1`}>
                <div className="p-1">
                    <StaticStepper current={3} />
                </div>

                {/* booking summary section  */}
                <div className="flex-col gap-1">
                    <div className={`${Style.heading_container} flex items-center`}>
                        <span className={Style.heading}>Booking Summary</span>
                    </div>

                    content
                </div>

                {/* Amount section  */}
                <div className="flex-col gap-1">
                    <div className={`${Style.heading_container} flex items-center`}>
                        <span className={Style.heading}>Amount</span>
                        <span className={Style.heading_helper}> Transparent Pricing Policy</span>
                    </div>

                    <div className="flex-col gap-1" style={{ padding: '1em clamp(1em, 3vw, 2em)' }}>
                        <div className="flex">
                            <span className={Style.label}>Primary Seller's Quote</span>
                            <span className={Style.value}>$798.29</span>
                        </div>
                        <div className="flex">
                            <span className={Style.label}>Customer Breakage and bond</span>
                            <span className={Style.value}>$798.29</span>
                        </div>
                        <div className="flex">
                            <span className={Style.label}>Insurance</span>
                            <span className={Style.value}>$798.29</span>
                        </div>
                        <div className="flex">
                            <span className={Style.label}>Duties and taxes</span>
                            <span className={Style.value}>$798.29</span>
                        </div>
                        <div>
                            <a href="#" className={Style.promo_code_link}>Do you have a promo code?</a>
                            <div className="flex">
                                <span className={Style.label}>(Note: Promo code canot be applied after booking)</span>
                                <span className={Style.value}>_ _</span>
                            </div>
                        </div>
                        <div className="flex">
                            <span className={Style.label}>Platform fee</span>
                            <span className={Style.value}>$42.29</span>
                        </div>
                    </div>

                    <Divider />

                    <div className="flex" style={{ padding: '1em clamp(1em, 3vw, 2em)' }}>
                        <span className={Style.heading} style={{ fontWeight: '600', fontSize: 'clamp(16px, 2.5vw, 24px)' }}>Total</span>
                        <span style={{ fontWeight: '600', fontSize: 'clamp(16px, 2.5vw, 24px)' }}>$1,547.36</span>
                    </div>

                </div>
            </div>

            <div className={`${Style.container} flex-col gap-1`} style={{ paddingBottom: '1em' }}>
                <div className={`${Style.heading_container} flex items-center`}>
                    <span className={Style.heading}>Payment Method</span>
                </div>

                <div style={{ padding: '0 clamp(1em, 3vw, 2em)' }}>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        defaultValue="credit-card"
                    >
                        <div className="flex gap-2 items-center">
                            <Radio size="small" id="credit-card" value="credit-card" />
                            <label className={Style.radio_label} htmlFor="credit-card">AutoPay via credit card</label>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Radio size="small" id="transfer-ach" value="transfer-ach" />
                            <label className={Style.radio_label} htmlFor="transfer-ach">Pay with Wire Transfer or ACH</label>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Radio size="small" id="pay-pal" value="pay-pal" />
                            <label className={Style.radio_label} htmlFor="pay-pal">Pay with Pay Pal</label>
                        </div>
                    </RadioGroup>
                </div>
                <Divider />
                <span className={`flex gap-1 items-center ${Style.caution}`}>
                    <InfoRoundedIcon />
                    Shipment processing will only begin once payment has been reviewed
                </span>
            </div>

            <div className="flex gap-2 flex-wrap">
                <Button
                    variant="contained"
                    style={{ backgroundColor: '#4431B8' }}
                >
                    Confirm & book shipment
                </Button>

                <Button
                    variant="outlined"
                    style={{ textTransform: 'none', color: '#4431B8' }}
                >
                    Cancel
                </Button>

            </div>



        </div>
    )
}

export default PaymentForm