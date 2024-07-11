
// getClasses fetches from the database all info about each class that the current user is enrolled in. It returns an array of arrays(?) of JSONs
export function getClasses(url) {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", url, false);
  xmlHttp.send( null );
  return (JSON.parse(xmlHttp.responseText));
}

export function sendData(url, passwordInput, usernameInput) {
  // let body = '{"FirstName":"John", "LastName":"Doe"}';
  // console.log("Password input: " + passwordInput);
  // console.log("Username input: " + usernameInput);
  const payload = `{"username": "${usernameInput}", "password": "${passwordInput}"}`;
  console.log(payload);
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "POST", url, false);
  xmlHttp.setRequestHeader("Content-Type", "application/json");
  xmlHttp.send(payload);
  console.log(xmlHttp.responseText);
  return xmlHttp.responseText;
}