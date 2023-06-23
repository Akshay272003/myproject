import { useState } from 'react';
import Style from "./tabs.module.css";


const TabsNav = () => {
    const [value, setValue] = useState(1);

    return (
        <>
            <div className={`flex bg-light p-half rounded ${Style.container}`}>
                {/* button group */}
                <button
                    onClick={() => setValue(1)}
                    className={value === 1 ? `${Style.btn} ${Style.active}` : Style.btn}
                >
                    <div className={Style.btn_background}></div>
                    <span>Cheapest</span>
                </button>
                <button
                    onClick={() => setValue(2)}
                    className={value === 2 ? `${Style.btn} ${Style.active}` : Style.btn}
                >
                    <div className={Style.btn_background}></div>
                    <span>Best Value</span>
                </button>
                <button
                    onClick={() => setValue(3)}
                    className={value === 3 ? `${Style.btn} ${Style.active}` : Style.btn}
                >
                    <div className={Style.btn_background}></div>
                    <span>Quickest</span>
                </button>
            </div>
        </>
    );
}

export default TabsNav;