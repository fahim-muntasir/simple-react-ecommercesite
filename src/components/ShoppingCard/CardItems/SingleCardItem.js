import { AiOutlineClose } from "react-icons/ai";

export default function SingleCardItem({
    id,
    name,
    price,
    qt,
    qtHandlear,
    cardItemDeleteHandler,
}) {
    return (
        <tr className="border-b font-normal text-zinc-600">
            <td className="flex items-center ">
                <div className=" w-20 lg:w-28 my-5 mr-2 ">
                    <img src="images/banner01.jpg" alt="" />
                </div>
                <span className="text-sm">{name}</span>
            </td>
            <td>
                <span>${price}</span>
            </td>
            <td>
                <input
                    type="number"
                    defaultValue={qt}
                    min={1}
                    onChange={(e) => qtHandlear(e, id)}
                    className="border px-2 py-1 outline-none w-20"
                />
            </td>
            <td>
                <span>${price * qt}</span>
            </td>
            <td>
                <AiOutlineClose
                    className="text-xl cursor-pointer"
                    onClick={() => cardItemDeleteHandler(id)}
                />
            </td>
        </tr>
    );
}
