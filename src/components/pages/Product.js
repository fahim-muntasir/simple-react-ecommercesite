import React from "react";
import Layout from "../Common/Layout";

export default function Product() {
    return (
        <Layout>
            <div className="w-11/12 mx-auto mt-4 bg-white p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                    <div className="md:order-2">
                        <div className="w-96 ml-auto">
                            <img
                                src="https://static-01.daraz.com.bd/p/a1999e879bdbd08433293c3caee1a729.jpg"
                                alt="Product Name"
                                className="w-full"
                            />
                            <div className="flex justify-between">
                                <img
                                    src="https://static-01.daraz.com.bd/p/a1999e879bdbd08433293c3caee1a729.jpg"
                                    alt="Product Name"
                                    className="w-20 cursor-pointer"
                                />
                                <img
                                    src="https://static-01.daraz.com.bd/p/a1999e879bdbd08433293c3caee1a729.jpg"
                                    alt="Product Name"
                                    className="w-20 cursor-pointer"
                                />
                                <img
                                    src="https://static-01.daraz.com.bd/p/a1999e879bdbd08433293c3caee1a729.jpg"
                                    alt="Product Name"
                                    className="w-20 cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold mb-4">
                            Product Name
                        </h2>

                        <p className="text-2xl font-semibold text-green-500 mb-6">
                            $99.99
                        </p>

                        <div className="mb-6 flex gap-3">
                            <div className="flex items-center gap-1 ">
                                <input type="checkbox" />
                                <span>500 ml</span>
                            </div>
                            <div className="flex items-center gap-1 ">
                                <input type="checkbox" />
                                <span>1 Liter</span>
                            </div>
                            <div className="flex items-center gap-1 ">
                                <input type="checkbox" />
                                <span>2 Liter</span>
                            </div>
                            <input
                                type="number"
                                defaultValue="1"
                                min={1}
                                className="border px-2 py-1 outline-none w-20"
                            />
                        </div>

                        <button className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 mb-4">
                            Add to Cart
                        </button>

                        <h3 className="text-xl font-semibold mb-2">
                            Specifications:
                        </h3>
                        <ul className="list-disc list-inside mb-6">
                            <li>Feature 1: Lorem ipsum dolor</li>
                            <li>Feature 2: Consectetur adipiscing</li>
                            <li>Feature 3: Sed ac urna vitae turpis</li>
                        </ul>
                        <p className="text-gray-600 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed ac urna vitae turpis lacinia luctus. Donec
                            ac justo sed nulla scelerisque lacinia. Duis auctor,
                            sapien a congue lacinia, odio nulla egestas odio,
                            vitae facilisis elit orci quis dolor.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
