import React, { Component } from 'react';
import './ProjectPanel.css';

  const projectInformation = [
    {
        title: "EverFit",
        logo: './images/everfit.png',
        position: "Frontend Developer (React.js)",
        description:"EverFit is a social fitness platform that helps uses enhance their fitness journey by connecting with individuals to learn and motivate. This was a project completed for SE4450 capstone and all features were built from the ground up.",
        link: "https://github.com/Luiz-SE/se4450-project-group-8",
        image: "link_path"
    },
    {
        title: "Western AI Stock Prediction Team",
        logo: './images/wai-logo.png',
        position: "AI Developer",
        description:"Implemented a machine learning algorithm to demonstrate the development process and performance of ",
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
                    <div className="project-grid">
                        {projectInformation.map((project) => {
                            return(
                                <div className="project-cell">
                                    <div className='project-cell-header'>
                                        <div className="logo-border">
                                            <img className="company-logo" src={require(`${project.logo}`)} alt={project.title + " logo"}/>
                                        </div>
                                        <div className="project-titles">
                                            <h2>{project.title}</h2>
                                            <h3 style={{color: 'grey'}}>{project.position}</h3>
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