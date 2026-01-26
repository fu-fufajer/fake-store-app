import React from 'react'
import { TextInput } from "flowbite-react";
import { FaSearch } from "react-icons/fa";

const SearchComp = ({ processSearch }) => {
    return (
        <div>
            <TextInput id="email4" type="email" icon={FaSearch} placeholder="Cari nama produk" required className='w-2xl' onKeyUp={processSearch}/>
        </div>
    )
}

export default SearchComp;