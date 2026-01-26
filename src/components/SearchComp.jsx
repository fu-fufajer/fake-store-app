import React from 'react'
import { TextInput } from "flowbite-react";
import { FaSearch } from "react-icons/fa";

const SearchComp = () => {
    return (
        <div>
            <TextInput id="email4" type="email" icon={FaSearch} placeholder="Cari nama produk" required />
        </div>
    )
}

export default SearchComp
