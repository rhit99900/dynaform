import { useState } from 'react'
import Form from './components/form'
import formSchema from './example/form.json'

import { 
  Container, 
  Box,
  AppBar,
  Toolbar,
  Typography   
} from '@material-ui/core'

const DynaForm = () => {

  const [ value, setValue ] = useState({})
  
  const onChange = (e) => {
    setValue(e.value)
  }
  
  const onSave = () => {
    // Do Something 
  }

  const onCancel = () => {
    // Do Something 
  }

  const actions = [{
    label: 'Save',
    handler: onSave,
    isPrimary: true
  },{
    label: 'Cancel',
    handler: onCancel,
    isPrimary: false
  }]
  
  return (
    <div className="App">      
      <Box>
        <AppBar position="static">
          <Toolbar>            
            <Typography variant="h6">
              DynaForm.js
            </Typography>
          </Toolbar>
        </AppBar>
        <Container
          maxWidth="md"
          style={{
            paddingTop: '20px'
          }}
        >
          <Form 
            schema={formSchema}
            onChange={onChange}
            value={value}
            actions={actions}
          />
        </Container>
      </Box>
    </div>
  );
}

export default DynaForm;
