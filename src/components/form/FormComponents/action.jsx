import React from 'react'
import { 
  Button 
} from '@mui/material'

const Action = React.memo(props => {
  const { label, type, handler, disabled, action } = props

  const actionHandler = () => {    
    if(handler && !action) handler()
    else handler(action)
  }

  return (
    <Button 
      variant="outlined"
      onClick={actionHandler}
      color={type}
      { ...(disabled ? { disabled: true } : [])}
    >
      {label}
    </Button>
  )

})

export default Action