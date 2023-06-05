const ShipSource = ({title, placeName, flag}) => {
    return (
        <>
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
        </>
    );
}

export default ShipSource;