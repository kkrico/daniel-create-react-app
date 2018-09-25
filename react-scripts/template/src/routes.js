import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostsPage from "./components/PostsPage";

export default function Routes() {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact component={PostsPage} />
            </Switch>
        </React.Fragment>
    );
}