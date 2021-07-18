import React from 'react'
import {
	ListItem,
	Checkbox,
	Text,
} from "@chakra-ui/react"
import ProductStore from '../../store/productStore'

type Props = {
	id: string
	state: boolean
	name: string
}
export default function AddGuestCheckbox({ id, state, name }: Props){
	const handleChange = (guestID: string) => {
    ProductStore.toggleGuestID(guestID, state)
	}
	return (
		<ListItem >
			<Checkbox
				isChecked={state}
				textStyles="normal"
				onChange={() => handleChange(id)}>{name}</Checkbox>
		</ListItem>
	)
}