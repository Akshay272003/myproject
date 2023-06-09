import React, { useEffect, useState } from 'react'
// import { isAuthenticated } from '../../../controllers/auth/signup'
import { Link, useNavigate } from 'react-router-dom'


import Style from "./shipper.module.css"
import Button from '@mui/material/Button';
// import Layout from '../../Layout/Layout';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Map from "../../Map/Map"
// import PageNavbar from '../../PageNavbar/PageNavbar';
import Card from "../../Card/Card"
// import { get_all_requests_for_user } from '../../../controllers/shipper/shipper';
import Modal from '@mui/material/Modal';

// imported by Akshay
import TopButton from "./TopButton";



const ShipperDashboard = () => {
    // const {id,name,token } = isAuthenticated()
    const navigate = useNavigate();
    const [currentDate, setCurrentDate] = useState(new Date());
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);



    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
    }






    const [error, setError] = useState()
    const [data, setData] = useState([])
    // const init = async () => {
    //   await get_all_requests_for_user(token, id).then(data => {
    //     if (data.error) {
    //       setError(data.error)
    //     }
    //     else {
    //       setData(data)
    //     }
    //   })
    // }


    // useEffect(() => {
    //   init()
    // }, [])
    return (
        // <Layout>

        <div className={Style.shipperDashboard}>

            <PageNavbar checkvalue={1} h3={`Hello, ${name} !`} p={formattedDate} />
            <div className={Style.shipperDashboard_numbers}>
                <TopButton
                    title="Total shipments"
                    value="156"
                    icon={<WidgetsIcon className={`${Style.shipperDashboard_numbersBox_icon}`} />}
                />
                <TopButton
                    title="Total shipments"
                    value="156"
                    icon={<WidgetsIcon className={`${Style.shipperDashboard_numbersBox_icon}`} />}
                />
                <TopButton
                    title="Total shipments"
                    value="156"
                    icon={<WidgetsIcon className={`${Style.shipperDashboard_numbersBox_icon}`} />}
                />
                <TopButton
                    title="Total shipments"
                    value="156"
                    icon={<WidgetsIcon className={`${Style.shipperDashboard_numbersBox_icon}`} />}
                />
            </div>

            <div className={Style.shipperDashboard_body}>
                    <div className={Style.shipperDashboard_bodyTransit}>
                        <div className={Style.shipperDashboard_bodyTransit_intro}>
                            <h4 style={{ color: 'rgb(78, 72, 98)' }}>Shipments in Transit</h4>
                            <span style={{ display: 'flex', alignItems: 'center', color: '#9aa7ad', fontSize: '0.9rem' }} >See all
                                <ArrowForwardIosIcon style={{ fontSize: '0.9rem' }} />
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
                                Progress={33} />
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
                    </div>
                </div>
        </div>


        // </Layout>


































    )
}

export default ShipperDashboard





{/* {kyc_verification_status === "Approved" && <>
         
           <button onClick={()=>{navigate('/quote-management')}}>Shipment</button>{' '}
        </>}
        {kyc_verification_status === "Not Verified" && <>
            Upload documents to verify your kyc from profile section
        </>}
        {kyc_verification_status === "Approved" && <>
           <p style={{color:"green"}}>Congratulation!!! your kyc has been Approved</p>
        </>}
        {kyc_verification_status === "In Review" && <>
           <p style={{color:"yellow"}}>KYC is under process</p>
        </>}
        {kyc_verification_status === "Rejected" && <>
            <p style={{color:"red"}}>Your Kyc was Rejected for more details check your profile</p>
        </>}
       
        <br/>
        Welcome {name}
        <br/>
        {role}
        <br/>
        {kyc_verification_status === "Approved" && <>
           <Link to='/quote-management'>Quote Management</Link>
        </>} */}