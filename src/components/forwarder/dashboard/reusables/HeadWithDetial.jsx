import Style from "./reusables.module.css";
import {Divider} from "antd";

const HeadWithDetail = ({heading, data}) => {
    return ( 
        <>
            <div className="flex-col flex-1">
                <h5 className={`${Style.sub_heading} heading mb-0`}>{heading}</h5>

                <Divider style={{margin:'0'}} />

                <div className="flex-col mt-1">
                    {data && data.map(option => (
                        <div key={option.label} className="flex-col mb-1">
                            <span className="sub-title">
                                {option.label}
                            </span>
                            <span className={`${Style.detail} font-dark`}>
                                {option.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </>
     );
}
 
export default HeadWithDetail;