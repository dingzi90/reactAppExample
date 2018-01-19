import React, {Component} from 'react';
import List from './List';

class KanbanBoard extends Component {
	handleSubmit(event){
		console.log("Submitted values are:",event.target.name.value,event.target.email.value);
		event.preventDefault();
	}
	render(){
		return (
			<div className="app">
				<List id="todo"  title="To Do"  cards={this.props.cards.filter((card) =>card.status === "todo")} />
				<List id="in-progress"  title="In progress"  cards={this.props.cards.filter((card) =>card.status === "in-progress")} />
				<List id="done"  title="Done"  cards={this.props.cards.filter((card) =>card.status === "done")} />
				<form  onSubmit={this.handleSubmit}>
					<div className="formGroup">
							Name:<input name="name"  type="text"/>
					</div>
					<div  className="formGroup">
							Email:<input name="email"  type="mail"/>
					</div>
					<button  type="submit">Submit</button>,
				</form>
			</div>
		);
	}
}

export default KanbanBoard;
