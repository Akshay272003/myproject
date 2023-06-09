import Style from "./shipper.module.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const TopButton = ({ value, title, icon }) => {
    return (
        <>
            <button className={Style.shipperDashboard_numbersBox}>

                <div style={{ display: 'flex', flexDirection: 'column' }}>

                    <span style={{fontSize:'0.7rem'}}>{title}</span>

                    <div style={{ display: 'flex', gap: "10px", alignItems: 'center', marginTop: '0.4em' }} >
                        {icon}
                        <p style={{fontSize:'1.3rem'}}>{value}</p>
                    </div>

                </div>
                <ArrowForwardIosIcon />
            </button>
        </>
    );
}

export default TopButton;