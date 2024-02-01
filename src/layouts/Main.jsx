import React, {useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext.jsx";
import {AppBar, Badge, Box, Card, Container, IconButton, Stack, Toolbar} from "@mui/material";
import {Apps, Home, Person, QrCodeScanner, ShoppingCart} from "@mui/icons-material";
import {Link} from "react-router-dom";

const ShoppingCartIcon = () => {
    return (
        <Badge badgeContent={10} color={'primary'}>
            <ShoppingCart/>
        </Badge>
    )
}

const pages = [
    {
        id: 'home',
        icon: <Home/>,
        url: "/"
    },
    {
        id: "profile",
        icon: <Person/>,
        url: "/profile"
    },
    {
        id: "cart",
        icon: <ShoppingCartIcon/>,
        url: "/cart"
    }
]

export const Main = ({children}) => {
    return (
        <Box sx={{position: 'relative'}}>
            <Container sx={{pt:3, pb:1}}>
                <Stack justifyContent={'space-between'} direction={'row'} alignItems={'center'}>
                    <Box>
                        <IconButton sx={{color:'#35373B'}}>
                            <QrCodeScanner/>
                        </IconButton>
                    </Box>
                    <Box>
                        <IconButton sx={{color:'#35373B'}}>
                            <Apps/>
                        </IconButton>
                    </Box>
                </Stack>
            </Container>
            <Box sx={{overflowX:'visible'}}>
                {children}
            </Box>
            <Box sx={{
                position: "fixed",
                top: 0,
                left: 0,
                background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 60%);',
                width:'100%',
                height:'100%',
                zIndex:"-1"
            }}/>
            {/*<AppBar position={'fixed'} sx={{top: 'auto', bottom: 0, background: 'transparent', boxShadow: 'none'}}>
                <Card sx={{p: 1, mx: 6, my: 2, borderRadius: '50rem'}}>
                    <Stack spacing={4} direction={'row'} justifyContent={'center'} alignItems={'center'}
                           sx={{width: '100%'}}>
                        {
                            pages.map((p, i) =>
                                <Box key={p.id}>
                                    <IconButton component={Link} to={p.url}>
                                        {p.icon}
                                    </IconButton>
                                </Box>
                            )
                        }
                    </Stack>
                </Card>
            </AppBar>*/}
        </Box>
    )
}