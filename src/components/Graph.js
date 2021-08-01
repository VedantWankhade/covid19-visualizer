import CanvasJSReact from "../lib/canvasjs.react";

const Graph = () => {
    let CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const options = {
        title: {
            text: 'Test chart'
        },
        data: [{
            type: 'column',
            dataPoints: [
                { label: "Apple",  y: 10  },
                { label: "Orange", y: 15  },
                { label: "Banana", y: 25  },
                { label: "Mango",  y: 30  },
                { label: "Grape",  y: 28  }
            ]
        }]
    };
    return (<CanvasJSChart options={options} />)
}

export default Graph;