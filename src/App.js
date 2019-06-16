import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {MainLayout} from './MainLayout';
import {Home} from './components/Home';
import {Regulamin} from "./components/Regulamin";
import {Kontakt} from "./components/Kontakt";
import {Faq} from './Faq';
import {NoMatch} from './components/NoMatch';
import {ProductPage} from './components/Products/ProductPage';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <MainLayout>
                        <Switch>
                            <Route exact path={"/"} component={Home}/>
                            <Route exact path={"/faq"} component={Faq}/>
                            <Route exact path={"/regulamin"} component={Regulamin}/>
                            <Route exact path={"/kontakt"} component={Kontakt}/>
                            <Route path="/products/:slug" component={ProductPage}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </MainLayout>
                </Provider>
            </BrowserRouter>
        );
    }
}

export default App;
