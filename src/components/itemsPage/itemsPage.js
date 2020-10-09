import React,{useState,useEffect} from 'react'
import { TextField,Button } from '@material-ui/core'

import './itemsPage.scss'


const data =[];

function ItemsPage({setItems}){
  const [itemName,setItemName] = useState('')
  const [itemPrice,setItemPrice] = useState('')

  useEffect(() => {
    let form = document.querySelector('.itemsPage__form')
    form.classList.add('center')
  })



  function addItemToData(e){
    e.preventDefault()

    let obj = {
      name: itemName,
      price: itemPrice
    }

    data.push(obj)

    setItemName('')
    setItemPrice('')
  }

  function ItemsList({data}){
    if (data.length === 0 || data === undefined){
      return(
        null
      ) 
    } else {
      return(
        data.map((elem,index) => {
          return(
            <div className='itemsPage__form_item' key={index}>
              <h3 className='item__name'>{elem.name} за {elem.price}</h3>
            </div>
          )

        })
      )

    }

  }

  return(
    <>
      <form className='itemsPage__form' onSubmit={(e) => {addItemToData(e); setItems(data)}}>
        <div className='itemsPage__form_inputs'>
          <TextField 
          id="standard-basic" 
          label="Введите название" 
          className='itemsPage__form_input itemName' 
          value={itemName} 
          onChange={e => setItemName(e.target.value)}/>
          <TextField 
          id="standard-basic" 
          label="Введите цену" 
          className='itemsPage__form_input itemPrice' 
          value={itemPrice} 
          onChange={e => setItemPrice(e.target.value)}/>
        </div>
        <Button 
        variant="contained" 
        color="primary" 
        className='itemsPage__form_add' 
        type='submit'
        >Добавить
        </Button>
        <ItemsList 
        data={data}
        />
      </form>
    </>
  )
}

export default ItemsPage