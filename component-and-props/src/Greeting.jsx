// When creating a class component we must import React
import React from 'react'

// Functional component
function Greeting() {
  	return <h1>Hi</h1>
}

// Class component
// class Greeting extends React.Component {
//   	render() {
//     	return <h1>Hi</h1>
//   	}
// }

// We can also use props in a component
// function Greeting (props) {
//     console.log(props)
//   	return <h1>{props.message} {props.name}</h1>
// }

// Cleaner syntax: Destructure the parameters
// function Greeting ({ message, name }) {
// 	console.log(message, name)
// 	return <h1>{message} {name}</h1>
// }

// All elements must be wrapped with a single enclosing HTML element
// function Greeting ({ message, name }) {
// 	console.log(message, name)
// 	return (
//         <>
//             <h1>{message}</h1>
//             <h1>{name}</h1>
//         </>
//     )
// }

export default Greeting;