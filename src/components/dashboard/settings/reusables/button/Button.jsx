import Style from "./button.module.css";
import { Tooltip } from "@mui/material";

const CustomButton = ({ children, icon, color, onClick, style, tooltip }) => {
    return (
        <Tooltip title={tooltip}>
            <button
                onClick={onClick}
                className={Style.btn}
                style={{
                    color: color ? color : '#2f358b',
                    '--before-color': color ? color : "#2f358b",
                    fontWeight: '600',
                    ...style
                }}

            >
                {icon}
                <span>{children}</span>
            </button>
        </Tooltip>
    )
}

export default CustomButton