import React from 'react';
import { connect } from 'react-redux';

import { CommentsOptions } from 'appSettings';

import Comment from '../../components/comments/Comment';
import Pagination from '../../components/comments/Pagination';

import * as asyncActions from '../../actions/async';

class Comments extends React.Component {

	componentWillMount(){
		const { props } = this;
		props.getComments();
	}

	componentWillReceiveProps(nextProps){

		const { props } = this;
		const oldPageNumber = props.pageNumber ? parseInt(props.pageNumber) : 1;
		const newPageNumber = nextProps.pageNumber ? parseInt(nextProps.pageNumber) : 1;

		if (oldPageNumber !== newPageNumber){
			props.setPage(newPageNumber);
			props.getComments();
		}
	}

	render(){
		const { props } = this;

		const pagesCount = Math.ceil(props.commentsTotalCount / CommentsOptions.pageSize);
		
		console.log(props.comments);

		return(
			<div className={( (props.mixClass ? props.mixClass : '') + ' comments-list')}>

				<ul className="comments-list__list">

					{props.comments.map( (comment, i) => (

						<Comment 
							mixClass="comments-list__item"
							comment={comment}
							label={props.label}
							key={'comment' + comment.Id}
						/>

					))}

				</ul>

				<Pagination
					mixClass="comments-list__pagination"
					pagesCount={pagesCount}
				/>

			</div>
		);
	}
}


const mapStateToProps = (state, ownProps) => ({
	profile: state.user.profile,
	comments: state.comments.list,
	commentsTotalCount: state.comments.itemsTotalCount,
	label: state.comments.label,
	pageNumber: state.comments.page,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	setPage: (pageId) => dispatch(asyncActions.setPage(pageId)),
	getComments: () => dispatch(asyncActions.getComments()),
});

Comments.propTypes = {
	mixClass: React.PropTypes.string,
//	Array: React.PropTypes.array.isRequired,
//	Bool: React.PropTypes.bool.isRequired,
//	Func: React.PropTypes.func.isRequired,
//	Number: React.PropTypes.number.isRequired,
//	Object: React.PropTypes.object.isRequired,
//	String: React.PropTypes.string.isRequired,
//	Symbol: React.PropTypes.symbol.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
