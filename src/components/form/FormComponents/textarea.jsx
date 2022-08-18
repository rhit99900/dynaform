import React from 'react'
import { 
  TextField,
  Box 
} from '@mui/material'

import { InputFields } from '../../style'

const TextArea = (props) => {
  const { path, label, key, onChange, rows} = props

  console.log(props)

  return (
    <Box>
      <TextField 
        label={label || 'Text Field'}
        variant="standard"
        style={InputFields}
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