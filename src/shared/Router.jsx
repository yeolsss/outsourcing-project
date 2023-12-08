import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import Layout from './layout/Layout';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={'/'} element={<Home />} />
          <Route path={'/detail/:id'} element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
