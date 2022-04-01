export const user = {
  name: "Mike",
  age: 25,
  hasCar: true,
};

const key = "name";
console.log("user[key] ===", user[key]);

// parasyti funkcija checkErrors(), ima klaidu obj(errors1)
//grazinti true jei nors viena objekto reiksme yra ne tuscia
//kitu atveju false

export const errors1 = {
  name: "",
  password: "",
  town: "cant be blank",
};

export const errors2 = {
  name: "",
  password: "",
  town: "",
};

// helper.js parasyti funkcija isInputOk() kuri priima stringa ir tikrina
// jei stringas tuscias grazina 'cant be blank'
// jei stringas trumpesnis nei 3 simboliai grazina 'must be longer then 3'
// jei stringas ilgesnis nei 5 simboliai grazina 'cant be longer then 6'
// isInputOk(''); //  'cant be blank'
// isInputOk('ab'); //  'must be longer then 3'
// isInputOk('123456'); //  'cant be longer then 6'
