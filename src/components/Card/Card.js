import React, { useEffect, useState } from 'react'; // Importing React library

// Importing CSS file for styling the Card component
import "./Card.css";

// Importing an icon for use in the component
import INRIcon from "../../assets/currency.png";

// Card functional component definition with props
const Card = ({ ranking, name, city, state, course, course_fee, average_package, highest_package, collegeduniya_rating, user_rating, featured, search }) => {

    const [searchStr, setSearchStr] = useState(search);
    const [nameStr, setNameStr] = useState(name);

    const highlightSearch = () => {
        const lowerCaseName = name.toLowerCase();
        const lowerCaseSearch = search.toLowerCase();

        const index = lowerCaseName.indexOf(lowerCaseSearch);

        if (index !== -1) {
            const before = name.substring(0, index);
            const highlighted = name.substring(index, index + search.length);
            const after = name.substring(index + search.length);
            return (
                <>
                    {before}
                    <span className='highlight' >{highlighted}</span>
                    {after}
                </>
            );
        }
        return name;
    }


    useEffect(() => {
        highlightSearch();
    }, [searchStr])

    return (
        // Card container with class 'card-component'
        <div className='card-component' >
            {/* Cell for displaying ranking */}
            <div className='cell-ranking' >#{ranking}</div>
            {/* Cell for displaying name, city, and state */}
            <div className='cell-name' >
                {/* Main name of the college */}
                <span className='cell-name-main' >{highlightSearch()}</span>
                {/* Location of the college */}
                <span className='cell-name-location' >
                    {city}, {state}
                </span>
                {/* Display 'Featured' tag if college is featured */}
                {featured && <div className='featured' >
                    Featured
                </div>}
            </div>
            {/* Cell for displaying course fee */}
            <div className='cell-fee' >
                {/* Icon for currency */}
                <span className='cell-fee-icon' >
                    <img src={INRIcon} alt='inr-icon' /> {/* INR icon */}
                </span>
                {/* Display course fee */}
                {course_fee}
            </div>
            {/* Cell for displaying average package */}
            <div className='cell-fee' >
                {/* Icon for currency */}
                <span className='cell-fee-icon' >
                    <img src={INRIcon} alt='inr-icon' /> {/* INR icon */}
                </span>
                {/* Display average package */}
                {average_package}
            </div>
            {/* Cell for displaying collegeduniya rating */}
            <div className='cell-rating' >
                <span className='cell-pointer' > {/* Pointer icon */}
                </span>
                {/* Display collegeduniya rating */}
                <span>
                    {collegeduniya_rating}/10
                </span>
            </div>
            {/* Cell for displaying user rating */}
            <div className='cell-rating' >
                <span className='cell-pointer' > {/* Pointer icon */}
                </span>
                {/* Display user rating */}
                <span>
                    {user_rating}/10
                </span>
            </div>
        </div>
    )
}

export default Card; // Exporting the Card component
