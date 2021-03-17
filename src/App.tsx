import React, {FC} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {BrowserRouter, Route} from 'react-router-dom';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersPage from "./components/Users/UsersContainer"
import ProfilePage from "./components/Profile/ProfileContainer"

export const App:FC = () => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile/:userId'} render={() =>
                        <ProfilePage/>
                    }/>
                    <Route path={'/dialogs'} render={() =>
                        <DialogsContainer/>
                    }/>
                    <Route path={'/Users/'} render={() =>
                        <UsersPage/>
                    }/>
                </div>
            </div>
        </BrowserRouter>
    )
}

