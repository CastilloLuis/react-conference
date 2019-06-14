import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GeneralLayout from './layouts/GeneralLayout';
import Home from './pages/home/Home';
import BadgeNewPage from './pages/badgeNewPage/BadgeNewPage';
import BadgesPage from './pages/badges/BadgesPage';
import NotFound from './pages/notFound/NotFound';

function App() {
  return (
      <BrowserRouter>
        <GeneralLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/badges" component={BadgesPage} />
            <Route exact path="/badges/new" component={BadgeNewPage} />
            <Route component={NotFound} />
          </Switch>
        </GeneralLayout>
      </BrowserRouter>
  );
}

export default App;
