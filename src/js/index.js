'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import Root from './components/Root';

const comments = document.getElementById('comments');

if (comments){

	const store = configureStore(); 
	
	ReactDOM.render(
		<Root store={store} />,
		comments
	);

}



