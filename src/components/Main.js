import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites";

export default function Main() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorites" component={Favorites} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
