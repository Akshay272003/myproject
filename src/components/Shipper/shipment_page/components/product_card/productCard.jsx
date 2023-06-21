import { useState, useEffect } from "react";
import Style from "./product_card.module.css";
import FromTo from "./from_to/FromTo";
import { Rating, IconButton, Button, Divider } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import InnerTab from "./tabs/InnerTab";

const ProductCard = ({ id }) => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const elem = document.getElementById(`more-product-details-${id}`)
        if (isOpen === false) {
            elem.classList.add(Style.hidden);
        }
        else {
            elem.classList.remove(Style.hidden);
        }
    }, [isOpen])

    return (

        <div className={`${Style.product_card} px-1 py-half bg-light rounded`}>


            <div className={`flex flex-wrap gap-1`}>

                <div className={`bg-less-light p-1 rounded flex-col`} style={{ gap: '0.3em', height: 'fit-content' }}>
                    <span className="font-dark font-title">Route</span>
                    <FromTo
                        title="PLACE OF LOADING"
                        placeName="Indore, India"
                        flag="&#127470;&#127475;"
                        isFrom={true}
                    />
                    <FromTo
                        title="PLACE OF DISCHARGE"
                        placeName="Dewas, India"
                        flag="&#127470;&#127475;"
                    />
                </div>

                <div className="flex-col flex-1">
                    <span className="font-dark font-title mt-1">Transit Time</span>
                    <span className="font-light font-small mt-1">25-30 days (port to port 15 Days)</span>
                    <div className="flex flex-wrap gap-1 items-center mt-half">
                        <div>
                            <img src="src\assets\temp-logo.png" alt="" />
                        </div>
                        <strong className="font-title">Eshipper Private Ltd.</strong>
                        {/* rating */}
                        <div className="flex gap-half">
                            <Rating
                                name="rating"
                                value={4} readOnly
                                style={{ fontSize: '12px' }}
                            />
                            <span className="font-xs font-light">+4</span>
                        </div>
                    </div>
                    <div className="flex justify-content-center">
                        {!isOpen &&
                            <IconButton size="small" onClick={() => setIsOpen(state => !state)}>
                                <KeyboardArrowDownIcon />
                            </IconButton>
                        }
                    </div>
                </div>

                <div className={`${Style.product_price} flex-col gap-half p-1 justify-content-center items-center`}>
                    <h3 className="font-dark">$1,002 <sup>29</sup></h3>
                    <Button style={{ textTransform: 'none', backgroundColor: '#3B44B1' }} size="small" variant="contained">
                        Select
                    </Button>
                    <span className="sub-title mt-half">Expires: Aug 31, 2022</span>
                </div>
            </div>
            {/* more details  */}
            <div id={`more-product-details-${id}`} className={`${Style.hidden} ${Style.more_product_details}`}>
                <Divider style={{ marginTop: '2em' }} />
                <div className="flex-col gap-1 py-1">
                    <div>
                        <InnerTab />
                    </div>

                    <div className="flex justify-content-center">
                        <IconButton size="small" onClick={() => setIsOpen(state => !state)}>
                            <KeyboardArrowUpIcon />
                        </IconButton>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProductCard;