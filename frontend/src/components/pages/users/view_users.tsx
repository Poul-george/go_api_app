import { useEffect, useState } from 'react';
import { getDataApi } from 'axios_hook/Use_api';
import type {UserData} from 'DataType/Data_type';
import 'css/components/pages/users/view_users.scss';

function UsersView() {
    const [characters, setCharacters] = useState<UserData[]>([]);

    useEffect(() => {
        getDataApi("/users").then((res) => {
            setCharacters(res);
        });
    }, [])

    return (
        <div className="UsersItem">
            {characters.map((character, ind) => (
                <div className='user_text' key={ind}>
                Number: {ind+1} <br/>
                ID: {character.id} <br/>
                Name: {character.name} <br/>
                MailAddress: {character.mail_address} <br/>
                Comments: {character.comments} <br/>
                LatestDay: {character.latest_day} <br/>
                <br/>
                </div>
            ))}
        </div>
    );
}

export default UsersView;
