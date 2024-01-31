import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

import offers from '../../assets/data/offers.json'
import {SliderCard} from "./OfferCards/SliderCard.jsx";
import {Box} from "@mui/material";

export const OfferCards = () => {
    var settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1.07,
        slidesToScroll: 1.07,
        infinite:false,
        arrows:false,

    };
    return (
        <Slider {...settings}>
            {offers.map(o =>
                <Box key={o.id} sx={{px:1}}>
                    <SliderCard content={o}/>
                </Box>
            )}
        </Slider>
    )
}