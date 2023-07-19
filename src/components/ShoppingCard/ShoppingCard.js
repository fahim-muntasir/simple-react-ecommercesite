import { useEffect, useState } from "react";
import CardItems from "./CardItems/CardItems";
import CardSubtotal from "./CardSubtotal/CardSubtotal";

export default function ShoppingCard({ checkoutHandlear }) {
    const [totalAmount, setTotalAmount] = useState(null);

    const getTotalPriceHandlear = () => {
        const getAllCardProducts =
            JSON.parse(localStorage.getItem("cardItems")) || [];
        let totalPrice = 0;

        // calculate total price
        getAllCardProducts.map((p) => (totalPrice += p.price * p.qt));

        // set total price
        setTotalAmount(totalPrice);
    };

    useEffect(() => {
        getTotalPriceHandlear();
    }, []);

    return (
        <div className="lg:flex gap-5 ">
            <div className=" w-full lg:w-[70%] mb-10">
                <CardItems getTotalPriceHandlear={getTotalPriceHandlear} />
            </div>
            <div className="lg:w-[30%]">
                <CardSubtotal
                    totalAmount={totalAmount}
                    checkoutHandlear={checkoutHandlear}
                />
            </div>
        </div>
    );
}
