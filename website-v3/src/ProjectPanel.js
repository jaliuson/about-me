import React, { Component } from 'react';
import './ProjectPanel.css';

  const projectInformation = [
    {
        title: "EverFit",
        logo: './images/everfit.png',
        position: "Frontend Developer (React.js)",
        description:"EverFit is a social fitness platform that helps uses enhance their fitness journey by connecting with individuals to learn and motivate. Users could register, login, and create their profiles to share their fitness journey with others by connecting with them via a scoail network. Users could also create, execute and share custom workout plans and exercises to educate and learn from others.",
        link: "https://github.com/Luiz-SE/se4450-project-group-8",
        image: "link_path"
    },
    {
        title: "Western AI Stock Prediction Team",
        logo: './images/wai-logo.png',
        position: "AI Developer",
        description:"The Stock Prediction Team implemented a machine learning algorithm to demonstrate the development process and performance of AI. Using Google Colaboratory, Tensorflow, and Pandas this team leveraged basic AI techniques to develop and app for real world data and use cases.",
        link: "___LINK___",
        image: "link_path"
    },
    
    {
        title: "Mustangs COVID Challenge Tracker",
        logo: './images/mustangs.png',
        position: "",
        description: "The COVID Challenge Tracker was built to help varsity athletes stay engaged with the team and keep up their physical and mental health goals during covid. This applicaiton was developed in a swift response to help the team navigate the unique and distruptive challenges of covid and its uncertainty relative to tradition training plan ",
        link: "___LINK___",
        image: "link_path"
    },
    {
        title: "Game Prioritizer",
        logo: './images/speed-radar.png',
        position: "",
        description: "The Game prioritizer increases video game performance on Windows 10 by optimizing core processes automatically for a seamless improvement to user exerpience. This lightweight script is targetted for underperforming comptuers that cannot sustain adequate frames per second during increased gaming loads",
        link: "___LINK___",
        image: "link_path"
    },
]



class ProjectPanel extends Component{
    render(){
        return(
            <div className="header-panel-wrap">
                <div className="header-panel">
                    <h1 class="gradient-text-panel">Projects</h1>
                    <p style={{color: "gray"}}>Check out some of my other work below!</p>
                    <div className="project-grid">
                        {projectInformation.map((project, index) => {
                            return(
                                <div className="project-cell">
                                    <div className='project-cell-header'>
                                        <div className="logo-border">
                                            <img className="company-logo" src={require(`${project.logo}`)} alt={project.title + " logo"}/>
                                        </div>
                                        <div className="project-titles">
                                            <h2>{project.title}</h2>
                                        </div>
                                    </div>
                                    <p>{project.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectPanel;