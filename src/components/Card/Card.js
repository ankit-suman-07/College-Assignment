import React from 'react';
import "./Card.css";
import INRIcon from "../../assets/currency.png";

const Card = ({ ranking, name, city, state, course, course_fee, average_package, highest_package, collegeduniya_rating, user_rating, featured }) => {
    return (
        <div className='card-component' >
            <div className='cell-ranking' >#{ranking}</div>
            <div className='cell-name' >
                <span className='cell-name-main' >{name}</span>
                <span className='cell-name-location' >
                    {city}, {state}
                </span>
                {featured && <div className='featured' >
                    Featured
                </div>}

            </div>
            <div className='cell-fee' >
                <span className='cell-fee-icon' >
                    <img src={INRIcon} alt='inr-icon' />
                </span>
                {course_fee}
            </div>
            <div className='cell-fee' >
                <span className='cell-fee-icon' >
                    <img src={INRIcon} alt='inr-icon' />
                </span>
                {average_package}
            </div>
            <div className='cell-rating' >
                <span className='cell-pointer' >

                </span>
                <span>
                    {collegeduniya_rating}/10
                </span>

            </div>
            <div className='cell-rating' >
                <span className='cell-pointer' >

                </span>
                <span>
                    {user_rating}/10
                </span>

            </div>
        </div>
    )
}

export default Card