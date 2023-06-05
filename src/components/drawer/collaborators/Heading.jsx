import {Divider} from "@mui/material";


const Heading = ({title, icon}) => {
    return ( 
        <>
            <div className="flex gap-half font-light items-center">
                {icon}
                <h6 className="">
                    {title}
                </h6>
            </div>
            <Divider />
        </>
     );
}
 
export default Heading;