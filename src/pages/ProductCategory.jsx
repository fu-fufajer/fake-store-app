import { Spinner } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CardList from '../components/CardList';

const ProductCategory = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getProducts() {
        const url = "https://api.escuelajs.co/api/v1/products/?categoryId=" + categoryId;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            setProducts(result);
            setLoading(false);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    if (loading) {
        return (
            <div className="flex justify-center">
                <Spinner aria-label='Default status example' />
            </div>
        )
    }

    return (
        <div className='text-center mb-5 mt-8'>
            <h1 className='text-2xl font-bold mb-8'>Produk Kategori {products[0].category.name}</h1>
            <CardList data={products} type='product' />
        </div>
    )
}

export default ProductCategory
