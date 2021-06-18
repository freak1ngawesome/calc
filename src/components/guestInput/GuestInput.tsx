import React, { FormEvent, useState } from 'react'
import { nanoid } from 'nanoid'
import { observer } from 'mobx-react-lite'
import { HStack, Input, Button, FormControl } from "@chakra-ui/react"
import Store from '../../store/store'

export default observer(function GuestInput(){
	const [guestName, setGuestName] = useState('')
	const handleGuest = function(e: FormEvent) {
		e.preventDefault()
		Store.addGuest({id: nanoid(), name: guestName})
		setGuestName('')
	}
	return (
		<FormControl as="form" onSubmit={handleGuest}>
			<HStack>
				<Input
					placeholder="Имя"
					required
					value={guestName}
					onChange={(e) => setGuestName(e.target.value)}
				/>
				<Button
					type="submit"
				>Добавить</Button>
			</HStack>
		</FormControl>
	)
})