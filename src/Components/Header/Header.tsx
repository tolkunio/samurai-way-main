import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    userId: string,
    email: string,
    login: string,
    isAuth: boolean
}
const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img
                alt="beach"
                src="https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=1.00xw:0.755xh;0,0.173xh&resize=1200:*"
            />
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>

    );
};

export default Header;