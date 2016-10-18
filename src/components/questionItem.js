import React, { Component }		from "react";

class QuestionItem extends Component{
	voteUp() {
		var newCout = parseInt(this.props.voteCount,10) +1;
		this.props.onVote( this.props.questionKey, newCout )
	}
	voteDown() {
		var newCout = parseInt(this.props.voteCount,10) -1;
		this.props.onVote( this.props.questionKey, newCout )
	}
	render() {
		return (
			<div className="media" key={this.props.questionKey}>
	            <div className="media-left">
	              <button className="btn btn-default" onClick={this.voteUp.bind(this)}>
	                <span className="glyphicon glyphicon-chevron-up"></span>
	                <span className="vote-count">{this.props.voteCount}</span>
	              </button>
	              <button className="btn btn-default" onClick={this.voteDown.bind(this)}>
	                <span className="glyphicon glyphicon-chevron-down"></span>
	              </button>
	            </div>
	            <div className="media-body">
	              <h4 className="media-heading">{this.props.title}</h4>
	              <p>{this.props.description}</p>
	            </div>
	        </div>
		)
	}
}

export default QuestionItem;