const fs = require('fs');

const genders = ['m', 'f'];
const maleNames = ['John', 'Chandler', 'Ross', 'Joey', 'Max'];
const femaleNames = ['Anna', 'Emily', 'Rachel', 'Monica', 'Phoebe'];
const lastNames = ['Geller', 'Green', 'Buffay', 'Tribbiani', 'Doe', 'Wazowsky'];
const people = [];

function randChoise(arr){
  return arr[Math.floor(Math.random() * arr.length)];
};

for(let i = 0; i < 20; i++){
  const person = {};

  person.gender = randChoise(genders);

  if(person.gender === 'm'){
    person.name = randChoise(maleNames);
  } else {
    person.name = randChoise(femaleNames);
  }

  person.lastName = randChoise(lastNames);
  person.age = Math.floor(Math.random() * (79 - 18)) + 18;
  people.push(person);
};

const data = JSON.stringify(people, null, '  ');

fs.writeFile('outputfile.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

