var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
var newObj =  Object.assign({}, object[key] = value;
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}