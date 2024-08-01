import { getClasses } from "/javascripts/api.js";

// these lastAccessDates are placeholders until we can actually insert this info into the database
const lastAccessDate = ["June 5, 1924", "May 21, 1924", "June 7, 1924", "June 1, 1924", "April 25, 1924"];
const nextAccessDate = ["June 12, 1924", "June 12, 1924", "June 15, 1924", "June 13, 1924", "July 4, 1924"];



let i = 0;
// getClasses fetches from the database all info about each class that the current user is enrolled in. It returns an array of arrays(?) of JSONs
let data = getClasses('http://localhost:3000/class-select/get-classes');
console.log(data);
const classNum = data.length;
// classInfoArray will contain one or more dictionary objects, each of which will contain the name, mood type, and icon of each class the user is enrolled in
const classInfoArray = [];

// This for-loop is pulling the class names, types, and icons out of the JSON and into arrays so they can be displayed on the page
for (i = 0; i < data.length; i++) {
  let moodType = "";
  if (data[i][0]["mood_type"] === 0) {
    moodType = "Mood Junior";
  } else if (data[i][0]["mood_type"] === 1) {
    moodType = "Mood Meter";
  }
  // Here each class dictionary object is made
  classInfoArray[i] = {
    Name: data[i][0]["class_name"],
    icon: data[i][0]["icon"],
    MoodType: moodType,
  }
}

// The code below takes the info we collected above and puts it on the page
const classOptionGrid = document.getElementById("class-option-grid");
for (let i = 0; i < classNum; i++) {
  let classOption = document.createElement("div");
  classOption.classList.add('class-option');
  classOption.style.backgroundImage = 'url(' + classInfoArray[i].icon + ')';
  classOption.addEventListener('click', () => {
    window.location.href = `/game`;
  });
  
  classOptionGrid.appendChild(classOption);
  
  let classTitle = document.createElement("div");
  classTitle.innerHTML = classInfoArray[i].Name + "<br>Mood Type: " + classInfoArray[i].MoodType + "<br>Last access date: " + lastAccessDate[i] + "<br>Next access date: " + nextAccessDate[i];
  classTitle.classList.add('class-title');

  classOption.appendChild(classTitle);
}
