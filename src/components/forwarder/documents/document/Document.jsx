import DocCard from "./DocCard";
import { IconButton, TextField, Pagination, Divider } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import Style from "./document.module.css"
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';


const filterOptions = ["All", "Pdf", "Images"];

const Document = () => {

    const toggleFilter = () => {
        const ele = document.getElementById("filter-dropdown");
        ele.classList.toggle(Style.hidden);
    }

    return (
        <div className="flex-col gap-2">

            {/* search and filter */}
            <div className="px-1 flex gap-1 justify-content-between items-center mt-1">
                <div className="flex gap-1">
                    <IconButton size="small">
                        <SearchIcon />
                    </IconButton>
                    <TextField
                        label="search documents."
                        size="small"
                    />
                </div>
                <div className="relative" >
                    <IconButton size="small" onClick={toggleFilter}>
                        <FilterListIcon />
                    </IconButton>

                    <div id="filter-dropdown" className={`${Style.filter_dropdown} ${Style.hidden} flex-col bg-light`}>
                        {filterOptions.map(option => (
                            <div key={option} className={`${Style.filter_options} p-half`} onClick={toggleFilter}>
                                <span className="font-small">{option}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-1 ">
                <DocCard
                    name="document_2022.doc"
                    size="14"
                    lastUpdated="three days ago"
                />
                <DocCard
                    name="document_2022.doc"
                    size="14"
                    lastUpdated="three days ago"
                />
                <DocCard
                    name="docugsad.doc"
                    size="14"
                    lastUpdated="three days ago"
                />
                <DocCard
                    name="document_2022.doc"
                    size="14"
                    lastUpdated="three days ago"
                />
                <DocCard
                    name="document_2022.doc"
                    size="14"
                    lastUpdated="three days ago"
                />
                <DocCard
                    name="document_2022.doc"
                    size="14"
                    lastUpdated="three days ago"
                />
            </div>
            
            {/* pagination */}
            <div className="flex justify-content-end mt-1 mb-1">
                <Pagination count={10} color="primary" />
            </div>

            {/* file upload */}
            <div className="flex-col gap-1 justify-content-center bg-light p-2">
                {/* drag and drop  */}
                <div className={`${Style.drag_drop_container} p-2 rounded flex-col justify-content-center items-center gap-2`}>
                        <div className={`${Style.file_upload_icon} font-light`}>
                            <FileUploadOutlinedIcon />
                        </div>
                        <p className="font-light text-center">
                            Drag some images to see the animated effects!
                        </p>
                </div>

                <Divider />

                <div className="bg-less-light p-1 flex-col items-center gap-1">
                    <span className="font-light font-title">UPLOADED FILES</span>
                    <span className="font-small font-dark text-center">
                        Uploaded demo images previews will appear here!
                    </span>
                </div>
            </div>

        </div>
    );
}

export default Document;