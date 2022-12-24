export type UserData = {
    Id: string;
    Name: string;
    Password: string;
    MailAddress: string;
    Comments: string;
    CreatedAt: string;
    UpdatedAt: string;
}

export type UserPostData = {
    name: string;
    email: string;
    comments: string;
    password: string;
    confirmationPassword: string;
}