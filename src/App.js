import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GeneralLayout from './layouts/GeneralLayout';
import Home from './pages/home/Home';
import BadgeNewPage from './pages/badgeNewPage/BadgeNewPage';
import BadgeEdit from './pages/badgeEdit/BadgeEdit';
import BadgesPage from './pages/badges/BadgesPage';
import NotFound from './pages/notFound/NotFound';
import BadgeDetailsContainer from './pages/badgeDetails/container/BadgeDetailsContainer';

function App() {
  return (
      <BrowserRouter>
        <GeneralLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/badges" component={BadgesPage} />
            <Route exact path="/badges/new" component={BadgeNewPage} />
            <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
            <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer} />
            <Route component={NotFound} />
          </Switch>
        </GeneralLayout>
      </BrowserRouter>
  );
}

export default App;
