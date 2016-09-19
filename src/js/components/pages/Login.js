import React from 'react';
import { connect } from 'react-redux';

import Button from '../../components/common/Button';

import * as asyncActions from '../../actions/async';
import * as pageActions from '../../actions/page';

class Login extends React.Component {

	componentWillMount(){
		const { props } = this;		
		if (props.profile){
			props.redirect();
		}
	}

	render(){
		const { props } = this;
		
		return (
			<div className="app__page app-login">
				
				<div className="app-login__button-placeholder">

					<Button 
						size="m"
						color="orange"
						type="button"
						onClickHandler={props.login}
					>
						Войти через Дневник.ру
					</Button>
				
				</div>

			</div>
		);
	}
}

Login.propTypes = {
	mixClass: React.PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({
	profile: state.user.profile,
});

const mapDispatchToProps = (dispatch, ownProps) => ({ 
	login: () => dispatch(asyncActions.login()),
	init: () => dispatch(asyncActions.init()), 
	redirect: () => dispatch(pageActions.setPageWithoutHistory('/')), 
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
