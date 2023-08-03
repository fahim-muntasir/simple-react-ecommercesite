import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Card from "./components/pages/Card";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import Products from "./components/pages/Products";
import AuthProvider, { AuthContext } from "./provider/AuthProvider";

function App() {
    return (

        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Card />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<Product />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>

    );
}

export default App;
