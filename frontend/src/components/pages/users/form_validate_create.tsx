import { UserMapping } from 'mapping/user_post_mapper';
import { PostDateApi } from 'axios_hook/Use_api';

const ValidationAndCreate = (data: any) => {
    alert("この内容で投稿してもよろしいでしょうか？");
    if (!validationData(data)) {
        alert("パスワードが違います");
        return false;
    }

    if (!postData(UserMapping(data))) {
        alert("登録できませんでした");
        return false;
    }
    
    return true;
};

const validationData = (data: any) => {
    if (data.confirmationPassward != data.passward) {
        return false
    } 
    return true
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
