import Style from "./header.module.css";
import { Dropdown, Button } from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WidgetsIcon from '@mui/icons-material/Widgets';

const items = [
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="#">
                item 1
            </a>
        ),
        key: '0',
    },
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="#">
                item 2
            </a>
        ),
        key: '1',
    }
]

const Header = () => {

    const toggleDropdown = () => {
        const dropdown = document.getElementById("dropdown");
        dropdown.classList.toggle(Style.hide_dropdown)
    }

    return (
        <div className={`${Style.nav_bar}`}>

            <div className={`${Style.right_container}`}>

                <div className={`${Style.brand_container}`}>
                    {/* logo here */}
                    <img src="#" style={{ width: '30px', height: '30px' }} />
                    <h2 style={{ margin: '0' }}>Probehave</h2>
                </div>

                {/* desktop nav  */}
                <div className={`${Style.nav_links} ${Style.desktop_header}`}>
                    <a href="#"><span className={Style.nav_link}>Home</span></a>

                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <a onClick={(e) => e.preventDefault()} style={{ cursor: 'pointer' }}>
                            <div className={`${Style.nav_dropdown}`} >
                                <span className={Style.nav_link}>Products</span>
                                <DownOutlined style={{ color: 'gray', fontSize: '10px' }} />
                            </div>
                        </a>
                    </Dropdown>
                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <a onClick={(e) => e.preventDefault()} style={{ cursor: 'pointer' }}>
                            <div className={`${Style.nav_dropdown}`} >
                                <span className={Style.nav_link}>Resources</span>
                                <DownOutlined style={{ color: 'gray', fontSize: '10px' }} />
                            </div>
                        </a>
                    </Dropdown>


                    <a href="#"><span className={Style.nav_link}>Pricing</span></a>
                </div>
            </div>

            {/* user actions  */}
            <div className={`${Style.desktop_header} ${Style.user_actions}`}>
                <Button className={`${Style.login_btn}`}>
                    Log in
                </Button>
                <Button className={`${Style.signup_btn}`}>
                    Sign up
                </Button>
            </div>

            {/* mobile navbar  */}
            <div className={`${Style.mobile_header}`}>
                <Button
                    style={{ border: 'none', boxShadow: 'none' }}
                    onClick={toggleDropdown}
                ><MenuOutlined /></Button>
            </div>

            <div id="dropdown" className={`${Style.dropdown} ${Style.hide_dropdown}`}>

                <a href="#" style={{ display: 'flex', gap: '1em', alignItems: 'center' }}>
                    <HomeIcon fontSize="small" style={{ color: 'purple' }} />
                    <span className={`${Style.nav_link}`}>Home</span>
                </a>
                <Dropdown
                    menu={{ items, }}
                    trigger='click'
                >
                    <a onClick={(e) => e.preventDefault()} style={{ cursor: 'pointer' }}>
                        <div className={`${Style.nav_dropdown}`} >
                            <CategoryIcon fontSize="small" style={{ color: 'purple' }} />
                            <span className={`${Style.nav_link}`}>Products</span>
                            <DownOutlined style={{ color: 'gray', fontSize: '10px' }} />
                        </div>
                    </a>
                </Dropdown>
                <Dropdown
                    menu={{ items, }}
                    trigger='click'
                >
                    <a onClick={(e) => e.preventDefault()} style={{ cursor: 'pointer' }}>
                        <div className={`${Style.nav_dropdown}`} >
                            <WidgetsIcon fontSize="small" style={{ color: 'purple' }} />
                            <span className={`${Style.nav_link}`}>Resources</span>
                            <DownOutlined style={{ color: 'gray', fontSize: '10px' }} />
                        </div>
                    </a>
                </Dropdown>
                <a href="#" style={{ display: 'flex', gap: '1em', alignItems: 'center' }}>
                    <AttachMoneyIcon fontSize="small" style={{ color: 'purple' }} />
                    <span className={`${Style.nav_link}`}>Pricing</span>
                </a>

                <div>
                    <Button className={`${Style.login_btn}`}>
                        Log in
                    </Button>
                </div>
                <div>
                    <Button className={`${Style.signup_btn}`}>
                        Sign up
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Header;