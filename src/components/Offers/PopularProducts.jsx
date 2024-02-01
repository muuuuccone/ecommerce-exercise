import React from "react";
import {Box, Button, Card, CardContent, Grid, Stack, Typography} from "@mui/material";
import products from '../../assets/data/products.json'
import {SliderCard} from "./OfferCards/SliderCard.jsx";
import Slider from "react-slick";
import {AddShoppingCart, Star, StarBorder, StarHalf} from "@mui/icons-material";
import {Link} from "react-router-dom";

const PopularCard = ({content}) => {
    const {id, image, category, name, stars, price} = content

    return(
        <Box sx={{position:'relative'}}>
            <Box sx={{width:'100%', position:'absolute', height:'8rem', zIndex:99}}>
                <img style={{width:'100%', height:'100%', objectFit:'contain'}} src={image}/>
            </Box>
            <Box sx={{height:'2rem'}}/>
            <Card sx={{borderRadius:'1.5rem', boxShadow:'none', position:'relative', width:'100%', height:'100%'}}>
                <CardContent>
                    <Stack sx={{position:'relative'}}>
                        <Box sx={{height:'6rem'}}/>
                        <Box>
                            <Typography variant={'caption'}>
                                {category}
                            </Typography>
                            <Typography variant={'h5'} fontWeight={'500'}>
                                {name}
                            </Typography>
                            {
                                [...new Array(5)].map((o, i) => {
                                    if (i < stars) {
                                        if(i + 0.5 === stars){
                                            return (
                                                <StarHalf key={i}/>
                                            )
                                        }
                                        return (
                                            <Star key={i}/>
                                        )
                                    }
                                    return (
                                        <StarBorder key={i}/>
                                    )
                                }
                                )
                            }
                        </Box>
                        <Stack justifyContent={'space-between'} direction={'row'} alignItems={'center'} sx={{pt:2}}>
                            <Typography variant={'h4'} fontWeight={'bold'}>€{price.toString().split(".")[1] ? price : price+".00"}</Typography>
                            <Box>
                                <Button variant={'contained'} sx={{aspectRatio:'1/1', borderRadius:'50rem', boxShadow:'none !important'}}>
                                    <AddShoppingCart/>
                                </Button>
                            </Box>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    )
}

export const PopularProducts = () => {
    var settings = {
        dots: false,
        speed: 500,
        slidesToShow: 1.7,
        swipeToSlide:true,
        infinite:false,
        arrows:false,

    };
  return(
      <Box sx={{py:6}}>
          <Box sx={{px:2}}>
              <Typography variant={'h5'} fontWeight={'bold'}>
                  Popular Products
              </Typography>
          </Box>
          <Box sx={{pt:"3rem"}}>
              <Slider {...settings}>
                  {products.filter(p => p.popular).map(o =>
                      <Box key={o.id} sx={{px:1, textDecoration:'none'}} component={Link} to={`/product/${o.id}`}>
                          <PopularCard content={o}/>
                      </Box>
                  )}
              </Slider>
          </Box>
      </Box>
  )
}