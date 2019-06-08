import React from 'react';
import {Header} from "./components/Header/";
import {Footer} from "./components/Footer";

export class MainLayout extends React.Component {
    render() {
        return (
            <div className="container">
                <Header></Header>
                {this.props.children}
                <Footer></Footer>
            </div>
        );
    }
};

// export default MainLayout;
