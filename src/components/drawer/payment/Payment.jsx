import styles from "./payment.module.css"
import ChargesDetail from "./ChargesDetail";
import { Divider } from "@mui/material";

const Payment = () => {
    return (
        <>
            <div className="flex justify-content-between px-xs">
                <span className="font-small text-dark">INV #97710037</span>
                <span className="font-light font-xs">Due 07/12/2022</span>
            </div>

            {/* due amount info  */}
            <div className={`${styles.due_container} p-1 mt-1 rounded flex justify-content-between`}>
                <div className="flex-col justify-content-center gap-half">
                    <span className="font-light font-small">
                        AMOUNT DUE
                    </span>
                    <div>
                        <span className={`{${styles.due_dollar}} font-white`}>$</span>
                        <span className={`${styles.due_payment} font-white`}>5,517.23</span>
                    </div>
                </div>
                <div>
                    <span className={`${styles.due_status} font-white font-xs`}>COMPLETED</span>
                </div>
            </div>

            {/* shipment invoice details  */}
            <div className="px-xs mt-2">
                <span className="sub-title">
                    Shipment Invoice Details
                </span>
            </div>

            <div className="mt-half flex-col gap-half p-1 bg-less-light rounded">
                <ChargesDetail
                    title="Shipping Charge"
                    quantity={1}
                    price={4000}
                />
                <ChargesDetail
                    title="Cargo Insurence"
                    quantity={1}
                    price={450}
                />
                <ChargesDetail
                    title="Transport to Warehouse"
                    quantity={1}
                    price={200}
                />
                <Divider />

                <div className="flex-col gap-1">
                    {/* sub total  */}
                    <div className="flex justify-content-between gap-1 mt-half">
                        <span className="heading">Subtotal</span>
                        <span className="heading">$4,680</span>
                    </div>
                    {/* service chrage  */}
                    <div className="flex justify-content-between gap-1">
                        <span className="font-small font-dark">
                            Service Charge
                            <span className="font-xs font-light">(5%)</span>
                        </span>
                        <span className="font-light font-title">$4,680</span>
                    </div>
                    {/* tax  */}
                    <div className="flex justify-content-between gap-1">
                        <span className="font-small font-dark">
                            Tax
                            <span className="font-xs font-light">(HST 13%)</span>
                        </span>
                        <span className="font-light font-title">$4,680</span>
                    </div>
                </div>

                <Divider />

                <div className="flex justify-content-between gap-1 mt-half">
                    <span className="heading">
                        Total
                    </span>
                    <span className="heading">
                        $ 4,546.23
                    </span>
                </div>
            </div>


            {/* payments  */}
            <div className="px-xs mt-2">
                <span className="sub-title">
                    Payments
                </span>
            </div>
            <div className="p-1 flex justify-content-between">
                <div className="flex gap-1">
                    <div className={`${styles.card_img}`}>
                        <img src="src\assets\idPass.png" alt="" />
                    </div>
                    <div className="flex-col gap-1">
                        <span className="heading">
                            American Express ****2005
                        </span>
                        <span className="font-xs font-light flex gap-half">
                            <span>
                                12/08/2022
                            </span>
                            <span>
                                3:25 AM
                            </span>
                        </span>
                    </div>
                </div>
            </div>

            <Divider />

            {/* cargo custom duty invoice  */}
            <div className="px-xs mt-2 flex justify-content-between items-center mt-1">
                <span className="sub-title">
                    Cargo Custom Duty Invoice
                </span>
                <div className={`${styles.custom_duty_status} font-xs`}>
                    Pending
                </div>
            </div>
            <div className="mt-half flex-col gap-1 p-1 bg-less-light rounded">
                <div>
                    <div className="flex justify-content-between">
                        <span className="font-small font-dark">
                            Cargo Duty
                        </span>
                        <span className="font-small font-dark">
                            TBD
                        </span>
                    </div>
                    <span className="font-xs p-half font-light">
                        Destination: Nigeria
                    </span>
                </div>

                <Divider />

                <div className="flex justify-content-between gap-1">
                    <span className="heading">Subtotal</span>
                    <span className="heading">TBD</span>
                </div>

                <div className="flex justify-content-between gap-1">
                    <span className="font-small font-dark">
                        Service Chrage
                        <span className="font-xs font-light">(5%)</span>
                    </span>
                    <span className="font-light font-title">TBD</span>
                </div>

                <Divider />
                
                <div className="flex justify-content-between gap-1">
                    <span className="heading">Total</span>
                    <span className="heading">TBD</span>
                </div>


            </div>

        </>
    );
}

export default Payment;