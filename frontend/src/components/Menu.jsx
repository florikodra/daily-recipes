import { Link, NavLink } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";

const Menu = () => {
    return (
        <div className="topBarMenu">
            <Container className="w-100">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between p-3 mb-4">
                    <Link to="/"
                        className="d-flex align-items-center col-md-3 mb-md-0 text-light text-decoration-none"
                    >
                        Daily Recipes
                    </Link>
                    <Nav className="col-md-9 py-2 rounded" style={{ backgroundColor: "rgb(242, 181, 123)"}}>
                        <div className="row w-100 mx-0">
                            <div className="col">
                            <NavLink to="/" className={({ isActive }) => (isActive ? "border border-1 border-dark" : "") + " nav-link px-2 link-dark text-center"}>
                                    Home
                                </NavLink>
                            </div>
                            <div className="col">
                                <NavLink to="/recipes" className={({ isActive }) => (isActive ? "border border-1 border-dark" : "") + " nav-link px-2 link-dark text-center"}>
                                    Recipes
                                </NavLink>
                            </div>

                            <div className="col">
                                <NavLink to="/login" className={({ isActive }) => (isActive ? "border border-1 border-dark" : "") + " nav-link px-2 link-dark text-center"}>
                                    Login
                                </NavLink>
                            </div>

                            <div className="col">
                                <NavLink to="/register" className={({ isActive }) => (isActive ? "border border-1 border-dark" : "") + " nav-link px-2 text-dark text-center"}>
                                    Register
                                </NavLink>
                            </div>

                            <div className="col">
                                <NavLink to="/backoffice" target="_blank" className={({ isActive }) => (isActive ? "btn-dark" : "btn-light") + " btn w-100"}>
                                        BackOffice
                                </NavLink>
                            </div>
                        </div>
                    </Nav>
                </header>
            </Container>
        </div>
    );
};

export default Menu;