import React from 'react'
import { 
  TextField,
  Box 
} from '@material-ui/core'

const Input = (props) => {
  const { path, label, key, onChange} = props

  console.log(props)

  return (
    <Box>
      <TextField 
        label={label || 'Text Field'}
        name={path}
        key={key}
        onChange={e => onChange(path, e.target.value)}
      />
    </Box>
  )
}

export default Input 