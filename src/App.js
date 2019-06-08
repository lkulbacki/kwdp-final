import React, {render} from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {MainLayout} from './MainLayout';
import {Home} from './components/Home';
import {Faq} from './Faq';
import {NoMatch} from './components/NoMatch';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <MainLayout>
                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route exact path={"/faq"} component={Faq}/>
                        <Route component={NoMatch} />
                    </Switch>
                </MainLayout>
            </BrowserRouter>
        );
    }
}

export default App;
