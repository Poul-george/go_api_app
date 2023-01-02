import axios from "axios";

const get_api = axios.create ({
    baseURL: 'http://localhost:1324'
})

export const getDataApi = async(url: string) => {
    const responseJson = await get_api.get(url);
    console.log("data", responseJson.data);
    return responseJson.data;
}

export const PostDateApi = async(url: string, date: any) => {
    var res: null | Error = null;
    await get_api.post(url, date)
    .then(red => {
        if (red.status != 200) {
            res = new Error("network error!");
        }
        console.log(red.data);
        res = null;
    })
    .catch((error) => {
        console.log(error);
        res = new Error(error);
    });
    return res
}