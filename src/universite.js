import React from 'react';
import './MyCarousel.css';
import ISTIC from './Photo/ISTIC.png';
import ESPRIT from './Photo/347577308_207215745475647_6392985624889672443_n.jpg';


function universite() {
    return (
        <div class="service" id="service">
            <div class="container">
                <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>What I do</p>
                    <h2>Academic</h2>
                </div>
                <div class="row">
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.0s">
                        <div class="service-item">
                            <div class="service-icon">
                                <i class="fa fa-laptop">
                                    <img src={ISTIC} alt="Hero Image" width={100}></img>
                                </i>
                            </div>
                            <div class="service-text">
                                <h3>ISTIC</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="service-item">
                            <div class="service-icon">
                                <i class="fa fa-laptop-code">
                                    <img src={ESPRIT} alt="Hero Image" width={100}></img>
                                </i>
                            </div>
                            <div class="service-text">
                                <h3>ESPRIT</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default universite;
