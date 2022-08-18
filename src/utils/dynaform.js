import Helpers from "./helpers";
import _ from 'lodash'


const SECTION_ELEMENT_TYPE = 'section'

const META_ELEMENT_TYPES = [  
  'row',
  'col'    
]


class DynaForm {
  constructor(schema) {
    this.schema = schema;
    this.ELEMENTS = {}
    this.VALIDATIONS = {}
    this.SECTIONS = []
  }

  /**
    * Methods in the class 
    * @method generateElements: Generates Elements for Form basis traversal of the schema. This function is based on the Breadth First Search Algorithm
  **/


  static elementTypes = [
    'input',
    'textarea',
    'radio',
    'select',
    'upload',
    'media',
    'multi-select',
    'tel',
    'checkbox'    
  ]; 

  get = () => {
    return this 
  }

  sections = () => {
    return this.SECTIONS
  }

  elements = () => {
    return this.ELEMENTS
  }

  generateElements = () => {
    const formSchema = _.cloneDeep(this.schema)    
    let queue = []
    let section
    
    queue.push({
      value: formSchema, 
      parent: null, 
      key: null
    })

    while(queue.length > 0){
      let node = queue.shift()
      if(node.value){
        if(META_ELEMENT_TYPES.indexOf(node.value.element) >= 0){
          this.ELEMENTS[section].push({
            ...node.value,
            properties: undefined
          })
        }

        if(!node.value.properties){          
          this.ELEMENTS[node.parent.section || node.section].push(node.value)
        }        

        if(node.value.validations){
          if(node.value.validations.required){
            if(this.VALIDATIONS?.required?.length){
              this.VALIDATIONS.required.push(node.value.path)
            }
            else{
              this.VALIDATIONS['required'] = [ node.value.path ]
            }
          }
        }

        for(const node_index in node.value.properties){
          if(node.value.properties[node_index].element === SECTION_ELEMENT_TYPE){            
            if(this.SECTIONS.length === 0 || this.SECTIONS.findIndex(sec => sec.key === node_index) === -1){
              this.SECTIONS.push({
                key: node_index,
                title: node.value.properties[node_index].title
              })
            }            
            section = node_index      
            if(!this.ELEMENTS.hasOwnProperty(section)) this.ELEMENTS[section] = []
          }

          // Pushing Child Nodes to the Queue 
          queue.push({
            value: node.value.properties[node_index],
            parent: {
              ...node.value.properties,
              section: node.section || section
            },
            key: node_index,
            section: section
          })
        }
      }          
    }
    console.log(this.SECTIONS)
    return this  
  }
}

export default DynaForm;