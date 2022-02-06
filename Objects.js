let person={
    nam: 'Aqib',
    age: 22,
    Nationality:'Pakistan'
}
//there are two ways to access the property of person object.1:Dot property, 2: Bracket proprty

//Dot property
person.nam = 'Hamza';
console.log(person.nam);

//Bracket property
let selection='nam';
person[selection]= 'yaqoob';
console.log(person.nam);