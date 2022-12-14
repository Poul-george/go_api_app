import { useEffect } from 'react';
// import type {UserPostData} from 'DataType/Data_type';
import { postDateApi } from 'axios_hook/Use_api';

// 仮実装

const validationAndCreate = (data: any) => {
    // event.preventDefault();
    console.log("agdhgb;bg;zbg;bdiz;");
    alert("term");
    
    useEffect(() => {
        const res = postDateApi("/users", data)
        if (res != null) {
            console.log(res)
        } else {
            console.log("create ok!!")
        }
    }, []);
    return null;
};

export default validationAndCreate;
