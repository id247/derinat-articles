import React from 'react';
import { connect } from 'react-redux';

//import * as asyncActions from '../../actions/async';

import Form from '../../components/comments/Form';
import Comments from '../../components/comments/Comments';
import User from '../../components/comments/User';

class Main extends React.Component {

	render(){
		const { props } = this;
		if (!props.profile){
			return null;
		}
		return(
			<div className="comments__content">
				<User mixClass="comments__user" />
				<Form mixClass="comments__form" />
				<Comments mixClass="comments__list" />
			</div>
		);
	}
}



const mapStateToProps = (state, ownProps) => ({
	profile: state.user.profile,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

Main.propTypes = {
	mixClass: React.PropTypes.string,
//	Array: React.PropTypes.array.isRequired,
//	Bool: React.PropTypes.bool.isRequired,
//	Func: React.PropTypes.func.isRequired,
//	Number: React.PropTypes.number.isRequired,
//	Object: React.PropTypes.object.isRequired,
//	String: React.PropTypes.string.isRequired,
//	Symbol: React.PropTypes.symbol.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
