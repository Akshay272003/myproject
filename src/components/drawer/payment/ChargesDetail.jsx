const ChargesDetail = ({title, quantity, price}) => {

    return ( 
        <>
            <div>
                <div className="flex justify-content-between">
                    <span className="font-small font-dark">
                        {title}
                    </span>
                    <span className="font-small font-dark">
                        $ {quantity*price}
                    </span>
                </div>
                <span className="font-xs p-half font-light">
                    QTY {quantity} X {price} (40' Open Top)
                </span>
            </div>
        </>
     ); 
}
 
export default ChargesDetail;