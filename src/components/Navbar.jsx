import Link from 'react-router-dom';

export default function Navbar() {


    return (
        <nav className="nav">
            <a href="/" className="site-title">Coffee Grado</a>
            <ul className="nav-link">
                <CustomLink href="/menu">Home</CustomLink>
                <CustomLink href="/about">RSVP</CustomLink>
                <CustomLink href="/contact">Contact</CustomLink>
            </ul>

            
            <button href="/menu" className="menubutton">Menu</button>

        </nav>

    )
}

function CustomLink({ href, children, ...props }) {
    let path = window.location.pathname
    if (path === '/') path = '/home'

    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    )

}