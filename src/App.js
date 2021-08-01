import './App.css';
import Map from './components/Map';
import Header from './components/Header';
import Graph from './components/Graph';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Search from './components/Search';
import { useContext, useEffect, useState } from 'react';
import SearchContext from './context/searchContext';

const initialData = {
  todayCases: 0,
  totalCases: 0,
  todayDeaths: 0,
  totalDeaths: 0,
  todayRecovered: 0,
  totalRecovered: 0,
};

function App() {

  const country = useContext(SearchContext).location.country;
  const [ covidData, setCovidData ] = useState(initialData);
  
  useEffect(() => {
    let url = "https://disease.sh/v3/covid-19/all";
    if (country !== "world") {
      url = `https://disease.sh/v3/covid-19/countries/${country}?strict=true`;
    }

    fetch(url).then(res => {
      if (!res.ok) {
        setCovidData(initialData);
      } else {
        res.json().then(data => {
          setCovidData({
            todayCases: data.todayCases,
            totalCases: data.cases,
            todayDeaths: data.todayDeaths,
            totalDeaths: data.deaths,
            todayRecovered: data.todayRecovered,
            totalRecovered: data.recovered,
          })
        })
      }
    })
  }, [country]);

  return (
    <>
      <Header />
      <Search />
      <Switch>
        <Route path="/" exact>
          <Map covidData={covidData}/>
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
