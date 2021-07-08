import React from 'react'
import { Button } from "@chakra-ui/react"
import { observer } from 'mobx-react-lite'
import ProductStore from '../../store/productStore'
import ModalStore from '../../store/modalStore'

type Props = {
	guestNumber: number
	productID: string
}

export default observer( function GuestButton({ guestNumber, productID }: Props){
	const handleModalOpen = () => {
		ModalStore.modalOpen()
		ProductStore.updateCurrentID(productID)
	}
	return (
	  <Button onClick={handleModalOpen}>{guestNumber}/{ProductStore.guestList.length}</Button>
	)
})