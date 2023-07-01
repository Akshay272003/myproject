import Style from "./quotes.module.css";
import BreakdownTable from "../../../../reusables/breakdown_table/BreakdownTable";
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';

const Quotes = () => {
    return (
        <div className={`${Style.container} flex-col gap-2 p-2`}>
            <BreakdownTable
                heading={`200000, Shangai > Long Beach, CA`}
                headIcon={<DirectionsBoatIcon style={{ fontSize: '1em' }} />}
                logo="src\assets\temp-logo.png"
                tableHeaders={["Fee code", "Fee name", "Comment", "Units", "Unit price", "Amount", "Final amount"]}
                tableData={
                    [
                        ["ODOC", "Documentation charges at origin", "/hbi", '1', '7.34 USD', '7.34 USD', '7.34'],
                        ["ODOC", "Documentation charges at origin", "/hbi", '1', '7.34 USD', '7.34 USD', '7.34'],
                        ["ODOC", "Documentation charges at origin", "/hbi", '1', '7.34 USD', '7.34 USD', '7.34'],
                        ["ODOC", "Documentation charges at origin", "/hbi", '1', '7.34 USD', '7.34 USD', '7.34'],
                    ]
                }
            />

            <BreakdownTable
                heading={`200000, Shangai > Long Beach, CA`}
                headIcon={<DirectionsBoatIcon style={{ fontSize: '1em' }} />}
                logo="src\assets\temp-logo.png"
                tableHeaders={["Fee code", "Fee name", "Comment", "Units", "Unit price", "Amount", "Final amount"]}
                tableData={
                    [
                        ["ODOC", "Documentation charges at origin", "/hbi", '1', '7.34 USD', '7.34 USD', '7.34'],
                        ["ODOC", "Documentation charges at origin", "/hbi", '1', '7.34 USD', '7.34 USD', '7.34'],
                        ["ODOC", "Documentation charges at origin", "/hbi", '1', '7.34 USD', '7.34 USD', '7.34'],
                        ["ODOC", "Documentation charges at origin", "/hbi", '1', '7.34 USD', '7.34 USD', '7.34'],
                    ]
                }
            />

        </div>
    )
}

export default Quotes