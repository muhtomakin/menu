import React from 'react'

const Categories = ({ categories, filterItems }) => {
    return (
        <div className='btnContainer'>
            {categories.map((category, index) => {
                return (
                    <button key={index} className='btnFilter'  onClick={() => filterItems(category)}>
                        {category}
                    </button>
                );
            })}
        </div>
    );
}

export default Categories
