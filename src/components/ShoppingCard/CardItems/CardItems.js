import { useEffect, useState } from "react";
import SingleCardItem from "./SingleCardItem";

export default function CardItems({ getTotalPriceHandlear }) {
    const [allCardItems, setAllcardItems] = useState([]);

    useEffect(() => {
        setAllcardItems(JSON.parse(localStorage.getItem("cardItems")) || []);
    }, []);

    const qtHandlear = (e, id) => {
        const newAllCardItems = [...allCardItems];
        const findProduct = newAllCardItems.find((p) => p.productid === id);
        findProduct.qt = e.target.value;
        setAllcardItems(newAllCardItems);
        localStorage.setItem("cardItems", JSON.stringify(newAllCardItems));

        // call this function to update total price
        getTotalPriceHandlear();
    };

    //card item delete handler
    const cardItemDeleteHandler = (itemId) => {
        const newAllCardItems = allCardItems.filter(
            (product) => product.productid !== itemId
        );

        setAllcardItems(newAllCardItems);
        localStorage.setItem("cardItems", JSON.stringify(newAllCardItems));

        // call this function to update total price
        getTotalPriceHandlear();
    };

    return (
        <table className="w-full text-center ">
            <thead className="text-xl font-light border-b ">
                <tr>
                    <th className="text-left font-light">Product</th>
                    <th className="font-light">Price</th>
                    <th className="font-light">Quantity</th>
                    <th className="font-light">Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {allCardItems?.map((i) => (
                    <SingleCardItem
                        key={i.id + i.name}
                        id={i.productid}
                        name={i.name}
                        price={i.price}
                        qt={i.qt}
                        qtHandlear={qtHandlear}
                        cardItemDeleteHandler={cardItemDeleteHandler}
                    />
                ))}
            </tbody>
        </table>
    );
}
