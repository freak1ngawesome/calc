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
	Text,
} from "@chakra-ui/react"
import Store from '../../store/store'
import TableRows from './tableRows/TableRows'

const style = {
	heading: {
		size: "lg",
	},
	table: {
		variant: "striped",
	}
}


export default observer( function ProductTable(){
	return (
		<Box>
			<Heading {...style.heading}>Текущая корзина</Heading>
			{Store.productList.length > 0?
			<Table {...style.table}>
				<Thead>
					<Tr>
						<Th>Название</Th>
						<Th isNumeric>Цена</Th>
					</Tr>
				</Thead>
				<Tbody>
					<TableRows productList={Store.productList}/>
				</Tbody>
			</Table> : <Text>Пока пусто</Text>}
		</Box>
	)
})