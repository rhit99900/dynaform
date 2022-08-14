import _ from 'lodash'

const setDataToObject = (path, value, data) => {  
  let returnData = _.clone(data)
  _.set(returnData, path, value)
  return returnData 
}

export default { 
  setDataToObject
}