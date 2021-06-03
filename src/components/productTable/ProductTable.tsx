import React from 'react'

import {
	Box,
	Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react"
import TableRow from './tabaleRow/TableRow'

const style = {
	heading: {
		size: "lg",
	},
	table: {
		variant: "striped",
	}
}

const List = [{id: "12312", name: "Apple", cost: 100}, {id: "313", name: "Peach", cost: 200}]

export default function ProductTable(){
	return (
		<Box>
			<Heading {...style.heading}>Текущая корзина</Heading>
			<Table {...style.table}>
				<Thead>
					<Tr>
						<Th>Название</Th>
						<Th isNumeric>Цена</Th>
					</Tr>
				</Thead>
				<Tbody>
					{List.map(prod => <TableRow {...prod}/>)}
				</Tbody>
			</Table>
		</Box>
	)
}