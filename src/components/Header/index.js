import React from 'react';
import { NavLink } from "react-router-dom";
import './header.scss';

export class Header extends React.Component {
    render() {
        return (
            <div className="container-header">
                <p className="shop-name">Thrift Shop</p>
                <ul className="nav">
                    <li className="nav-element"><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li className="nav-element"><NavLink exact to="/faq" activeClassName="active">FAQ</NavLink></li>
                    <li className="nav-element"><NavLink exact to="/regulamin" activeClassName="active">Regulamin</NavLink></li>
                    <li className="nav-element"><NavLink exact to="/kontakt" activeClassName="active">Kontakt</NavLink></li>
                    <li className="nav-element"><NavLink exact to="/basket" activeClassName="active">Koszyk</NavLink></li>
                </ul>
            </div>
        );
    }
}
