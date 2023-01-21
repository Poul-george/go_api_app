import React from 'react';
import ReactDOM from 'react-dom/client';
import 'css/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Users from 'components/pages/users/users';
import Headers from 'components/block/header';
import ViewUsers from 'components/pages/users/view_users';
import PostFormUsers from 'components/pages/users/post_form_users';
import { Route, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Headers/>
      <div>
        <Route exact path="/" component={App} />
        <div className="Users">
          <Route exact path="/users/create" component={PostFormUsers} />
          <Route exact path="/users/list" component={ViewUsers} />
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
