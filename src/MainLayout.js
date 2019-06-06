import React from 'react';

export class MainLayout extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>MainLayout</h1>
                {this.props.children}
            </div>
        );
    }
};

// export default MainLayout;
