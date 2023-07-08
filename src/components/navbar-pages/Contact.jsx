import { useEffect, useRef } from "react";
import { fadeSlideAnimation } from "../Header";
import '../../styles/contact.css';

export default function Contact() {

    const elementRef = useRef(null)
    const formRef = useRef(null)

    const handleForm = (e) => {
        e.preventDefault() // stops the form from refreshing the page.
        const fullName = e.target.fullName.value
        const email = e.target.email.value
        const message = e.target.message.value
        if (!fullName || !email || !message) return

        alert(`Thank you for contacting us! We have received your message and will respond as soon as possible.`)
        //clear the form after submit
        e.target.fullName.value = ""
        e.target.email.value = ""
        e.target.message.value = ""
    }

    useEffect(() => {
        fadeSlideAnimation(elementRef)
        fadeSlideAnimation(formRef)
    }, [])

    return (
        <>
            <header className='hero-contact'>
                <div className="scroll-animation" ref={elementRef}>
                    <h1>Reservation</h1>
                    <p>For over five decades, our family has been passionately committed to providing you with responsibly sourced, specialty coffee. Our mission is to deliver sustainable and ethically produced hand-roasted coffee that benefits both you and the hardworking farmers, all at a fair and affordable price. </p>
                </div>
            </header>

            <form className='contactForm' onSubmit={handleForm}>
                <h2>Reservation Form</h2>
                <hr />
                <div>
                    <section className="contactInfo scroll-animation" ref={formRef}>
                        <label htmlFor="fullName">Name:
                            <input type="text" name="fullName" />
                        </label>
                        <label htmlFor="email">Email:
                            <input type="text" name="email" />
                        </label>
                        <label htmlFor="message">Message:
                            <input type="text" name="message" />
                        </label>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <input type="submit" value="Save Form" />
                        </div>
                    </section>
                </div>
            </form>
        </>
    )
}