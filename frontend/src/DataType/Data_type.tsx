export type UserData = {
    Id: string;
    Name: string;
    Passward: string;
    MailAddress: string;
    Comments: string;
    CreatedAt: string;
    UpdatedAt: string;
}

export type UserPostData = {
    name: string;
    email: string;
    comments: string;
    passward: string;
    confirmationPassward: string;
}