import React, { useState } from 'react';

function App() {
	const [ todos, setTodos ] = useState([
		{
			text: 'Learn about React',
			isColpeted: false
		},
		{
			text: 'Meet friend for luch',
			isColpeted: false
		},
		{
			text: 'Build really cool todo app',
			isColpeted: false
		}
	]);

	return (
		<div className="app">
			<div className="todo-list">
				{todos.map((todo, index) => <Todo key={index} index={index} todo={todo} />)}
			</div>
		</div>
	);
}

export default App;
