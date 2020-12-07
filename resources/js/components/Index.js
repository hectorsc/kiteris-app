import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import Home from './Home';
import CategoryList from './category/CategoryList';
import CategoryCreate from './category/CategoryCreate';
import CategoryEdit from './category/CategoryEdit';
import CategoryShow from './category/CategoryShow';

import ProductList from './product/ProductList';
import ProductCreate from './product/ProductCreate';
import ProductEdit from './product/ProductEdit';
import ProductShow from './product/ProductShow';
import NotFound from './NotFound';

function Index() {
    return (
        <div className="container">
            <Router history={history}>
                <Switch>
                    <Route path="/home" exact component={Home} />
                    <Route path="/category" exact component={CategoryList} />
                    <Route path="/category/new" exact component={CategoryCreate} />
                    <Route path="/category/edit/:id" exact component={CategoryEdit} />
                    <Route path="/category/:id" exact component={CategoryShow} />

                    <Route path="/product" exact component={ProductList} />
                    <Route path="/product/new" exact component={ProductCreate} />
                    <Route path="/product/edit/:id" exact component={ProductEdit} />
                    <Route path="/product/:id" exact component={ProductShow} />

                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        </div>
    );
}

export default Index;

if (document.getElementById('react-app')) {
    ReactDOM.render(<Index />, document.getElementById('react-app'));
}
