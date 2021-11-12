import { Route, Switch, Redirect } from "react-router-dom";
import FilmsView from "./views/FilmsView";
import FilmDetails from "./views/FilmDetails";

function App() {
  return (
    <>
      <Switch>
        <Route path="/films" exact>
          <FilmsView />
        </Route>
        <Route path="/films/:filmId">
          <FilmDetails />
        </Route>
        <Redirect from="/" to="/films" />
      </Switch>
    </>
  );
}

export default App;
