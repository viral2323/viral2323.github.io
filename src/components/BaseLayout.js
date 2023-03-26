import React, {useEffect, useState} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio  from "./portfolio/Portfolio";
import ParticlesBg from './particles/ParticlesBg';
import {Route, Routes} from "react-router-dom";
import {Box, Grid, useMediaQuery} from "@mui/material";

export default function BaseLayout() {
   const [isOpen, setIsOpen] = useState(false)
   let [darkMode, setDarkMode] = useState(true);
   const isSmall = useMediaQuery('(min-width:600px)');
   function handleToggleDarkMode() {
      let oppositeOfCurrentDarkMode = !darkMode
      console.log(oppositeOfCurrentDarkMode)
      localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`)
      setDarkMode(oppositeOfCurrentDarkMode)
   }

   const handleOpenClose = () => {
      setIsOpen(!isOpen)
   }

   useEffect(() => {
      let detectedDarkMode = eval(localStorage.getItem('darkMode'));

      if (detectedDarkMode) {
         setDarkMode(detectedDarkMode)
      } else {
         localStorage.setItem('darkMode', 'false')
      }
   }, [])

   return (
      <Box className={darkMode ? Style.dark : Style.light} style={isOpen ? {height: '100vh',overflow: 'hidden' } :{} }>
          <ParticlesBg darkMode={darkMode.valueOf()} />
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'} style={{position: 'relative'}}>
            <Grid item className={isSmall ? '' : `${Style.small_navbar} ${darkMode ? `${isOpen ? Style.small_navbar_dark : ''}` : `${isOpen ? Style.small_navbar_light : ''}`}`}>
               <Navbar handleOpenClose={handleOpenClose} isOpen={isOpen} darkMode={darkMode} handleClick={handleToggleDarkMode}/>
            </Grid>
            <Grid item flexGrow={1} mt={isSmall ? '' : '3.5rem'}>
               <Routes>
                  <Route exact path={'/'} element={<Home darkMode={darkMode}/>}/>
                  <Route exact path={'/about'} element={<About/>}/>
                  <Route exact path={'/portfolio'} element={<Portfolio/>}/>
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                    py={'1.5rem'} sx={{opacity: 0.7}} width={'100%'}>
                  <p>Created with &hearts; by <a href={'https://paytonpierce.dev'}>Viral Sangani</a></p>
                  <p>&copy; 2023</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}

