import React from 'react';
import { connect } from 'react-redux';

import * as asyncActions from '../actions/async';
import * as commentsActions from '../actions/comments';

class App extends React.Component {

	componentWillMount(){
		const { props } = this;


		// if (window.location.href.indexOf('forum-mothers') > -1){
		// 	this.props.setPostsLabel('mothers');
		// }else if ((window.location.href.indexOf('forum-girls') > -1)){
		// 	this.props.setPostsLabel('girls');
		// }else if ((window.location.href.indexOf('competition') > -1)){
		// 	this.props.setPostsLabel('competition');
		// }	

//		this.props.setCommentsPage(props.pageNumber);
//		
		console.log(document.location);

		const label = document.location.host + document.location.pathname;

		this.props.setCommentsLabel(label);
		
		props.init();
	}

	render(){
		const { props } = this;
		return props.children;
	}
}

const mapStateToProps = (state, ownProps) => ({
	pageNumber: state.comments.page,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	init: () => dispatch(asyncActions.init()), 
	setPage: (pageId) => dispatch(asyncActions.setPage(pageId)),
	setCommentsPage: (pageId) => dispatch(commentsActions.setPage(pageId)),
	setCommentsLabel: (label) => dispatch(commentsActions.setLabel(label)),
});

App.propTypes = {
	mixClass: React.PropTypes.string,
//	Array: React.PropTypes.array.isRequired,
//	Bool: React.PropTypes.bool.isRequired,
//	Func: React.PropTypes.func.isRequired,
//	Number: React.PropTypes.number.isRequired,
//	Object: React.PropTypes.object.isRequired,
//	String: React.PropTypes.string.isRequired,
//	Symbol: React.PropTypes.symbol.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
