import { useState } from "react";
import MenuLogo from "../../../assets/menu.svg";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import EditIcon from '@mui/icons-material/Edit';
import "./style.css"
import Topbar from "../../topbar/Topbar";


const languages = [
    {
        value: 'English',
        label: 'English'
    },
    {
        value: 'Hindi',
        label: 'Hindi'
    },
    {
        value: 'Spanish',
        label: 'Spanish'
    }
]
const currencies = [
    {
        value: 'USD',
        label: '$ USD',
    },
    {
        value: 'EUR',
        label: '€ EUR',
    },
    {
        value: 'BTC',
        label: '฿ BTC',
    },
    {
        value: 'JPY',
        label: '¥ JPY',
    },
];
const timezones = [
    {
        value: '(GMT-05:00) Eastern Time (US & CANADA)',
        label: 'GMT-05:00',
    }
];

const Preferences = () => {

    const [language, setLanguage] = useState("English");
    const [currency, setCurrency] = useState("USD");
    const [timeZone, setTimeZone] = useState("(GMT-05:00) Eastern Time (US & CANADA)")


    const toggleEdit = async (planDetailId, editFormId) => {
        const planDetail = document.getElementById(planDetailId);
        const editForm = document.getElementById(editFormId);

        planDetail.classList.toggle("hidden")
        editForm.classList.toggle("hidden")
    }

    return (
        <>
            <Topbar title="Global Preferences" />
            <div className="content">
                <div className="main-content">

                    <div className="left-container">

                        <h1 className="heading">
                            App Preferences
                        </h1>

                        <div className="details-container">
                            {/* languages  */}
                            <div className="detail">

                                <div className="detail-head">
                                    <span className="sub-title">Language</span>

                                    <Button
                                        startIcon={<EditIcon fontSize="small" />}
                                        onClick={() => toggleEdit("language-detail", "language-edit-form")}
                                        size="small" style={{ textTransform: 'none' }}>
                                        Edit
                                    </Button>
                                </div>

                                <div id="language-detail" className="heading">
                                    {language}
                                </div>
                                {/* edit form  */}
                                <div id="language-edit-form" className="hidden">
                                    <div className="edit-form">
                                        <TextField
                                            id="select-language"
                                            select
                                            label="Language"
                                            size="small"
                                            value={language}
                                            onChange={(e) => setLanguage(e.target.value)}
                                        >
                                            {languages.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>

                                        <Button
                                            onClick={() => toggleEdit("language-detail", "language-edit-form")} variant="outlined" size="small">Save</Button>
                                    </div>

                                </div>

                            </div>

                            <Divider />

                            {/* Currency  */}
                            <div className="detail">

                                <div className="detail-head">
                                    <span className="sub-title">Currency</span>

                                    <Button
                                        startIcon={<EditIcon fontSize="small" />}
                                        onClick={() => toggleEdit("currency-detail", "currency-edit-form")}
                                        size="small" style={{ textTransform: 'none' }}
                                    >Edit
                                    </Button>
                                </div>

                                <div id="currency-detail" className="heading">
                                    {currency}
                                </div>
                                {/* edit form  */}
                                <div id="currency-edit-form" className="hidden">
                                    <div className="edit-form">
                                        <TextField
                                            id="select-currency"
                                            select
                                            label="Currency"
                                            size="small"
                                            value={currency}
                                            onChange={(e) => setCurrency(e.target.value)}
                                        >
                                            {currencies.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>

                                        <Button onClick={() => toggleEdit("currency-detail", "currency-edit-form")} variant="outlined" size="small">Save</Button>
                                    </div>

                                </div>

                            </div>

                            <Divider />

                            {/* Time Zone  */}
                            <div className="detail">

                                <div className="detail-head">
                                    <span className="sub-title">Time Zone</span>

                                    <Button
                                        startIcon={<EditIcon fontSize="small" />}
                                        onClick={() => toggleEdit("timezone-detail", "timezone-edit-form")}
                                        size="small" style={{ textTransform: 'none' }}>
                                        Edit
                                    </Button>
                                </div>

                                <div id="timezone-detail" className="heading">
                                    {timeZone}
                                </div>
                                {/* edit form  */}
                                <div id="timezone-edit-form" className="hidden">
                                    <div className="edit-form">
                                        <TextField
                                            id="select-timezone"
                                            select
                                            label="Time Zone"
                                            size="small"
                                            value={timeZone}
                                            onChange={(e) => setTimeZone(e.target.value)}
                                        >
                                            {timezones.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>

                                        <Button onClick={() => toggleEdit("timezone-detail", "timezone-edit-form")} variant="outlined" size="small">Save</Button>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                    {/* right or info group */}
                    <div className="right-container flex-col">
                        <img src={MenuLogo} alt="" />

                        <h6 className="heading right-container-head">Your global preferences</h6>

                        <p className="sub-title right-container-desc">
                            Language updates what you read on Kargoplex, and how we communicate with you.
                        </p>

                        <p className="sub-title right-container-desc">
                            Changing your currency updates how you see prices.
                            <br />
                            You can change how you get payments in your billing preferences.
                        </p>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Preferences;