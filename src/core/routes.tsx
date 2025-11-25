import React from 'react';
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SearchPage from '../pages/search/search.page';
import ArtistPage from '../pages/artist/artist.page';

export const routePaths = {
  main: '/search/:query?',
  artist: '/artist/:artistId'
}

const AppRoutes = () => (
  <Routes>
    <Route path="/search" element={<SearchPage />} />
    <Route path="/search/:query" element={<SearchPage />} />
    <Route path="/artist/:artistId" element={<ArtistPage />} />
    <Route path="*" element={<Navigate to="/search" replace />} />
  </Routes>
);

export default AppRoutes;
