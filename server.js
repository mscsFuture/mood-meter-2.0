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

exports.getUsername = function(pool) {
  pool.getConnection(function(err, connection) {
    if (err) throw err; // not connected!
  
    // Use the connection
    connection.query('SELECT * FROM student', function (error, results, fields) {
        console.log('The result is: ', results[0]);
      // When done with the connection, release it.
      connection.release();
  
      // Handle error after the release.
      if (error) throw error;
  
      // Don't use the connection here, it has been returned to the pool.
    });
});
}

// exports.getClassList = async function(pool) {
//   let classArray = [];
//   let i = 0;
//     // For now I will assume that the student is the student with id = 1. This is until I can draw form input from the login page.
//   const STUDENT_ID = 1;
//   let idArray = [];
//     // First, we want to get look at the class assignment table to retrieve all the class IDs whose corresponding student id = 1.
    // let promise1 = new Promise((resolve, reject) => {
//         console.log("STARTED CONNECTION");
//         pool.query(`SELECT class_id FROM class_assignment WHERE user_id=${STUDENT_ID}`, function (error, results, fields) {
//           if (error) return reject(error);
//           for (i = 0; i < results.length; i++) {
//             console.log(results[i]["class_id"]);
//             idArray[i] = results[i]["class_id"];
//           }
//           console.log("Promise resolving");
//           return resolve("Success");  
//        });
//     });

//     await promise1;

//     let promise2 = new Promise((resolve, reject) => {
//       let completedQueries = 0;
//       for (i = 0; i < idArray.length; i++) {
//         pool.query(`SELECT * FROM class WHERE class_id=${idArray[i]}`, function (error, results, fields) {
//           if (error) return reject(error);
//           classArray[i] = results;
//           console.log(classArray[i]);
//           completedQueries++;
//           if (completedQueries === idArray.length) {
//             return resolve("Success");
//           }
//       }
//     );
//       };
//     });
//     await promise2;
//     console.log(classArray);
//     console.log("RETURNING CLASS");
//     return classArray;
// }

exports.verifyPasswordUsername = async function(pool, passwordUsernameInput) {
  let isCorrectUser = false;
  studentID = -1;
  username = passwordUsernameInput.username;
  password = passwordUsernameInput.password;
  console.log(username);
  console.log(password);
  let flag = 0;
  await pool.getConnection(async function(err, connection) {
    if (err) throw err;
  
    await new Promise((resolve, reject) => {
      connection.query(`SELECT student_id FROM student WHERE username LIKE '${username}'`, function (error, results, fields) {
        if (error) return reject(error);
        console.log("These are the username results: " + JSON.stringify(results, null, 2));
        if (results.length > 0) {
          isCorrectUser = true;
          studentID = 0;
        }

        if (isCorrectUser === true) {
            connection.query(`SELECT password FROM student WHERE student_id=${studentID}`, function (error, results, fields) {
              if (error) return reject(error);
              console.log("Got here!");
              if (results[0].password == password) {
                isCorrectUser = true;
              } else {
                isCorrectUser = false;
              }
            });
        }
        return resolve("Success");
        });
    });
      // console.log("reached flag");
      // flag = 1;
      connection.release();
      return;
    });
    // while (!flag) {
    
    // }
    // setTimeout(ran, 3000);
    console.log("RETURNING");
    return isCorrectUser;
}

// function ran() {
//   console.log("RAN");
// }


exports.getClassList = async function(pool) {
  let classArray = [];
  let i = 0;
  const STUDENT_ID = 1;
  let idArray = [];

  let promise1 = new Promise((resolve, reject) => {
    pool.query(`SELECT class_id FROM class_assignment WHERE user_id=${STUDENT_ID}`, function (error, results, fields) {
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
    await pool.query(`SELECT * FROM class WHERE class_id=${idArray[i]}`, function (error, results, fields) {
      if (error) return reject(error);
      classArray[i] = results;
      console.log(classArray[i]);
  })



  // console.log(classArray);
  console.log("RETURNING CLASS");
  return classArray;
}}
