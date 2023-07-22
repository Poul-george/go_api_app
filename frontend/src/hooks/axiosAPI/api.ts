import axios, {
    AxiosRequestConfig,
    AxiosResponse,
    AxiosInstance,
} from "axios";
import { useMemo, useState } from "react";

// 削除予定
const get_api = axios.create ({
    baseURL: 'http://localhost:1324'
})
// 削除予定
export const PostDateApi = async(url: string, date: any) => {
    var res: null | Error = null;
    await get_api.post(url, date)
    .then(red => {
        if (red.status !== 200) {
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

const useAxiosInstance = <T>(
    initialState: T,
    config?: AxiosRequestConfig,
): {
    apiClient: AxiosInstance;
    response: T;
} => {
    const [data, setData] = useState<T>(initialState)

    const instance = useMemo(() => {
        const v = axios.create(config);
        return v;
    }, [config]);

    instance.interceptors.response.use(
        (r: AxiosResponse<T>) => {
            setData(r.data);
            return r;
        }
    );

    return {
        apiClient: instance,
        response: data,
    }
};

const useConfig = ({ baseURL }: { baseURL: string }): AxiosRequestConfig => {
    return useMemo(() => {
        return {
            baseURL: baseURL,
        }
    }, [baseURL])
}

export const useCommonAPI = <T>(initialState: T) => {
    return useAxiosInstance(initialState, useConfig({ baseURL: "http://localhost:1324"} ));
};
