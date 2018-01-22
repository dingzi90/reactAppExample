import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import KanbanBoard from './number1/KanbanBoard';
//import GroceryList from './GroceryList';
import registerServiceWorker from './registerServiceWorker';
import AnimatedShoppingList from './number2/AnimatedShoppingList';

let cardsList = [
	{
		id: 1,
		title: "Read the book",
		description: "I should read the whole book",
		status: "in-progress",
		tasks: []
	},
	{
		id: 2,
		title: "Write some code",
		description: "Code along with the samples in the book",
		status: "todos",
		tasks: [
			{
				id: 1,
				name: "ContactList Example",
				done: true
			},
			{
				id:2,
				name: "Kanban Example",
				done:false
			},
			{
				id:3,
				name: "My own experiments",
				done:false
			}
		]
	}
]

ReactDOM.render(
	<div>
		<AnimatedShoppingList />
	</div>, document.getElementById('root'));
registerServiceWorker();
