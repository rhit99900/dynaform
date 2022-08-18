import React, { useEffect, useState } from 'react'
import { 
  Box,
  Stepper, 
  Step, 
  StepLabel 
} from '@mui/material'

import Section from './section'
import Action from './FormComponents/action'

import Helpers from '../../utils/helpers'
import DynaForm  from '../../utils/dynaform'

const PREVIOUS = 'previous'
const NEXT = 'next'

const Form = (props) => {
    const { 
      schema, 
      actions,
      values,
      isReadOnly 
    } = props

    const [ sections, setSections ] = useState([])
    const [ data, setData ] = useState({})    
    const [ elements, setElements ] = useState([])
    const [ activeSection, setActiveSection ] = useState(1)    

    useEffect(() => {   
      let thisForm = new DynaForm(schema)
      thisForm = thisForm.generateElements()

      setElements(thisForm.elements())
      setSections(thisForm.sections())

    },[schema])

    const onChange = (path, value) => {      
      Helpers.setDataToObject(path, value, data)
    }   
    
    const sectionChangeHandler = (action) => {
      if(action){
        console.log(action)
        if(action === PREVIOUS) setActiveSection(activeSection - 1)
        if(action === NEXT) setActiveSection(activeSection + 1)        
      }
    }

    return (      
      <Box>

        {schema.title && <h1>{schema.title}</h1>}

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
            
        {(elements && Object.keys(elements).length && sections[activeSection - 1]?.key) ? (
          <>
            {elements[sections[activeSection - 1].key] && (
              <Section                
                schema={elements[sections[activeSection - 1].key]}
                values={data}
                onChange={onChange}
                isReadOnly={isReadOnly}
              />
            )}
          </>
        ): "No Form Sections Found"}

        <Box>
          {(actions && actions.length)? (
            <>
              {actions.map((action, index) => {              
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
          ): "No Form Actions Found"}

          {(sections && sections.length >= 2)? (
            <>
              <Action             
                type={'secondary'}
                label={'Previous'}
                disabled={activeSection === 1}
                action={PREVIOUS}
                handler={sectionChangeHandler}
              />          
              <Action             
                type={'secondary'}
                label={'Next'}
                disabled={activeSection === sections.length}
                action={NEXT}
                handler={sectionChangeHandler}
              />
            </>
          ): null}
        </Box>
      </Box>      
    )

}

export default Form 