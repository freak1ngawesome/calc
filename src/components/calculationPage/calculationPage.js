import React,{useState,useEffect} from 'react'
import { FormGroup,FormControl,FormLabel,FormControlLabel,FormHelperText,Checkbox,Button } from '@material-ui/core';
import './calculationPage.scss'

function CalculationPage({persons,items,setChoises}){

  useEffect(() => {
    let form = document.querySelector('.calculationPage__form')
    form.classList.add('center')
    // console.log(check);
  })
  const [index,setIndex] = useState(0)
  const [check,setCheck] = useState(() => {
    let arr = []
    persons.forEach(e => {
      let obj = new Object({name: e})
      items.forEach(e => {
        obj[e.name] = false
      })
      arr.push(obj)
    })
    return arr
    })

  function ItemsList({items}){
    return(
      items.map((e,i) => {
        return(
          <>
            <FormControlLabel
            key={i.toString()}
            checked={check[index][e.name]}
            control={<Checkbox name={e.name}/>}
            label={e.name}
            className='calculationPage__form_checkbox'
                onClick={() => {setCheck(() => {
                  let arr = check.concat()
                  arr[index][e.name] = !arr[index][e.name]
                  return arr
                })}}
            />
          </>
        )
      })
    )
  }


  return(
    <>
      <FormControl component="fieldset" className='calculationPage__form'>
        <FormLabel component="legend" className='calculationPage__form_legend'>{persons[index]}</FormLabel>
        <FormGroup >
          <ItemsList
          items={items} />
        </FormGroup>
        <FormHelperText className='calculationPage__form_bottomText'>Выберите нужное</FormHelperText>
        <div className='calculationPage__form_btn'>
          <Button color="primary" onClick={() => {setIndex(index === 0 ? persons.length - 1 : index - 1); setChoises(check);}}>Prev</Button>
          <Button color="primary" onClick={() => {setIndex(index === persons.length - 1 ? 0 : index + 1); setChoises(check);}}>Next</Button>
        </div>
      </FormControl>
    </>
  )
}

export default CalculationPage