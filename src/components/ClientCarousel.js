import React from 'react';
import ExpandableCard from './expandable';

const ClientCarousel = () => {
    const items = [
        { image: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Father-Daughter-Breakfast-768x768%3Arad-3x2?ts=1697180881534&dpr=off', description: 'As outer space gets more crowded and contested, QuSecure is protecting communications and data transmission with the agility required for the world of post-quantum computing.' },
        { image: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Sustainability-Feeding-The-World%3Arad-3x2?ts=1696022628310&dpr=off', description: 'The global snacking giant is laying a tasty foundation for reinvention and growth. Accenture is helping Mondelēz International to embrace the power of data and AI, build a strong digital core and implement interoperable cloud-enabled technology.' },
        { image: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Microsoft-Cloud-Supply-Chain-Control-Tower%3Arad-3x2?ts=1696022647480&dpr=off', description: 'Rapid growth of the cloud changed Microsoft’s supply chain network significantly. The solution? Data-led transformation to a supply chain control tower.' },
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
