import React from 'react'; // Importing React library

// Importing CSS file for styling the TopBar component
import "./TopBar.css";

// Importing icons for ascending and descending sorting
import AscendingIcon from "../../assets/ascending.png";
import DescendingIcon from "../../assets/descending.png";

// TopBar functional component definition with props
const TopBar = ({ onSearch, onSortNameA, onSortNameD, onSortRankA, onSortRankD, onSortFeeA, onSortFeeD, onSortCDReviewA, onSortCDReviewD, onSortUserReviewA, onSortUserReviewD }) => {
    return (
        // TopBar container with class 'top-bar-comp'
        <div className='top-bar-comp' >
            {/* Search input field */}
            <div className='search' >
                <input
                    type="text"
                    placeholder="Search by name"
                    onChange={onSearch} // Event handler for search input change
                />
            </div>
            {/* Sorting buttons section */}
            <div className='sort' >
                {/* Rank sorting */}
                <div className='btn-div' >
                    <span>Rank</span>
                    {/* Buttons for ascending and descending sorting */}
                    <div className='btn-inner' >
                        {/* Button for ascending sorting */}
                        <button onClick={onSortRankA}>
                            <img src={AscendingIcon} alt='ascending-icon' /> {/* Ascending sorting icon */}
                        </button>
                        {/* Button for descending sorting */}
                        <button onClick={onSortRankD}>
                            <img src={DescendingIcon} alt='descending-icon' /> {/* Descending sorting icon */}
                        </button>
                    </div>
                </div>
                {/* Similar sections for Name, Fee, CD reviews, and User Reviews */}
                <div className='btn-div' >
                    <span>Name</span>
                    <div className='btn-inner' >
                        <button onClick={onSortNameA}>
                            <img src={AscendingIcon} alt='ascending-icon' />
                        </button>
                        <button onClick={onSortNameD}>
                            <img src={DescendingIcon} alt='descending-icon' />
                        </button>
                    </div>
                </div>
                <div className='btn-div' >
                    <span>Fee</span>
                    <div className='btn-inner' >
                        <button onClick={onSortFeeA}>
                            <img src={AscendingIcon} alt='ascending-icon' />
                        </button>
                        <button onClick={onSortFeeD}>
                            <img src={DescendingIcon} alt='descending-icon' />
                        </button>
                    </div>
                </div>
                <div className='btn-div' >
                    <span>CD reviews</span>
                    <div className='btn-inner' >
                        <button onClick={onSortCDReviewA}>
                            <img src={AscendingIcon} alt='ascending-icon' />
                        </button>
                        <button onClick={onSortCDReviewD}>
                            <img src={DescendingIcon} alt='descending-icon' />
                        </button>
                    </div>
                </div>
                <div className='btn-div' >
                    <span>User Reviews</span>
                    <div className='btn-inner' >
                        <button onClick={onSortUserReviewA}>
                            <img src={AscendingIcon} alt='ascending-icon' />
                        </button>
                        <button onClick={onSortUserReviewD}>
                            <img src={DescendingIcon} alt='descending-icon' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar; // Exporting the TopBar component
