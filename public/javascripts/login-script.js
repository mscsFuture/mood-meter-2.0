import { sendData } from "./api.js";
import { sendDataAlt } from "./api.js";
console.clear();

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

const studentPopup = document.getElementById("student-popup");
const studentPopupText = document.getElementById("student-popup-text");
const studentPopupButton = document.getElementById("student-popup-button");


rotateButton.addEventListener('click', rotateFlipCard);
backButton.addEventListener('click', rotateFlipCardBack);

studentPopupButton.addEventListener('click', () =>{
	studentPopup.style.visibility = "hidden";
});


studentSubmit.addEventListener('click', () => {
	let response = "";
	if (studentPassword.value && studentUsername.value) {
		response = sendData('http://localhost:3000/login-page/student-login', studentPassword.value, studentUsername.value);
		console.log("Student button pressed: " + response);
		console.log(response);
	} 
	if (response == "true") {
		window.location.href = "./class-select-page.html";
	} else if (response === '"Invalid username"' || response === '"Invalid password"') {
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

teacherSubmit.addEventListener('click', () => {
	let verdict = false;
	if (teacherPassword.value && teacherEmail.value) {
		verdict = sendData('http://localhost:3000/login-page/teacher-login', teacherPassword.value, teacherEmail.value);
		console.log(verdict);
	} 
	if (verdict === "true") {
		window.location.href = "./class-select-page.html";
	} else if (verdict === '"Invalid username"' || verdict === '"Invalid password"') {
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


const firstName = document.getElementById('firstname-input');
const lastName = document.getElementById('lastname-input');
const newEmail = document.getElementById('email-input');
const newUsername = document.getElementById('signup-username-input');
const newPassword = document.getElementById('signup-password-input');
const confirmPassword = document.getElementById('confirm-password-input');
const createTeacherButton = document.getElementById('create-teacher-button');

createTeacherButton.addEventListener('click', () => {
	if (!(newPassword.value === confirmPassword.value)) {
		studentPopup.style.visibility = "visible";
		studentPopupText.innerHTML = "<b>future.mu.edu says</b><br>The two passwords entered are not the same.";
	} else {
		const payload = `{"firstName": "${firstName.value}", "lastName": "${lastName.value}", "email": "${newEmail.value}", "username": "${newUsername.value}", "password": "${newPassword.value}"}`
		let verdict = sendDataAlt("login-page/create-teacher-account", payload);
		console.log("Create account button pressed: " + verdict);
	}
});


