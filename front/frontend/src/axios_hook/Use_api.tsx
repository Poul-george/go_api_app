import axios from "axios";

const get_api = axios.create ({
    baseURL: 'http://localhost:1324'
})

export const getDataApi = async(url: string) =>{
    const responseJson = await get_api.get(url);
    console.log("data", responseJson.data);
    return responseJson.data;
}