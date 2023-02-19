export const ValidationData = (data: any) => {
    if (data.name.length === 0) {return "nameが未入力です"}
    if (data.email.length === 0) {return "emailが未入力です"}
    if (data.comments.length === 0) {return "commentsが未入力です"}
    if (data.password.length === 0) {return "passwordが未入力です"}
    if (data.confirmationPassword.length === 0) {return "confirmationPasswordが未入力です"}
    if (data.confirmationPassword !== data.password) {
        return "Passwordが確認用のものと違います"
    } 
    return null
}
