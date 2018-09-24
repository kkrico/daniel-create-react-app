import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default function Routes() {
    return (
        <React.Fragment>
            <Route path="/" component={Loading}></Route>
            <Switch>
                <Route path="/" exact component={() => <h1>Deu bom!</h1>} />
            </Switch>
        </React.Fragment>
    );
}