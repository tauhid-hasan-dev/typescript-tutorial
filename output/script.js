"use strict";
var myName = "My name is tauhid hasan";
console.log(myName);
//-----------------------case - variable----------------------------------// 
var surName = 'Omuk';
//surName = 5; (typescript will give an error here)
//-------------------------case - function----------------------------------//
function multiply(a, b) {
    console.log(a * b);
}
//multiply('this', 6) => in this example this is not number ts will throw an error
//------------------------------ Case- Array ------------------------------//
var arr = [1, 3, 3];
//arr.push('this') => this will throw an error 
var arrMixed = [1, 'this', true];
//arrMixed.push('this')  => this will not throw an error
//arrMixed.push({name:'tauhid'}) => this will throw an error because object is not exits in the array
var arrMixedObject = [1, 'this', true, {}];
//arrMixedObject.push('this'); => this will not throw an error
//arrMixedObject.push(false)=> this will not throw an error
//arrMixedObject.push({surname: 'Sultana'})=> this will not throw an error
//------------------------------ Case- Object ------------------------------//
var person = {
    name: "Tauhid Hasan",
    age: 27,
    isCaptain: true
};
person.name = 'mehedi'; //we can change the value of the property
//person.age = 'this' // In this case it will throw an error
console.log(person);
