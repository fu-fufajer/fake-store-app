import React from 'react'
import { Dropdown, DropdownItem } from "flowbite-react";

const DropdownComp = ({ processSort }) => {
    return (
        <div>
            <Dropdown label="Urutkan Data" dismissOnClick={false} color="alternative">
                <DropdownItem onClick={() => processSort("harga termurah")}>Termurah</DropdownItem>
                <DropdownItem onClick={() => processSort("harga termurah")}>Termahal</DropdownItem>
                <DropdownItem onClick={() => processSort("a-z")}>A - Z</DropdownItem>
                <DropdownItem onClick={() => processSort("z-a")}>Z - A</DropdownItem>
            </Dropdown>
        </div>
    )
}

export default DropdownComp
