import React from 'react'
import {
	Button,
} from "@chakra-ui/react"
import { observer } from 'mobx-react-lite'
import Store from '../../store/store'

type Props = {
	guestNumber: number
}

export default observer(function GuestButton({ guestNumber }: Props){
	return (
	  <Button >{guestNumber}/{Store.guestList.length}</Button>
	)
})