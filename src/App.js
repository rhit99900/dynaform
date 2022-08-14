import Form from './components/form'
import formSchema from './example/form.json'

function DynaForm() {
  return (
    <div className="App">
      <Form 
        schema={formSchema}
      />
    </div>
  );
}

export default DynaForm;
