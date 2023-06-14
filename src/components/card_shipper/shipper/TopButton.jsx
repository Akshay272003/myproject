import Style from "./shipper.module.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const TopButton = ({ value, title, icon }) => {
    return (
        <>
            <button className={Style.shipperDashboard_numbersBox}>

                <div style={{ display: 'flex', flexDirection: 'column' }}>

                    <span style={{fontSize:'0.9rem'}}>{title}</span>

                    <div style={{ display: 'flex', gap: "10px", alignItems: 'center', marginTop: '0.4em' }} >
                        {icon}
                        <span style={{fontSize:'2.3rem', fontWeight:'700'}}>{value}</span>
                    </div>

                </div>
                <ArrowForwardIosIcon />
            </button>
        </>
    );
}

export default TopButton;