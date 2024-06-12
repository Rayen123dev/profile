import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import './MyCarousel.css';
import './main';
import profileImage from './Photo/421263315_1397905640818721_7510468969976730858_n.png';
import EspritImage from './Photo/347577308_207215745475647_6392985624889672443_n.jpg';
import IsticImage from './Photo/ISTIC.png';

const roles = ["Data Scientist", "Web Developer", "Mobile Developer", "Cloud Computing", "Programmer"];

function Cards() {
    return (
        <div class="hero" id="home">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-sm-12 col-md-6">
                        <div class="hero-content">
                            <div class="hero-text">
                                <p>I'm</p>
                                <h1>Rayen benmassaoud</h1>
                                <h2>23 Years Old</h2>
                                <div class="typed-text">Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 d-none d-md-block">
                        <div class="hero-image">
                            <img src={profileImage} alt="Hero Image" ></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;