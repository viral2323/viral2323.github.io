import React from 'react';
import {useMediaQuery} from '@mui/material'

function SocialIcon(props) {
    const {link, icon, label} = props;
    const isSmall = useMediaQuery('(min-width:600px)');

    return (
        <a target="_blank" aria-label={label} style={isSmall ? {marginRight: '30px'} : {marginRight: '20px'}}
           rel="noopener noreferrer" href={link}>
            <i className={icon} aria-hidden="true"/>
        </a>
    );
}

export default SocialIcon;