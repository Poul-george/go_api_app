import { Link } from "react-router-dom";
import 'css/components/block/header.scss';
import UsersLink from 'components/block/user_link';

function Headers() {

    return (
        <div className="Header">
            <header className="Header-header">
                <Link className="Header-link" to="/">Home</Link>
                <div className="Header-link UserTab">
                    User
                    <UsersLink/>
                </div>
            </header>
        </div>
    );
}

export default Headers;
