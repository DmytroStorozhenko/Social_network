import React, {FC} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {BrowserRouter, Route} from 'react-router-dom';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";

export const App:FC = () => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={() =>
                        <Profile/>
                    }/>
                    <Route path={'/dialogs'} render={() =>
                        <DialogsContainer/>
                    }/>
                    <Route path={'/Users'} render={() =>
                        <UsersContainer/>
                    }/>
                </div>
            </div>
        </BrowserRouter>
    )
}

