import React, { useEffect, useState } from 'react'
import { 
  Box 
} from '@material-ui/core'

import Input from './FormComponents/input'

import Helpers from '../../utils/helpers'

const Section = (props) => {

  const { schema, onChange }  = props
  const [ elements, setElements ] = useState({})

  
  useEffect(() => {
    if(schema && schema.hasOwnProperty('properties')){
      setElements(schema.properties)
    }
  }, [schema])  

  const generateElements = (element, key) => {

    switch(element.element){
      case 'input':
        console.log('Input with element',element)
        return (
          <Input
            key={key}
            onChange={onChange}
            {...element}            
          />
        )        
      case 'textarea':
        console.log(element)
        break;
      case 'upload':
        console.log(element)
        break;
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