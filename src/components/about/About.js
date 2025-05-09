import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about {firstName} </p>
            <p><span style={{color: info.baseColor}}>about {firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
                ))}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Additional Competencies</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    function experienceText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                experience/work</p>
            <p><span style={{color: info.baseColor}}>experience/work  <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <Box mt={'2rem'}>
                {info.experience.map((item,i,arr) => {
                    return(
                        <>
                            <h4 style={{color: 'white'}}>Position: <span style={{color: '#12e0e7'}}>{item.position}</span></h4>
                            <h5 style={{color: 'white'}}>Company Name: <span style={{color: '#60ad74'}}>{item.name}</span></h5>
                            <p>Duration: {item.year}</p>
                            <p style={arr.length == i + 1 ? {} : {paddingBottom: '2rem', borderBottom: '1px dashed #12e0e7'}}>Working Experience: {item.duration}</p>
                        </>
                        )
                })}
            </Box>
        </>

    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={experienceText()}/>
        </Box>
    );
}