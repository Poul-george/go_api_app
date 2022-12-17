import type {UserPostData} from 'DataType/Data_type';

export const UserMapping = (data: any) => {
    const format_data: UserPostData = {
        name: data.name,
        email: data.email,
        comments: data.comments,
        passward: data.passward,
        confirmationPassward: data.confirmationPassward,
    }
    
    return format_data;
}