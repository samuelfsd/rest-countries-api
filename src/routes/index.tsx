import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { CountryPage } from '../pages/CountryPage';
import { Home } from '../pages/Home';

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/countries/:name" element={<CountryPage />} />
    </Routes>
  );
}
