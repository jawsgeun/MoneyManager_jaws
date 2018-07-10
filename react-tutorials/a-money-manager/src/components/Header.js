import React, { Component } from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';
class Header extends Component {
    render() {
        return (
          <div className = "menu">
            <NavLink to={'/input'} className="menu-item" activeClassName = "active">수입 / 지출 입력</NavLink>
            <NavLink to={'/stat'} className="menu-item" activeClassName = "active">통계</NavLink>
            <NavLink to={'/setting'} className="menu-item" activeClassName = "active">설정</NavLink>
          </div>
        );
    }
}

export default Header;