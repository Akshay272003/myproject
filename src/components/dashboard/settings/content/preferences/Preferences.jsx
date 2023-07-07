import { useState } from "react";
import MenuLogo from "../../../../../assets/menu.svg";
import { Button, TextField, MenuItem, Divider } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import Topbar from "../../topbar/Topbar";
import SideHelper from "../reusables/SideHelper";
import styles from "./preferences.module.css";
import EditForm from "./EditForm";

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


    const toggleEdit = (planDetailId, editFormId) => {
        const planDetail = document.getElementById(planDetailId);
        const editForm = document.getElementById(editFormId);

        planDetail.classList.toggle("hidden")
        editForm.classList.toggle("hidden")
    }

    return (
        <>
            <Topbar title="Global Preferences" />


            <div className={`${styles.content} flex flex-wrap gap-1 w-full`}>

                <div className={`${styles.main_container}`}>
                    <div className="bg-light p-1 rounded">
                        <h1 className="heading">
                            App Preferences
                        </h1>

                        <div className={`${styles.details_container}`}>
                            {/* languages  */}
                            <EditForm
                                title="Language"
                                data={language}
                                options={languages}
                                onChange={(e) => setLanguage(e.target.value)}
                            />

                            <Divider />

                            {/* Currency  */}
                            <EditForm
                                title="Currency"
                                data={currency}
                                options={currencies}
                                onChange={(e) => setCurrency(e.target.value)}
                            />

                            <Divider />

                            {/* Time Zone  */}
                            <EditForm
                                title="Time Zone"
                                data={timeZone}
                                options={[
                                    {
                                        value: '(GMT-05:00) Eastern Time (US & CANADA)',
                                        label: 'GMT-05:00',
                                    }
                                ]}
                                onChange={(e) => setTimeZone(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* right or info group */}
                <div className={`${styles.helper_container} flex flex-1`}>
                    <div className="flex-col gap-2 bg-light rounded p-1">
                        <SideHelper
                            iconSrc={MenuLogo}
                            heading="Your global preferences"
                            descriptions={[
                                "Language updates what you read on Kargoplex, and how we communicate with you.",
                                "Changing your currency updates how you see prices.",
                                "You can change how you get payments in your billing preferences."
                            ]} />

                    </div>

                </div>
            </div>

        </>
    );
}

export default Preferences;