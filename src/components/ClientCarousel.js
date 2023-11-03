import React from 'react';
import ExpandableCard from './expandable';

const ClientCarousel = () => {
    const items = [
        { title: 'Card 1', image: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Father-Daughter-Breakfast-768x768%3Arad-3x2?ts=1697180881534&dpr=off', description: 'Description for Card 1.' },
        { title: 'Card 2', image: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Sustainability-Feeding-The-World%3Arad-3x2?ts=1696022628310&dpr=off', description: 'Description for Card 2.' },
        { title: 'Card 3', image: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Microsoft-Cloud-Supply-Chain-Control-Tower%3Arad-3x2?ts=1696022647480&dpr=off', description: 'Description for Card 3.' },
    ];

    return (
        <>
            <div className="client-carousel">
                {items.map((item, index) => (
                    <ExpandableCard key={index} title={item.title} image={item.image} description={item.description} />
                ))}
            </div>
        </>
    );
};

export default ClientCarousel;
