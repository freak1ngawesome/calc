import React, { useState, useEffect } from 'react'
import { List, ListItem, Checkbox } from "@chakra-ui/react"
import ProductStore from '../../../store/productStore'
import ModalStore from '../../../store/modalStore'

export default function AddGuestForm(){
  const [guestIn, setGuestIn] = useState([])
  useEffect(() => {

    const guestIn = ProductStore.productList.find(product => product.id === ModalStore.activeID).guestIn
    setGuestIn(guestIn)
  })
  return (
    <List >
      {ProductStore.guestList.map(guest => {
        return (
          <ListItem key={guest.id}>
            <Checkbox
              // isChecked={guestIn.includes(guest.id)}
              onChange={() => setGuestIn(prev => [...prev, guest.id])}
              >{guest.name}</Checkbox>
					</ListItem>

        )
      })}
    </List>
  )
}