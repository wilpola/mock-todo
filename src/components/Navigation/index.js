// @author: wilpola
// This file contains the navigaiton component

// imported packages
import { NavLink as Link } from 'react-router-dom';
import './navigation.scss';

// Navigation component
const Navigation = () => {

    // All rendered content
    return (
        <nav id="Navigation">
            <div className="nav-logo">
                <h3> Todo App</h3>
            </div>
            <div className="nav-links">
                <Link end to={'/today'}>Today</Link>
                <Link end to={'/completed'}>Completed</Link>
                <Link end to={'/settings'}>Settings</Link>
            </div>
        </nav>
    )
}

// export component
export default Navigation;
