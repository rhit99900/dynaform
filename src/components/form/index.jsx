import React, { useEffect, useState } from 'react'
import { 
  Box,
  Stepper, 
  Step, 
  StepLabel 
} from '@material-ui/core'

import Section from './section'
import Action from './FormComponents/action'

import Helpers from '../../utils/helpers'
import DynaForm  from '../../utils/dynaform'

const Form = (props) => {
    const { 
      schema, 
      actions,
      value 
    } = props

    const [ sections, setSections ] = useState([])
    const [ data, setData ] = useState({})    
    const [ elements, setElements ] = useState([])

    useEffect(() => {   
      let thisForm = new DynaForm(schema)
      thisForm = thisForm.generateElements()

      console.log('Form Elements', thisForm.elements(), 'Form Validations', thisForm.validations, 'Form Sections', thisForm.sections())

      
      setElements(thisForm.elements())
      setSections(thisForm.sections())

    },[schema])

    const onChange = (path, value) => {
      console.log(path, value)
      Helpers.setDataToObject(path, value, data)
    }      

    return (      
      <Box>

        {/* Display Stepper UI incase the number of sections in the form are more than or equal to 2  */}
        {(sections && sections.length >= 2)? (
          <Stepper activeStep={1} alternativeLabel>
            {sections.map((section, index) => (
              <Step key={index}>
                <StepLabel>{section.title}</StepLabel>
              </Step>
            ))}
          </Stepper>
        ): null}

        {/* {schema.title && <h1>{schema.title}</h1>}
        {(sections && sections.length)? (
          <>
            {sections.map((section, index) => (
              <Section
                key={index} 
                schema={section}
                values={data}
                onChange={onChange}
              />
            ))}
          </>
        ): "No Form Sections Found"} */}

        {/* {(actions && actions.length)? (
          <>
            {actions.map((action, index) => {
              console.log(action)
              return (
                <Action 
                  key={index}
                  type={action.isPrimary ? 'primary': 'secondary'}
                  label={action.label}
                  handler={action.handler}
                />
              )
            })}
          </>
        ): "No Form Actions Found"} */}
      </Box>
    )

}

export default Form 