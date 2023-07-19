import { AiOutlineShopping } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";

export default function SingleItemCard({ productid, name, price, prev_price }) {
    const addcardHandlear = (e) => {
        e.preventDefault();

        // get card Item from localhost
        const getcardItems = JSON.parse(localStorage.getItem("cardItems"));

        // card info for save
        const addItemInfo = {
            productid,
            name,
            price,
            prev_price,
            qt: 1,
        };

        if (getcardItems) {
            const findItem = getcardItems.find(
                (i) => i.productid === productid
            );

            if (findItem?.productid) {
                // const newItems = getcardItems.map((item) => {
                //     if (item.productid === productid) {
                //         return { ...item, qt: item.qt + 1 };
                //     }
                //     return item;
                // });

                // increase 1
                findItem.qt = findItem.qt + 1;
                localStorage.setItem("cardItems", JSON.stringify(getcardItems));
            } else {
                getcardItems.push(addItemInfo);
                localStorage.setItem("cardItems", JSON.stringify(getcardItems));
            }
        } else {
            localStorage.setItem("cardItems", JSON.stringify([addItemInfo]));
        }
    };

    return (
        <div className="group w-full h-96 " x-data="{dropdownOpen:false}">
            <a href="@">
                <div className=" w-full h-72 md:h-72 lg:h-80 relative">
                    <img
                        className="w-full h-full"
                        src="images/banner01.jpg"
                        alt="item"
                    />
                    <div className=" group-hover:block hidden absolute top-0 left-0  px-2 py-3 text-zinc-100 bg-gray-500 bg-blend-darken opacity-50 ">
                        <BsHeart className=" text-xl mb-2 cursor-pointer hover:text-green-500 " />
                        <AiOutlineShopping
                            onClick={addcardHandlear}
                            className=" text-2xl hover:text-green-500 cursor-pointer  "
                        />
                    </div>
                </div>
                <div className=" text-center pt-4 ">
                    <span className=" text-zinc-600 mb-3 block ">Rice</span>
                    <div className=" text-2xl ">
                        <del className=" text-zinc-500 mr-2  ">$50.00</del>
                        <span className=" text-zinc-800 ">$40.00</span>
                    </div>
                </div>
            </a>
        </div>
    );
}
