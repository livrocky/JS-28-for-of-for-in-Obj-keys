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
