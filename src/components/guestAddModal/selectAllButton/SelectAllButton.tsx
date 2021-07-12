import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'
import ProductStore from '../../../store/productStore'

export default function SelectAllButton() {
  const [state, setState] = useState(false)
  const handleButtonClick = () => {
    setState(!state)
    console.log(state)
    ProductStore.toggleGuestIDAll(state)
  }
  return (
    <Button onClick={handleButtonClick}>
      {state ? 'Убрать всех' : 'Добавить всех'}
    </Button>
  )
}