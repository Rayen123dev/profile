import React from 'react';
import './MyCarousel.css';
import x from './Photo/X-Logo.png';
import ig from './Photo/Instagram_icon.png';
import fb from './Photo/fb.png';
import ln from './Photo/LinkedIn_icon.svg.webp';
import gh from './Photo/25231.png';



function footer() {
    return (
        <div class="footer wow fadeIn" data-wow-delay="0.3s">
            <div class="container-fluid">
                <div class="container">
                    <div class="footer-info">
                        <h2>Rayen Ben Massaoud</h2>
                        <h3>Kelibia , TUN</h3>
                        <div class="footer-menu">
                            <p>+216 51 631 839</p>
                            <p>benmassoudrayen7@gmail.com</p>
                        </div>
                        <div class="footer-social">
                            <a href="https://x.com/MassaoudRayen"><i class="fab fa-twitter">
                                <img src={x} alt="Hero Image" width={30}></img>
                            </i></a>
                            <a href="https://www.facebook.com/rayen.benmassoud.37"><i class="fab fa-facebook-f">
                                <img src={fb} alt="Hero Image" width={30}></img>
                            </i></a>
                            <a href="https://github.com/Rayen123dev"><i class="fab fa-youtube">
                                <img src={gh} alt="Hero Image" width={30}></img>
                            </i></a>
                            <a href="https://www.instagram.com/rayen_benmassaoud/"><i class="fab fa-instagram">
                                <img src={ig} alt="Hero Image" width={30}></img>
                            </i></a>
                            <a href="https://www.linkedin.com/in/benmassaoud-rayen/"><i class="fab fa-linkedin-in">
                                <img src={ln} alt="Hero Image" width={30}></img>
                            </i></a>
                        </div>
                    </div>
                </div>
                <div class="container copyright">
                    <p>&copy; <a href="#">Portfolio</a> Copyright © 2024 Rayen Ben Massaoud </p>
                </div>
            </div>
        </div>

    );
}

export default footer;
