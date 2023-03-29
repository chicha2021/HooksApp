import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">useContext</Link>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <NavLink to={"/"} className={({ isActive }) => `nav-link  ${isActive ? "active" : ""}`}>
                                Home
                            </NavLink>
                            <NavLink to={"/about"} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                                About
                            </NavLink>
                            <NavLink to={"/login"} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                                Login
                            </NavLink>
                        </ul>
                    </div>
                </div>
                <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-primary" type="submit">Search</button>
                    </form>
            </nav>
        </>
    )
}
