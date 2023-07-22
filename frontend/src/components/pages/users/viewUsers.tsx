import '../../../style/css/components/pages/users/view_users.scss';
import { useGetUserListAPI } from '../../../hooks/axiosAPI/user';

export const UsersView = () => {
    const { users } = useGetUserListAPI();

    console.log(users, "users");

    return (
        <div className="users_items">
            {users.map((user, ind) => (
                <div className="user_item" key={user.id}>
                    <div className='user_text'>
                        Number: {ind+1} <br/>
                        ID: {user.id} <br/>
                        ExternalUserID: {user.externalUserID} <br/>
                        Name: {user.name} <br/>
                        MailAddress: {user.mailAddress} <br/>
                        Comments: {user.comments} <br/>
                        LatestDay: {user.latestDay} <br/>
                    </div>
                    {/* <div className="batsu" onClick={userDelete(user.id)}>×</div> */}
                    <div className="batsu">×</div>
                </div>
            ))}
        </div>
    );
}
