import { useEffect, useState } from 'react';
import ViewUsers from 'components/pages/users/view_users';
import PostFormUsers from 'components/pages/users/post_form_users';

function Users() {

    return (
        <div className="Users">
            <PostFormUsers/>
            <ViewUsers/>
        </div>
    );
}

export default Users;
