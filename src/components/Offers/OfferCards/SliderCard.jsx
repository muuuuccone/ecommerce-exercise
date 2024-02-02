import React from "react";
import {Box, Card, Grid, Typography} from "@mui/material";

export const SliderCard = ({content}) => {
    const {image, line1, line2, line3, background, textColor} = content

    return(
     <Card sx={{background:background, borderRadius:'1.5rem', boxShadow:'none', position:'relative'}}>
         <Grid container alignItems={'center'} sx={{py:1}}>
             <Grid item xs={5.5} sx={{position:'relative'}}>
                 <Box sx={{width:'100%', zIndex:"99", position:'relative', height:'8rem'}}>
                     <img style={{width:'100%', height:'100%', objectFit:'contain'}} src={`/assets/offers/${image}`}/>
                 </Box>
             </Grid>
             <Grid item xs={6.5}>
                 <Typography variant={'h6'} color={textColor}>
                     {line1}
                 </Typography>
                 <Typography variant={'h1'} fontWeight={'400'} color={textColor} sx={{lineHeight: {xs:'3rem', md:'5rem'}}}>
                    {line2}
                 </Typography>
                 <Typography color={textColor}>
                     {line3}
                 </Typography>
             </Grid>
         </Grid>
         <Box sx={{
             position: "absolute",
             top: 0,
             left: 0,
             background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 60%);',
             width:'45%',
             height:'100%',
             zIndex:"0"
         }}/>
     </Card>
    )
}