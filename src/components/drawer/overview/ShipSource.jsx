import styles from "./overview.module.css";

const ShipSource = ({title, placeName, flag, isFrom}) => {
    return (
        <div  className="flex gap-1">
            <div className={`${styles.blue_circle} ${isFrom ? styles.is_from : ''}`}>

            </div>
            <div>
                <span className="font-xs font-light">{title}</span>
                <div className="flex items-center gap-half">
                    <div>
                        {/* flag emoji  */}
                        {/* &#127470;&#127475; */}
                        {flag}
                    </div>
                    <span className="font-small font-dark">
                        {placeName}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ShipSource;