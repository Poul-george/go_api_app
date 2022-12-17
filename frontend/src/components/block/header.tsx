import { Link } from "react-router-dom";
import './../../css/components/block/header.css';

function Headers() {

    return (
        <div className="Header">
            <header className="Header-header">
                <Link className="Header-link" to="/">Home</Link>
                <Link className="Header-link" to="/users">User</Link>
            </header>
        </div>
    );
}

export default Headers;
