import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Colleges } from '../CollegeData';
import "./Scroll.css";
import Card from './Card/Card';
import TopBar from './TopBar/TopBar';

const Scroll = () => {
    const [items, setItems] = useState({
        colleges: Colleges.slice(0, 10),
        visibleCount: 10,
    }); // Display first 10 colleges initially

    const [sortByRank, setSortByRank] = useState(null);
    const [sortByName, setSortByName] = useState(null);
    const [sortByFee, setSortByFee] = useState(null);
    const [sortByCDReview, setSortByCDReview] = useState(null);
    const [sortByUserReview, setSortByUserReview] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        const filteredColleges = Colleges.filter(college =>
            college.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setItems({
            colleges: filteredColleges.slice(0, items.visibleCount),
            visibleCount: items.visibleCount,
        });
    }, [searchQuery]);

    useEffect(() => {
        sortRank();
    }, [sortByRank]); // Trigger sorting whenever sortBy state changes

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

    const fetchMoreData = () => {
        setTimeout(() => {
            setItems(prevState => {
                const newVisibleCount = prevState.visibleCount + 10;
                return {
                    colleges: Colleges.slice(0, newVisibleCount),
                    visibleCount: newVisibleCount,
                };
            });
        }, 1000);
    };

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
                        />
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    );
};

export default Scroll;
