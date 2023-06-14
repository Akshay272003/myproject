import Style from "./shipper.module.css"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PauseIcon from '@mui/icons-material/Pause';
import WarningIcon from '@mui/icons-material/Warning';
import Card from "../card/Card";
import WidgetsIcon from '@mui/icons-material/Widgets';
import SendIcon from '@mui/icons-material/Send';
import TopButton from "./TopButton";

const Shipper = () => {
    return (
        <>
            <div className={`${Style.shipperDashboard} p-1`}>
                <div className={Style.shipperDashboard_numbers}>
                    <TopButton
                        title="Total shipments"
                        value="156"
                        icon={<WidgetsIcon className={`${Style.shipperDashboard_numbersBox_icon}`} />}
                    />
                    <TopButton
                        title="Total shipments"
                        value="54"
                        icon={<SendIcon className={`${Style.shipperDashboard_numbersBox_icon}`} />}
                    />
                    <TopButton
                        title="Total shipments"
                        value="10"
                        icon={<WarningIcon className={`${Style.shipperDashboard_numbersBox_icon}`} />}
                    />
                    <TopButton
                        title="Total shipments"
                        value="5"
                        icon={<PauseIcon className={`${Style.shipperDashboard_numbersBox_icon}`} />}
                    />
                </div>

                <div className={Style.shipperDashboard_body}>
                        <div className={Style.shipperDashboard_bodyTransit}>
                            <div className={Style.shipperDashboard_bodyTransit_intro}>
                                <h4 style={{color:'rgb(78, 72, 98)'}}>Shipments in Transit</h4>
                                <span style={{ display: 'flex', alignItems: 'center', color: '#9aa7ad', fontSize:'0.9rem' }} >See all 
                                <ArrowForwardIosIcon style={{fontSize:'0.9rem'}} />
                                </span>
                            </div>
                            <div className={Style.shipperDashboard_bodyTransit_cards}>
                                <Card 
                                    Mode='Truck' 
                                    PlateNo='KP-502050' 
                                    RecieptNo='REF : 1202CA25152102' 
                                    Status='Transhipment Loaded' 
                                    Source='Las Vegas, CA' 
                                    Destination='Miami, US' 
                                    StatusColor='lightcoral'
                                    Progress={33}/>
                                <Card 
                                    Mode='Rail' 
                                    PlateNo='QT-562301' 
                                    RecieptNo='REF : 3202RA25112056' 
                                    Status='Transhipment Loaded' 
                                    Source='Las Vegas, CA' 
                                    Destination='Miami, US' 
                                    StatusColor='lightgreen' 
                                    Progress={80} />
                                <Card 
                                    Mode='Rail' 
                                    PlateNo='QT-562301' 
                                    RecieptNo='REF : 3202RA25112056' 
                                    Status='Transhipment Loaded' 
                                    Source='Las Vegas, CA'
                                    Destination='Miami, US' 
                                    StatusColor='lightblue'
                                    Progress={40} />
                                <Card 
                                    Mode='Rail' 
                                    PlateNo='QT-562301' 
                                    RecieptNo='REF : 3202RA25112056' 
                                    Status='Transhipment Loaded' 
                                    Source='Las Vegas, CA' 
                                    Destination='Miami, US' 
                                    StatusColor='lightpink' 
                                    Progress={20} />
                            </div>
                        </div>
                        <div className={Style.shipperDashboard_bodyMap}>
                            {/* <Map location={location} zoomLevel={17} /> */}
                            <iframe className={`${Style.google_map}`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>

            </div>
        </>
    );
}

export default Shipper;