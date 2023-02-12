export type UserData = {
    id: number;
    name: string;
    password: string;
    mail_address: string;
    comments: string;
    latest_day: string;
}

export type UserPostData = {
    name: string;
    email: string;
    comments: string;
    password: string;
    confirmationPassword: string;
}