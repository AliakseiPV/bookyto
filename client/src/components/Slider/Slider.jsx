import React, { Component } from "react";
import Slider from "react-slick";
import books from '../../TestData/book.json'
import './Slider.scss'

function SampleNextArrow({onClick}) {
    return (
        <div
            className={'right-row'}
            onClick={onClick}
        />
    );
}
function SamplePrevArrow({onClick}) {
    return (
        <div
            className={'left-row'}
            onClick={onClick}
        />
    );
}

export default class AutoPlay extends Component {
    render() {
        const settings = {
        pauseOnHover: true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        speed: 800,
        focusOnSelect: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        adaptiveHeight: true,
        centerMode: true,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
        }
    return (
        <div style={{width: "1050px"}}>
            <Slider {...settings}>
        {books.map(book => 
            <div key={book.id}>
                <img 
                    className="slider-img" 
                    onClick={() => {}} 
                    src={book.book_cover} 
                    alt="trend-book" 
                    width={170}
                />  
            </div>
        )}
        </Slider>
        </div>   
    )}
}