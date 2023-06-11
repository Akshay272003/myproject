import Style from "./dashboard.module.css";
import TransitDetail from "./TransitDetail";
import Checkbox from "./CheckBox";
import { IconButton, TextField, Pagination } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Dashboard = () => {

  const toggleFilter = () => {
    const ele = document.getElementById("filter");
    ele.classList.toggle(Style.hidden);
  }

  return (
    <div className="flex-col gap-2 p-2">

      {/* filter options  */}
      <div className={`${Style.shadow} flex-col bg-light rounded p-1`}>
        <div className="flex justify-content-end">
          <IconButton onClick={toggleFilter}>
            <FilterListIcon />
          </IconButton>
        </div>
        <div id="filter" className={`${Style.hidden} flex-col gap-1 mt-1 ${Style.filter}`}>
          {/* request id  */}
          <div>
            <TextField
              size="small"
              label="Request Id"
              variant="standard"
            />
          </div>
          {/* filter details  */}
          <div className="flex flex-wrap gap-2">
            {/* shipping route  */}
            <div className="flex-col gap-1">
              <span className="sub-title">
                SHIPPING ROUTE
              </span>
              <div className="relative">
                <div className="flex gap-1 bg-less-light ">
                  <h4 className="p-half">A</h4>
                  <input className={`${Style.route_input}`} type="text" placeholder="City, port" />
                </div>
                <div className="flex gap-1 bg-less-light ">
                  <h4 className="p-half">B</h4>
                  <input className={`${Style.route_input} `} type="text" placeholder="City, port" />
                </div>
                <IconButton className={`${Style.swap_btn}`}>
                  <SwapVertIcon />
                </IconButton>
              </div>
            </div>
            {/* types of shipments  */}
            <div className="flex-col gap-1 flex-1">
              <span className="sub-title">
                TYPE OF SHIPMENTS
              </span>

              <div className="flex flex-wrap gap-2 flex-1">

                <div className="flex-col flex-1">
                  <Checkbox label="All" />
                </div>

                <div className="flex-col flex-1">
                  <div className="bg-less-light p-half flex gap-half items-center">
                    <div>
                      i
                    </div>
                    <span className="font-small">Sea</span>
                    <KeyboardArrowDownIcon />
                  </div>
                  <Checkbox label="FCL" />
                  <Checkbox label="LCL" />
                  <Checkbox label="BULK" />
                </div>

                <div className="flex-col flex-1">
                  <div className="bg-less-light p-half flex gap-half items-center">
                    <div>
                      i
                    </div>
                    <span className="font-small">Land</span>
                    <KeyboardArrowDownIcon />
                  </div>
                  <Checkbox label="FCL" />
                  <Checkbox label="LCL" />
                  <Checkbox label="BULK" />
                </div>

                <div className="flex-col flex-1">
                  <div className="bg-less-light p-half flex gap-half items-center">
                    <div>
                      i
                    </div>
                    <span className="font-small">Air</span>
                    <KeyboardArrowDownIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${Style.shadow} flex-col bg-light rounded p-1`}>
            <TransitDetail
              number="808899"
              date="02 JUN 2022"
              time = "09:26"
              containerType="FCL"
              containerImgSrc="src\assets\container_fcl.png"
              containerSize="4 x 40 STANDARD"
              source="Indore, India"
              destination="Delhi, India"
              weight="28 Metric Ton"
              estimateDate="15 Jun 2023"
              product="Vegetable Product"
              countryFlag="&#127470;&#127475;"
              country="India"
            />
            <TransitDetail
              number="808899"
              date="02 JUN 2022"
              time = "09:26"
              containerType="FCL"
              containerImgSrc="src\assets\container_fcl.png"
              containerSize="4 x 40 STANDARD"
              source="Indore, India"
              destination="Delhi, India"
              weight="28 Metric Ton"
              estimateDate="15 Jun 2023"
              product="Vegetable Product"
              countryFlag="&#127470;&#127475;"
              country="India"
            />
            <TransitDetail
              number="808899"
              date="02 JUN 2022"
              time = "09:26"
              containerType="FCL"
              containerImgSrc="src\assets\container_fcl.png"
              containerSize="4 x 40 STANDARD"
              source="Indore, India"
              destination="Delhi, India"
              weight="28 Metric Ton"
              estimateDate="15 Jun 2023"
              product="Vegetable Product"
              countryFlag="&#127470;&#127475;"
              country="India"
            />
            <TransitDetail
              number="808899"
              date="02 JUN 2022"
              time = "09:26"
              containerType="FCL"
              containerImgSrc="src\assets\container_fcl.png"
              containerSize="4 x 40 STANDARD"
              source="Indore, India"
              destination="Delhi, India"
              weight="28 Metric Ton"
              estimateDate="15 Jun 2023"
              product="Vegetable Product"
              countryFlag="&#127470;&#127475;"
              country="India"
            />
            <TransitDetail
              number="808899"
              date="02 JUN 2022"
              time = "09:26"
              containerType="FCL"
              containerImgSrc="src\assets\container_fcl.png"
              containerSize="4 x 40 STANDARD"
              source="Indore, India"
              destination="Delhi, India"
              weight="28 Metric Ton"
              estimateDate="15 Jun 2023"
              product="Vegetable Product"
              countryFlag="&#127470;&#127475;"
              country="India"
            />
      </div>

      <div className="flex justify-content-end">
        <Pagination
          count={10} showFirstButton showLastButton />
      </div>

    </div>
  );
}

export default Dashboard;