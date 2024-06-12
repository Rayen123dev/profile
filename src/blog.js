import React from 'react';
import './MyCarousel.css';
import x from './Photo/X-Logo.png';
import ig from './Photo/Instagram_icon.png';
import fb from './Photo/fb.png';
import fa from './Photo/family.jpg';
import is from './Photo/RAY (3).jpg';



function blog() {
    return (
        <div class="blog" id="blog">
            <div class="container">
                <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>From Blog</p>
                    <h2>Articles</h2>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="blog-item wow fadeInUp" data-wow-delay="0.1s">
                            <div class="blog-img">
                                <img src={fa} alt="Blog"></img>
                            </div>
                            <div class="blog-text">
                                <h2>PFE defense</h2>
                                <div class="blog-meta">
                                    <p><i class="far fa-user"></i>Istic</p>
                                    <p><i class="far fa-calendar-alt"></i>2023</p>
                                </div>
                                <p>
                                    "During one of the best moments with my family after receiving the results of my bachelor's degree in Software Engineering with honors! Enjoy it, family first."
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="blog-item wow fadeInUp" data-wow-delay="0.3s">
                            <div class="blog-img">
                                <img src={is} alt="Blog"></img>
                            </div>
                            <div class="blog-text">
                                <h2>revision period</h2>
                                <div class="blog-meta">
                                    <p><i class="far fa-user"></i>Esprit</p>
                                    <p><i class="far fa-calendar-alt"></i>2024</p>
                                </div>
                                <p>
                                    "One of the fond memories of revising at ESPRIT during the first year of my engineering cycle with my colleagues (an incredible night - it's not difficult to succeed, you just need to be disciplined)."
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default blog;
