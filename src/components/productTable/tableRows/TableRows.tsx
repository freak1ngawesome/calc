import React from 'react'
import { observer } from 'mobx-react-lite'
import {
  Tr,
  Td,
	IconButton,
} from "@chakra-ui/react"
import { DeleteIcon } from '@chakra-ui/icons'
import GuestButton from '../../guestButton/guestButton'
import { ProductList } from '../../../types/types'
import ProductStore from '../../../store/productStore'


type Props = {
	productList: ProductList,
}

const style = {
	td: {
		d: "flex",
		alignItems: "center",
		gridGap: "1em",
	}
}

export default observer( function TableRows({ productList }: Props){
	return (
		<>
			{productList.map(prod => {
				return (
						<Tr key={prod.id}>
							<Td {...style.td}>
								<IconButton
									aria-label="Delete item from list"
									icon={<DeleteIcon />}
									onClick={() => ProductStore.deleteProduct(prod.id)}
								/>
								<GuestButton
									guestNumber={prod.guestIn.size}
									productID={prod.id}/>
								{prod.productName}
							</Td>
							<Td isNumeric>{prod.productCost}</Td>
						</Tr>
				)
			})}
		</>
	)
})