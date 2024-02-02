import React from "react";
import {Box, Typography} from "@mui/material";

export const DesktopOfferCard = ({content}) => {
    const {line1, line2, line3, bkgImage} = content
    return (
        <Box sx={{
            position: 'relative',
            width: '100%',
            aspectRatio: '1.5/1',
            backgroundImage: `url("/assets/offers/${bkgImage}")`,
            backgroundPosition: 'left bottom',
            backgroundSize: 'cover',
            borderRadius: '2rem',
            overflow: 'hidden'
        }}>
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                typography: {color: 'white', textAlign: 'center', fontWeight: 'bold'}
            }}>
                <Typography variant={'h4'}>
                    {line1}
                </Typography>
                <Typography variant={'h1'}>
                    {line2}
                </Typography>
                <Typography variant={'h5'}>
                    {line3}
                </Typography>
            </Box>
            <Box sx={{width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)'}}/>
        </Box>
    )
}