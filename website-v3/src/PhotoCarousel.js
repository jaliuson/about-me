import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import linkedin from './images/linkedin-logo.png';


class PhotoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img className="logo" src={linkedin} alt="https://www.linkedin.com/in/jason--liu/"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img className="logo" src={linkedin} alt="https://www.linkedin.com/in/jason--liu/"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img className="logo" src={linkedin} alt="https://www.linkedin.com/in/jason--liu/"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

//ReactDOM.render(<PhotoCarousel />, document.querySelector('.demo-carousel'));

export default PhotoCarousel; 