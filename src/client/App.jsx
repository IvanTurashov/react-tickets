import React, { Fragment, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Global } from '@emotion/core';

import TicketsPage from './components/tickets/TicketsPage.jsx';
import { GlobalStyle } from './styles/global.js';
import { Loader } from './styles/common.js';
import Header from './components/Header.jsx';

const App = () => {
    return (
        <Fragment>
            <Global styles={GlobalStyle} />
            <Header />

            <Suspense fallback={Loader}>
                <Switch>
                    <Route
                        path="/"
                        exact={true}
                        render={props => <TicketsPage {...props} />}
                    />

                    <Redirect from='*' to='/' />
                </Switch>
            </Suspense>
        </Fragment>
    );
};

export default App;