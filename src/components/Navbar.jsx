export default function Navbar() {


    return (
        <nav className="nav">
            <a href="/" className="site-title">Coffee Grado</a>
            <ul className="nav-link">
                <CustomLink href="/menu">Home</CustomLink>
                <CustomLink href="/about">About</CustomLink>
                <CustomLink href="/contact">Contact</CustomLink>
            </ul>
            <CustomLink href="/menu" className="menubutton">Menu</CustomLink>

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