import React from 'react';
import '../styling/tilegrid.css'
import Data from '../utils/data.json';

const Tilegrid = () => {

    return (
        <>
            <div className="container">
                {
                    Data.titleGrid.map((item, index) => {
                        return (
                            <div className="card" key={index}>
                                <div className="card__header">
                                    <img src={item.imageSrc} alt="card__image"
                                         className="card__image" width="600"/>
                                </div>
                                <div className="card__body">
                                    <span className={'tag ' + item.subClass}>{item.tag}</span>
                                    <h4>{item.subText}</h4>
                                    <p>{item.subTextDescription}</p>
                                </div>
                                <div className="card__footer">
                                    <div className="user">
                                        <img src={item.userImage} alt="user__image"
                                             className="user__image"/>
                                        <div className="user__info">
                                            <h5>{item.userName}</h5>
                                            <small>{item.time}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Tilegrid;
