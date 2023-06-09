import Style from "./Shipper.module.css"
// import PageNavbar from "../../components/PageNavbar/PageNavbar"
// import Layout from "../../components/Layout/Layout"
import Tab from "./Tab/Tab"
import Button from '@mui/material/Button';
import { IconButton, Divider } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import LoopIcon from '@mui/icons-material/Loop';
import GridOnIcon from '@mui/icons-material/GridOn';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';

const Shipper = () => {
    return (
        <>
            {/* <Layout> */}
            {/* <PageNavbar checkvalue={2} h3='Billing' p='Dashboard / Billing' /> */}
            <div className={Style.shipper}>
                <div className={Style.shipperSection}>
                    {/* search bar  */}
                    <div className={Style.shipperSection_search}>
                        <div className={`${Style.search_container}`}>
                            <IconButton>
                                <SearchIcon style={{ width: '18px', height: '18px' }} />
                            </IconButton>
                            <div>
                                <input
                                    placeholder="Search Shipments."
                                    type="text"
                                    className={`${Style.search_input}`}
                                />
                            </div>
                        </div>
                        <div className={`${Style.search_filter_buttons}`}>
                            <IconButton size="small">
                                <LoopIcon style={{ width: '18px', height: '18px' }} />
                            </IconButton>
                            <IconButton size="small">
                                <FilterListIcon style={{ width: '18px', height: '18px' }} />
                            </IconButton>
                            <IconButton size="small" style={{borderRadius:'3px', backgroundColor:'black', margin:'1px', color:'white'}}>
                                <GridOnIcon style={{ width: '18px', height: '18px' }} />
                            </IconButton>
                            <IconButton size="small" style={{borderRadius:'3px', backgroundColor:'gray', margin:'1px', color:'white'}}>
                                <ViewComfyIcon style={{ width: '18px', height: '18px' }} />
                            </IconButton>
                            <Button variant="outlined" size="small">Target</Button>
                        </div>
                    </div>

                    <Divider />

                    <div className={Style.shipperSection_tabs}>
                        <Tab />
                    </div>
                </div>

                <div className={Style.shipperAnalysis}>
                    <div className={Style.shipperAnalysis_target}>
                        <div className={Style.shipperAnalysis_targetIntro}>
                            <h5>Today's Shipment Target</h5>
                            <span style={{ textAlign: 'center' }} >Daily statistics regarding your shipment targets</span>
                        </div>
                        <div className={Style.shipperAnalysis_targetGraph}>
                            <h3>63%</h3>
                            <Button variant="outlined">Generate Report</Button>
                        </div>

                        <div className={Style.shipperAnalysis_targetNo}>
                            <div className={Style.shipperAnalysis_targetNo_box}>
                                <span>Overdue</span>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div
                                        style={{ backgroundColor: 'lightblue' }}
                                        className={`${Style.shipperAnalysis_targetNo_box_border}`}></div>
                                    <h3>5</h3>
                                </div>
                            </div>

                            <div className={Style.shipperAnalysis_targetNo_box}>
                                <span>Completed</span>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div
                                        style={{ backgroundColor: 'lightgreen' }}
                                        className={`${Style.shipperAnalysis_targetNo_box_border}`}></div>
                                    <h3>298</h3>
                                </div>
                            </div>

                            <div className={Style.shipperAnalysis_targetNo_box}>
                                <span>In Progress</span>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div
                                        style={{ backgroundColor: 'lightcoral' }}
                                        className={`${Style.shipperAnalysis_targetNo_box_border}`}></div>
                                    <h3 >12</h3>
                                </div>
                            </div>

                            <div className={Style.shipperAnalysis_targetNo_box}>
                                <span>Cancelled</span>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div
                                        style={{ backgroundColor: 'lightblue' }}
                                        className={`${Style.shipperAnalysis_targetNo_box_border}`}></div>
                                    <h3>31</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </Layout> */}
        </>
    )
}

export default Shipper