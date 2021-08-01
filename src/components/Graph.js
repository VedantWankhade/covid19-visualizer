import { useContext, useState } from "react";
import SearchContext from "../context/searchContext";
import CanvasJSReact from "../lib/canvasjs.react";

let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Graph = () => {
    const context = useContext(SearchContext)
    return <h1>Chart - {context.location.country}</h1>
}

export default Graph;