import Card from "../module_card/Card";
import Style from "./checkout.module.css";
import {Button} from "@mui/material";

const Checkout = () => {
    return ( 
        <div className={Style.container}>
            <div className={Style.main}>
                <p className={Style.heading}>
                    Checkout Page
                </p>

                <div className={Style.content}>
                    <Card />

                    <div className={Style.payment_container}>
                        <div className={Style.price_container}>
                            <span className={Style.offer_price}>&#x20B9;2000</span>
                            <span className={Style.original_price}>&#x20B9;4000</span>
                        </div>

                        <Button
                            variant="contained"
                            style={{borderRadius:'20px'}}
                        >
                            Pay now
                        </Button>

                        <div className={Style.payment_caption}>
                            <span>100% Secure payment using razorpay</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Checkout;