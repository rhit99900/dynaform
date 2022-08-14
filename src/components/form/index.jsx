import React, { useEffect, useState } from 'react'
import { 
  Box 
} from '@material-ui/core'

import Section from './section'
import Helpers from '../../utils/helpers'

const Form = (props) => {
    const { schema } = props

    const [ sections, setSections ] = useState([])
    const [ data, setData ] = useState({})

    useEffect(() => {
      if(schema && schema.hasOwnProperty('sections')){
        setSections(schema.sections)
      }
    },[schema])

    const onChange = (path, value) => {
      console.log(path, value)
      Helpers.setDataToObject(path, value, data)
    }

    return (      
      <Box>
        {schema.title && <h1>{schema.title}</h1>}
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
        ): "No Form Sections Found"}
      </Box>
    )

}

export default Form 