var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
var newObj =  Object.assign({}, object);
newObj[key] = value;
  return newObj;
}
function deleteFromObjectByKey(object, key){
var newObj =  Object.assign({}, object);
newObj[key]
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}