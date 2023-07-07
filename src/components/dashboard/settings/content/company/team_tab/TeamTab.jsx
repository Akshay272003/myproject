import styles from "./team_tab.module.css";
import EmployeeLink from "./EmployeeLink";
import { Divider, IconButton } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const TeamTab = () => {
    return (
        <>
            <div className={`${styles.main_container} w-full flex-col gap-2 bg-light rounded`}>
                <div className={`flex-col w-full`}>
                    <div className="mb-2">
                        <div className="flex justify-content-between items-center">
                            <h6 className="heading">Employees</h6>
                            <IconButton aria-label="Options">
                                <MoreHorizIcon fontSize="small" />
                            </IconButton>
                        </div>
                        <p className="sub-title mt-half">As admin, you can add or remove employees or manage access.</p>
                    </div>
                    <div className="flex-col gap-half">
                        <EmployeeLink name="Shanelle Wynn" avatar="src\assets\idPass.png" role="UI Engineer, Apple Inc" />
                        <Divider />
                        <EmployeeLink name="Shanelle Wynn" avatar="src\assets\idPass.png" role="UI Engineer, Apple Inc" />
                        <Divider />
                        <EmployeeLink name="Shanelle Wynn" avatar="src\assets\idPass.png" role="UI Engineer, Apple Inc" />
                        <Divider />
                        <EmployeeLink name="Shanelle Wynn" avatar="src\assets\idPass.png" role="UI Engineer, Apple Inc" />
                        <Divider />
                        <EmployeeLink name="Shanelle Wynn" avatar="src\assets\idPass.png" role="UI Engineer, Apple Inc" />
                        <Divider />
                        <EmployeeLink name="Shanelle Wynn" avatar="src\assets\idPass.png" role="UI Engineer, Apple Inc" />
                        <Divider />
                        <EmployeeLink name="Shanelle Wynn" avatar="src\assets\idPass.png" role="UI Engineer, Apple Inc" />
                        <Divider />
                        <EmployeeLink name="Shanelle Wynn" avatar="src\assets\idPass.png" role="UI Engineer, Apple Inc" />
                        <Divider />
                        <EmployeeLink name="Shanelle Wynn" avatar="src\assets\idPass.png" role="UI Engineer, Apple Inc" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default TeamTab;