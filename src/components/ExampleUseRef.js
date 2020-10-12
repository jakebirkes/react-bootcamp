import React, { useRef, useState } from 'react';

const ExampleUseRef = () => {
	const [newTodoValue, setNewTodoValue] = useState('');
	const [todoList, setTodoList] = useState([]);

	const inputRef = useRef(null);

	const handleChange = e => setNewTodoValue(e.target.value);

	const addTodo = e => {
		e.preventDefault();
		setTodoList(prevTodosList => [...prevTodosList, newTodoValue]);
		setNewTodoValue('');
		inputRef.current.focus(); // will refocus to input after click
	};

	const allTodos = todoList.map(todo => <p key={todo}>{todo}</p>);

	return (
		<div className="hook-example">
			<h2>
				<code>useRef()</code>
			</h2>
			<form>
				<input
					ref={inputRef}
					type="text"
					name="todo"
					value={newTodoValue}
					onChange={handleChange}
				/>
				<button onClick={addTodo}>Add todo item</button>
			</form>
			{allTodos}
		</div>
	);
};

export default ExampleUseRef;
