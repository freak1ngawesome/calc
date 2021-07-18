import React from 'react'
import { observer } from 'mobx-react-lite'
import {
  Tr,
  Td,
	IconButton,
} from "@chakra-ui/react"
import { DeleteIcon } from '@chakra-ui/icons'
import { GuestList } from '../../../types/types'
import ProductStore from '../../../store/productStore'


type Props = {
	guestList: GuestList,
}

const style = {
	td: {
		d: "flex",
		alignItems: "center",
		gridGap: "1em",
	}
}

export default observer( function GuestRows({ guestList }: Props){
	return (
		<>
			{guestList.map(guest => {
				return (
						<Tr key={guest.id}>
							<Td {...style.td}>
								<IconButton
									aria-label="Delete guest from list"
									icon={<DeleteIcon />}
									onClick={() => ProductStore.deleteGuest(guest.id)}
								/>
								{guest.name}
							</Td>
						</Tr>
				)
			})}
		</>
	)
})