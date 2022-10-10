import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Data = {
    Id: string;
    Name: string;
    Author: string;
    Day: string;
}

function UsersView() {
    const [characters, setCharacters] = useState<Data[]>([]);

    useEffect(() => {
        const getCharacters = async function () {
        const baseURL = "http://localhost:1324";
        const responseJson = await axios.get(baseURL + "/json");
        console.log("data", responseJson.data);
        setCharacters(responseJson.data);
        return responseJson;

        
        }
        getCharacters();
    }, [])

    console.log("characters", characters);

    return (
        <div className="UsersItem">
            {characters.map((character,ind) => (
                <div key={ind}>
                Number: {ind+1} <br/>
                ID: {character.Id} <br/>
                Name: {character.Name} <br/>
                Author: {character.Author} <br/>
                Day: {character.Day} <br/>
                <br/>
                </div>
            ))}
        </div>
    );
}

export default UsersView;
