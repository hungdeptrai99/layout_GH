import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { path } from './constants/path'
import MainLayout from './layouts/MainLayout/MainLayout'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'

export default function Routes() {
  return (
    <Switch>
      <Route path={path.home} exact>
        <MainLayout>
          <Home />
        </MainLayout>
      </Route>
      <Route path={path.notFound}>
        <MainLayout>
          <NotFound />
        </MainLayout>
      </Route>
    </Switch>
  )
}
