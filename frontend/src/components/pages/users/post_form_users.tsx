import { useEffect, useState, MouseEvent } from 'react';
import type {UserPostData} from 'DataType/Data_type';
// import validationAndCreate from 'components/pages/users/form_validate_create';
import 'css/components/pages/users/post_form_users.css';
import { postDateApi } from 'axios_hook/Use_api';

const userPostData: UserPostData = {
    name: '',
    email: '',
    comments: '',
    passward: '',
    confirmationPassward: '',
}

const PostFromUsers = () => {
    const [configurationUsers, setConfigurationUsers] = useState<UserPostData>(userPostData);

    const onChangeValue = (input_name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        console.log("agdhgb;bg;zbg;bdiz;");
        setConfigurationUsers({...configurationUsers, [input_name] : event.target.value});
    };

    // post&validation
    const validationAndCreate = () => {
        // event.preventDefault();
        console.log("agdhgb;bg;zbg;bdiz;");
        alert("term");
        
        // useEffect(() => {
            const res = postDateApi("/users", configurationUsers)
            if (res != null) {
                console.log(res)
            } else {
                console.log("create ok!!")
            }
        // }, []);
        return null;
    };
    

    const logTest = () => {
        console.log("gs;gjg;sj;ogj");
        // console.log(event);
    };

    return (
        <div className="UsersForm">
            <div className="inputDivItem" >
                <input className="userformInput" type="text" name="name"
                    placeholder="NAME" 
                    value={configurationUsers.name}
                    onChange={onChangeValue('name')}
                />
            </div>

            <div className="inputDivItem" >
                <input className="userformInput" type="email" name="email"
                    placeholder="EMAIL"
                    value={configurationUsers.email}
                    onChange={onChangeValue('email')}
                />
            </div>

            <div className="inputDivItem" >
                <input className="userformInput" type="text" name="comments"
                    placeholder="COMMENTS"
                    value={configurationUsers.comments}
                    onChange={onChangeValue('comments')}
                />
            </div>

            <div className="inputDivItem" >
                <input className="userformInput" type="password" name="passward"
                    placeholder="PASSWORD"
                    value={configurationUsers.passward}
                    onChange={onChangeValue('passward')}
                />
            </div>

            <div className="inputDivItem" >
                <input className="userformInput" type="password" name="confirmationPassward"
                    placeholder="CHECK PASSWORD"
                    value={configurationUsers.confirmationPassward}
                    onChange={onChangeValue('confirmationPassward')}
                />
            </div>

            <div className="inputDivItem" >
                <button onClick={validationAndCreate} className="userformInput button" name="create">
                    POST
                </button>
            </div>

            <div className="inputDivItem" >
                <button onClick={() => console.log("agdhgb;bg;zbg;bdiz;")} className="userformInput button" name="test">
                    TEST
                </button>
            </div>

            <div className="inputDivItem" >
                <button onClick={logTest} className="userformInput button" name="test2">
                    TEST2
                </button>
            </div>
        </div>
    );
}

export default PostFromUsers;