import React from 'react';
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SearchPage from '../pages/search/search.page';
import ArtistPage from '../pages/artist/artist.page';

export const routePaths = {
  search: '/search',
  searchWithQuery: '/search/:query',
  artist: '/artist/:artistId'
}

const AppRoutes = () => (
  <Routes>
    <Route path={routePaths.search} element={<SearchPage />} />
    <Route path={routePaths.searchWithQuery} element={<SearchPage />} />
    <Route path={routePaths.artist} element={<ArtistPage />} />
    <Route path="*" element={<Navigate to="/search" replace />} />
  </Routes>
);

export default AppRoutes;
