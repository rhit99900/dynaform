import _ from 'lodash'

const setDataToObject = (path, value, data) => {  
  let returnData = _.clone(data)
  _.set(returnData, path, value)
  return returnData 
}

const cloneObject = (object) => {
  return _.cloneDeep(object)
}

export default { 
  setDataToObject,
  cloneObject
}