import React, { useEffect, useState } from 'react'
import { 
  Box 
} from '@mui/material'

import Input from './FormComponents/input'
import TextArea from './FormComponents/textarea'
import Helpers from '../../utils/helpers'
import Upload from './FormComponents/upload'

const Section = (props) => {

  const { schema, onChange, isReadOnly }  = props
  const [ elements, setElements ] = useState({})

  
  useEffect(() => {
    if(schema && schema.length){
      setElements(schema)
    }
  }, [schema])  

  const generateElements = (element, key) => {

    switch(element.element){
      case 'input':        
        return (
          <Input
            key={key}
            onChange={onChange}
            {...element}
            isReadOnly={isReadOnly}
          />
        )        
      case 'textarea':        
        return (
          <TextArea
            key={key}
            onChange={onChange}
            {...element}
            isReadOnly={isReadOnly}
          />
        )
      case 'upload':
        return (
          <Upload
            key={key}
            onChange={onChange}
            {...element}
            isReadOnly={isReadOnly}
          />
        )
      default: 
        console.error('Incorrect Element Type')
    }
  }  

  return (
    <Box>
      {
        Object.keys(elements).map((element, i) => generateElements(elements[element], i))
      }
    </Box>
  )
}

export default Section