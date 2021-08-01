const Map = props => {
    const data = props.covidData;
    return (
        <h2>today: {data.todayCases}</h2>
    )
}

export default Map;