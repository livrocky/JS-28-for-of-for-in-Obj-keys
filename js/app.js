//iskonsolinti user objekta app.js

import { user, errors1, errors2 } from "./modules/data.js";
import { checkErrors } from "./modules/helper.js";
import PersonEs6 from "./modules/PersonEs6.js";
import PersonEs5 from "./modules/PersonEs5.js";

const per1 = new PersonEs6("Mike", 26);
console.log("per1===", per1);
per1.sayHi();
const per2 = new PersonEs5("james", 36);
console.log("per2===", per2);
per2.sayHi();

console.log("user===", user);

//For In Loop
//for (key in object){

//atspauzdinti visus user keys

for (let key in user) {
  console.log("key===", key);
}

const keysArr = [];
for (let key in user) {
  keysArr.push(key);
}
console.log(" keysArr===", keysArr);

//atspauzdinti viisas user obj reiksmes

for (let key in user) {
  console.log(user[key]);
}

//sudeti i masyva visas user reiksmes

const valuesArr = [];
for (let key in user) {
  valuesArr.push(user[key]);
}
// console.log("valuesArr===", valuesArr);

//Object.keys({}) - grazina objekto keys masyvo pavidalu
const obKeys = Object.keys(user);
console.log("obKeys===", obKeys);
//Object.keys({}) - grazina objekto values masyvo pavidalu
const obValues = Object.values(user);
console.log("obValues===", obValues);
//Object.keys({}) - grazina objekto keys ir values masyvo masyve pavidalu
const obEntries = Object.entries(user);
console.log("obEntries===", obEntries);
//is obEntries gauti metus
console.log("obEntriesYear===", obEntries[1][1]);

//iskelti checkErrors i helper.js

const err1Result = checkErrors(errors1);
console.log("err1Result===", err1Result);

const err2Result = checkErrors(errors2);
console.log("err1Result===", err2Result);

const ats = isInputOk(str);
