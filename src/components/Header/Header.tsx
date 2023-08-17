import React from 'react';
import headerLogo from '../../assets/images/samuray-way.png'
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <img src={headerLogo} alt="header-logo"/>
        </header>
    )
}