import axios from "axios";

const get_api = axios.create ({
    baseURL: 'http://localhost:1324'
})

export const getDataApi = async(url: string) => {
    const responseJson = await get_api.get(url);
    console.log("data", responseJson.data);
    return responseJson.data;
}

export const postDateApi = async(url: string, date: any) => {
    await get_api.post(url, date)
    .then(red => {
        return null
    })
    .catch((error) => {
        console.log(error);
        return error
    });
    return null;
}