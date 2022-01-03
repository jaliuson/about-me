import React, { Component } from 'react';
import './BusinessCard.css'
import Headshot from './images/Headshot.png';
import Ivey from './images/ivey-logo.png';
import linkedin from './images/linkedin-logo.png';
import github from './images/github-logo.png';
import email from './images/email-logo.png';
import instagram from './images/instagram-logo.png';

class BusinessCard extends Component{
    render(){
        return(
            <div className="b-card-wrap">
                <div className="b-card">
                    <div className="left-side">
                        <div>
                            <h1 class="gradient-text">Jason Liu</h1>
                            <h3>4th year Software Engineering and Ivey HBA student @ Western University</h3>
                        </div>
                        <div className="links-array">
                            <a href="https://www.linkedin.com/in/jason--liu/" target="_blank">
                                <img className="logo" src={linkedin} alt="https://www.linkedin.com/in/jason--liu/"/>
                            </a>
                            <a href="https://github.com/jaliuson" target="_blank">
                                <img className="logo" src={github} alt="https://github.com/jaliuson"/>
                            </a>
                            <a href="jliu.hba2022@ivey.ca" target="_blank">
                                <img className="logo" src={email} alt="jliu.hba2023@ivey.ca"/>
                            </a>
                            <a href="https://www.instagram.com/jaliuson_/" target="_blank">
                                <img className="logo" src={instagram} alt="Instagram Coming Soon"/>
                            </a>
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