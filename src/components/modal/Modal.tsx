import React from 'react'
import ReactDOM from 'react-dom'
import { Center, Box, Button, HStack, Heading, CloseButton  } from "@chakra-ui/react"
import { observer } from 'mobx-react-lite'
import ModalStore from '../../store/modalStore'

const style = {
	center: {
		background: "rgba(0, 0, 0, 0.3)",
		width: "100vw",
		height: "100vh",
		top: "0",
		bottom: "0",
		left: "0",
		right: "0"
	},
	box: {
		bg: "white",
		borderWidth: "1px",
		borderColor: "gray 200",
		borderRadius: "lg",
	}
}

export default observer(function Modal(){

	function handleCloseModal() {
		ModalStore.modalClose()
		ModalStore.defaultID()
	}
	return ReactDOM.createPortal(ModalStore.modalActive ? (
		<Center {...style.center} pos="absolute">
			<Box {...style.box}>
			<HStack>
				<Heading>Выбрать соедателей</Heading>
				<CloseButton
					aria-label="Close modal"
					onClick={() => handleCloseModal()}
					size="lg"
				/>
			</HStack>
			</Box>
		</Center>
	) : null, document.getElementById('modal'))
})