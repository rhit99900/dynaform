import React from 'react'
import { 
  TextField,
  Box 
} from '@material-ui/core'

const TextArea = (props) => {
  const { path, label, key, onChange, rows} = props

  console.log(props)

  return (
    <Box>
      <TextField 
        label={label || 'Text Field'}
        name={path}
        key={key}
        multiline
        minRows={3}
        maxRows={rows || 4}
        onChange={e => onChange(path, e.target.value)}
      />
    </Box>
  )
}

export default TextArea 