import { Link } from "react-router-dom";

function UsersLink() {

    return (
        <div className="UserLinkTab">
            <div className="user-header user-create">
                <Link className="header-user-link" to="/users/create">New Create User</Link>
            </div>
            <div className="user-header user-list">
                <Link className="header-user-link" to="/users/list">User List</Link>
            </div>
        </div>
    );
}

export default UsersLink;