import React, {useState} from 'react';
import '../styling/clientcarousel.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const ClientCarousel = () => {
    const [activeItem, setActiveItem] = useState(0);

    const handleItemClick = (index) => {
        console.log("index",index)
        setActiveItem( index);
    };
   console.log("index ::",activeItem)
    const owlOptions = {
        loop: true,
        onChanged: (e) => {
            console.log(("e index",e.item.index))
            if(e.item.index === 0){
                setActiveItem(e.item.index-1)
            } else{
            setActiveItem(e.item.index-1)
        }
        }

    };
    const items = [
        {
            backgroundImage: "url(https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg)",
            title: "Dota 2",
            description: "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III."
        },

        {
            backgroundImage: "url(https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg)",
            title: "The Witcher 3",
            description: "The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense\n" +
                "          of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III."
        },

        {
            backgroundImage:"url(https://www.yudiz.com/codepen/expandable-animated-card-slider/rdr-2.jpg)",
            title: "RDR 2",
            description: "RDR 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the\n" +
                "          Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III."
        },

        {
            backgroundImage: "url(https://www.yudiz.com/codepen/expandable-animated-card-slider/pubg.jpg)",
            title: "PUBG Mobile",
            description: "PUBG 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the\n" +
                "          Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III."
        }

    ];

    return (
        <section className="game-section">
            <h2 className="line-title">trending games</h2>
            <OwlCarousel className="owl-carousel custom-carousel owl-theme" {...owlOptions} loop>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`item active`}
                        style={{ backgroundImage: item.backgroundImage }}
                        onClick={() => setActiveItem(index)}
                    >
                        <div className="item-desc">
                            <h3>{item.title}</h3>
                            {index === activeItem && <p>{item.description}</p>}
                        </div>
                    </div>
                ))}
            </OwlCarousel>
        </section>
    );
}

export default ClientCarousel;
