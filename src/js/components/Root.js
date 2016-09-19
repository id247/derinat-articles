import React from 'react';
import { Provider } from 'react-redux';
//import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import * as asyncActions from '../actions/async';

import Router 			from '../components/Router';
import Loading 			from '../components/loading/Loading';
import ErrorMessage 	from '../components/error/ErrorMessage';

// const routes = (
// 	<Router history={hashHistory}>
// 		<Route path="/" component={App}>
// 			<IndexRoute component={Main} />
// 			<Route path="page/:pageNumber" component={Main} />
// 		</Route>
// 		<Route path="/login" component={Login} />
// 	</Router>
// );
// 


class Root extends React.Component {

	render() {		
		return (
			<Provider store={this.props.store}>		
				<section className="app">	
				
					<h3 className="app__title">
						Комментарии
					</h3>
		
					<Router />
					
					<Loading 
						mixClass="app__loader"
						visibleClass="loader--visible"
					/>
					
					<ErrorMessage 
						mixClass="app__error"
					/>
				</section>
			</Provider>
		);
	}
}

export default Root;

