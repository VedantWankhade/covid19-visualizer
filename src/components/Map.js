const Map = props => {
    const data = props.covidData;
    console.log(data)
    return (
        <div>
        <h2>totalCases: {data.totalCases}</h2>
        <h2>totalCases: {data.todayRecovered}</h2>
        <h2>totalDeaths: {data.totalDeaths}</h2>
        </div>
    )
}

export default Map;