import React, { useEffect, useState } from 'react'
import CardList from '../components/CardList';
import { Spinner } from 'flowbite-react';
import SearchComp from '../components/SearchComp';
import DropdownComp from '../components/DropdownComp';
import PaginationComp from '../components/PaginationComp';

const Products = () => {
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page) => {
        setCurrentPage(page)
        // tidak mengirim param url, karena udah di url = function sudah ada currentPage dari set
        getProducts();
    };

    function processSearch(event) {
        setSearch(event.target.value);
        let url = "https://api.escuelajs.co/api/v1/products" + "?title=" + search;
        setLoading(true);
        getProducts(url);
    }

    async function getProducts(url = "https://api.escuelajs.co/api/v1/products" + "?limit=8" + "&offset=" + currentPage) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            setProducts(result);
            setLoading(false)
        } catch (error) {
            console.error(error.message);
        }
    }

    function processSort(type) {
        let productNew = [...products];
        // copy isi products ke nama baru agar terdeteksi di setProducts untuk memunculkan tampilan produk baru
        if (type == "harga termurah") {
            productNew.sort(function (a, b) { return a.price - b.price });
        } else if (type == "harga termahal") {
            productNew.sort(function (a, b) { return b.price - a.price });
        } else if (type == "a-z") {
            productNew.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
        } else if (type == "z-a") {
            productNew.sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
        }
        setProducts(productNew)
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className='flex flex-col justify-center items-center'>
            <div>
                <h1 className="text-2xl font-bold mt-8">Daftar Produk</h1>
                <div className="flex mt-3 mb-5 gap-3">
                    <SearchComp processSearch={processSearch} />
                    <DropdownComp processSort={processSort} />
                </div>

            </div>
            {
                loading ? (<div className="flex justify-center mt-96">
                    <Spinner aria-label="Default status example" size="xl" />
                </div>) : (<CardList data={products} type="product"></CardList>)
            }
            <div className="mt-5 mb-5">
                <PaginationComp currentPage={currentPage} onPageChange={onPageChange}/>
            </div>
        </div>
    )
}

export default Products
