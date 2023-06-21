import Filters from "./components/filter/Filters";
import ProductCard from "./components/product_card/productCard";
import TabsNav from "./components/tabs/TabsNav";


const ShipmentHome = () => {
    return (
        <div style={{ background: 'white', height: '100vh', padding: '1em' }}>
            {/* <Filters /> */}
            <div style={{ width: '70%' }}>
                <ProductCard id={1} />
                <ProductCard id={2} />
                <ProductCard id={3} />
                {/* <TabsNav /> */}

            </div>

        </div>
    );
}

export default ShipmentHome;