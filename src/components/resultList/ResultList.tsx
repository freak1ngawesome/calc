import React from 'react'
import { observer } from 'mobx-react-lite'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
	Heading,
	Box,
} from "@chakra-ui/react"
import ResultRows from './resultRows/ResultRows'
import EmptyResultList from '../emptyResultList/EmptyResultList'
import ProductStore from '../../store/productStore'

export default observer(function ResultList(){
	return (
		<Box>
			{ProductStore.guestList.length > 0 ?
				<Box>
					<Heading my=".5em">И ваш результат...</Heading>
					<Table textStyle="normal">
					<Thead>
						<Tr>
							<Th>Имя</Th>
							<Th>Итого</Th>
						</Tr>
					</Thead>
					<Tbody>
						<ResultRows guestList={ProductStore.guestList}/>
					</Tbody>
				</Table>
				</Box> : <EmptyResultList/>
			}
		</Box>
	)
})