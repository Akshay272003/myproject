import Style from "./forms.module.css";
import { Steps, Divider } from "antd";
import CompanyDetailForm from "./enter_company_details/CompanyDetailForm";
import { Button } from "@mui/material";

const BookShipmentForm = () => {
    return (
        <>
            <div className="flex-col gap-2">
                <div className={`${Style.container} flex-col gap-1`}>
                    {/* stepper */}
                    <div style={{ padding: '1em', borderBottom: '1px solid #D9D9D9' }}>
                        <Steps
                            progressDot
                            size="small"
                            current={1}
                            items={[
                                {
                                    title: <span style={{ fontSize: '12px' }}>Search Quote</span>
                                },
                                {
                                    title: <span style={{ fontSize: '12px' }}>Enter Company Details</span>
                                },
                                {
                                    title: <span style={{ fontSize: '12px' }}>Enter Shipment Details</span>
                                },
                                {
                                    title: <span style={{ fontSize: '12px' }}>Proceed to Payment</span>
                                },
                                {
                                    title: <span style={{ fontSize: '12px' }}>Initiate Payment</span>
                                },
                            ]}
                        />
                    </div>
                    <div className={Style.form_container}>
                        <CompanyDetailForm />
                    </div>
                </div>
                <div className="mt-1">
                    <Button
                        size="small"
                        variant="contained"
                        style={{ backgroundColor: '#4431B8', fontSize: '14px', padding: '16px 26px' }}
                    >
                        Confirm & book shipment
                    </Button>
                    <p className="mt-1" style={{ fontSize: '12px', color: '#737373' }}>You will not be charged yet?</p>
                </div>
            </div>
        </>

    );
}

export default BookShipmentForm;