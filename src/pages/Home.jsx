import React, {useState} from "react";
import {Box, Button, Stack, Typography} from "@mui/material";
import {Main} from "../layouts/Main.jsx";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {Offers} from "../components/Home/Offers.jsx";

const WelcomeScreen = ({...props}) => {
    const {setShopping} = props
    return (
        <Box sx={{position: 'relative', lineHeight:0}}>
            <Box sx={{position: 'absolute', top: 0, left: 0, zIndex: 2, height: '100%'}}>
                <Stack sx={{px: 3, py: 10, height: '100%'}} justifyContent={'space-between'}>
                    <Typography variant={'h1'} fontWeight={'bold'} color={'white'}>
                        Elegant
                        <br/>
                        furniture
                        <br/>
                        for you.
                    </Typography>
                    <Box>
                        <Button variant={'contained'} onClick={() => setShopping(true)} endIcon={<ArrowForwardIcon/>}>
                            start shopping
                        </Button>
                    </Box>
                </Stack>
            </Box>
            <Box sx={{width: '100%', height: '100vh', position: 'relative'}}>
                <Box sx={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    backgroundColor: 'black',
                    opacity: 0.4
                }}/>
                <img style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'left'}}
                     src={'/assets/home-bedroom.jpeg'}/>
            </Box>
        </Box>
    )
}

export const Home = () => {
    const [shopping, setShopping] = useState(false)
    const [section, setSection] = useState('1')

    if (!shopping) {
        return (
            <WelcomeScreen setShopping={setShopping}/>
        )
    }

    const handleChangeSection = (event, newValue) => {
        setSection(newValue)
    }

    return (
        <Main>
            <Box sx={{width: '100%'}}>
                <TabContext value={section}>
                    <Box>
                        <TabList onChange={handleChangeSection} centered>
                            <Tab sx={{textTransform:"none"}} label="Offers" value="1"/>
                            <Tab sx={{textTransform:"none"}} label="What's new" value="2" disabled/>
                            <Tab sx={{textTransform:"none"}} label="Hot sales" value="3" disabled/>
                        </TabList>
                    </Box>
                    <TabPanel value="1" sx={{px:0}}>
                        <Offers/>
                    </TabPanel>
                    <TabPanel value="2"><Box sx={{height:'200vh', background:'red'}}>fd</Box></TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
            </Box>
        </Main>
    )
}