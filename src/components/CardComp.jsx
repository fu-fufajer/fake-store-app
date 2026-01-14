import React from 'react'
import { Card } from "flowbite-react";

const CardComp = () => {
    return (
        <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://rukminim2.flixcart.com/image/480/580/xif0q/shoe/d/s/m/6-195-40-asteroid-grey-original-imahcrn7n3rvsg6g.jpeg?q=90"
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy
            </h5>
        </Card>
    )
}

export default CardComp
