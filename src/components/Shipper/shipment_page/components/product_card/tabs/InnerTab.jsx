import AboutCompany from "./about_company/AboutCompany";
import PriceBreakdown from "./price_breakdown/PriceBreakdown";
import CustomerReview from "./customer_review/CustomerReview";
import { Tabs } from "antd";

const InnerTab = () => {

    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: `Price Breakdown`,
            children: <PriceBreakdown />,
        },
        {
            key: '2',
            label: `About Company`,
            children: <AboutCompany />,
        },
        {
            key: '3',
            label: `Customer Reviews`,
            children: <CustomerReview />,
        },
    ];

    return (
        <>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </>
    );
}

export default InnerTab;