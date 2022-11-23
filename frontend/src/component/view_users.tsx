import { useEffect, useState } from 'react';
import { getDataApi } from 'axios_hook/Use_api';
import type {UserData} from 'DataType/Data_type';

function UsersView() {
    const [characters, setCharacters] = useState<UserData[]>([]);

    useEffect(() => {
        getDataApi("/users").then((res) => {
            setCharacters(res);
        });
    }, [])

    return (
        <div className="UsersItem">
            {characters.map((character,ind) => (
                <div key={ind}>
                Number: {ind+1} <br/>
                ID: {character.Id} <br/>
                Name: {character.Name} <br/>
                MailAddress: {character.MailAddress} <br/>
                Comments: {character.Comments} <br/>
                Day: {character.CreatedAt} <br/>
                <br/>
                </div>
            ))}
        </div>
    );
}

export default UsersView;
