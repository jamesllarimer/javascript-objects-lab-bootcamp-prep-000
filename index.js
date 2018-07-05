var recipes = new Object();

updateObjectWithKeyAndValue(object, key, value){
 object object[key] = value;
  return object;
}

destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}