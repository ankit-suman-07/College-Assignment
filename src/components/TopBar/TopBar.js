import React from 'react';
import "./TopBar.css";
import AscendingIcon from "../../assets/ascending.png";
import DescendingIcon from "../../assets/descending.png";

const TopBar = ({ onSearch, onSortNameA, onSortNameD, onSortRankA, onSortRankD, onSortFeeA, onSortFeeD, onSortCDReviewA, onSortCDReviewD, onSortUserReviewA, onSortUserReviewD }) => {
    return (
        <div className='top-bar-comp' >
            <div className='search' >
                <input
                    type="text"
                    placeholder="Search by name"
                    onChange={onSearch}
                />

            </div>
            <div className='sort' >
                <div className='btn-div' >
                    <span>Rank</span>
                    <div className='btn-inner' >
                        <button onClick={onSortRankA}>
                            <img src={AscendingIcon} alt='ascending-icon' />
                        </button>
                        <button onClick={onSortRankD}>
                            <img src={DescendingIcon} alt='descending-icon' />
                        </button>
                    </div>
                </div>

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

export default TopBar
