import './App.css'
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {Box, CssBaseline, ThemeProvider} from "@mui/material";
import {useContext, useState} from "react";
import {darkTheme, lightTheme} from "./theme/ecommerceTheme.js";
import ThemeContextProvider, {ThemeContext} from "./contexts/ThemeContext.jsx";
import {Product} from "./pages/Product.jsx";

function App() {
    const {theme} = useContext(ThemeContext)

    return (
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            <CssBaseline/>
            <Box>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/product/:id'} element={<Product/>}/>
                </Routes>
            </Box>
        </ThemeProvider>
    )
}

export default App
