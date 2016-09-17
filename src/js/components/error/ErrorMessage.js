import React from 'react';
import { connect } from 'react-redux';

import errors from '../../settings/errors';

const ErrorMessage = (props) => {
	
	if (!props.error){
		return null;
	}

	return (
		<div className={( (props.mixClass ? props.mixClass : '') + ' comments-error-message')}>

			<div className="comments-error-message__text">
				{props.error}
			</div>

		</div>
	)
};

ErrorMessage.propTypes = {
	mixClass: React.PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({
	error: state.error,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessage);
