import React from 'react'
import { Card } from "flowbite-react";

const CardComp = ({ item }) => {
    return (
        <Card
            className="max-w-sm"
            imgAlt={item.name}
            imgSrc={item.image}
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.name}
            </h5>
        </Card>
    )
}

export default CardComp
