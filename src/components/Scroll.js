import React, { useState } from 'react'
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from './Card/Card';

const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
};

const Scroll = () => {
    const [items, setItems] = useState(Array.from({ length: 10 }));

    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            setItems(items.concat(Array.from({ length: 10 })));
        }, 1500);
    };

    return (
        <div>
            <h1>demo: react-infinite-scroll-component</h1>
            <hr />
            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                {items.map((item, index) => (
                    // <div style={style} key={index}>
                    //     div - #{index}
                    // </div>
                    <Card />
                ))}
            </InfiniteScroll>
        </div>
    )
}

export default Scroll