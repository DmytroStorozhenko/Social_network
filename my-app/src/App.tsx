import React, {FC} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {DispatchType, StateType} from './Redux/store'

type AppPropsType = {
    state: StateType
    dispatch: DispatchType
}

export const App: FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={() =>
                        <Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}
                            />
                    }/>
                    <Route path={'/dialogs'} render={() =>
                        <Dialogs
                            dialogsPage={props.state.dialogsPage}
                            dispatch={props.dispatch}/>
                    }/>
                </div>
            </div>
        </BrowserRouter>
    )
}

