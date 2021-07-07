import React from 'react'
import {
	ListItem,
	Checkbox,
} from "@chakra-ui/react"

import ModalStore from '../../store/modalStore'
import ProductStore from '../../store/productStore'

type Props = {
	id: string
	state: boolean
	name: string
}
export default function AddGuestCheckbox({ id, state, name }: Props){
	const handleChange = (guestID: string) => {
		ProductStore.addGuestID(ModalStore.currentID, guestID, state)
	}
	return (
		<ListItem >
			<Checkbox
				isChecked={state}
				onChange={() => handleChange(id)}>{name}</Checkbox>
		</ListItem>
	)
}