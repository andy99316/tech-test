
import React from 'react';
import ReactDOM from 'react-dom';
import { Chart } from 'react-google-charts';
import ChatApp from '../chat/app.js';
//import _ from 'underscore';

const mystyle = {
  color: '#000000',
};

const rawdata = [
  {
    "Date": "20170331",
    "High": 20722.589844,
  },
  {
    "Date": "20170330",
    "High": 20753.779297,
  },
  {
    "Date": "20170329",
    "High": 20684.730469,
  },
  {
    "Date": "20170328",
    "High": 20735.609375,
  },
  {
    "Date": "20170327",
    "High": 20578.460938,
  },
  {
    "Date": "20170324",
    "High": 20718.330078,
  },
  {
    "Date": "20170323",
    "High": 20757.890625,
  },
  {
    "Date": "20170322",
    "High": 20686.210938,
  },
  {
    "Date": "20170321",
    "High": 20970.039062,
  },
  {
    "Date": "20170320",
    "High": 20955.449219,
  },
  {
    "Date": "20170317",
    "High": 20980.509766,
  },
  {
    "Date": "20170316",
    "High": 21000.109375,
  },
  {
    "Date": "20170315",
    "High": 20977.470703,
  },
  {
    "Date": "20170314",
    "High": 20874,
  },
  {
    "Date": "20170313",
    "High": 20926.060547,
  },
  {
    "Date": "20170310",
    "High": 20940.289062,
  },
  {
    "Date": "20170309",
    "High": 20900.570312,
  },
  {
    "Date": "20170308",
    "High": 20951.439453,
  },
  {
    "Date": "20170307",
    "High": 20970.539062,
  },
  {
    "Date": "20170306",
    "High": 20986.429688,
  },
  {
    "Date": "20170303",
    "High": 21039.960938,
  },
  {
    "Date": "20170302",
    "High": 21129.199219,
  },
  {
    "Date": "20170301",
    "High": 21169.109375,
  }
]

var result = [];
for (var x = 0; x < rawdata.length; x++) {
  result.push([rawdata[x].Date, rawdata[x].High]);
}
//console.log(JSON.stringify(result));


export default class landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns : [{"label":"Date","type":"string"},{"label":"Price","type":"number"}],
      row : result,
    };
  }

  componentDidMount() {
    //this.setState();
  }

  componentWillUnmount() {

  }

  onChange() {

  }

  render() {
    return (
      <div style={mystyle}>
        <div>Welcome {this.props.params.username} !</div>
        <Chart
          chartType="LineChart"
          columns={this.state.columns}
          rows={this.state.row}
          options={{"legend":true,"hAxis":{"title":"Date"},"vAxis":{"title":"Price"}}}
          graph_id="ScatterChart"
          width="50%"
          height="400px"
          legend_toggle
        />

        <div className="chart-area"><ChatApp/></div>
      </div>
    );
  }

}

