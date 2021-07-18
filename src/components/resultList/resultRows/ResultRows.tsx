import React from 'react'
import { observer } from 'mobx-react-lite'
import {
  Tr,
  Td,
} from "@chakra-ui/react"
import { GuestList } from '../../../types/types'
import ProductStore from '../../../store/productStore'


type Props = {
	guestList: GuestList,
}

const style = {
	td: {
		d: "flex",
		alignItems: "center",
		gridGap: "1em",
	}
}

export default observer( function TableRows({ guestList }: Props){
	const calculateByID = (id: string) => {
    let sum = 0
    ProductStore.productList.forEach(prod => {
      if (prod.guestIn.has(id)) sum += (prod.productCost / prod.guestIn.size)
    })
    return ~~sum
  }
	return (
		<>
			{guestList.map(guest => {
				return (
						<Tr key={guest.id}>
							<Td {...style.td}>
								{guest.name}
							</Td>
							<Td isNumeric>{calculateByID(guest.id)}</Td>
						</Tr>
				)
			})}
		</>
	)
})