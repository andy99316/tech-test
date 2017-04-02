
import React, { Component } from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Main from './common/main.component.js';
import landing from './components/landing.js';
//import MyChart from './components/mychart';

//<Route path="/mychart" component={MyChart} />

render(
  <Router history={browserHistory}>
  	<Route path="/landing/react/:username" component={Main}>
  		<IndexRoute component={landing} />
  		
  	</Route>
  </Router>,

  document.getElementById('container')
);

