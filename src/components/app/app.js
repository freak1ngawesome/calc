import React,{useState} from 'react'
import StartPage from '../startPage/startPage'
import ItemsPage from '../itemsPage/itemsPage'
import CalculationPage from '../calculationPage/calculationPage'
import ResultPage from '../resultPage/resultPage'
import ButtonCount from '../buttonCount'
import './app.scss'






function App(){

  const [index,setIndex] = useState(0)
  const [persons,setPersons] = useState([])
  const [items,setItems] = useState([])
  const [choises,setChoises] = useState([])



  const pages =[<StartPage setPersons={setPersons}/>,<ItemsPage setItems={setItems}/>,<CalculationPage persons={persons} items={items} setChoises={setChoises}/>,<ResultPage items={items} choises={choises}/>]
  
  const pagesCount = pages.length
  return(
    <>
      {pages[index]}
      <div className="app__btn">
        <ButtonCount 
        number={index} 
        pagesCount={pagesCount} 
        prev={() => {setIndex(index - 1)}} 
        next={() => {setIndex(index + 1)}}
        />
      </div>
    </>
  )
}

export default App