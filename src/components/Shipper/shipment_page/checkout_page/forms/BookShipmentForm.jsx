import Style from "./forms.module.css";
import { Steps } from "antd";

const BookShipmentForm = () => {
    return (
        <>
            <div className={`${Style.container} p-1 flex-col`}>
                {/* stepper */}
                <Steps
                    progressDot
                    current={1}
                    items={[
                        {
                            title: 'Search Quote'
                        },
                        {
                            title: 'Enter Company Details'
                        },
                        {
                            title: 'Enter Shipment Details'
                        },
                        {
                            title: 'Proceed to Payment'
                        },
                        {
                            title: 'Initiate Payment'
                        },
                    ]}
                    style={{ fontSize: '0.8em' }}
                />

            </div>
        </>

    );
}

export default BookShipmentForm;