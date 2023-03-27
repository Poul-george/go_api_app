import { useEffect, useState } from 'react';
import { getDataApi } from '../../../hooks/axios_hook/Use_api';
import type {UserData} from '../../../DataType/Data_type';
import '../../../style/css/components/pages/users/view_users.scss';

export const UsersView = () => {
    const [characters, setCharacters] = useState<UserData[]>([]);

    useEffect(() => {
        getDataApi("api/v1/users").then((res) => {
            setCharacters(res);
        });
    }, [])

    // const userDelete = (delete_id: number) => async() => {
    //     const is_ok = await simpleConfirmRef.current.confirm();
    //     if (is_ok) {

    //     }
    // }

    return (
        <div className="users_items">
            {characters.map((character, ind) => (
                <div className="user_item" key={character.id}>
                    <div className='user_text'>
                        Number: {ind+1} <br/>
                        ID: {character.id} <br/>
                        Name: {character.name} <br/>
                        MailAddress: {character.mail_address} <br/>
                        Comments: {character.comments} <br/>
                        LatestDay: {character.latest_day} <br/>
                    </div>
                    {/* <div className="batsu" onClick={userDelete(character.id)}>×</div> */}
                    <div className="batsu">×</div>
                </div>
            ))}
        </div>
    );
}
