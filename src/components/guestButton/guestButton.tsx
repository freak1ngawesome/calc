import React, { useState } from 'react'
import { Button, List, ListItem } from "@chakra-ui/react"
import { observer } from 'mobx-react-lite'
import ProductStore from '../../store/productStore'

type Props = {
	guestNumber: number
	productID: string
	onOpen: () => void
}

export default observer( function GuestButton({ guestNumber, productID, onOpen }: Props){
	return (
	  <Button onClick={onOpen}>{guestNumber}/{ProductStore.guestList.length}</Button>
	)
})