import React from 'react';
import '../styling/tilegrid.css';

const TileGrid = () => {
    const generateRandomData = () => {
        return Array.from({ length: 4 }).map((_, index) => ({
            title: `Random Title ${index + 1}`,
            content: `This is some random content for item ${index + 1}. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
            image: `https://source.unsplash.com/350x400/?nature&${index}`
        }));
    };

    const data = generateRandomData();

    return (
        <>
            <div className="carousel">
                <div className="card-container">
                    <div className="row1">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className={`card`}
                                style={{ backgroundImage: `url(${item.image})` }}
                            >
                                <h2>{item.title}</h2>
                                <div className="card-content">
                                    <p className="paragraph">{item.content}</p>
                                </div>
                                <button className="expand-button">expand</button>
                            </div>
                        ))}
                    </div>
                    <div className="row1">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className={`card`}
                                style={{ backgroundImage: `url(${item.image})` }}
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
