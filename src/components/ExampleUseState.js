import React, { useState } from 'react';

const ExampleUseState = () => {
	// Toggle ~ boolean
	const [state, toggleState] = useState(false);

	// Count ~ Number
	const [count, setCount] = useState(0);

	const increment = () => setCount(prevCount => prevCount + 1);
	const decrement = () => setCount(prevCount => prevCount - 1);

	// Input Data ~ Object
	const [inputData, setInputData] = useState({ firstName: '', lastName: '' });

	// Contacts Data ~ Array of Input Data Objects
	const [contactsData, setContactsData] = useState([]);

	// Lists all contacts that have been entered
	const contacts = contactsData.map(contact => {
		const { firstName, lastName } = contact;
		const name = str => firstName + str + lastName;
		return (
			<li key={name('-')}>
				<span>{name(' ')}</span>
				<button onClick={() => removeContact(name(''))}>
					<span> X </span>
				</button>
			</li>
		);
	});

	// Capitalized inputs of firstName & lastName
	const handleChange = event => {
		const { name, value } = event.target;
		setInputData(prevInputData => ({
			...prevInputData,
			[name]: value.charAt(0).toUpperCase() + value.slice(1),
		}));
	};

	// On submit, evaluate if inputs were given
	const handleSubmit = event => {
		event.preventDefault();

		if (inputData.firstName === '' || inputData.lastName === '') return; // can't be empty

		setContactsData(prevContacts => [...prevContacts, inputData]); // add contact
		setInputData(prevInputData => ({ ...prevInputData, firstName: '', lastName: '' })); // reset inputs
	};

	const removeContact = name =>
		setContactsData(prevContacts => [
			...prevContacts.filter(contact => contact.firstName + contact.lastName !== name),
		]);

	return (
		<div className="hook-example">
			<h2>
				<code>useState()</code>
			</h2>
			<p>
				State: <span>{state ? 'true' : 'false'}</span>
			</p>
			<button onClick={() => toggleState(prevState => (prevState = !state))}>
				Toggle with <code>useState</code>
			</button>

			<p>
				Count: <strong>{count}</strong>
			</p>

			<p>
				<button onClick={() => increment()}>
					Increment with <code>useState</code>
				</button>
				<button onClick={() => decrement()}>
					Decrement with <code>useState</code>
				</button>
			</p>

			<form onSubmit={handleSubmit}>
				<div>
					<label>First Name: </label>
					<input
						placeholder="First Name (letters only)"
						pattern="[a-zA-Z]+"
						name="firstName"
						value={inputData.firstName}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label>Last Name: </label>
					<input
						placeholder="Last Name (letters only)"
						pattern="[a-zA-Z]+"
						name="lastName"
						value={inputData.lastName}
						onChange={handleChange}
					/>
				</div>
				<br />
				<button>Add contact</button>
			</form>
			<p>Contacts:</p>
			<ul>{contacts}</ul>
		</div>
	);
};

export default ExampleUseState;
