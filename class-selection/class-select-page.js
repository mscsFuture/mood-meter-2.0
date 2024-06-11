// The image list, text list, and number of classes are placeholders until we can actually pull the class info from the database
const images = ["../assets/class-logo1.webp", "../assets/class-logo2.webp", "../assets/class-logo3.webp"];
const classTextList = ["ENGL1001\nJacob Riyeff", "MATH1451\nJohn Engbers", "COSC3001\n Debbie Perouli", "COSC3250\nDennis Brylow", "COSC1001\nJack Forden"];
const lastAccessDate = ["June 5, 1924", "May 21, 1924", "June 7, 1924", "June 1, 1924", "April 25, 1924"];
const nextAccessDate = ["June 12, 1924", "June 12, 1924", "June 15, 1924", "June 13, 1924", "July 4, 1924"];
const CLASSNUM = 5;

const classOptionGrid = document.getElementById("class-option-grid");
for (let i = 0; i < CLASSNUM; i++) {
  let classOption = document.createElement("div");
  classOption.classList.add('class-option');
  classOption.style.backgroundImage = 'url(' + images[i%3] + ')';
  classOptionGrid.appendChild(classOption);
  
  let classTitle = document.createElement("div");
  classTitle.innerHTML = classTextList[i] + "<br>Last access date: " + lastAccessDate[i] + "<br>Next access date: " + nextAccessDate[i];
  classTitle.classList.add('class-title');

  classOption.appendChild(classTitle);
}