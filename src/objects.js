const createPerson = (name, age) => {
  return {
     name: name,
     age: age,
   }

};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object[property] ?  true: false;
};

const isOver65 = person => {
  return person.age > 65 ? true: false;
};

const getAges = people => {
  let array = [];
  for (let i =0; i<people.length; i++)
    { 
    array[i] = people[i].age;
    }
  return array;
};

const findByName = (name, people) => {
  for (let i =0; i<people.length; i++)
    { 
    if (people[i].name == name)
      {
        return people[i];
      }  
    }
};

const findHondas = cars => {
  // your code here
};

const averageAge = people => {
  // your code here
};

const createTalkingPerson = (name, age) => {
  // your code here
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
