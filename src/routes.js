import { Route, Switch } from "react-router-dom"

import Overview from "./pages/overview/Overview"

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Overview} />
    </Switch>
  )
}

export default Routes