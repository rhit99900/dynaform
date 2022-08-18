# Overview & Purpose

**DynaForm.js** allows you to create complicated HTML/JSX Forms using JSON to guide through UI Placement, State Management, Error Handling and Form Submission.


## Usage
```JSX
import Form from 'npm i json-dynaform'
import schema from '<path>/schema.json'

const actions = [{
  label: 'Save',
  handler: onSave,
  isPrimary: true
},{
  label: 'Cancel',
  handler: onCancel,
  isPrimary: false
}]

return(
  <Form 
    schema={schema}
    onChange={onChange}
    values={values}
    actions={actions}
    isReadOnly={false}
  />
)
```