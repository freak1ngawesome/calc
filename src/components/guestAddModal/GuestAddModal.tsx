import React, { useState, useEffect } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
	Button,
	List,
} from "@chakra-ui/react"
import { observer } from 'mobx-react-lite'
import GuestAddCheckbox from '../guestAddCheckbox/GuestAddCheckbox'
import SelectAllButton from './selectAllButton/SelectAllButton'
import ModalStore from '../../store/modalStore'
import ProductStore from '../../store/productStore'


export default observer(function GuestAddModal() {
  return (
      <Modal isOpen={ModalStore.modalActive} onClose={() => ModalStore.modalClose()}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Добавить соедателей</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SelectAllButton/>
						<List>
							{ProductStore.guestList.map(guest => <GuestAddCheckbox key={guest.id} id={guest.id} state={ProductStore.getActiveProduct?.guestIn.has(guest.id)} name={guest.name}/>)}
						</List>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => ModalStore.modalClose()}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
})