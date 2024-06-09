import React from 'react';

function footer() {
    return (
        <footer class="footer" style={{ backgroundColor: "black" }}>
            <div class="container container-fluid">
                <div class="row footer__links">
                    <div class="col-md-6 footer__col">
                        <div class="footer__title" style={{ color: "white" }}>Reseaux sociaux</div>
                        <ul class="footer__items clean-list">
                            <li class="footer__item">
                                <a style={{ color: "white" }} class="footer__link-item" href="https://www.facebook.com/rayen.benmassoud.37">Facebook</a>
                            </li>
                            <li class="footer__item">
                                <a style={{ color: "white" }} class="footer__link-item" href="https://www.instagram.com/rayen_benmassaoud/">Instagram</a>
                            </li>
                            <li class="footer__item">
                                <a style={{ color: "white" }} class="footer__link-item" href="https://www.linkedin.com/in/benmassaoud-rayen/">LinkidIn</a>
                            </li>
                            <li class="footer__item">
                                <a style={{ color: "white" }} class="footer__link-item" href="https://github.com/Rayen123dev">GitHub</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-6 footer__col">
                        <div class="footer__title" style={{ color: "white" }}>Contact</div>
                        <ul class="footer__items clean-list">
                            <li class="footer__item">
                                <a style={{ color: "white" }} target="_blank" rel="noopener noreferrer" class="footer__link-item">
                                    Telephone : +216 51 631 839
                                </a>
                            </li>
                            <li class="footer__item">
                                <a style={{ color: "white" }} target="_blank" rel="noopener noreferrer" class="footer__link-item">
                                    Email : benmassoudrayen7@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer__bottom text-center mt-4">
                    <div class="footer__copyright" style={{ color: "white" }}>
                        Copyright © 2024 Rayen Ben Massaoud
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default footer;
