import React from 'react'
import { observer } from 'mobx-react-lite'
import { List, ListItem, IconButton, Text } from "@chakra-ui/react"
import { DeleteIcon } from '@chakra-ui/icons'
import ProductStore from '../../store/productStore'

export default observer(function GuestList(){
	return (
		<List textStyle="normal" spacing={5} mt="1em">
			{ProductStore.guestList.map(guest => {
				return (
					<ListItem key={guest.id}>
						<IconButton
							variant="solid"
							aria-label="Delete item from list"
							icon={<DeleteIcon />}
							mr="1em"
							onClick={() => ProductStore.deleteGuest(guest.id)}
						/>
						{guest.name}
					</ListItem>
				)
			})}
		</List>
	)
})