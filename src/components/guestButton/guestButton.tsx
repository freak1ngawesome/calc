import React from 'react'
import {
	Button,
} from "@chakra-ui/react"
import { observer } from 'mobx-react-lite'
import ProductStore from '../../store/productStore'
import ModalStore from '../../store/modalStore'
type Props = {
	guestNumber: number
	guestID: string
}

export default observer( function GuestButton({ guestNumber, guestID }: Props){

	function handleOpenModal() {
		ModalStore.modalOpen()
		ModalStore.updateID(guestID)
	}
	return (
	  <Button onClick={() => handleOpenModal()}>{guestNumber}/{ProductStore.guestList.length}</Button>
	)
})