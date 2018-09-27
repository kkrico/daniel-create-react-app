import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostsPage from "./components/PostsPage";
import PostsForm from "./components/PostsForm";

export default function Routes() {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact component={PostsPage} />
                <Route path="/gerenciar/:id?" exact component={PostsForm} />
                <Route component={() => <h1>404</h1>}></Route>
            </Switch>
        </React.Fragment>
    );
}