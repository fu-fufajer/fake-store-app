import React, { useState } from 'react'
import NavbarComp from "./components/NavbarComp"
import BannerComp from './components/BannerComp';
import CardList from './components/CardList';
import { Button } from "flowbite-react";

const App = () => {
    const [categories, setCategories] = useState(['a', 'b', 'c', 'd']);
    const [products, setProducts] = useState(['a', 'b', 'c', 'd']);

    return (
        <div>
            <NavbarComp />
            <BannerComp />
            <CardList data={categories} type="category" />
            <CardList data={products} type="product">
                <div className='flex justify-between mb-5 mt-8'>
                    <h5 className='text-xl font-bold'>Daftar Produk Populer</h5>
                    <Button color="blue">Lihat Selengkapnya</Button>
                </div>
            </CardList>
        </div>
    )
}

export default App
