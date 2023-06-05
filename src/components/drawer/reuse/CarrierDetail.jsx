const CarrierDetail = ({vessal, billOfLanding, container, bookingRef}) => {
    return (
        <div className="flex justify-content-between gap-1 mt-1">
            <div className="flex gap-2">
                <div className="flex-col gap-half">
                    <span className="font-xs font-light">VESSAL/CARRIER</span>
                    <span className="font-xs font-light">BILL OF LANDING #</span>
                    <span className="font-xs font-light">CONTAINER #</span>
                    <span className="font-xs font-light">BOOKING REF #</span>
                </div>
                <div className="flex-col gap-half">
                    <span className="font-xs font-dark">{vessal}</span>
                    <span className="font-xs font-dark">{billOfLanding}</span>
                    <span className="font-xs font-dark">{container}</span>
                    <span className="font-xs font-dark">{bookingRef}</span>
                </div>
            </div>
            <div>
                {/* company log here  */}
            </div>
        </div>
    );
}

export default CarrierDetail;