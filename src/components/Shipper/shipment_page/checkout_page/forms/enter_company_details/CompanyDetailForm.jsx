import Style from "./enter_company_details.module.css";
import { Input } from "antd";

const { TextArea } = Input;

const CompanyDetailForm = () => {
    return (
        <div className="flex-col gap-1">
            <div className={`${Style.heading}`}>Enter your details below</div>

            <div className={`${Style.description}`}>You will be prompted to enter your pickup and delivery details after placing your orders</div>

            {/* form  */}
            <form className={`${Style.form} flex-col gap-1`} >
                <div className="flex justify-content-between gap-2 flex-wrap">
                    <div className="flex-col gap-half" style={{ width: '254px' }}>
                        <label htmlFor="company_name" className={`${Style.label}`}>Company Name <sup style={{ color: 'red' }}>*</sup> </label>
                        <Input id="company_name" required placeholder="Cargo Ldt" />
                    </div>
                    <div className="flex-col gap-half" style={{ width: '254px' }}>
                        <label htmlFor="full_name" className={`${Style.label}`}>Full Name <sup style={{ color: 'red' }}>*</sup> </label>
                        <Input id="full_name" required placeholder="Naomi Kolios" />
                    </div>
                </div>
                <div className="flex justify-content-between gap-2 flex-wrap mt-1">
                    <div className="flex-col gap-half" style={{ width: '254px' }}>
                        <label htmlFor="company_name" className={`${Style.label}`}>Phone Number <sup style={{ color: 'red' }}>*</sup> </label>
                        <Input id="company_name" required placeholder="555-555-555" />
                    </div>
                    <div className="flex-col gap-half" style={{ width: '254px' }}>
                        <label htmlFor="full_name" className={`${Style.label}`}>Commodities <sup style={{ color: 'red' }}>*</sup> </label>
                        <Input id="full_name" required placeholder="Bottles" />
                        <div style={{ textAlign: 'right' }}>
                            <a href="#" style={{ fontSize: '10px', color: '#4431B8' }}>why Can't I skip?</a>
                        </div>
                    </div>
                </div>

                <div className="flex-col gap-half">
                    <label htmlFor="comments" className={Style.label} style={{ color: '#4431B8' }}>Comments (Optional)</label>
                    <p style={{ color: '#4431B8', fontSize: '11px', fontStyle: 'italic' }}>Please note: our freight forwarders do not accept scheduled deliveries</p>
                    <TextArea
                        autoSize={{
                            minRows: 3,
                            maxRows: 3,
                        }}
                        style={{ border: '1px solid #4431B8', borderRadius: '2px' }}
                    />

                </div>

            </form>

        </div>
    )
}

export default CompanyDetailForm
