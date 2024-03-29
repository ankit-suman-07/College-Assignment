import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Colleges } from '../CollegeData';
import "./Scroll.css";
import Card from './Card/Card';


const Scroll = () => {
    const [items, setItems] = useState(Colleges.slice(0, 10)); // Display first 10 colleges initially
    const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query

    const fetchMoreData = () => {
        setTimeout(() => {
            const nextItems = Colleges.slice(items.length, items.length + 10); // Load next 10 colleges
            setItems(prevItems => [...prevItems, ...nextItems]);
        }, 1500);
    };

    const handleSearch = (event) => {
        const query = event.target.value.trim().toLowerCase(); // Get search query and convert to lowercase
        setSearchQuery(query); // Update search query state
        const filteredColleges = Colleges.filter(college =>
            college.name.toLowerCase().includes(query) // Filter colleges whose name matches the search query
        );
        setItems(filteredColleges.slice(0, 10)); // Display first 10 filtered colleges
    };

    return (
        <div>

            <input
                type="text"
                placeholder="Search by name"
                value={searchQuery}
                onChange={handleSearch}
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
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >

                {items.map((item, index) => (
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
