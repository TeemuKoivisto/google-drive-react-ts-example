import React from 'react'
import { BrowserRouter, Redirect, Switch } from 'react-router-dom'

import { WrappedRoute, NoMainContainerRoute } from './components/WrappedRoute'
import { AuthHOC } from './components/AuthHOC'

import { FrontPage } from './pages/FrontPage'
import { LoginPage } from './pages/LoginPage'
import { FilesPage } from './pages/FilesPage'

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <WrappedRoute exact path="/" component={FrontPage}/>
      <WrappedRoute exact path="/login" component={LoginPage}/>
      <NoMainContainerRoute exact path="/files" component={AuthHOC(FilesPage)}/>
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
)
