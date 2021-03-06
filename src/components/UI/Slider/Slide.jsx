import React, { useState } from "react";
import "./Slide.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slide = (props) => {
    const [current, setCurrent] = useState(3);
    const [currentIdx, setCurrentIdx] = useState(0);
    const length = props.cards.length;

    const slicedSlider = props.cards.slice(currentIdx, current);

    const nextSlide = () => {
        if (length - 1 > current) {
            setCurrent(current + 3);
            setCurrentIdx(currentIdx + 3);
        } else {
            setCurrent(3);
            setCurrentIdx(0);
        }
    };

    const prevSlide = () => {
        if (current === 3) {
            setCurrent(length);
            setCurrentIdx(length - 3);
        } else {
            setCurrent(current - 3);
            setCurrentIdx(currentIdx - 3);
        }
    };

    if (!Array.isArray(props.cards) || props.cards.length <= 0) {
        return null;
    }

    return (
        <section className="slider_container">
            <h3 className='home_header'>Home Page</h3>
            <div className="slider">
                <div className="left_arrow" onClick={prevSlide}>
                    <FaChevronLeft />
                </div>
                <div className="slider_wrapper">
                    {slicedSlider.map((card, index) => {
                        return (
                            <div key={index} className="cards_container">
                                {
                                    <div className="dogs_card">
                                        <img
                                            src={card.image.url}
                                            alt="dogs"
                                        ></img>
                                        <div className="dogs_information">
                                            <p className="dogs_name">
                                                {card.name}
                                            </p>
                                            <p className="dogs_bred">
                                                {card.bred_for}
                                            </p>
                                            <p className="dogs_temperament">
                                                {card.temperament}
                                            </p>
                                        </div>
                                    </div>
                                }
                            </div>
                        );
                    })}
                </div>
                <div className="right_arrow" onClick={nextSlide}>
                    <FaChevronRight />
                </div>
            </div>
        </section>
    );
};

export default Slide;
