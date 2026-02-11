import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addToCart(product, qty) {
        setCart((prev) => {
            // cek jika produk yang dipilih sudah ada di state cart, update qty nya saja
            const exist = prev.find((item) => item.id == product.id);
            if (exist) {
                // looping data cart, temukan id yang dimaksud, update qty nya
                return prev.map((item) => {
                    if (item.id == product.id) {
                        return { ...item, qty: item.qty + qty }
                    } else {
                        return item;
                    }
                })
            } else {
                // kalau product.id gaada di cart state, isi data object baru ke arr state cart
                return [
                    ...prev, {
                        id: product.id,
                        title: product.title,
                        image: product.images ? product.images[0] : '',
                        price: product.price,
                        qty: qty
                    }
                ]
            }
        })
    }

    function changeQty(productId, type) {
        setCart((prev) => {
            // loop data cart, cari data id yang sesuai, update qty nya
            return prev.map((item) => {
                // jika id yg di loop sm dgn productId yg dicari
                if (item.id = productId) {
                    if (type == "+") {
                        return { ...item, qty: item.qty + 1 }
                    } else {
                        // jk tipe perubahannya -, diupdate max diangka 1 kurangny
                        if (item.qty > 1) {
                            return { ...item, qty: item.qty - 1 }
                        }
                    }
                } else {
                    return item; // jika id loop bkn productId diminta, tdk diubah
                }
            })
        })
    }

    function deleteItem(productId) {
        setCart((prev) => {
            // ambil item yg id ny selain yg diminta, hilangkan yg diminta
            return prev.filter((item) => item.id != productId);
        })
    }

    function deleteAll() {
        setCart([]);
    }

    // debugin, cek data cart masuk atau tidak
    // useEffect(() => {
    //     console.log(cart);
    // },[cart])

    return (
        <CartContext.Provider value={{ cart, addToCart, changeQty, deleteAll, deleteItem }}>
            {children}
        </CartContext.Provider>
    )
}