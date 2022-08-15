import React from 'react'
import { 
  Button 
} from '@material-ui/core'

const Action = React.memo(props => {
  const { label, type, hanler } = props

  console.log(props)

  return (
    <Button 
      variant="contained"
      onClick={hanler}
      color={type}
    >
      {label}
    </Button>
  )

})

export default Action