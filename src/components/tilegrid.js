import React from 'react';
import '../styling/tilegrid.css';

const Data = [
    {
        "title": "Card 1 Title",
        "content": "It is a long established fact that a reader will be distracted by the " +
            "readable content of a page when looking at its layout. "
    },
    {
        "title": "Card 2 Title",
        "content": "Content for Card 2"
    },
    {
        "title": "Card 3 Title",
        "content": "Content for Card 3"
    },
    {
        "title": "Card 4 Title",
        "content": "Content for Card 4"
    }

];

const TileGrid = () => {


    return (
        <>
            <div className="carousel">
                <div className="card-container">
                    <div className="row1">
                        {Data.map((item, index) => (
                            <div
                                key={index}
                                className={`card`}
                            >
                                <h2>{item.title}</h2>
                                <div className="card-content">

                                    <p className="paragraph">{item.content}</p>
                                </div>
                                <button className="expand-button">expand</button>
                            </div>
                        ))}
                    </div>
                    <div className="row2">
                        {Data.map((item, index) => (
                            <div
                                key={index}
                                className={`card`}
                            >
                                <h2>{item.title}</h2>
                                <div className="card-content">

                                    <p className="paragraph">{item.content}</p>
                                </div>
                                <button className="expand-button">expand</button>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </>
    );
};

export default TileGrid;
