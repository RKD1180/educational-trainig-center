import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import AboutUS from "./components/AboutUs/AboutUS";
import MySelf from "./components/MySelf/MySelf";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/aboutus">
            <AboutUS></AboutUS>
          </Route>
          <Route exact path="/myself">
            <MySelf></MySelf>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
