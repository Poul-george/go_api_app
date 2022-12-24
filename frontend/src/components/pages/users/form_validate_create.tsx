import { UserMapping } from 'mapping/user_post_mapper';
import { PostDateApi } from 'axios_hook/Use_api';

const ValidationAndCreate = (data: any) => {
    alert("この内容で投稿してもよろしいでしょうか？");
    const res = validationData(data)
    if (res != null) {
        alert(res);
        return false;
    }

    if (!postData(UserMapping(data))) {
        alert("登録できませんでした");
        return false;
    }
    
    return true;
};

const validationData = (data: any) => {
    if (data.name.length == 0) {return "nameが未入力です"}
    if (data.email.length == 0) {return "emailが未入力です"}
    if (data.comments.length == 0) {return "commentsが未入力です"}
    if (data.password.length == 0) {return "passwordが未入力です"}
    if (data.confirmationPassword.length == 0) {return "confirmationPasswordが未入力です"}
    if (data.confirmationPassword != data.password) {
        return 6
    } 
    return null
}

const postData = (data: any) => {
    var flag = true;
    const res = PostDateApi("/users", data)
    if (res != null) {
        flag = false
        console.log(res);
    } else {
        console.log("create ok!!");
    }
    return flag;
}

export default ValidationAndCreate;
