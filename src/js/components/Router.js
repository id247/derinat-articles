import React from 'react';
import { connect } from 'react-redux';

import App 				from '../components/App';
import Login 			from '../components/pages/Login';
import Main 			from '../components/pages/Main';


class Router extends React.Component {

	render(){

		const { page } = this.props;

		console.log(page);

		switch(page){
			case '/login':
				return (
					<Login />
				);
				break;
			default: 
				return (
					<App>
						<Main />
					</App>
				);
		}
	}
}


const mapStateToProps = (state, ownProps) => ({
	page: state.page,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

Router.propTypes = {
	mixClass: React.PropTypes.string,
//	Array: React.PropTypes.array.isRequired,
//	Bool: React.PropTypes.bool.isRequired,
//	Func: React.PropTypes.func.isRequired,
//	Number: React.PropTypes.number.isRequired,
//	Object: React.PropTypes.object.isRequired,
//	String: React.PropTypes.string.isRequired,
//	Symbol: React.PropTypes.symbol.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
