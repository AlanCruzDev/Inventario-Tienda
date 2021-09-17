import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import {Layout} from '../../Components/Layout/layout';
import {WithRoute} from '../../Components/WithRoute/WithRouteComponent';
export const Dashboard = () => {
  return (
    <Router>
        <Switch>
          <WithRoute
            path='/dash'
            Component={Layout}
          />
        </Switch>
    </Router>
  )
}
