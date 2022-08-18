import React from 'react'
import { 
  TextField,
  Box, 
  Typography
} from '@mui/material'

import { InputFields, FormLabel } from '../../style'

const Input = (props) => {
  const { path, label, key, onChange, isReadOnly} = props
  
  return (
    <Box>
      { isReadOnly ? (
        <>
          <Typography style={FormLabel}>{label}</Typography>
          <Typography>Some Value</Typography>
        </>
      ): (
        <TextField
          style={InputFields}
          variant="standard"
          label={label || 'Text Field'}
          name={path}
          key={key}
          onChange={e => onChange(path, e.target.value)}
        />
      )}
    </Box>
  )
}

export default Input 