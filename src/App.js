import Header from "./componets/Header";
import Movies from "./componets/Movies";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <Switch>
          <Route
                exact
                path="/"
                render={() => {
                    return (
                      <Redirect to="/popular" /> 
                    )
                }}
              />
            <Route path="/:movieType" component={Movies} exact/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
