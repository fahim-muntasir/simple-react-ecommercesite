import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import Checkout from "../Checkout/Checkout";
// import CardItems from "../CardItems/CardItems";
// import CardSubtotal from "../CardSubtotal/CardSubtotal";
import Layout from "../Common/Layout";
import ShoppingCard from "../ShoppingCard/ShoppingCard";
// import OrderComplite from "../OrderComplite/OrderComplite";

export default function Card() {
    const [isShoppingCard, setIsShoppingCard] = useState(true);
    const [isCheckout, setIsCheckout] = useState(false);

    const shoppingCardHandlear = () => {
        setIsCheckout(false);
        setIsShoppingCard(true);
    };
    const checkoutHandlear = () => {
        setIsShoppingCard(false);
        setIsCheckout(true);
    };
    return (
        <Layout>
            <div className="w-11/12 m-auto">
                <div className=" mb-10 lg:mb-20">
                    <ul className="flex gap-5  text-sm md:text-xl lg:text-xl font-light ">
                        <li>
                            <div
                                className="flex gap-2 items-center cursor-pointer "
                                onClick={shoppingCardHandlear}
                            >
                                <span
                                    className={
                                        isShoppingCard
                                            ? "bg-green-500 text-sm text-zinc-50 flex items-center justify-center p-2 rounded-full w-6 h-6"
                                            : "bg-zinc-400 text-sm text-zinc-50 flex items-center justify-center p-2 rounded-full w-6 h-6"
                                    }
                                >
                                    1
                                </span>
                                <div
                                    className={
                                        isShoppingCard
                                            ? "flex gap-2 items-center text-green-500"
                                            : "flex gap-2 items-center text-zinc-600"
                                    }
                                >
                                    <span>Shopping Card</span>
                                    <AiOutlineRight />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex gap-2 items-center cursor-pointer ">
                                <span
                                    className={
                                        isCheckout
                                            ? "bg-green-500 text-sm text-zinc-50 flex items-center justify-center p-2 rounded-full w-6 h-6"
                                            : "bg-zinc-400 text-sm text-zinc-50 flex items-center justify-center p-2 rounded-full w-6 h-6"
                                    }
                                >
                                    2
                                </span>
                                <div
                                    className={
                                        isCheckout
                                            ? "flex gap-2 items-center text-green-500"
                                            : "flex gap-2 items-center text-zinc-600"
                                    }
                                >
                                    <span>Checkout</span>
                                    <AiOutlineRight />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <span className="bg-zinc-400 text-sm text-zinc-50 flex items-center justify-center p-2 rounded-full w-6 h-6 ">
                                    3
                                </span>
                                <span className="text-zinc-600">
                                    Order Complite
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                {isShoppingCard && (
                    <ShoppingCard checkoutHandlear={checkoutHandlear} />
                )}
                {isCheckout && <Checkout />}
            </div>
        </Layout>
    );
}
