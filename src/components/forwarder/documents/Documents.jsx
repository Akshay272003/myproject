import {useState} from "react";
import Document from "./document/Document";
import Style from "./documents.module.css";
import { Tab, Tabs } from "@mui/material";


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}


const Documents = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className={`${Style.container} flex-col gap-1`}>

                <div className="bg-light flex justify-content-center rounded p-1">
                    <Tabs 
                        value={value} 
                        variant="scrollable"
                        onChange={handleChange}>
                            <Tab label="Document" />
                            <Tab label="Images" />
                            <Tab label="Folder" />
                    </Tabs>
                </div>

                <div>
                    <TabPanel value={value} index={0}>
                        <Document />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Images
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Folder
                    </TabPanel>
                </div>


            </div>
        </>
    );
}

export default Documents;