import React from 'react'
import { observer } from 'mobx-react-lite'
import { List } from '@chakra-ui/react'
import ResultListItem from './resultListItem/ResultListItem'
import EmptyResultList from '../emptyResultList/EmptyResultList'
import ProductStore from '../../store/productStore'

export default observer( function ResultList(){
  return ProductStore.getGuestListLength > 0 ? (
    <List textStyle="normal" spacing={5}>
      {ProductStore.guestList.map(guest => <ResultListItem key={guest.id} id={guest.id} name={guest.name}/>)}
    </List>
  ) : <EmptyResultList/>
})