import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Card from './Card/Card';
import TopBar from './TopBar/TopBar';

import { Colleges } from '../CollegeData';
import "./Scroll.css";


const Scroll = () => {
    const [items, setItems] = useState({ // State hook to manage items
        colleges: Colleges.slice(0, 10), // Initial array of colleges with first 10 items
        visibleCount: 10, // Number of visible colleges
    }); 

    // State hooks to manage sorting options
    const [sortByRank, setSortByRank] = useState(null);
    const [sortByName, setSortByName] = useState(null);
    const [sortByFee, setSortByFee] = useState(null);
    const [sortByCDReview, setSortByCDReview] = useState(null);
    const [sortByUserReview, setSortByUserReview] = useState(null);
    // State hook for search query
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => { // Function to handle search query change
        setSearchQuery(event.target.value); // Update search query state
    };

    useEffect(() => { // Effect hook to update visible colleges based on search query or visible count change
        const filteredColleges = Colleges.filter(college =>
            college.name.toLowerCase().includes(searchQuery.toLowerCase())
        ); // Filter colleges based on search query
        setItems({ // Update items state with filtered colleges
            colleges: filteredColleges.slice(0, items.visibleCount),
            visibleCount: items.visibleCount,
        });
    }, [searchQuery, items.visibleCount]); // Dependency array for the effect hook


    // Function to fetch more data for infinite scroll
    const fetchMoreData = () => {
        setTimeout(() => { // Simulating delay
            setItems(prevState => {
                const newVisibleCount = prevState.visibleCount + 10; // Increase visible count
                return {
                    colleges: Colleges.slice(0, newVisibleCount), // Update colleges with new visible count
                    visibleCount: newVisibleCount,
                };
            });
        }, 1000); // Delay of 1 second
    };

    // Functions for sorting by name, rank, fee, CD review, and user review
    // Each function updates the respective sorting state
    const sortName = () => {
        let sortedItems = [...Colleges];
        if (sortByName === 'ascending') {
            sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortByName === 'descending') {
            sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        }
        setItems({
            colleges: sortedItems.slice(0, items.visibleCount),
            visibleCount: items.visibleCount,
        });
    };

    const sortNameAsc = () => {
        setSortByName('ascending');
    };

    const sortNameDesc = () => {
        setSortByName('descending');
    };

    const sortRank = () => {
        let sortedItems = [...Colleges];
        if (sortByRank === 'ascending') {
            sortedItems.sort((a, b) => a.ranking - b.ranking);
        } else if (sortByRank === 'descending') {
            sortedItems.sort((a, b) => b.ranking - a.ranking);
        }
        setItems({
            colleges: sortedItems.slice(0, items.visibleCount),
            visibleCount: items.visibleCount,
        });
    };

    const sortRankAsc = () => {
        setSortByRank('ascending');
    };

    const sortRankDesc = () => {
        setSortByRank('descending');
    };

    const sortFee = () => {
        let sortedItems = [...Colleges];
        if (sortByFee === 'ascending') {
            sortedItems.sort((a, b) => a.course_fee - b.course_fee);
        } else if (sortByFee === 'descending') {
            sortedItems.sort((a, b) => b.course_fee - a.course_fee);
        }
        setItems({
            colleges: sortedItems.slice(0, items.visibleCount),
            visibleCount: items.visibleCount,
        });
    };

    const sortFeeAsc = () => {
        setSortByFee('ascending');
    };

    const sortFeeDesc = () => {
        setSortByFee('descending');
    };

    const sortCDReview = () => {
        let sortedItems = [...Colleges];
        if (sortByCDReview === 'ascending') {
            sortedItems.sort((a, b) => a.collegeduniya_rating - b.collegeduniya_rating);
        } else if (sortByCDReview === 'descending') {
            sortedItems.sort((a, b) => b.collegeduniya_rating - a.collegeduniya_rating);
        }
        setItems({
            colleges: sortedItems.slice(0, items.visibleCount),
            visibleCount: items.visibleCount,
        });
    };

    const sortCDReviewAsc = () => {
        setSortByCDReview('ascending');
    };

    const sortCDReviewDesc = () => {
        setSortByCDReview('descending');
    };

    const sortUserReview = () => {
        let sortedItems = [...Colleges];
        if (sortByUserReview === 'ascending') {
            sortedItems.sort((a, b) => a.user_rating - b.user_rating);
        } else if (sortByUserReview === 'descending') {
            sortedItems.sort((a, b) => b.user_rating - a.user_rating);
        }
        setItems({
            colleges: sortedItems.slice(0, items.visibleCount),
            visibleCount: items.visibleCount,
        });
    };

    const sortUserReviewAsc = () => {
        setSortByUserReview('ascending');
    };

    const sortUserReviewDesc = () => {
        setSortByUserReview('descending');
    };

    // Similar functions for sorting by rank, fee, CD review, and user review
    // Effect hooks to trigger sorting whenever the respective sorting state changes

    useEffect(() => {
        sortRank();
    }, [sortByRank]);

    useEffect(() => {
        sortName();
    }, [sortByName]);

    useEffect(() => {
        sortFee();
    }, [sortByFee]);

    useEffect(() => {
        sortCDReview();
    }, [sortByCDReview]);

    useEffect(() => {
        sortUserReview();
    }, [sortByUserReview]);

    return (
        <div>
            <TopBar
                onSearch={handleSearch}
                onSortNameA={sortNameAsc}
                onSortNameD={sortNameDesc}
                onSortRankA={sortRankAsc}
                onSortRankD={sortRankDesc}
                onSortFeeA={sortFeeAsc}
                onSortFeeD={sortFeeDesc}
                onSortCDReviewA={sortCDReviewAsc}
                onSortCDReviewD={sortCDReviewDesc}
                onSortUserReviewA={sortUserReviewAsc}
                onSortUserReviewD={sortUserReviewDesc}
            />

            <div className='table-header' >
                <span>CD Rank</span>
                <span>Colleges</span>
                <span>Course Fee</span>
                <span>Placement</span>
                <span>CD Reviews</span>
                <span>User Reviews</span>
            </div>
            <InfiniteScroll
                dataLength={items.colleges.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<div className='loader' >Loading more Colleges.....</div>}
            >

                {items.colleges.map((item, index) => (
                    <div key={index}>
                        <Card
                            name={item.name}
                            city={item.city}
                            state={item.state}
                            course={item.course}
                            course_fee={item.course_fee}
                            average_package={item.average_package}
                            highest_package={item.highest_package}
                            collegeduniya_rating={item.collegeduniya_rating}
                            user_rating={item.user_rating}
                            ranking={item.ranking}
                            featured={item.featured}
                            search={searchQuery}
                        />
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    );
};

export default Scroll;
