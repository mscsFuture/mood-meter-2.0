import { sendData } from "./api.js";
console.clear();

// Selecting HTML elements related to the all the different text and button input elements on the login page
const teacherHeader = document.getElementById('teacher-login');
const studentHeader = document.getElementById('student-login');

const studentPassword = document.getElementById('password-input');
const studentUsername = document.getElementById('username-input');
const studentSubmit = document.getElementById('student-submit-button');

const teacherEmail = document.getElementById('teacher-email-input');
const teacherPassword = document.getElementById('teacher-password');
const teacherSubmit = document.getElementById('teacher-submit-button');

const rotateButton = document.getElementById("rotate-flip-button");
const backButton = document.getElementById("back-button");

// These are the HTML elements related to the popup that appears when incorrect input is entered
const studentPopup = document.getElementById("student-popup");
const studentPopupText = document.getElementById("student-popup-text");
const studentPopupButton = document.getElementById("student-popup-button");


rotateButton.addEventListener('click', rotateFlipCard);
backButton.addEventListener('click', rotateFlipCardBack);

// Adding event listener to hide the error popup when the "accept" button is clicked
studentPopupButton.addEventListener('click', () => {
	studentPopup.style.visibility = "hidden";
});

// Adding event listener to the student "login" button for handling and authentifying student login
studentSubmit.addEventListener('click', () => {
	let response = "";
	let payload = `{"password": "${studentPassword.value}", "username": "${studentUsername.value}"}`;
	if (studentPassword.value && studentUsername.value) {
		response = sendData('http://localhost:3000/login-page/student-login', payload);
		console.log(response);
	}
	if (response.result == "true") {
		window.location.href = `./class-select`;
	} else if (response.result == '"Invalid username"' || response == '"Invalid password"') {
			studentPopup.style.visibility = "visible";
			studentPopupText.innerHTML = "<b>future.mu.edu says</b><br>Invalid username/password.";
	} else if (!(studentPassword.value && studentUsername.value)) {
		studentPopup.style.visibility = "visible";
		studentPopupText.innerHTML = "<b>future.mu.edu says</b><br>Please enter a username and a password.";
	}
	else {
		studentPopup.style.visibility = "visible";
		studentPopupText.innerHTML = "<b>future.mu.edu says</b><br>Something went wrong. Please try again.";
	}
});

// Adding event listener to the teacher "login" button for handling and authentifying teacher login
teacherSubmit.addEventListener('click', () => {
	let response = "";
	if (teacherPassword.value && teacherEmail.value) {
		let payload = `{"password": "${teacherPassword.value}", "username": "${teacherEmail.value}"}`;
		response = sendData('http://localhost:3000/login-page/teacher-login', payload);
		console.log(response);
	} 
	if (response.result == "true") {
		window.location.href = "./class-select/teacher";
	} else if (response.result === '"Invalid username"' || response.result === '"Invalid password"') {
			studentPopup.style.visibility = "visible";
			studentPopupText.innerHTML = "<b>future.mu.edu says</b><br>Invalid username/password.";
	} else if (!(teacherPassword.value && teacherEmail.value)) {
		studentPopup.style.visibility = "visible";
		studentPopupText.innerHTML = "<b>future.mu.edu says</b><br>Please enter a username and a password.";
	}
	else {
		studentPopup.style.visibility = "visible";
		studentPopupText.innerHTML = "<b>future.mu.edu says</b><br>Something went wrong. Please try again.";
	}
});


teacherHeader.addEventListener('click', teacherSlideUp);

// This function is triggered when the "Student Login" header is clicked. It
// switches from the teacher login page to the student login page.
function studentSlideUp(e) {
	teacherHeader.addEventListener('click', teacherSlideUp)
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			if (parent.classList.length < 2) 
				parent.classList.add('slide-up')
		} else{
			teacherHeader.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
			studentHeader.removeEventListener('click', studentSlideUp)
			teacherEmail.value = ''
			teacherPassword.value = ''
		}
	});
}

// This function is triggered when the "Teacher Login" header is clicked. It
// switches from the student login page to the teacher login page.
function teacherSlideUp(e) {
	studentHeader.addEventListener('click', studentSlideUp);
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			if (parent.classList.length < 2) 
				parent.classList.add('slide-up')
		} else{
			studentHeader.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
			teacherHeader.removeEventListener('click', teacherSlideUp)
			studentPassword.value = ''
			studentUsername.value = ''
		}})}


window.onload = function() {
}


function rotateFlipCard() {
	const flipCardInner = document.getElementById('flipCardInner');
	flipCardInner.style.transform = "rotateY(180deg)";
}

function rotateFlipCardBack() {
	const flipCardInner = document.getElementById('flipCardInner');
	flipCardInner.style.transform = "rotateY(0deg)";
}

// Selecting HTML elements related to creating a new teacher account
const firstName = document.getElementById('firstname-input');
const lastName = document.getElementById('lastname-input');
const newEmail = document.getElementById('email-input');
const newUsername = document.getElementById('signup-username-input');
const newPassword = document.getElementById('signup-password-input');
const confirmPassword = document.getElementById('confirm-password-input');
const createTeacherButton = document.getElementById('create-teacher-button');

// Adding event listener to the create teacher account button for handling new teacher account creation
createTeacherButton.addEventListener('click', () => {
	if (!(newPassword.value === confirmPassword.value)) {
		studentPopup.style.visibility = "visible";
		studentPopupText.innerHTML = "<b>future.mu.edu says</b><br>The two passwords entered are not the same.";
	} else {
		const payload = `{"firstName": "${firstName.value}", "lastName": "${lastName.value}", "email": "${newEmail.value}", "username": "${newUsername.value}", "password": "${newPassword.value}"}`
		let verdict = sendData("login-page/create-teacher-account", payload);
		console.log("Create account button pressed: " + verdict);
	}
});