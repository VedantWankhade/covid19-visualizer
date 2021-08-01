import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Graph from './components/Graph';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
      </Switch>
      <Switch>
        <Route path="/graph" exact>
          <Graph />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
