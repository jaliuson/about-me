import React, { Component } from 'react';
import './BusinessCard.css'

import Headshot from './images/Headshot2.jpg';
import Ivey from './images/ivey-logo.png';

import linkedin from './images/linkedin-logo.png';
import github from './images/github-logo.png';
import email from './images/email-logo.png';
import instagram from './images/instagram-logo.png';

class BusinessCard extends Component{
    render(){
        const icons = [
            {link: "https://www.linkedin.com/in/jason--liu/", image: linkedin},
            {link: "https://github.com/jaliuson", image: github},
            {link: "https://www.instagram.com/jaliuson_/", image: instagram},
            {link: "mailto:jliu.hba2022@ivey.ca", image: email}
        ]

        return(
            <div className="b-card-wrap">
                <div className="b-card">
                    <div className="left-side">
                        <div>
                            <h1 class="gradient-text">Jason Liu</h1>
                            <div className="subtitles">
                                <h2>Software engineer</h2>
                                <p>Western University Software Engineering and Ivey HBA Graduate</p>
                            </div>
                        </div>
                        <div style={{paddingTop: '20vmin'}}></div>
                        <div className="links-array">
                            {icons.map((icon, index) => (
                                <a className="logo-container" href={icon.link} target={"_blank"} key={index}>
                                   <img className="logo" src={icon.image} alt={icon.link}/>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="right-side">
                        <div>
                            <img className="my-face" src={Headshot} alt="My face should be here..."/>
                        </div>
                        <div>
                            <img className="ivey-insig" src={Ivey} alt="Logo - Ivey Business School"/>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}

export default BusinessCard;