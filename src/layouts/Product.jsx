import React from "react";
import {Box, Container, IconButton, Stack, Typography} from "@mui/material";
import {Apps, ArrowBack, QrCodeScanner, Search, Star} from "@mui/icons-material";
import {Link, useParams} from "react-router-dom";
import products from '../assets/data/products.json'

export const ProductLayout = ({children}) => {
    const {id} = useParams()
    const product = products.find(p => p.id === id)

    return (
        <Box>
            <Stack direction={'row'}>
                <Container sx={{pt:3, pb:1}}>
                    <Stack justifyContent={'space-between'} direction={'row'} alignItems={'center'}>
                        <Box>
                            <IconButton sx={{color:'#35373B'}} component={Link} to={'/'}>
                                <ArrowBack/>
                            </IconButton>
                        </Box>
                        <Box>
                            <Typography variant={'h6'}>
                                {product.name}
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton sx={{color:'#35373B'}}>
                                <Search/>
                            </IconButton>
                        </Box>
                    </Stack>
                </Container>
            </Stack>
            <Box>
                {children}
            </Box>
        </Box>
    )
}