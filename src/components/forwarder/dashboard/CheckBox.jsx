import {Checkbox} from "@mui/material";

const CheckBox = ({label}) => {
    return ( 
        <div className="flex gap-half items-center">
            <Checkbox id={label} size="small" />
            <label className="sub-title" htmlFor={label}>{label}</label>
        </div>
     );
}
 
export default CheckBox;