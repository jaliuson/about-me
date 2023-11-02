import React, { Component, useState } from 'react';
import ReactHover, { Trigger, Hover } from "react-hover";

import './ExperiencePanel.css';

import AmazonLogo from './images/Amazon-logo.png';
import OslLogo from './images/OSL-logo.png';
import MecLogo from './images/MEC-logo.png';
import HockeystickLogo from './images/HS-logo.png';

import Triangle from './images/pointer.png';

const jobInformation = [
    {
        company: 'Amazon.com', jobTitle: 'Software Development Engineer', team: 'Worldwide Mobile Shopping App - Discovery and Navigation',
        description: 'Implemented a dynamic pipeline for content being used in mobile app navigation using React Native. This pipeline enabled internal stakeholders to make changes to content that could be realized by users within minutes instead of days' 
    },
    {
        company: 'Hockeystick.co', jobTitle: 'Product Management Analyst', team: 'Dealflow Optimization and Loan Applications',
        description: 'Optimized engagement and conversion of financers offering more than $100,000 by researching and implementing more effective match criteria in companies seeking funding. Collaborated with UI designers, software engineers and other porduct managers to efficiently push features' 
    },
    {
        company: 'OSL Retail Services', jobTitle: 'Bike Technician', team: 'Field Operations Team',
        description: 'Partnered with Walmart Canada to fulfill bike orders at 7 different locations across the Greater Toronto Area. Adapted to industry supply chain issues by streamlining processes during invesntory influxes and supporting adjacent contractors during shortages' 
    },
    {
        company: 'Mountain Equipment Company', jobTitle: 'Sales Advisor & Bike Builder', team: 'Bike Sales and Service',
        description: 'Informed and assisted customers with finding the products that best suit them based on their use cases and prefernces. As an uncomissioned advisor working with a (formerly) co-op busienss, this meant that I was always honest and genuine when finding the best value and fit for the customer' 
    }
]

const ExperiencePanel = () => {
    const [selected, setSelected] = useState(0);
    const [jobTitle, setJobTitle] = useState(jobInformation[0].jobTitle);
    const [team, setTeam] = useState(jobInformation[0].team);
    const [description, setDescription] = useState(jobInformation[0].description);

    const setDisplay = (number) => {
        setSelected(number)
        setJobTitle(jobInformation[number].jobTitle);
        setTeam(jobInformation[number].team)
        setDescription(jobInformation[number].description);
    }

    const generatePointer = () => {
        return(
            <div className='pointer-bar'>
                {jobInformation.map((company, index) => {
                if(index == selected){
                    return(
                        <div className='pointer'>
                            <img src={Triangle} style={{width: "7%"}}></img>
                        </div>
                    )
                }
                else{
                    return(
                        <div className='empty-slot'>

                        </div>
                    )
                }
            })}
            </div>
        )
    }

    return (
        <div className="panel-wrap">
            <div className="panel">
                <h1 className="gradient-text-panel2">Experience</h1>

                <div className='prompt'>
                    <p style={{color: 'gray'}}> Select one below</p>
                </div>

                <div className="image-selector">
                    <img className="company-icon" src={AmazonLogo} alt="Image 1" onClick={() => setDisplay(0)}/>
                    <img className="company-icon" src={HockeystickLogo} alt="Image 2" onClick={() => setDisplay(1)}/>
                    <img className="company-icon" src={OslLogo} alt="Image 3" onClick={() => setDisplay(2)}/>
                    <img className="company-icon" src={MecLogo} alt="Image 4" onClick={() => setDisplay(3)}/>
                </div>

                {generatePointer()}

                <div className='desc-box'>
                    <h2>{jobTitle}</h2>
                    <h3 style={{color: 'grey'}}>{team}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ExperiencePanel;