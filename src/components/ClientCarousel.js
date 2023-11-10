import React from 'react';
import ImageCarousel from "./ClientCarouselMain";

const ClientCarousel = () => {
    const items = [

        { image: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Father-Daughter-Breakfast-768x768%3Arad-3x2?ts=1697180881534&dpr=off',title:'Mondelēz International’s Data and AI Transformation',
            description: 'As outer space gets more crowded and contested, QuSecure is protecting communications and data transmission with the agility required for the world of post-quantum computing.' },
        { image: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Sustainability-Feeding-The-World%3Arad-3x2?ts=1696022628310&dpr=off',
            description: 'The global snacking giant is laying a tasty foundation for reinvention and growth. Accenture is helping Mondelēz International to embrace the power of data and AI, build a strong digital core and implement interoperable cloud-enabled technology.', },
        { image: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Microsoft-Cloud-Supply-Chain-Control-Tower%3Arad-3x2?ts=1696022647480&dpr=off', title: 'Generative AI transforming customer service',
            description: 'Rapid growth of the cloud changed Microsoft’s supply chain network significantly. The solution? Data-led transformation to a supply chain control tower.' },
        {image:'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Liberty-Global-Egg-Electric-Vehicle-Charging-640x425%3Arad-3x2?ts=1698734378523&dpr=off',title: 'Egg gives electric vehicle charging a jolt',
        description: 'Seeking sustainability, more people are buying electric vehicles. To keep them powered up, Liberty Global and Accenture developed Egg, a renewable energy brand that makes installing home EV chargers easy and affordable.'}
    ];


    return (
        <>
            <div style={{width:"100%"}}>
                <ImageCarousel images={items} />
            </div>


        </>
    );
};

export default ClientCarousel;
