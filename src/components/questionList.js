import React, { Component }	from "react";
import QuestionItem from "./questionItem.js";
import "../styles/questionlist.css";
class QuestionList extends Component{
	render() {
		var questions = this.props.questions;
		var onVote = this.props.onVote;
		if( !Array.isArray(questions) ) throw new Error ('this.props.questions问题必须是数组');
		var questionsComps = questions.map(function(qst){
			return <QuestionItem  
			key={qst.key} 
			questionKey={qst.key} 
			title={qst.title} 
			description={qst.description} 
			voteCount={qst.voteCount} 
			onVote={onVote}/>
		});
		return (
			<div id="questions" className="">
		        { questionsComps }
		    </div>
		)
	}
}

export default QuestionList;