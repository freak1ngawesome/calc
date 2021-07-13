import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import ProductStore from '../../../store/productStore'

export default observer( function SelectAllButton() {
  const handleButtonClick = () => {
    ProductStore.toggleGuestIDAll()
  }
  return (
    <Button onClick={handleButtonClick}>
      {ProductStore.getListStatus ? 'Убрать всех' : 'Добавить всех'}
    </Button>
  )
})