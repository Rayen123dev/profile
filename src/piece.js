import React, { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Figure from 'react-bootstrap/Figure';
import cvimage from './Photo/cv2.jpg';// Import the image
import lettreimage from './Photo/Lm.jpg';// Import the image
import Container from 'react-bootstrap/Container';
import './MyCarousel.css';



function Piece() {
    return (
        <div class="portfolio" id="portfolio">
            <div class="container">
                <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>My Portfolio</p>
                    <h2>My Excellent Portfolio</h2>
                </div>
                <div class="row">
                    <div class="col-12">
                        <ul id="portfolio-filter">
                            <li data-filter="*" class="filter-active">All</li>
                            <li data-filter=".filter-1">CV</li>
                            <li data-filter=".filter-2">Lettre de motivation</li>
                        </ul>
                    </div>
                </div>
                <div class="row portfolio-container">
                    <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
                        <div class="portfolio-wrap">
                            <div class="portfolio-img">
                                <img src={cvimage} alt="Image"></img>
                            </div>
                            <div class="portfolio-text">
                                <h3>CV</h3>
                                <a class="btn" href={cvimage} data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-3 col-sm-12 portfolio-item filter-2 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="portfolio-wrap">
                            <div class="portfolio-img">
                                <img src={lettreimage} alt="Image"></img>
                            </div>
                            <div class="portfolio-text">
                                <h3>Lettre de motivation</h3>
                                <a class="btn" href={lettreimage} data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Piece;