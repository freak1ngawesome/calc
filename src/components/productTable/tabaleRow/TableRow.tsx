import React from 'react'
import {
  Tr,
  Td,
} from "@chakra-ui/react"

type Props = {
	id: string,
	name: string,
	cost: number,
}
export default function TableRow({ id, name, cost }: Props){
	return (
		<>
			<Tr key={id}>
				<Td>{name}</Td>
				<Td isNumeric>{cost}</Td>
			</Tr>
		</>
	)
}