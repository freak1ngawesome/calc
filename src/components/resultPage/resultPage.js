import React,{useRef,useEffect} from 'react'

function ResultList({items,choises}){

  useEffect(() => {
    let form = document.querySelector('.resultPage__block')
    form.classList.add('center')
  })

  function calculation(items,choises){//массивы
    let count = []

    items.forEach(e => {
      let title = e.name
      let cost = e.price
      let i = 0
      choises.forEach(e => {
        if (e[title]){
          ++i
        }
      })
      let obj = {
        title: title,
        count : i,
        cost: cost
      }
      count.push(obj)
    })// на выходе имеем массив с объектами {название товара, цена товара, количество выбора}
    return count || 'пока пусто'
  }

  function resultList(choises,count){
    let result = []
    choises.forEach(e => {
      let obj = new Object(e)
      let sum = 0
      count.forEach(e => {
        if ( obj[e.title] ){
          sum += Math.ceil(e.cost / e.count)
        }
      })
      result.push({name: e.name, debt: sum})
    })
    return result
  }
  
  function List({arr}){
    return(
      arr.map((e,i) => {
        return(
          <div className='resultPage__block_item' key={i}>
            <span>{e.name}</span><span>{e.debt} рублей</span> 
          </div>
        )
      })
    )
  }

const resultObj = useRef(resultList(choises,calculation(items,choises)))





  return(
    <>
      <div className='resultPage__block shadow'>
        <List arr={resultObj.current === [] ? ':D' : resultObj.current}/>
      </div>
    </>
  )
}

export default ResultList