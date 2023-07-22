import { useEffect } from 'react';
import { User } from '../../DataType/dataType';
import { useCommonAPI } from './api';

export type UserListResponse = {
    items: User[];
}

const initialUserList: UserListResponse = {
    items: [],
}

export const useGetUserListAPI = (): {
    users: User[];
} => {
    const { apiClient, response } = useCommonAPI<UserListResponse>(
        initialUserList,
    );

    const endpoint = "/api/v1/users";

    useEffect(() => {
        apiClient.get<UserListResponse>(endpoint);
    }, [apiClient, endpoint]);

    return {
        users: response.items,
    }
}
