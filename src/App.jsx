import './App.css'
import {Route, Routes} from "react-router-dom";
import {Home} from "./home/Home.jsx";
import {Box, CssBaseline, ThemeProvider} from "@mui/material";
import {useContext, useState} from "react";
import {darkTheme, lightTheme} from "./theme/ecommerceTheme.js";
import ThemeContextProvider, {ThemeContext} from "./contexts/ThemeContext.jsx";

function App() {
    const {theme} = useContext(ThemeContext)

    return (
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            <CssBaseline/>
            <Box>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                </Routes>
            </Box>
        </ThemeProvider>
    )
}

export default App
