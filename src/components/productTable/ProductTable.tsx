import React from 'react'
import { observer } from 'mobx-react-lite'
import {
	Box,
	Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
	Icon,
} from "@chakra-ui/react"
import Store from '../../store/store'
import TableRows from './tableRows/TableRows'
import EmptyCart from '../emptyCart/EmptyCart'
const style = {
	heading: {
		size: "lg",
	},
	text: {
		fontSize: "2xl",
	}
}


export default observer( function ProductTable(){
	return (
		<Box textStyle="normal">
			<Heading {...style.heading} >Текущая корзина</Heading>
			{Store.productList.length > 0?
			<Table>
				<Thead>
					<Tr>
						<Th>Название</Th>
						<Th isNumeric>Цена</Th>
					</Tr>
				</Thead>
				<Tbody>
					<TableRows productList={Store.productList}/>
				</Tbody>
			</Table> : <EmptyCart/>}
		</Box>
	)
})