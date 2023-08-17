import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';



export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink className={({isActive}) => isActive ? s.active : s.item} to={'/profile'}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={({isActive}) => isActive ? s.active : s.item} to={'/dialogs'}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={({isActive}) => isActive ? s.active : s.item} to={'/'}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={({isActive}) => isActive ? s.active : s.item} to={'/'}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={({isActive}) => isActive ? s.active : s.item} to={'/'}>Settings</NavLink>
            </div>
        </nav>
    )
}