import React, { useState } from 'react'
import items from './Data'

const Menu = ({items}) => {
    return (
        <div className='menuSection'>
            {items.map((item) => {
                const {id, title, price, img, text} = item;
                return (
                    <article key={id} className='menuItem'>
                        <img className='photo' src={img} alt={title} />
                        <div className='itemInfo'>
                            <header>
                                <h2>{title}</h2>
                                <h2 className='price'>${price}</h2>
                            </header>
                            <p className='itemText'>{text}</p>
                        </div>
                    </article>
                );
            })}           
        </div>
    );
}

export default Menu
