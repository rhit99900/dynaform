# Overview & Purpose

**DynaForm.js** allows you to create complicated HTML/JSX Forms using JSON to guide through UI Placement, State Management, Error Handling and Form Submission.


## Usage
```JSX
import Form from 'react-dynaform'
import schema from '<path>/schema.json'

return(
  <Form 
    schema={schema}
    onChange={onChange}
    values={values}    
  />
)
```