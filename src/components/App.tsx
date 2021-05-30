import React from 'react'

type Props = {
	name: string
}
export default function App({ name }: Props){
	return (
		<h1>Hello {name}</h1>
	)
}
