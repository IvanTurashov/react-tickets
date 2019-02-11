import React, { Fragment, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Global, css } from '@emotion/core';

import TicketsPage from './components/TicketsPage.jsx';

const GlobalStyle = css`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400');
  
  html {
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
  }
  
  body {
      margin: 0;
      background-color: #F3F7FA;
  }
`;

const App = () => {
    return (
        <Fragment>
            <Global styles={GlobalStyle} />

            <Suspense>
                <Switch>
                    <Route
                        path="/"
                        exact={true}
                        render={(props) => (
                            <TicketsPage {...props} />
                        )}
                    />

                    <Redirect from='*' to='/' />
                </Switch>
            </Suspense>
        </Fragment>
    );
};

export default App;