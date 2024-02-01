import React, {useState} from "react";
import {Box, Button, Card, CardContent, Container, IconButton, Stack, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {ProductLayout} from "../layouts/Product.jsx";
import products from '../assets/data/products.json'
import styled from "@emotion/styled";
import {AddShoppingCart, FavoriteBorder} from "@mui/icons-material";

const ColorContainer = styled(Box)`
    background: rgba(97, 143, 206, 0.44);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
`
export const Product = () => {
    const {id} = useParams()
    const product = products.find(p => p.id === id)

    const [color, setColor] = useState(product.colors[0])

    return (
        <ProductLayout>
            <Container sx={{minHeight:'86vh', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <Box sx={{position: 'relative', p:2}}>
                    <Box sx={{position: 'absolute'}}>
                        <ColorContainer>
                            <Stack direction={'row'} spacing={3} alignItems={'center'} sx={{px: 3, py: 1.5}}>
                                <Typography color={'white'} sx={{opacity: 0.9}} variant={'h6'}>
                                    Colors
                                </Typography>
                                <Stack direction={'row'} spacing={1}>
                                    {
                                        product.colors.map(c => <Box key={c.id}
                                                                     onClick={() => setColor(c)}
                                            sx={{p:0.5, border: `2px solid ${color.id ===c.id ?"#338FF5" : 'transparent'}`, borderRadius:"50rem"}}
                                            >
                                            <Box
                                                sx={{
                                                    width: '1.2rem',
                                                    height: '1.2rem',
                                                    background: c.color,
                                                    borderRadius: '50rem',
                                                }}
                                            />
                                            </Box>
                                        )
                                    }
                                </Stack>
                            </Stack>
                        </ColorContainer>
                    </Box>
                    <Box style={{width: '100%'}}>
                        <img style={{width: '100%'}} src={`/assets/products/${id}/${color.id}.png`}/>
                    </Box>
                </Box>
                <Box>
                    <Card sx={{borderRadius:'1.5rem', boxShadow:'none'}}>
                        <CardContent>
                            <Stack justifyContent={'space-between'} direction={'row'} alignItems={'center'}>
                                <Box>
                                    <Typography variant={'caption'} sx={{opacity:'0.7'}}>
                                        {product.category}
                                    </Typography>
                                    <Typography variant={'h5'} fontWeight={'500'}>
                                        {product.name}
                                    </Typography>
                                </Box>
                                <Box>
                                    <IconButton>
                                        <FavoriteBorder/>
                                    </IconButton>
                                </Box>
                            </Stack>
                            <Typography sx={{opacity:'0.5', lineHeight:'1.2', pt:2}}>
                                {product.description}
                            </Typography>
                            <Box sx={{pt:2}}>
                                <Button variant={'contained'} sx={{width:'100%', py:2, fontSize:'1rem'}} startIcon={<AddShoppingCart/>}>
                                    <Stack spacing={3} direction={'row'} justifyContent={'center'} alignItems={'center'}>
                                        <Box>
                                            Add to cart
                                        </Box>
                                        <Box>
                                            |
                                        </Box>
                                        <Box>
                                            ${product.price.toString().split(".")[1] ? product.price : product.price+".00"}
                                        </Box>
                                    </Stack>
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </ProductLayout>
    )
}