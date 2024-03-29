import React from 'react';
import "./Card.css";

const Card = ({ ranking, name, city, state, course, course_fee, average_package, highest_package, collegeduniya_rating, user_rating, featured }) => {
    return (
        <div className='card-component' >
            <div className='cell-ranking' >{ranking}</div>
            <div className='cell-name' >{name}</div>
            <div className='cell-fee' >{course_fee}</div>
            <div className='cell-package' >{average_package}</div>
            <div className='cell-csrating' >{collegeduniya_rating}</div>
            <div className='cell-userrating' >{user_rating}</div>
        </div>
    )
}

export default Card