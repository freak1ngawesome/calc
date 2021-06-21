import React from 'react'
import {
	Button,
} from "@chakra-ui/react"
import { observer } from 'mobx-react-lite'
import ProductStore from '../../store/productStore'
import ModalStore from '../../store/modalStore'
type Props = {
	guestNumber: number
}

export default observer( function GuestButton({ guestNumber }: Props){
	return (
	  <Button onClick={() => ModalStore.modalOpen()}>{guestNumber}/{ProductStore.guestList.length}</Button>
	)
})