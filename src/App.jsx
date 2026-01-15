import React, { useEffect, useState } from 'react'
import BannerComp from "./components/BannerComp"
import CardList from './components/CardList';
import { Button } from "flowbite-react";
import { Link } from 'react-router-dom';
import { Spinner } from "flowbite-react";

const App = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getData() {
        const url = "https://api.escuelajs.co/api/v1/categories";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            setCategories(result.slice(0,4));
        } catch (error) {
            console.error(error.message);
        }
    }

    async function getProduct() {
        const url = "https://api.escuelajs.co/api/v1/products";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            setProducts(result.slice(0,4));
            setLoading(false);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getData();
        getProduct();
    }, [])

    if (loading) {
        return (
            <div className="flex justify-center mt-96">
                <Spinner aria-label="Default status example" size="xl"/>
            </div>
        )
    }

    return (
        <div>
            <BannerComp />
            <CardList data={categories} type="category" />
            <CardList data={products} type="product">
                <div className='flex justify-between mb-5 mt-8'>
                    <h5 className='text-xl font-bold'>Daftar Produk Populer</h5>
                    <Link to="/products">
                        <Button color="blue">Lihat Selengkapnya</Button>
                    </Link>
                </div>
            </CardList>
        </div>
    )
}

export default App
