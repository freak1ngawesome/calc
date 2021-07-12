import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'
import ResultList from '../components/resultList/ResultList'


export default function ProductPage(){
  const [visible, setVisible] = useState(false)
  const handleButtonClick = () => {
    setVisible(previous => !previous)
  }
	return (
		<>
      <Button onClick={handleButtonClick}>Показать результат</Button>
			{visible ? <ResultList /> : null}
		</>
	)
}