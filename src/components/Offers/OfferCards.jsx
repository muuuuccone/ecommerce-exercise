import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

import offers from '../../assets/data/offers.json'
import {SliderCard} from "./OfferCards/SliderCard.jsx";
import {Box, Container, Grid, useMediaQuery, useTheme} from "@mui/material";
import {DesktopOfferCard} from "./OfferCards/DesktopOfferCard.jsx";

export const OfferCards = () => {
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down('md'))

    var settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1.07,
        slidesToScroll: 1.07,
        infinite:false,
        arrows:false,

    };

    if (mobile) {
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

    return (
        <Container>
            <Grid container>
                {
                    offers.map(o =>
                        <Grid item xs={6} key={o.id} sx={{px:1}}>
                            <DesktopOfferCard content={o}/>
                        </Grid>
                    )
                }
            </Grid>
        </Container>
    )
}