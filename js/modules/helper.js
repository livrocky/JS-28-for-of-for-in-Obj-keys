// iskelti checkErrors i helper.js

export function checkErrors(errorObj) {
  //gauti obj reiksmes
  //   debugger;
  for (let key in errorObj) {
    let value = errorObj[key];
    if (value.length > 0) {
      return true;
    }
  }
  return false;
}

export function checkErrors2(errorObj) {
  Object.values(errorObj).some((reiks) => reiks.length > 0);
}

function isInputOk(str) {
  if (str.length < 1) {
    return "cant be blank";
  }
  if (str.length > 6) {
    console.log("cant be longer than 6");
  }
  if (1 <= str.length && str.length < 4) {
    return "must be longer than 3";
  }
  return "input OK";
}
