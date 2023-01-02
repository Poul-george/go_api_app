import { useState } from 'react';
import type {UserPostData} from 'DataType/Data_type';
import { ValidationData } from 'components/pages/users/form_validate_create';
import { UserMapping } from 'mapping/user_post_mapper';
import { PostDateApi } from 'axios_hook/Use_api';
import 'css/components/pages/users/post_form_users.css';

const userPostData: UserPostData = {
    name: '',
    email: '',
    comments: '',
    password: '',
    confirmationPassword: '',
}

const PostFromUsers = () => {
    const [configurationUsers, setConfigurationUsers] = useState<UserPostData>(userPostData);

    const onChangeValue = (input_name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setConfigurationUsers({...configurationUsers, [input_name] : event.target.value});
    };
    
    const userPostAndFromClear = async() => {
        alert("この内容で投稿してもよろしいでしょうか？");
        const res1 = ValidationData(configurationUsers)
        if (res1 != null) {
            console.log("error", res1);
            return;
        }

        const res2 = await PostDateApi("/users", UserMapping(configurationUsers))
        if (res2 == null) {
            alert("正常に登録出来ました");
            setConfigurationUsers(userPostData);
            return;
        } else {
            alert("Errorが発生しました");
            console.log(res2);
            return;
        }
    };

    return (
        <div className="UsersForm">
            <div className="inputDivItem" >
                <input className="userformInput" type="text" name="name"
                    required
                    placeholder="NAME" 
                    value={configurationUsers.name}
                    onChange={onChangeValue('name')}
                />
            </div>

            <div className="inputDivItem" >
                <input className="userformInput" type="email" name="email"
                    required
                    placeholder="EMAIL"
                    value={configurationUsers.email}
                    onChange={onChangeValue('email')}
                />
            </div>

            <div className="inputDivItem" >
                <input className="userformInput" type="text" name="comments"
                    required
                    placeholder="COMMENTS"
                    value={configurationUsers.comments}
                    onChange={onChangeValue('comments')}
                />
            </div>

            <div className="inputDivItem" >
                <input className="userformInput" type="password" name="password"
                    required
                    placeholder="PASSWORD"
                    value={configurationUsers.password}
                    onChange={onChangeValue('password')}
                />
            </div>

            <div className="inputDivItem" >
                <input className="userformInput" type="password" name="confirmationPassword"
                    required
                    placeholder="CHECK PASSWORD"
                    value={configurationUsers.confirmationPassword}
                    onChange={onChangeValue('confirmationPassword')}
                />
            </div>

            <div className="inputDivItem" >
                <button onClick={userPostAndFromClear} className="userformInput button" name="create">
                    POST
                </button>
            </div>
        </div>
    );
}

export default PostFromUsers;