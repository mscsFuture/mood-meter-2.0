exports.makeConnection =  function() {
  var mysql = require('mysql');
  var pool  = mysql.createPool({
    connectionLimit : 20,
    host            : '127.0.0.1',
    user            : 'moodmeter',
    password        : 'pjapWpHIAy2sS2DojaM=',
    database        : 'moodmeter_db',
    port              : '33306'
  });
  return pool;
}

exports.verifyPasswordUsername = async function(pool, passwordUsernameInput) {
  // let isCorrectUser = false;
  username = passwordUsernameInput.username;
  password = passwordUsernameInput.password;
  let studentID = 0;
  let response = {
    "result": "false",
    "id": -1,
  }
  let promise1 = new Promise((resolve, reject) => {
    pool.query(`SELECT student_id FROM student WHERE username LIKE '${username}'`, function (error, results, fields) {
      if (error) return reject(error);
      console.log("These are the username results: " + JSON.stringify(results, null, 2));
      if (results.length > 0) {
        response.result = true;
        studentID = results[0].student_id;
      }
      resolve("Success");
      });
  });

  await promise1;

  if (response.result === true) {
    let promise2 = new Promise((resolve, reject) => {
        pool.query(`SELECT password FROM student WHERE student_id=${studentID}`, function (error, results, fields) {
          if (error) return reject(error);
          console.log("Got here!");
          if (results[0].password == password) {
            response.result = "true";
            response.id = studentID;
          } else {
            response.result = "Invalid password";
          }
          resolve("Success");
        });
    });
  await promise2;
} else {
  response.result = "Invalid username";
}

  console.log("RETURNING");
  return response;
}


exports.getStudentList = async function(pool, className) {
  let studentIDArray = [];
  let i = 0;
  let idArray = [];
  let studentInfoArray = [];

  let promise1 = new Promise((resolve, reject) => {
    pool.query(`SELECT class_id FROM class_assignment WHERE class_name=${className}`, function (error, results, fields) {
      if (error) return reject(error);
      console.log("Promise1 worked");
      for (i = 0; i < results.length; i++) {
        console.log(results[i]["class_id"]);
        idArray[i] = results[i]["class_id"];
      }
      console.log("Promise resolving");
      resolve("Success");
    });
  });

  await promise1;

  for (i = 0; i < idArray.length; i++) {

    let promise2 = new Promise((resolve, reject) => {
      pool.query(`SELECT user_id FROM class_assignment WHERE class_id=${idArray[i]}`, function (error, results, fields) {
        if (error) return reject(error);
        studentIDArray[i] = results;
        // console.log(classArray[i]);
        resolve("Success");
    });
    });
    await promise2;
  }

  for (i = 0; i < studentIDArray.length; i++) {

    let promise3 = new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM student WHERE student_id=${studentIDArray[i]}`, function (error, results, fields) {
        if (error) return reject(error);
        studentInfoArray[i] = results;
        console.log(studentInfoArray[i]);
        resolve("Success");
    });
    });
    await promise3;
  }

  // console.log(classArray);
  // console.log(classArray);
  return studentInfoArray;
}

exports.getClassList = async function(pool, studentID) {
  let classArray = [];
  let i = 0;
  let idArray = [];

  let promise1 = new Promise((resolve, reject) => {
    pool.query(`SELECT class_id FROM class_assignment WHERE user_id=${studentID}`, function (error, results, fields) {
      if (error) return reject(error);
      for (i = 0; i < results.length; i++) {
        console.log(results[i]["class_id"]);
        idArray[i] = results[i]["class_id"];
      }
      console.log("Promise resolving");
      resolve("Success");
    });
  });

  await promise1;

  for (i = 0; i < idArray.length; i++) {

    let promise2 = new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM class WHERE class_id=${idArray[i]}`, function (error, results, fields) {
        if (error) return reject(error);
        classArray[i] = results;
        // console.log(classArray[i]);
        resolve("Success");
    });
    });
    await promise2;
  }

  // console.log(classArray);
  // console.log(classArray);
  return classArray;
}


exports.verifyTeacherPasswordEmail = async function(pool, passwordEmailInput) {
  let response = {
    "result": "false",
    "id": -1,
  }
  teacherID = -1;
  const email = passwordEmailInput.username;
  const password = passwordEmailInput.password;
  
  let promise1 = new Promise((resolve, reject) => {
    pool.query(`SELECT teacher_id FROM teachers WHERE email LIKE '${email}'`, function (error, results) {
      if (error) return reject(error);
      if (results.length > 0) {
        response.result = "true";
        teacherID = 1;
      }
      return resolve("Success");
      });
  });

  await promise1;

  if (response.result == "true") {
    let promise2 = new Promise((resolve, reject) => {
        pool.query(`SELECT password FROM teachers WHERE teacher_id=${teacherID}`, function (error, results) {
          if (error) return reject(error);
            if (results[0].password === password) {
              response.result = "true";
            } else {
            response.result = "Invalid password";
          }
          return resolve("Success");
        });
    });
  await promise2;
} else {
  response.result = "Invalid username";
}
  response.id = teacherID;
  console.log("RETURNING");
  return response;
}

exports.createTeacherAccount = async function(pool, payload, userID) {
  let usernameValid = false;
  let emailValid = false;
  let accountCreatedSuccessfully = false;
  const firstName = payload.firstName;
  const lastName = payload.lastName;
  const email = payload.email;
  const username = payload.username;
  const password = payload.password;
  console.log(payload);
  let emailSyntaxValid = isValidEmail(email);
  console.log(emailSyntaxValid);

  if (emailSyntaxValid) {
    let promise1 = new Promise((resolve, reject) => {
      pool.query(`SELECT teacher_id FROM teachers WHERE username LIKE '${username}'`, function (error, results) {
        if (error) return reject(error);
        console.log("These are the teacher_id results: " + JSON.stringify(results, null, 2));
        if (results.length > 0) {
          usernameValid = false;
        } else {
          usernameValid = true;
        }
        return resolve("Success");
        });
    });
    await promise1;

    let promise2 = new Promise((resolve, reject) => {
      pool.query(`SELECT teacher_id FROM teachers WHERE email LIKE '${email}'`, function (error, results) {
        if (error) return reject(error);
        console.log("These are the teacher_id results: " + JSON.stringify(results, null, 2));
        if (results.length > 0) {
          emailValid = false;
        } else {
          emailValid = true;
        }
        return resolve("Success");
        });
    });
    await promise2;
  }

  if (usernameValid && emailValid) {
    let promise3 = new Promise((resolve, reject) => {
      pool.query(`INSERT INTO teachers (username, password, email, first_name, last_name) VALUES ('${username}', '${password}', '${email}', '${firstName}', '${lastName}')`, function (error, results) {
        if (error) return reject(error);
        console.log(results);
        accountCreatedSuccessfully = true;
        return resolve("Success");
        });
    });
    await promise3;
  }
  return accountCreatedSuccessfully;
}

// WARNING: THERE IS A POSSIBILITY THAT THE USE OF MAX IN THIS FUNCTION CAN CAUSE ERRORS IN CERTAIN EDGE CASES
exports.createClass = async function(pool, payload, teacherID) {
  let classCreatedSuccessfully = false;
  console.log(payload);
  const className = payload.className;
  const description = payload.description;
  const moodType = payload.moodType;
  // console.log(payload);
  let classID = -1;

    let promise1 = new Promise((resolve, reject) => {
      pool.query(`INSERT INTO class (class_name, class_description, mood_type, icon) VALUES ('${className}', '${description}', '${moodType}', '/assets/class-logo${(className.length % 3)+1}.webp')`, function (error, results) {
        if (error) return reject(error);
        // console.log("These are the classCreate results: " + JSON.stringify(results, null, 2));
        return resolve("Success");
        });
    });
    await promise1;

    let promise2 = new Promise((resolve, reject) => {
      pool.query(`SELECT Max(class_id) from class`, function (error, results) {
        if (error) return reject(error);
        // console.log(results);
        // console.log(results[0]["Max(class_id)"]);
        classID = results[0]["Max(class_id)"];
        // console.log("Promise resolving");
        resolve("Success");
      });
    });
    await promise2;

    console.log(classID);
    let promise3 = new Promise((resolve, reject) => {
      pool.query(`INSERT INTO class_assignment (user_id, class_id, \`group\`) VALUES ('${teacherID}', '${classID}', '${1}')`, function (error, results) {
        if (error) return reject(error);
        // console.log("These are the class_assignment results: " + JSON.stringify(results, null, 2));
        classCreatedSuccessfully = true;
        return resolve("Success");
        });
    });
    await promise3;


  return classCreatedSuccessfully;
}

// NOTE: THIS METHOD WILL ONLY WORK IF CLASS NAMES ARE UNIQUE REGARDLESS OF TEACHER
exports.deleteClass = async function(pool, payload) {
  let classDeletedSuccessfully = false;
  console.log(payload);
  const className = payload.className;
  let classIDs = {};

  let promise1 = new Promise((resolve, reject) => {
    pool.query(`SELECT class_id from class WHERE class_name LIKE '${className}'`, function (error, results) {
      if (error) return reject(error);
      classIDs = results[0]["class_id"];
      resolve("Success");
    });
  });
  await promise1;
  console.log("classID = :");
  console.log(classIDs);

  let promise2 = new Promise((resolve, reject) => {
    pool.query(`DELETE FROM class WHERE class_id=${classIDs}`, function (error) {
      if (error) return reject(error);
      // console.log("These are the class_assignment results: " + JSON.stringify(results, null, 2));
      return resolve("Success");
      });
  });
  await promise2;

  let promise3 = new Promise((resolve, reject) => {
    pool.query(`DELETE FROM class_assignment WHERE class_id=${classIDs}`, function (error, results) {
      if (error) return reject(error);
      // console.log("These are the class_assignment results: " + JSON.stringify(results, null, 2));
      classDeletedSuccessfully = true;
      return resolve("Success");
      });
  });
  await promise3;


  return classDeletedSuccessfully;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


