import React from 'react'
import { observer } from 'mobx-react'
import {
  Tr,
  Td,
} from "@chakra-ui/react"
import { ProductList } from '../../../types/types'

type Props = {
	productList: ProductList,
}
export default observer( function TableRows({ productList }: Props){
	return (
		<>
			{productList.map(prod => {
				return (
					<Tr key={prod.id}>
						<Td>{prod.productName}</Td>
						<Td isNumeric>{prod.productCost}</Td>
					</Tr>
				)
			})}
		</>
	)
})