import React from 'react'
import './header.scss'
import logo from '../../assets/img/logo.svg'

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__logo_box">
                    <img src={logo} alt="logo" />
                    <h2>shop.uz</h2>
                </div>
            </div>
        </div>
    )
}

export default Header
