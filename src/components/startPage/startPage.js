import React,{useEffect,useState} from 'react'
import { TextField } from '@material-ui/core'
import './startPage.scss'


let people = []

function validation(str){
  return str.match(/\p{Alpha}+/gu)
}

function StartPage({setPersons}){

  const [names, setNames] = useState('')

  useEffect(() => {
    let form = document.querySelector('.startPage__form')
    form.classList.add('center')
  })
  
  return(
    <>
      <form className='startPage__form'>
        <TextField 
        id="standard-basic" 
        label="Введите имена всех участников" 
        className='startPage__form_input'
        value={names}
        onChange={e => setNames(e.target.value)}
        onBlur={() => {
          people = validation(names)
          setPersons(people)
        }}
        />
      </form>
    </>
  )
}

export default StartPage