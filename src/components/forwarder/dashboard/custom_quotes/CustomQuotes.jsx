import { useState } from "react";
import CustomQuotesDrawer from "./drawer/CustomQuotesDrawer";
import Style from "./custom_quotes.module.css";
import DrawerStyle from "./drawer/drawer.module.css";
import { Button, Divider, Radio, Input, Table } from "antd";
import { SyncOutlined, InfoCircleOutlined } from "@ant-design/icons";

const { Search } = Input;

const CustomQuotes = () => {

    const [filter, setFilter] = useState("all");
    const [hasCqrId, setCqrId] = useState(null);

    const handleToggle = (cqrId) => {
        const drawerElem = document.getElementById("custom-quotes-drawer");
        console.log(cqrId)
        if (drawerElem.classList.contains(DrawerStyle.hidden)) {
            setCqrId(cqrId)
            drawerElem.classList.remove(DrawerStyle.hidden)
        }
        else {
            if (hasCqrId !== cqrId) {
                setCqrId(cqrId);
            }
            else {
                drawerElem.classList.add(DrawerStyle.hidden);
            }
        }
    }

    const columns = [
        {
            title: "",
            key: "info",
            dataIndex: "info",
            render: (_, record) => (
                <InfoCircleOutlined className={Style.more_info_btn} onClick={() => handleToggle(record.cqr_id)} />
            ),
        },
        {
            title: 'CQR ID',
            dataIndex: 'cqr_id',
            key: 'cqr_id',
        },
        {
            title: 'Requested Modes',
            dataIndex: 'requested_modes',
            key: 'requested_modes',
        },
        {
            title: 'Load',
            dataIndex: 'load',
            key: 'load',
        },
        {
            title: 'Route',
            dataIndex: 'route',
            key: 'route',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        }
    ]
    const dataSource = [
        { key: '1', cqr_id: 'Edward 0', requested_modes: "Express,Air,Ocean", load: "43 CFT 500 LB", route: 'CN-US', status: 'Waiting For Quote' },
        { key: '2', cqr_id: 'fds 0', requested_modes: "Express,Air,Ocean", load: "43 CFT 500 LB", route: 'CN-US', status: 'Waiting For Quote' },
        { key: '3', cqr_id: 'Edward 0', requested_modes: "Express,Air,Ocean", load: "43 CFT 500 LB", route: 'CN-US', status: 'Waiting For Quote' },
        { key: '4', cqr_id: 'Edward 0', requested_modes: "Express,Air,Ocean", load: "43 CFT 500 LB", route: 'CN-US', status: 'Waiting For Quote' },
        { key: '5', cqr_id: 'Edward 0', requested_modes: "Express,Air,Ocean", load: "43 CFT 500 LB", route: 'CN-US', status: 'Waiting For Quote' },
        { key: '6', cqr_id: 'Edward 0', requested_modes: "Express,Air,Ocean", load: "43 CFT 500 LB", route: 'CN-US', status: 'Waiting For Quote' },
        { key: '7', cqr_id: 'Edward 0', requested_modes: "Express,Air,Ocean", load: "43 CFT 500 LB", route: 'CN-US', status: 'Waiting For Quote' },
        { key: '8', cqr_id: 'Edward 0', requested_modes: "Express,Air,Ocean", load: "43 CFT 500 LB", route: 'CN-US', status: 'Waiting For Quote' },
        { key: '9', cqr_id: 'Edward 0', requested_modes: "Express,Air,Ocean", load: "43 CFT 500 LB", route: 'CN-US', status: 'Waiting For Quote' },
        { key: '10', cqr_id: 'Edward 0', requested_modes: "Express,Air,Ocean", load: "43 CFT 500 LB", route: 'CN-US', status: 'Waiting For Quote' },
        { key: '11', cqr_id: 'Edward 0', requested_modes: "Express,Air,Ocean", load: "43 CFT 500 LB", route: 'CN-US', status: 'Waiting For Quote' },
    ]

    return (
        <div className={`${Style.container} bg-light`}>
            {/* top bar */}
            <div className={`flex flex-wrap justify-content-end items-center gap-half`}>
                <Radio.Group value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <Radio.Button value="all">All</Radio.Button>
                    <Radio.Button value="closed">Closed</Radio.Button>
                    <Radio.Button value="booked">Booked</Radio.Button>
                </Radio.Group>

                <Search placeholder="input search text" style={{ width: 200 }} />

                <Button
                    className={Style.request_quote_btn}
                >Request Quote</Button>

                <SyncOutlined className={Style.refresh_btn} />
            </div>

            {/* main table  */}
            <div className="mt-2">
                <Table columns={columns} dataSource={dataSource} />
            </div>

            <CustomQuotesDrawer/>

        </div>
    );
}

export default CustomQuotes;