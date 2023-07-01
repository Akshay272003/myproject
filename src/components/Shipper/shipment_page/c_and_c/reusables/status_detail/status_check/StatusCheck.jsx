import Style from "./status_check.module.css";

const StatusCheck = ({ isChecked, label }) => {
    return (
        <div className="flex gap-1 items-center">
            <div className={`${Style.check_circle} ${isChecked && Style.checked}`}></div>
            <span className={`${Style.label}`}>{label}</span>
        </div>
    )
}

export default StatusCheck