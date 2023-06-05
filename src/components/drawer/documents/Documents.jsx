import styles from "./documents.module.css";
import {IconButton, Divider, Pagination} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import DocumentBox from "./DocumentBox";
import FileIcon from "../../../assets/file.svg";

const Documents = () => {

    return ( 
        <>
            <div>

                {/* search bar  */}
                <div className="flex justify-content-between items-center mb-1">
                    <div className="flex items-center">
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                        <div>
                            <input 
                                placeholder="Search documents."
                                type="text" 
                                className={`${styles.search_input}`}
                            />
                        </div>
                    </div>
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                </div>

                <Divider />

                {/* documents  */}
                <div className="flex gap-1 flex-wrap mt-1">
                    <DocumentBox
                        title="Bill of Lading"
                        date="2022-11-22"
                        icon={FileIcon}
                    />
                    <DocumentBox
                        title="Your policy agreement"
                        date="2022-11-22"
                        icon={FileIcon}
                    />
                    <DocumentBox
                        title="Customs Papers"
                        date="2022-11-22"
                        icon={FileIcon}
                    />
                    <DocumentBox
                        title="Customs Quote"
                        date="2022-11-22"
                        icon={FileIcon}
                    />
                    <DocumentBox
                        title="Report Analytics"
                        date="2022-11-22"
                        icon={FileIcon}
                    />
                    <DocumentBox
                        title="Shipment Quote from jecmeck"
                        date="2022-11-22"
                        icon={FileIcon}
                    />
                    <DocumentBox
                        title="Shipment Quote from movehub"
                        date="2022-11-22"
                        icon={FileIcon}
                    />
                </div>

                <div className="mt-2 flex justify-content-center">
                    <Pagination count={2} />
                </div>

            </div>
        </>
     );
}
 
export default Documents;