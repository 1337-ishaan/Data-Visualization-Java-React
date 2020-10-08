import React from 'react';
import CanvasJSReact from '../src/lib/canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
// import logo from './logo.svg';
import './App.css';
import Home from '../src/modules/UI/Home'
import Funnel from '../src/modules/UI/Funnel' 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class App extends React.Component {	
  render() {
    const options = {
      title: {
        text: "Basic Column Chart in React"
      },
      data: [{				
                type: "column",
                dataPoints: [
                    { label: "Apple",  y: 10  },
                    { label: "Orange", y: 15  },
                    { label: "Banana", y: 25  },
                    { label: "Mango",  y: 30  },
                    { label: "Grape",  y: 28  }
                ]
       }]
   }
		
   return (
      <div>
        <CanvasJSChart options = {options}
            /* onRef = {ref => this.chart = ref} */
        />
        <Funnel />
      </div>
    );
  }
}

export default App;
