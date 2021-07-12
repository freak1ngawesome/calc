import React from 'react'
import { ListItem } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import ProductStore from '../../../store/productStore'

type Props = {
  id: string
  name: string
}

export default observer(function ResultItemList({ id, name } : Props) {
  const calculateByID = () => {
    let sum = 0
    ProductStore.productList.forEach(prod => {
      if (prod.guestIn.has(id)) sum += (prod.productCost / prod.guestIn.size)
    })
    return sum
  }
  return (
    <ListItem>
      {name} - {calculateByID()}
    </ListItem>
  )
})