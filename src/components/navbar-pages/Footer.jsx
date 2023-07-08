import { useEffect, useRef } from "react";
import { fadeSlideAnimation } from "../Header";
import '../../styles/footer.css';

export default function Footer() {
    const getFullYear = new Date().getFullYear();
    const elementRef = useRef(null);
    useEffect(() => fadeSlideAnimation(elementRef), []);

    return (
        <footer className="footer">
            <div className="scroll-animation" ref={elementRef}>
                <h2>Let's feel that taste of coffee together</h2>
                <a href="/menu" className="menubutton">Menu</a>
            </div>
            <div className='footer-info'>
                <div className='footer-logo'>
                    <h1>Coffee Grado</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='footer-menu-copy'>
                    <div className='footer-menu'>
                        <div>
                            <a href="/about" className='footer-nav-link'>About</a>
                            <a href="/menu" className='footer-nav-link'>Menu</a>
                            <a href="/contact" className='footer-nav-link'>Contact</a>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className='footer-copyright'>
                        <p>&copy;Coffee Grado. All Rights Reserved {getFullYear}. </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}