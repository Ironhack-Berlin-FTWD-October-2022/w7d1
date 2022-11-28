import React from "react"
import Details from "./Details"
import Picture from "./Picture"

export default function Profile(props) {
	console.log(props)
	return (
		<>
			<Details name={props.data.name} email={props.data.email} />
			<Picture image={props.data.picture} />
		</>
	)
}
