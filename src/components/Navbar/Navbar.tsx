import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';
import {findAllByDisplayValue} from "@testing-library/react";
import {useState} from "react";



export const Navbar = () => {

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink className={({isActive}) => isActive ? s.active : s.item} to={'/profile'}>Profile</NavLink>
            </div>

            <div className={s.item}>
                <NavLink className={({isActive}) => isActive ? s.active : s.item} to={'/dialogs'}>Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={({isActive}) => isActive ? s.active : s.item} to={'/news'}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={({isActive}) => isActive ? s.active : s.item} to={'/music'}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={({isActive}) => isActive ? s.active : s.item} to={'/settings'}>Settings</NavLink>
            </div>
        </nav>
    )
}