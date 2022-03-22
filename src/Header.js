import { Link } from "react-router-dom";

function Header() {
    return <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">FSA SoftwareJobs</a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/users">Users</Link>
            </li>
            <li classNam="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            </ul>
            <div>
              <button class="btn btn-sm btn-danger">Register</button>
            </div>
            </div>

    </nav>


}

export default Header;