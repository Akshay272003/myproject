
import { IconButton } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MessageIcon from '@mui/icons-material/Message';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const SubHeading = ({title}) => {
    return (
        <>
            <div className="flex justify-content-between mt-1">
                <div className="flex gap-1 items-center">
                    <h6 className="font-dark">
                        {title}
                    </h6>
                    <IconButton>
                        <KeyboardArrowUpIcon />
                    </IconButton>
                </div>

                <div className="flex gap-1">
                    <IconButton color="primary">
                        <MessageIcon />
                    </IconButton>
                    <IconButton color="success">
                        <LocalPhoneIcon />
                    </IconButton>
                </div>
            </div>
        </>
    );
}

export default SubHeading;