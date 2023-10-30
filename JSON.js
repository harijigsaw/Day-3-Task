const obj1 = '{"name": "person 1", "age": 30}';
const obj2 = '{"age": 30, "name": "person 2"}';

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));


console.log(_.isEqual(obj1, obj2))