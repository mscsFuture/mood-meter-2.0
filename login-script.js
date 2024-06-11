console.clear();

const teacherHeader = document.getElementById('login');
const studentHeader = document.getElementById('signup');

const studentPassword = document.getElementById('password-input');
const studentEmail = document.getElementById('student-email-input');
const studentUsername = document.getElementById('username-input');
const studentSubmit = document.getElementById('student-submit-button');

const teacherEmail = document.getElementById('teacher-email-input');
const teacherPassword = document.getElementById('teacher-password');
const teacherSubmit = document.getElementById('teacher-submit-button')

// this button will print out a "success" message if all student input fields
// aren't empty
studentSubmit.addEventListener('click', () => {
	let hasPassword = false
	let hasUsername = false
	let hasEmail = false
	if (studentPassword.value) {
		hasPassword = true
	} 
	if (studentUsername.value) {
		hasUsername = true
	}
	if (studentEmail.value) {
		hasEmail = true
	}
	if (hasPassword && hasUsername && hasEmail) {
		window.location.href = "class-selection/class-select-page.html"
	}
})

// this button will print out a "success" message if all teacher input fields
// aren't empty
teacherSubmit.addEventListener('click', () => {
	let hasPassword = false
	let hasEmail = false
	if (teacherPassword.value) {
		hasPassword = true
	}
	if (teacherEmail.value) {
		hasEmail = true
	}
	if (hasPassword && hasEmail) {
		console.log("success!!")
	}
})

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
		}else{
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
		}else{
			studentHeader.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
			teacherHeader.removeEventListener('click', teacherSlideUp)
			studentEmail.value = ''
			studentPassword.value = ''
			studentUsername.value = ''
		}})}


window.onload = function() {
}