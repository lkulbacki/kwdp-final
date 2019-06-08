import React from 'react';
import { NavLink } from "react-router-dom";
import './footer.scss';

export class Footer extends React.Component {
    render() {
        return (
            <div>
                <p className="rights">All rights reserved&reg;</p>
                <ul className="nav">
                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink exact to="/faq" activeClassName="active">FAQ</NavLink></li>
                    <li><NavLink exact to="/regulamin" activeClassName="active">Regulamin</NavLink></li>
                    <li><NavLink exact to="/kontakt" activeClassName="active">Kontakt</NavLink></li>
                </ul>
            </div>
        );
    }
}
