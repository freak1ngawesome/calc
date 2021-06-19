import React from 'react'
import { observer } from 'mobx-react-lite'
import { List, ListItem, ListIcon, IconButton } from "@chakra-ui/react"
import { DeleteIcon } from '@chakra-ui/icons'
import { AiOutlineUser } from 'react-icons/ai'
import Store from '../../store/store'

export default observer(function GuestList(){
	return (
		<List textStyle="normal" spacing={3}>
			{Store.guestList.map(guest => {
				return (
					<ListItem key={guest.id}>
						<IconButton
							aria-label="Delete item from list"
							icon={<DeleteIcon />}
							onClick={() => Store.deleteGuest(guest.id)}
						/>
						<ListIcon as={AiOutlineUser} />
						{guest.name}
					</ListItem>
				)
			})}
		</List>
	)
})