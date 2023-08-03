  //view student profile
async function viewStudentprofile(event) {
  event.preventDefault();
  document.location.replace('/studentprofile');
};

document.querySelector('#student-profile').addEventListener('click', viewStudentprofile);

//view student courses
async function viewStudentcourses(event) {
  event.preventDefault();

  document.location.replace('/courses');
};

document.querySelector('#student-courses').addEventListener('click', viewStudentcourses);