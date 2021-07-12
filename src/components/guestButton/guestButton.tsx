import React, { useState } from 'react'
import { Button, List, ListItem } from "@chakra-ui/react"
import { observer } from 'mobx-react-lite'
import ProductStore from '../../store/productStore'

type Props = {
	guestNumber: number
	productID: string
}

export default observer( function GuestButton({ guestNumber }: Props){
	return (
	  <Button>{guestNumber}/{ProductStore.guestList.length}</Button>
	)
})