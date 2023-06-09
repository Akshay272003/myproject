import React from 'react'
import Style from "./Card.module.css"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { fontSize } from '@mui/system';


const Card = ({ Mode, PlateNo, RecieptNo, Status, Source, Destination, StatusColor, Progress }) => {
    return (
        <>
            <div className={Style.card}>

                <div className={Style.card_one}>
                    <span>{PlateNo}</span>
                    <span style={{ display: 'flex', alignItems: 'center', color: '#9aa7ad' }}  >View Details
                        <ArrowForwardIosIcon style={{ fontSize: '0.7rem' }} />
                    </span>
                </div>

                <div className={Style.card_two}>
                    <div>
                        <span style={{ fontSize: '0.8rem' }}>
                            {Mode}
                        </span>
                        {/* <img style={{ height: '40px', width: '70px' }} src="" alt="" /> */}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'column', gap: '5px' }} >
                        <p style={{ fontSize: '0.7rem' }}>{RecieptNo}</p>
                        <span style={{ display: 'flex', alignItems: 'center', color: '#9aa7ad', fontSize: '0.7rem' }} >{Status}</span>
                    </div>
                </div>

                <div >
                    <div className={`${Style.progress}`}>
                        <div
                            className={`${Style.progress_bar}`}
                            style={{
                                translate: `${Progress - 100}%`,
                                backgroundColor: StatusColor
                            }}>
                        </div>
                    </div>
                    <div className={Style.card_three}>
                        <span>{Source}</span>
                        <span style={{ color: 'black' }} >{Destination}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card