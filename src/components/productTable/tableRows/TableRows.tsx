import React from 'react'
import { observer } from 'mobx-react-lite'
import {
  Tr,
  Td,
	IconButton,
} from "@chakra-ui/react"
import { CloseIcon } from '@chakra-ui/icons'
import { ProductList } from '../../../types/types'
import Store from '../../../store/store'


type Props = {
	productList: ProductList,
}

export default observer( function TableRows({ productList }: Props){
	return (
		<>
			{productList.map(prod => {
				return (
					<Tr key={prod.id}>
						<Td>
							<IconButton
								aria-label="Delete item from list"
								icon={<CloseIcon />}
								onClick={() => Store.deleteProduct(prod.id)}
							/>
							{prod.productName}
						</Td>
						<Td isNumeric>{prod.productCost}</Td>
					</Tr>
				)
			})}
		</>
	)
})