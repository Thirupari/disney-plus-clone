import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Original from "./components/Originals"
import Marvel from "./components/Marvel";
import About from "./components/About";
import Movie from "./components/Movie";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/movie">
            <Movie />
          </Route>
          <Route path="/original">
            <Original />
          </Route>
          <Route path="/marvel">
            <Marvel />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
