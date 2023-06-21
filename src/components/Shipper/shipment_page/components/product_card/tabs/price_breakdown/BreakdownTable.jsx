
import Style from "./price_breakdown.module.css";
import { Divider } from "@mui/material";

const BreakdownTable = ({ heading, logo, tableHeaders, tableData, headIcon }) => {
    return (
        <div className={`flex-col gap-half`}>
            <div className="flex gap-1 justify-content-between items-center">
                <h3 className="font-dark flex items-center gap-half">{headIcon} {heading}</h3>
                <img src={logo} />
            </div>
            <Divider />
            {/* table headers  */}
            <div className="flex gap-1">
                {tableHeaders && tableHeaders.map((header, i) => (
                    <div key={i} className="font-small font-dark flex-1">{header}</div>
                ))}
            </div>
            <Divider />

            {/* table data  */}
            {tableData && tableData.map((row, i) => (
                <div key={i}>
                    <div className="flex gap-1 py-half">
                        {row.map((data, i) => (
                            <div key={i} className="w-full">
                                <div className="font-small font-light flex-1">{data}</div>
                            </div>
                        ))}
                    </div>
                    <Divider />
                </div>
            ))}
            <div className="flex justify-content-end">
                <h5>Subtotal USD 14.20</h5>
            </div>
        </div>
    );
}

export default BreakdownTable;