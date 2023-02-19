import './style/css/App.scss';
import { ThemeProvider } from "@mui/material";
import { theme } from "./style/theme";
import { GlobalStateProvider } from "./hooks/context/globalState";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Headers } from './components/block/header';
import { Home } from './components/pages/home/home';
import { UsersView } from './components/pages/users/view_users';
import { PostFromUsers } from './components/pages/users/post_form_users';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStateProvider>
        <AppRouter />
      </GlobalStateProvider>
    </ThemeProvider>
  );
}

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Headers/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/create" element={<PostFromUsers />} />
          <Route path="/users/list" element={<UsersView />} />
        </Routes>
    </BrowserRouter>
  );
}
