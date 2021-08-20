import { useContext, useEffect, useState } from "react";
import SearchContext from "../context/searchContext";
import CanvasJSReact from "../lib/canvasjs.react";

let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Graph = () => {
    const context = useContext(SearchContext)

    const country = context.location.country;
    const [cases, setCases] = useState([]);
    const [deaths, setDeaths] = useState([]);
    const [countryName, setCountryName] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let url = "https://disease.sh/v3/covid-19/historical/all?lastdays=30";
        if (country !== "world") {
          url = `https://disease.sh/v3/covid-19/historical/${country}?lastdays=30`;
        }
    
        setLoading(true);
    
        fetch(url).then((response) => {
          if (!response.ok) {
            //setData(initialData);
          } else {
            response.json().then((rawData) => {
              let data;
              if (country !== "world") {
                data = rawData.timeline;
                setCountryName(rawData.country);
              } else {
                data = rawData;
                setCountryName("Worldwide");
              }
              for (let key in data) {
                const modified = [];
                const out = [];
                for (let date in data[key]) {
                  const value = data[key][date];
    
                  modified.push({
                    x: new Date(date),
                    y: value,
                  });
                }
    
                for (let i = 1; i < modified.length; i++) {
                  out[i - 1] = {
                    x: modified[i].x,
                    y: modified[i].y - modified[i - 1].y,
                  };
                }
    
                if (key === "cases") {
                  setCases(out);
                } else if (key === "deaths") {
                  setDeaths(out);
                } else if (key === "recovered") {
                  //setRecovered(out);
                }
              }
    
              setLoading(false);
            });
          }
        });
      }, [country]);
    
      const options = {
        animationEnabled: true,
        theme: "light1",
        backgroundColor: "white",
        title: {
          text: `${countryName ? countryName + " - Last 30 days" : ""}`,
        },
        axisX: {
          valueFormatString: "DD MMM",
        },
        axisY: {
          includeZero: true,
          scaleBreaks: {
            autoCalculate: true, // change to false
          },
        },
        legend: {
          fontSize: 16,
        },
        toolTip: {
          shared: true,
        },
        data: [
          {
            type: "line",
            name: "Cases",
            color: "blue",
            markerColor: "blue",
            lineColor: "blue",
            showInLegend: true,
            dataPoints: cases,
          },
          {
            type: "line",
            name: "Deaths",
            color: "red",
            markerColor: "red",
            lineColor: "red",
            showInLegend: true,
            dataPoints: deaths,
          },
        ],
      };
    return (
        <>
        {loading && <h1>Loading please wait ...</h1>}
      {!loading && (
        <div>
          <div>
            <CanvasJSChart options={options} />
          </div>
        </div>
      )}
    </>
    )
}

export default Graph;