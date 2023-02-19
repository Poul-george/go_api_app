import type {UserPostData} from '../DataType/Data_type';

export const UserMapping = (data: any) => {
    const format_data: UserPostData = {
        name: data.name,
        email: data.email,
        comments: data.comments,
        password: data.password,
        confirmationPassword: data.confirmationPassword,
    }
    
    return format_data;
}