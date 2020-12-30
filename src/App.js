import React from 'react';

console.log(process.env.NODE_ENV);
const App = ({ title }) => (
	<div>
		<h1>{title}</h1>
		<img src='https://images.unsplash.com/photo-1515664952592-0891e0d5f2d0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' />
	</div>
);

export default App;
