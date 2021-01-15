import React from 'react';
import classes from "./Header.module.css"

export const Header = () => {
    return (
        <header className={classes.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcxAhNljc39kO8mEi8FBacnkSAay-TXf_QFQ&usqp=CAU" alt="logo"/>
        </header>
    )
}
