import { Link } from "react-router-dom";
import '../../style/css/components/block/header.scss';
import { UsersLink } from './userLink';

export const Headers = () => {
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
