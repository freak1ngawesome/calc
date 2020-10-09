import React from 'react'
import { Button } from '@material-ui/core'

function ButtonCount({number,pagesCount,prev,next}){
  // console.log(number);
    if (number === 0){
      return(
        <>
          <Button 
          variant="contained" 
          color="primary" 
          onClick={next}
          >Далее
          </Button>
        </>
        )
    } else if (number === pagesCount - 1){
      return(
        <>
          <Button 
          variant="contained" 
          color="primary" 
          onClick={prev}
          >Назад
          </Button>
        </>
        )
    } else {
      return(
        <>
          <Button 
          variant="contained" 
          color="primary" 
          onClick={prev}
          >Назад
          </Button>
          <Button 
          variant="contained" 
          color="primary" 
          onClick={next}
          >Далее
          </Button>
        </>
        )
    }
    


}

export default ButtonCount