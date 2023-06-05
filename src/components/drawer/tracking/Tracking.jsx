import CarrierDetail from "../reuse/CarrierDetail";

const Tracking = () => {
    return ( 
        <>
            <CarrierDetail
                vessal={"MSC"}
                billOfLanding={"MEDUMT146799"}
                container={"CXDU2004500"}
                bookingRef={"193CA0679879"}
            />
            <div>
                {/* tracking here  */}
            </div>
        </>
     );
}
 
export default Tracking;