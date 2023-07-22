export type User = {
    id: number;
    externalUserID: string;
    name: string;
    password: string;
    mailAddress: string;
    comments: string;
    latestDay: string;
}

export type UserPostData = {
    name: string;
    email: string;
    comments: string;
    password: string;
    confirmationPassword: string;
}