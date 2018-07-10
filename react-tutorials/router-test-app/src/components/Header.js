import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="logo">
                velopert
            </div>
            <div className="menu">
                <NavLink exact to={'/'} className="menu-item" activeClassName = "active">홈</NavLink>
                <NavLink to={'/about'} className="menu-item" activeClassName = "active">소개</NavLink>
                <NavLink to={'/post'} className="menu-item" activeClassName = "active">포스트</NavLink>
            </div>
        </div>
    );
};

export default Header;
