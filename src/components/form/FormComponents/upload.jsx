import React from 'react'
import { 
  TextField,
  Box, 
  Typography
} from '@mui/material'

import { InputUpload, InputFields, FormLabel } from '../../style'
import Dropzone, { useDropzone } from 'react-dropzone'
import { useCallback } from 'react'

const Upload = (props) => {
  const { path, label, key, onChange} = props
  
  const onFileDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.onabort = () => console.log('File was aborted');
      reader.onload = () => {
        const binaryString = reader.result 
        console.log(binaryString)
      }
      reader.readAsArrayBuffer(file)
    })
  }, [])

  const { getRootProps, getInputProps } = useDropzone({onFileDrop})

  return (
    <Box>
      <Typography style={FormLabel}>{label}</Typography>
      <Box {...getRootProps()} style={{...InputUpload, ...InputFields}}>
        <input { ...getInputProps() } />
        <p>Drag and Drop some files here, or click to select files</p>      
      </Box>
    </Box>
  )
}

export default Upload 