import React from 'react';
import { NavLink } from "react-router-dom";
import './header.scss';

export class Header extends React.Component {
    render() {
        return (
            <div>
                <p className="shop-name">NAZWA SKLEPU</p>
                <ul className="nav">
                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink exact to="/faq" activeClassName="active">FAQ</NavLink></li>
                    <li><NavLink exact to="/regulamin" activeClassName="active">Regulamin</NavLink></li>
                    <li><NavLink exact to="/kontakt" activeClassName="active">Kontakt</NavLink></li>
                    <li><NavLink exact to="/basket" activeClassName="active">Koszyk</NavLink></li>
                </ul>
            </div>
        );
    }
}
