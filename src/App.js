import React, {render} from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {MainLayout} from './MainLayout';
import {Root} from './Root';
import {Home} from './Home';
import {User} from './User';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <MainLayout>
                    <Switch>
                        <Route exact path={"/"} component={Root}/>
                        <Route exact path={"/home"} component={Home}/>
                        <Route exact path={"/user"} component={User}/>
                    </Switch>
                </MainLayout>
            </BrowserRouter>
        );
    }
}

export default App;
