// Need useRef hook
import { useEffect, useRef } from "react";

// Import this function
export const fadeSlideAnimation = (elementRef) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    });

    if (elementRef.current) {
        observer.observe(elementRef.current);
    }

    return () => {
        if (elementRef.current) {
            observer.unobserve(elementRef.current);
        }
    };
}

export default function Header() {

    // Need to define elementRef
    const elementRef = useRef(null);
    useEffect(()=> fadeSlideAnimation(elementRef), []);

    return (
        <header className="hero" >
            {/* Need scroll-animation class and ref property */}
            <div className="scroll-animation" ref={elementRef}>
                <h1>Our Delicious Menu</h1>
                <p>Since 1940, our family has been on a mission to provide sustainable and ethical. hand-roasted, speciality coffee, at a fair price for you and the farmers.</p>
            </div>
        </header>
    )

}