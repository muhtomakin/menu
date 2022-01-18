import React, { useState } from 'react'
import Menu from './Menu'
import Data from './Data'
import Categories from './Categories';

const allCategories = ['all', ...new Set(Data.map((item) => item.category))];
//console.log(allCategories);

const Main = () => {

    const [menuItems, setMenuItems] = useState(Data);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === 'all') {         
            return setMenuItems(Data);
        }
        const newItems = Data.filter((item) => item.category === category);
        setMenuItems(newItems);
    }

    return (
        <main>
            <section className='menu'>
                <div className='title'>
                    <h1>our menu</h1>
                    <div className='underline'></div>
                </div>
                <Categories categories={categories} filterItems={filterItems} />
                <Menu items={menuItems} />
            </section>
        </main>
    )
}

export default Main
