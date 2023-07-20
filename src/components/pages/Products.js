import React from "react";
import Layout from "../Common/Layout";

export default function Products() {
    return (
        <Layout>
            <div class="flex flex-col lg:flex-row w-11/12 m-auto">
                <aside class=" p-4 lg:w-1/4">
                    <h2 class="text-xl font-semibold mb-4">Filter</h2>
                    <div class="mb-4">
                        <label
                            for="brand-select"
                            class="block font-semibold mb-2"
                        >
                            Category:
                        </label>
                        <div className="flex items-center gap-1 ">
                            <input type="checkbox" />
                            <option value="brand1">Brand 1</option>
                        </div>
                        <div className="flex items-center gap-1 ">
                            <input type="checkbox" />
                            <option value="brand1">Brand 1</option>
                        </div>
                        <div className="flex items-center gap-1 ">
                            <input type="checkbox" />
                            <option value="brand1">Brand 1</option>
                        </div>
                    </div>
                    <div class="mb-4">
                        <label
                            for="price-range"
                            class="block font-semibold mb-2"
                        >
                            Price Range:
                        </label>
                        <input
                            type="range"
                            id="price-range"
                            class="w-full"
                            min="0"
                            max="100"
                            step="5"
                        />
                    </div>
                </aside>
                <main class="flex flex-wrap lg:w-3/4">
                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                        <a href="@">
                            <div class="border rounded-md shadow-md p-4">
                                <img
                                    src="https://static-01.daraz.com.bd/p/a1999e879bdbd08433293c3caee1a729.jpg"
                                    alt="products"
                                />
                                <h3 class="text-lg font-semibold mb-2">
                                    Product 1
                                </h3>
                                <p class="text-gray-600 mb-2">Brand: Brand 1</p>
                                <div className="flex gap-2">
                                    <p class="text-gray-600 mb-2">
                                        Price: $19.99
                                    </p>
                                    <del class="text-gray-600 mb-2">$19.99</del>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                        <div class="border rounded-md shadow-md p-4">
                            <img
                                src="https://static-01.daraz.com.bd/p/a1999e879bdbd08433293c3caee1a729.jpg"
                                alt="products"
                            />
                            <h3 class="text-lg font-semibold mb-2">
                                Product 1
                            </h3>
                            <p class="text-gray-600 mb-2">Brand: Brand 1</p>
                            <p class="text-gray-600 mb-2">Price: $19.99</p>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                        <div class="border rounded-md shadow-md p-4">
                            <img
                                src="https://static-01.daraz.com.bd/p/a1999e879bdbd08433293c3caee1a729.jpg"
                                alt="products"
                            />
                            <h3 class="text-lg font-semibold mb-2">
                                Product 1
                            </h3>
                            <p class="text-gray-600 mb-2">Brand: Brand 1</p>
                            <p class="text-gray-600 mb-2">Price: $19.99</p>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                        <div class="border rounded-md shadow-md p-4">
                            <img
                                src="https://static-01.daraz.com.bd/p/a1999e879bdbd08433293c3caee1a729.jpg"
                                alt="products"
                            />
                            <h3 class="text-lg font-semibold mb-2">
                                Product 1
                            </h3>
                            <p class="text-gray-600 mb-2">Brand: Brand 1</p>
                            <p class="text-gray-600 mb-2">Price: $19.99</p>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                        <div class="border rounded-md shadow-md p-4">
                            <img
                                src="https://static-01.daraz.com.bd/p/a1999e879bdbd08433293c3caee1a729.jpg"
                                alt="products"
                            />
                            <h3 class="text-lg font-semibold mb-2">
                                Product 1
                            </h3>
                            <p class="text-gray-600 mb-2">Brand: Brand 1</p>
                            <p class="text-gray-600 mb-2">Price: $19.99</p>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    );
}
