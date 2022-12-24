import { useState } from 'react';
import type {UserPostData} from 'DataType/Data_type';
import ValidationAndCreate from 'components/pages/users/form_validate_create';
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

    const userPostAndFromClear = () => {
        if (ValidationAndCreate(configurationUsers)) {
            setConfigurationUsers(userPostData);
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