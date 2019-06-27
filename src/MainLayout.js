import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainLayout.scss';
import {Header} from "./components/Header/";
import {Footer} from "./components/Footer";

export class MainLayout extends React.Component {
    render() {
        return (
            <div className="mainContainer container-fluid">
                <Header></Header>
                {this.props.children}
                <Footer></Footer>
            </div>
        );
    }
};
