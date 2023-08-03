//view faculty profile
async function viewfacultyprofile(event) {
  event.preventDefault();

  document.location.replace('/facultygallery');
};

document.querySelector('#faculty-profile').addEventListener('submit', viewfacultyprofile);

//view student profile
async function viewStudentcourses(event) {
  event.preventDefault();

  document.location.replace('/courses');
};

document.querySelector('#student-courses').addEventListener('submit', viewStudentcourses);


