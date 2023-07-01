import Style from "./input_width_label.module.css";
import { Input } from "antd";

const { TextArea } = Input;

const InputWithLabel = ({ label, placeholder, isMultiline, type = "text", rows = 4, required = "false" }) => {
    return (
        <div className="flex-col gap-half flex-1 p-half">

            <label htmlFor={label} className={`${Style.label}`}>
                {label}
                {!required && <span className={Style.optional}>(Optional)</span>}
            </label>

            {isMultiline
                ?
                <TextArea autoSize={{ minRows: '2', maxRows: '4' }} className={`${Style.input}`} placeholder={placeholder} required={required} />
                :
                <Input id={label} type={type} className={`${Style.input}`} placeholder={placeholder} required={required} />
            }
        </div>
    )
}

export default InputWithLabel