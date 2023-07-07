import ActivityToggle from "./ActivityToggle";
import styles from "./resuables.module.css";
import {Divider} from "@mui/material"

const BoxToggleMenus = ({heading, description, options}) => {
    return (
        <>
            <div className={`${styles.preferred_container} flex flex-col gap-1 rounded`}>
                <div>
                    <h6 className="heading">{heading}</h6>
                    <p className={`sub-title mt-half`}>{description}</p>
                </div>
                {options && options.map(label => (
                    <div key={label}>
                        <Divider />
                        <div className="mt-1">
                            <ActivityToggle label={label} />

                        </div>
                    </div>
                ))}
                
            </div>
        </>
    );
}

export default BoxToggleMenus;