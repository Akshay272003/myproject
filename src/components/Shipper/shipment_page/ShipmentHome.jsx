import Filters from "./components/filter/Filters";
import ProductCard from "./components/product_card/productCard";
import TabsNav from "./components/tabs/TabsNav";
import ShipmentDetails from "./checkout_page/shipment_details/ShipmentDetails";
import BookShipmentForm from "./checkout_page/forms/BookShipmentForm";

const ShipmentHome = () => {
    return (
        <div style={{ background: 'white', minHeight: '100vh', padding: '1em' }}>
            {/* <Filters /> */}
            {/* <ShipmentDetails /> */}
            <div style={{ width: '70%' }}>
                {/* <ProductCard id={1} /> */}
                {/* <TabsNav /> */}
                <BookShipmentForm />
            </div>

        </div>
    );
}

export default ShipmentHome;