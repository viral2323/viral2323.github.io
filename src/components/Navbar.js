import React, {useState} from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import {info} from "../info/Info";
import {useMediaQuery} from "@mui/material"

const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'About Me',
        to: '/about',
        active: 'about'
    },
    {
        name: info.initials,
        type: 'initials',
        to: '/',
        active: 'home'
    },
    {
        name: 'Portfolio',
        to: '/portfolio',
        active: 'portfolio'
    }
]

export default function Navbar({darkMode, handleClick,isOpen,handleOpenClose}) {
    const location = useLocation();
    const isSmall = useMediaQuery('(min-width:600px)');
    console.log('issmall', isSmall)
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    return (
        <>
            {isSmall ?
                <Box component={'nav'} width={'100%'} mb={'1rem'}>
                    <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                         gap={{xs: '2rem', md: '8rem'}}
                         textTransform={'lowercase'} fontSize={'1.2rem'}>
                        {links.map((link, index) => (
                            <Box key={index} component={'li'}
                                 className={(link.active === active && !link.type) && Style.active}
                                 sx={{borderImageSource: info.gradient}}>
                                <Link to={link.to} onClick={() => setActive(link.active)} className={Style.link}>
                                    {!link.type &&
                                        <p style={{padding: '0.5rem 0', textTransform: 'capitalize'}}>{link.name}</p>}
                                    {link.type && <h1>{link.name}</h1>}
                                </Link>
                            </Box>
                        ))}
                        <li>
                            <Toggler darkMode={darkMode} handleClick={handleClick}/>
                        </li>
                    </Box>
                </Box>
                :
                <Box component={'nav'} width={'100%'} mb={'1rem'} position={"relative"}>
                    <div onClick={handleOpenClose} className={isOpen ? Style.openClose : Style.smallOpenClose}>
                        {!isOpen ? <i className="fa fa-bars" aria-hidden="true"></i> :
                            <i className="fa fa-times" aria-hidden="true"></i>}
                    </div>
                    { isOpen ? <Box component={'ul'} className={Style.small}
                          gap={{xs: '2rem', md: '8rem'}}
                          textTransform={'lowercase'} fontSize={'1.2rem'}>
                        {links.map((link, index) => (
                            <Box key={index} component={'li'}
                                 className={(link.active === active && !link.type) && Style.active}
                                 sx={{borderImageSource: info.gradient}}>
                                <Link to={link.to} onClick={() => {
                                    handleOpenClose()
                                    setActive(link.active)
                                }} className={Style.link}>
                                    {!link.type &&
                                        <p style={{padding: '0.5rem 0', textTransform: 'capitalize'}}>{link.name}</p>}
                                    {link.type && <h1>{link.name}</h1>}
                                </Link>
                            </Box>
                        ))}
                        <li>
                            <Toggler darkMode={darkMode} handleClick={handleClick}/>
                        </li>
                    </Box> : ""}
                </Box>
            }
        </>
    )
}