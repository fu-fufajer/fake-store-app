import React, { useState } from 'react'
import CardComp from './CardComp'
import CardCommerce from './CardCommerce'

const CardList = ({data, type, children}) => {
    return (
        <div className='block mx-auto w-4xl'>
            {children}
            <div className="grid grid-cols-4 gap-4">
                {
                    data.map((item, index) => type == 'category' ? (<CardComp key={index}/>) : (<CardCommerce key={index}/>))
                }
            </div>
        </div>
    )
}

export default CardList
