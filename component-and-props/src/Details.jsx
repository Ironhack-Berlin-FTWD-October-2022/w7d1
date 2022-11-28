import React from "react"

export default function Details(props) {
	const email = props.email
	const name = props.name
	return (
		<>
			<h1>Name: {name}</h1>
			<h1>Email: {email}</h1>
		</>
	)
}
