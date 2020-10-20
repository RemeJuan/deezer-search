import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SearchPage from '../pages/search/search.page';
import ArtistPage from '../pages/artist.page';

export const routes = {
  main: '/search/:query?',
  artist: 'artis/:name'
}

export default () => (
  <Switch>
    <Route path={routes.main}>
      <SearchPage/>
    </Route>
    <Route path={routes.artist}>
      <ArtistPage/>
    </Route>
    <Route path="*">
      <Redirect to='/search' />
    </Route>
  </Switch>
)
